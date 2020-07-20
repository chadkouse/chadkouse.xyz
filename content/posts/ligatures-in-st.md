---
title: "Ligatures in st"
date: 2020-07-20T12:28:48-04:00
draft: false
---

Recently I've been doing some Haskell programming. Haskell is one of those cool
functional programming languages that really I'm learning as much for the 
mind-shift it brings (functional vs imperative programming) as for the 
potential to use a new language in a new project.  
  
Haskel uses a lot of symbols -- this steepens the learning curve a bit but for
the benefit of saving keystrokes later.  

For instance, check out this chunk of haskell code:  
![No Ligatures](/images/ligatures/none.png)

Don't worry too much about what this function does -- in this post I'm just 
going to focus on how it looks. As I mentioned briefly in previous posts I use
[st](https://st.suckless.org/) - simple terimal from the suckless guys.  Of 
course I maintain my [own build](https://github.com/chadkouse/st) - like most
people do.

When I started in with Haskell - it didn't take long for me to get really tired
of looking at it. So many ascii arrows and symbols!  I realized I needed to 
patch my terminal to support ligatures.  

I headed to [the suckless st patches page](https://st.suckless.org/patches) and
quickly found the 
[ligatures patch](https://st.suckless.org/patches/ligatures/). This patch is a
little trickier than most because i also use the boxdraw patch, but it wasn't
too hard to integrate into my build.  10 minutes later I had ligatures working
in my terminal which turns the previous chunk of ugly code into the following
fun and easy on the eyes look:  
![Ligatures](/images/ligatures/some.png)

I highly recommend using ligatures in your IDE
