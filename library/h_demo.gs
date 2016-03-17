'reinit';'set display color white ';'c'
r=gsfallow('on')

h_initframe(1)

h_set_margin(0.7,0.5,0.4,0.5)

h_newframe(2,2)
h_set_xrange(0,10); h_set_yrange(0,10)
h_draw_xtm(0,10,1,5);h_draw_ytm(0,10,1,5)
h_draw_ltitle('Plot #1')

h_newframe(2,2)
h_set_xrange(0,10); h_set_yrange(0,10)
h_draw_xtm(0,10,1,5);h_draw_ytm(0,10,1,5)
h_draw_ltitle('Plot #2')

h_newframe(2,2)
h_set_xrange(0,10); h_set_yrange(0,10)
h_draw_xtm(0,10,1,5);h_draw_ytm(0,10,1,5)
h_draw_ltitle('Plot #3')

h_break();
h_newframe(2,2)y
h_set_xrange(0,10); h_set_yrange(0,10)
h_draw_xtm(0,10,1,5);h_draw_ytm(0,10,1,5)
h_draw_ltitle('Plot #4')

h_newframe(5,2)
h_set_xrange(0,10); h_set_yrange(0,10)
h_draw_xtm(0,10,0.5,4);h_draw_ytm(0,10,0.5,4)
h_draw_ltitle('Plot #5 (Current)')

*Draw some indicator

'set line 4'
h_draw_line(_px2,_py1,_px2+2,_py1,0)
h_draw_line(_px2,_py2,_px2+2,_py2,0)
h_draw_line(_px1,_py1,_px1,_py1-2,0)
h_draw_line(_px2,_py1,_px2,_py1-2,0)

'set line 2'
h_draw_line(_px1,_py1-1,_px2,_py1-1,0,'se') ;*width
h_draw_line(_px2+1,_py1,_px2+1,_py2,0,'se') ;*height
h_draw_line((_px1+_px2)/2,_py2,(_px1+_px2)/2,_y2,0,'se') ;*top
h_draw_line(_px2,(_py1+_py2)/2,_x2,(_py1+_py2)/2,0,'se') ;*right
h_draw_line((_px1+_px2)/2,_py1,(_px1+_px2)/2,_y1,0,'se') ;*bottom
h_draw_line(_px1,(_py1+_py2)/2,_x1,(_py1+_py2)/2,0,'se') ;*right

'set string 2 tc 4 0';
x=(_px1+_px2)/2; y=_py1-1.1; 'draw string 'x ' 'y' width'

'set string 2 bc 4 270';
x=_px2+1.1; y=(_py1+_py2)/2; 'draw string 'x ' 'y' height'

'set string 2 l 4 0';
x=(_px1+_px2)/2 + 0.1; y=(_py2+_y2)/2; 'draw string 'x ' 'y' top'
x=(_px1+_px2)/2 + 0.1; y=(_py1+_y1)/2; 'draw string 'x ' 'y' bottom'
'set string 2 bl 4 90';
x=(_px1+_x1)/2 - 0.1; y=(_py1+_py2)/2+0.1; 'draw string 'x ' 'y' left'
'set string 2 tl 4 270';
x=(_px2+_x2)/2 + 0.1; y=(_py1+_py2)/2-0.1; 'draw string 'x ' 'y' right'

