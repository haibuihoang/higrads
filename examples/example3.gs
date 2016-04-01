*This one can be use as a template for grid-type subplot

*some settings
rows=3;cols=3

width=2; height=2

outer_margin=0.5
inner_margin=0.2

'reinit'
'set display color white '; 'c'
'open model.ctl'

r=gsfallow('on')
h_initframe()

total=rows*cols

h_nodefault()
i=1; while(i<=total)

   left=false; bottom=false; top=false;
   if (i<=cols); top=true; endif
   if (math_mod(i,cols)=1); left=true; endif
   if (i>(rows-1)*cols); bottom=true; endif
   
   t=inner_margin; r=t; b=t;l=t; l_size=0; b_size=0;
   if (top=true); t=outer_margin; endif
   if (left=true); l=outer_margin;l_size=0.12;h_break(); endif
   if (bottom=true); b_size=0.12; endif
   
   h_set_margin(t,r,b,l)
   h_newframe(width,height)
   'set lat 8 28'
   'set lon 100 120'
   'set mproj scaled'
   'set mpdset hires'
   'set gxout shaded'
   'd tsfc'
   
   h_set_xrange(100,120)
   h_set_yrange(8,28)
   h_draw_xtm(90,120,1,5,b_size)
   h_draw_ytm(5,30,1,5,l_size)
   h_draw_ltitle('Plot #'i)


i=i+1;endwhile


h_cbarn('r',0,0.1)
