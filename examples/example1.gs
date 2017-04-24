'reinit'
'set display color white '; 'c'
'open model.ctl'

r=gsfallow('on')
h_initframe()
h_set_margin(0.5,0.5,0.5,0.5)

h_newframe(3,3)
'set lat 8 28'; 'set lon 100 120';
'set mproj scaled'
'd tsfc'
'draw title SubPlot 1'

h_newframe(3,3)
h_nodefault()
'set gxout shaded'
'd tsfc'
h_set_xrange(100,120)
h_set_yrange(8,28)
h_draw_xtm(90,120,1,5,0.12,0,'lons')
h_draw_ytm(5,30,1,5,0.12,0,'lats')
h_draw_ltitle('SubPlot 2')
h_cbarn('r',0,0.1)


h_newframe(7,3)
h_set_xrange(1,12)
h_set_yrange(0,10)
h_draw_ytm()
h_draw_xtm(1,12,1,1,0.12,0,'labels J F M A M J J A S O N D')

