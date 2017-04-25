'reinit'
'set display color white '; 'c'
'open model.ctl'

lat1=-8;lat2=28
lon1=-20; lon2=120

r=gsfallow('on')
h_initframe()
h_set_margin(0.5,0.5,0.5,0.5)

h_newframe(3,3)
'set lat 'lat1' 'lat2; 'set lon 'lon1' 'lon2;
'set mproj scaled'
'set grads off'
'd tsfc-273'
'draw title SubPlot 1'

h_newframe(3,3)
h_nodefault()
'set gxout shaded'
setcolor()
'd tsfc-273'
h_set_xrange(lon1,lon2)
h_set_yrange(lat1,lat2)
h_draw_xtm(-20,lon2,4,5,0.11,0,'lons')
h_draw_ytm(-10,lat2,1,5,0.11,0,'lats')
h_draw_ltitle('SubPlot 2')
h_cbarn('r',0,0.1)


h_newframe(7,3)
h_set_xrange(1,12)
h_set_yrange(0,10)
h_draw_ytm()
h_draw_xtm(1,12,1,1,0.12,0,'labels J F M A M J J A S O N D')


function setcolor()
  'h_rgb 21 23 0 31 62   7 97 193'
  'h_rgb 23 27 7 97 185 143 212 189'
  'h_rgb 27 30 143 212 189 248 252 241'
  'set ccols 21 22  23 24 25 26 27 28 29 30 '
  'set clevs   -15 -10 -5 0  5  10 15 20 25'
return
