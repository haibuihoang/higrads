'reinit'
'set display color white '; 'c'
'open model.ctl'

r=gsfallow('on')
h_initframe()
h_set_margin(1)
h_newframe(6,6)

h_set_xrange(-30,30); h_set_yrange(-30,30)
h_draw_xtm(-30,30,1,10);h_draw_ytm(-30,30,1,10)

'set line 15 1 1';
h_draw_line(-30,0,30,0)
h_draw_line(0,-30,0,30)
h_draw_ltitle('My Heart')

*Draw the chart

pi=4*math_atan(1)
dt=0.001
'set rgb 16 255 40 200'
'set line 16 1 6'
t=0; while(t<=2*pi)
   x=16*math_pow(math_sin(t),3)
   y=13*math_cos(t) - 5*math_cos(2*t) - 2*math_cos(3*t) - math_cos(4*t)
   if (t>0)
      h_draw_line(x_o,y_o,x,y)
   endif
   x_o=x; y_o=y
t=t+dt; endwhile

*draw the arrow
'set line 1 1 1'
h_draw_line(2,2,15,15,1,'s')
px=h_get_px(15); py=h_get_py(15)+0.1
'set string 1 bc'
'draw string 'px' 'py' You are here!'

