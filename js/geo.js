
// return scaling factor that fit bounds within width/height
function fit(bounds, width, height)
{
  var topLeft = bounds[0];
  var bottomRight = bounds[1];

  var w = bottomRight[0] - topLeft[0];
  var h = bottomRight[1] - topLeft[1];

  var hscale = width / w;
  var vscale = height / h;

  // pick the smallest scaling factor
  var scale = (hscale < vscale) ? hscale : vscale;

  return scale;
}

// D3.js projection from GeoJSON bounds
function getProjection(geojson, width, height) {
  // From:
  //   http://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object?answertab=active#tab-top
  // We are using Turf to compute centroid (turf.centroid) and bounds (turf.envelope) because
  // D3's geo.centroid and path.bounds function expect clockwise polygons, which we cannot always guarantee:
  //   https://github.com/mbostock/d3/wiki/Geo-Paths#_path

  var center = turf.centroid(geojson).geometry.coordinates;
  var projection = d3.geo.mercator()
        .center(center)
        .scale(1)
        .translate([0, 0]);

  // Create the path
  var path = d3.geo.path().projection(projection);

  // Using the path determine the bounds of the current map and use
  // these to determine better values for the scale and translation

  // var env = turf.envelope(geojson);
  var bounds = path.bounds(geojson);

  var scale = fit(bounds, width, height);

  // New projection
  projection = d3.geo.mercator()
    .center(center)
    .scale(scale)
    .translate([0,0]);

  return projection;
}

// Use D3.js projection to create array of Three.js points/vectors from GeoJSON ring
function ringToPoints(ring, projection) {
  return ring.map(function(point) {
    var projected = projection(point);
    return new THREE.Vector2(projected[0], projected[1]);
  });
}

// Create Three.js polygon from GeoJSON Polygon
function createPolygonShape(polygon, projection) {
  var outerRing = polygon[0];
  var points = ringToPoints(outerRing, projection);
  var polygonShape = new THREE.Shape(points);

  polygon.slice(1).forEach(function(hole) {
    points = ringToPoints(hole, projection);
    var holeShape = new THREE.Shape(points);
    polygonShape.holes.push(holeShape);
  });

  return polygonShape;
}
