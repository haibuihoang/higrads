*
*
*  This function automatically set gradient change of color
*  
*  Usage arbg col1 col2 r1 g1 b1 r2 g2 b2
*
*

function main(args)

* Get arguments
if (args='')
 say 'anim.gs requires 8 arguments: col1 col2 r1 g1 b1 r2 g2 b2'
 return
endif
col1=subwrd(args,1);col2=subwrd(args,2);
r1=subwrd(args,3);g1=subwrd(args,4);b1=subwrd(args,5)
r2=subwrd(args,6);g2=subwrd(args,7);b2=subwrd(args,8)



n=col2-col1
dr=(r2-r1)/n
dg=(g2-g1)/n
db=(b2-b1)/n

c=col1
while(c<=col2)
  r = math_nint(r1 + (c-col1)*dr)
  g = math_nint(g1 + (c-col1)*dg)
  b = math_nint(b1 + (c-col1)*db)
  'set rgb 'c' 'r' 'g' 'b
  ;*say 'set rgb 'c' 'r' 'g' 'b
  c=c+1
endwhile

