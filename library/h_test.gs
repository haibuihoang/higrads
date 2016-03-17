'reinit'
'set display color white '
'c'
r=gsfallow('on')

h_initframe(0)

h_set_margin(0.5)


h_newframe(3,3)
h_set_xrange(80,0)
h_set_yrange(-40,40)
h_draw_ytm(-40,40,2,10)
h_draw_xtm(0,80,2,10)

'set line 2 1 5'
h_draw_circle(50,0,10)
'set line 3 1 5'
h_draw_circle(25,10,5)

'set line 15 1 5'
h_draw_line(50,0,25,10)

'set line 15 3'
h_draw_line(40,-40,40,40)
h_draw_line(0,0,80,0)

h_draw_ltitle("Left title")


*test arrow
'set line 5 1 1'
h_draw_line(0,0,25,10,1,'e')


say 'Press enter to place a floating frame'
pull dum

*Insert a float frame
h_floatframe(2,2,5.5,4.5)
h_set_xrange(0,5)
h_set_yrange(0,5)
h_draw_xtm(0,5,0.1,10)
h_draw_ytm(0,5,0.1,10)
h_draw_ltitle('A float frame')


say 'Press enter to place another one'
pull dum

h_floatframe(2,2,5.5,2)
h_set_xrange(0,5)
h_set_yrange(0,5)
h_draw_xtm(0,5,0.1,10)
h_draw_ytm(0,5,0.1,10)

say 'Press enter to continue append autoframe'
pull dum
h_newframe(3,3)
h_set_xrange(80,0)
h_set_yrange(-40,40)
h_draw_ytm(-40,40,2,10)
h_draw_xtm(0,80,2,10)
h_draw_rtitle("Right title, math `3b`0`a2")


say 'Press enter to build a logscale chart easily with "circles"'
pull dum

h_newframe(4.5,4.5)
h_draw_ltitle('Circles in Log scale')
h_set_xrange(0,1000); 
h_set_yrange(1000,1,'log');
h_draw_xtm(0,1000,20,10)
h_draw_ytm(1,10,1,10)
h_draw_ytm(10,100,10,10)
h_draw_ytm(100,1000,100,9,0.1)
'set line 15 3'
h_draw_line(0,10,1000,10)
h_draw_line(0,100,1000,100)
'set line 2 1'
h_draw_circle(500,500,10)
h_draw_circle(500,500,50)
h_draw_circle(500,500,200)
h_draw_circle(500,500,400)
h_draw_circle(500,500,490)









