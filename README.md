# HiGrads 
HiGrads is a GrADS script library which help composing Grads subplot in an easy way as well as some chart plotting functions.

The figure below shows the fundamental concept of frames in HiGrads approach. Each frame is considered a block, which is place adjacent to each other. This concept is borrowed from CSS’s box model, which is standard in web design. Beside the plotting area dimensions (width & height), a box has four margins (top, right, bottom, left). The code to generated this plot is just about 60 lines of code and is included in the libary (h_demo.gs).

![HiGrads Frames](https://raw.githubusercontent.com/haibuihoang/higrads/master/examples/h_demo.png)

##A crash course
### 1. Installation
You just need to unpack the libary (zip file) and copy all the files to GrADs libary. For easy maintenence, all HiGrads files have the prefix h_. 

> grads -p 

Then, you can test HiGrads by open GrADS (portrai mode recommended) and type h_test 

> h_test

###2. Using HiGrads
HiGrads is exclusively written for GrADS script which in generall, you cannot use from GrADS command windows but in a GrADS script (.gs) file. **In a .gs file**, you need to enable grads script function by the following code:

```
r=gsfallow('on')
```

First step, you need to initialize everything

```
h_initframe()
```

Define a new frame, you can use function ```h_newframe(w,h)```. Where w & h are width & height parameters in inches (remember, grads page size is either 11x8.5 inches or 8.5x11 inches depends on landscape or portrait mode). For examples:

```
h_newframe(5,2)
```

Means that you define a box with w=5 inches, h=2 inchs. After using that function, every grads display commands will be bound in the plotting area of that box. To create a new box, you can simple call ```h_newframe``` again (with same or different parameters).

What about margin? Well, all margins tooks the default values of 0.5 inches. To manage the margin of the frame, you use the function ```h_setmargin(top,right,bottom,left)``` *before* ```h_newframe```. (Remember the first is the top, then run clockwise direction, similar to CSS margin). For example:
```
h_setmargin(0.3,0.1,0.3,0.7)
```
Will set top margin to 0.3, right=0.1, bottom=0.3, left=0.7.
If all the margins have the same value, e.g. 0.3, you only need to set ```h_setmargin(0.3)```. If you set ```h_setmargin(0.3,0.1)```, that means top and bottom =0.2, left = right=0.1
If every frame has the same margins, you only need to set it once.

That’s it, it’s very easy to control subplots by seting appropriate box sizes and put them together.

###3. Additional functions
There are lots of extra functions in hlib library for plotting. You can think of HiGrads as a plotting library.
Creating a custom plot & tickmarks


#Other link
* [GrADS Homepage](http://grads.iges.org/grads/)
