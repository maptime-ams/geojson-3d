# 3D GeoJSON
http://tulpinteractive.com/amsterdam-campus/
http://www.smartjava.org/content/render-geographic-information-3d-threejs-and-d3js

http://threejs.org/examples/webgl_geometry_shapes.html


http://threejs.org/examples/webgl_geometry_extrude_shapes2.html



cbs-data
http://www.cbs.nl/nl-NL/menu/themas/dossiers/nederland-regionaal/publicaties/geografische-data/archief/2015/wijk-en-buurtkaart-2014-art.htm


```
topojson -p -s 1e-8 -o gem.topojson gem.geojson
```



http://overpass-turbo.eu/

[out:json];
way[natural=water](around:5000,52.36740138260664,4.8985666036605835);
(._;>;);
out;


Save as GeoJSON







http://localhost:8000/#url=data%2Fbreda.json&color=function(d)%20%7B%0A%20%20if%20(d.jaar%20%3C%3D%201200)%20%7B%0A%20%20%20%20return%20'%2367001f'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201350)%20%7B%0A%20%20%20%20return%20'%23b2182b'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201500)%20%7B%0A%20%20%20%20return%20'%23d6604d'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201650)%20%7B%0A%20%20%20%20return%20'%23f4a582'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201750)%20%7B%0A%20%20%20%20return%20'%23fddbc7'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201850)%20%7B%0A%20%20%20%20return%20'%23d1e5f0'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201900)%20%7B%0A%20%20%20%20return%20'%2392c5de'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201950)%20%7B%0A%20%20%20%20return%20'%234393c3'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201980)%20%7B%0A%20%20%20%20return%20'%232166ac'%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%202010)%20%7B%0A%20%20%20%20return%20'%23053061'%3B%0A%20%20%7D%0A%7D&height=function(d)%20%7B%0A%20%20if%20(d.jaar%20%3C%3D%201200)%20%7B%0A%20%20%20%20return%20%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201350)%20%7B%0A%20%20%20%20return%2090%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201500)%20%7B%0A%20%20%20%20return%2080%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201650)%20%7B%0A%20%20%20%20return%2070%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201750)%20%7B%0A%20%20%20%20return%2060%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201850)%20%7B%0A%20%20%20%20return%2050%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201900)%20%7B%0A%20%20%20%20return%2040%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201950)%20%7B%0A%20%20%20%20return%2030%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%201980)%20%7B%0A%20%20%20%20return%2020%3B%0A%20%20%7D%20else%20if%20(d.jaar%20%3C%3D%202010)%20%7B%0A%20%20%20%20return%2010%3B%0A%20%20%7D%0A%7D