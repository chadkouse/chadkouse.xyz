---
title: "Evolution of a Workflow"
date: 2020-05-02T11:44:14-04:00
draft: false
---

Ok so I think this is the last in my "Evolution" series -- the workflow.

So even though my operating systems and my IDEs have evolved over time, my
workflow mostly stayed the same: a window with my text editor, a browser for
testing, communicating and let's be honest - regular trips to StackOverflow, 
and a few terminals for version control, remote connections to servers, etc. 
Maybe over time I've had multiple monitors or even multiple machines connected
to a KVM switch--all very standard stuff.

However, once I landed on Linux as my daily driver OS, I started seeing 
screenshots on reddit of people showing off their interfaces and there was this
interesting look to some of them where the windows were all laid out in grids
and nothing overlapped.  I learned these were people using a tiling window 
manager -- the one I heard about most often was called [i3](https://i3wm.org/).
  
I installed i3 and started using it -- I immediately loved it.  It was such
a better workflow for me, especially as I have focused on less use of the mouse
and doing as much as possible with keyboard (both to increase productivity and
to reduce the potential for RSI--I use [colemak](https://colemak.com/) for this
same reason). After several weeks or months of learning, using, and tweaking
i3 to my needs I realized a few things I didn't like.  I didn't like how moving
between windows was kind of arbitrary -- I think i3 uses a tree-based list of
windows and moving them around doesn't always make sense (to me anyway).

I also wanted easier ways to show the same window on multiple virtual desktops
and resize them and restack them, etc.  I found exactly what I wanted in 
[dwm](https://dwm.suckless.org/)!

dwm is:
> "a dynamic window manager for X. It manages windows in tiled, monocle and
> floating layouts. All of the layouts can be applied dynamically, optimising
> the environment for the application in use and the task performed."

In terms that related to my needs -- the windows are stored in a "stack" and
layouts work with the stack of windows - treating the one at the top as a
"master" window and the others as less important.  You can even have multiple
masters.  Plus you can apply layouts to the existing stack any time you want
and reshuffle them.  Navigating to the window you want is just moving up or
down the stack - it's very logical.  The windows can be attached to one,
multiple, or all of the virtual desktops at once (with different shapes and
locations in each one).  It's from suckless so it adheres to the suckless
philosophy, which may not be for everyone. What this ultimately means is that
you need to apply patches to the source code if you want anything beyong the
basic functionaly - and you need to rebuild the app to change any configuration
options.  Those two key points require you to do a bit more work to get your
customized version if the application running but the source code is clear
and easy to work with.  I've tried other tiling window managers since then:
bspwn, awesome, xmonad, herbstluftwm -- but I've always come back to dwm. It
just makes the most sense to my brain and enables my workflow to be how I want.

Check out my [fork / build of dwm here](https://github.com/chadkouse/dwm).

[![Workflow](/images/workflow_thumb.png)](/images/workflow.png)
