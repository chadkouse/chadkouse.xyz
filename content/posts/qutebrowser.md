---
title: "Qutebrowser"
date: 2020-08-10T11:15:02-04:00
draft: false
---

In keeping with a keyboard-driven workflow - your browser can become a big
source of frustration. For obvious reasons you just don't have the control over
the web that you have over your local environment.  However there are some
things you can do to make things better.

### Vim bindings for your existing browser
Depending on what browser you are using currently, there is probably a solution
that will provide a better experience for you.  Here are a few examples:
* Chrome - [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)
* Brave - Can actually use chrome extensions, so see chrome 👆
* Firefox - [Trydactyl](https://github.com/tridactyl/tridactyl), 
[Vimium-FF](https://addons.mozilla.org/en-GB/firefox/addon/vimium-ff/) 
(experimental),
[Vim Vixen](https://github.com/ueokande/vim-vixen), 
[VVimpulation](https://github.com/amedama41/vvimpulation)
* Safari - [Vimari](https://televator.net/vimari/)
* Internet Explorer - 🤔

I've actually tried / used most of these -- I used Vimium for Chrome / Brave for
years before I finally found the browser for me.... 🥁   
::drumroll please::  

### Qutebrowser
[Qutebrowser](https://github.com/qutebrowser/qutebrowser) bills itself as "A 
keyboard-driven, vim-like browser based on PyQt5 and Qt."  It has a minimal 
(and highly configurable!) interface and comes with vim bindings right out of 
the box. And since it's using Qt under the hood to render everything it's very
fast and compliant.  It actually feels a lot like Chrome with respect to it's
rendering and dev tools.

Something that took me a bit to become used to is the concept of an insert mode
on the web. (as opposed to command mode -- or even caret mode!)  Vim users will
understand what these modes mean, but it can be odd at first to have your cursor
in a text box and start typing only to realize you aren't in insert mode yet. 
Qutebrowser attempts to guess when you want to move into insert mode for you,
such as when you focus a text area (clicking or moving there using the keyboard
shortcuts) -- however it seems that some websites use tricks to simulate a text
box and Qutebrowser sometimes doesn't realize you're even in one, so you must
press `i` to get into insert mode before typing.  I have gotten used to this
and having the ability to execute vim-like commands on the web page in command
mode more than makes up for this small inconvienence.

A power-user flex move is when you need to download multiple images from a web
page -- you can use built in commands to show hints for only images and rapidly
download them: 
```
hint --rapid images download
```
This is just an example of 
powerful things you can do with qutebrowser.

#### Screenshots
<a href="/images/qutebrowser/main.png">
    <img src="/images/qutebrowser/main.png" alt="main" width="300"> 
</a>
<a href="/images/qutebrowser/downloads.png">
    <img src="/images/qutebrowser/downloads.png" alt="downloads" width="300"> 
</a>
<a href="/images/qutebrowser/hints.png">
    <img src="/images/qutebrowser/hints.png" alt="hints" width="300"> 
</a>
<a href="/images/qutebrowser/completion.png">
    <img src="/images/qutebrowser/completion.png" alt="completion" width="300"> 
</a>

Using Qutebrowser has been a joy -- and any time I've had a question or 
just wanted to throw around ideas the developer has been very easy to reach and
very responsive.  Join #qutebrowser on freenode to join the discussion.

I have 
[sponsored this project on github](https://github.com/sponsors/The-Compiler/) 
and hope some of you do the same.

