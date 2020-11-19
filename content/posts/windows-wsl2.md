---
title: "Windows WSL2 and VSCode"
date: 2020-10-26T15:25:35-04:00
draft: false
---

Recently I had to do some C# programming related to windows services.
Unfortunately this means I had to use windows.  I haven't used windows in over
a decade, at least not for more than gaming (I dual boot into windows for
gaming) but it really hasn't changed too much on the surface.  Still sucks.
However, there is something interesting going on with something called "Windows
Subsystem for Linux" (WSL) -- in fact version 2 of this, known briefly as WSL2.

Now things get kinda weird but basically you can kind of install ubuntu within
windows, and then use a real linux shell to clone your repos and run your
python scripts, etc.  It has performance issues when you try to go across that
barrier between files stored on WSL2 "drives" (which windows sees as networked
drives) and your native windows tools, which can be a bit of a problem if you
use a graphical IDE.

However if you use [Visual Studio Code (Code -
OSS)](https://github.com/Microsoft/vscode) then there is a solution for you
because there is a WSL2 extension available that allows you to edit the source
code in WSL "drives" with good performance and debug code running there within
VSCode.  I would recommend you give it a try if you're stuck in windows as a
developer.
