#Cameron Whiting code credits
> This project took lots of help from especially these people:
> Casey, Fabian, Kristen, Lee & Rumaldo.

## **NOTICE**
even though I may acredit one particular piece of code or help with the code
to a specific person, I'd like to point out that EVERYONE on the Pitch Engine
team dealt with **LOTS** of bugging, pestering, questioning, etc. from me.

> they **ALL** ROCK. :)

##the idea:
each big code change is named.
in a larger code base, it'd be cool
to know where specific code came from.

##quotes:
> one switch to rule them all

> my continuing mission is to provide syntax to make you ***cry*** blood.

> eh, I plan to streamline the code as it goes along.

> let them write code.

#V.1 marvelousMarcus
* implement a slide data structure (replaces static webpage design)
* this one is technically enough of a change to be a 'release'...

this was my initial resume design idea, build something that has slides.
GRANTED, it did seem too much like a powerpoint :/ (needs tweaking)

#v.2 livelyLunar
* make slide backgrounds visible (bug fix)
* also implemented font awesome (gracias Casey)
* the prev/next slides, and containers thing was fixed with tonnes of help from Rumaldo and Casey.
* icomoon was used to create a 'sick'(so said Fabian) background logo. gracias Casey
* replacing backgrounds with hidden 'anotation backgrounds'. it's a surprise :D (use cover instead of 100 100)

this bug fix was a total derp on my part, to be honest.

#V.3 zoeticZarya
* finalize the tour to end smoothly at LM (feature)

I was using Iframes to include pages. NOT A GOOD IDEA.
took way to long to load, didn't look nice, sometimes didn't work, too bad.
this was replaced by logos. (hat tip to Casey)

#V.4 xorXavier
* implement a singular 'inteligent' case statement. (bug fix)
* technically this bug was a hard one to crack.
* put code on JS fiddle (crediting Lee and Xavier for their help)

this idea comes from Don't Repeat Yourself.
I can classify the slides as *smaller* or *larger* than the active slide,
Xavier, a buddy of mine, pointed out that $(.slide) is technically an array.
Lee helped me fix a DOM bug that wasn't letting me animate it (by re-nesting the objects),
and putting this code together gives you a beautifully small piece of code.

the actual menu, where you can click on the tile and it takes you there, was a kristen/lee snippet,
involving grabbing a data id from that tile and passing that to request(slide);

#V.5 kemptKristen/crazyCasey
* make it fast. make it seem faster. (tweaking)

the javascript was going too slow. it didn't look fluid.
at the recomendation of Casey and Kristen, the animation burden is now
placed on css3 transitions, and the classes 'left' 'right' and 'active'

#V.6 rakishRumaldo (as in a website that is: Trim and fast-looking, with streamlined angles and curves.)
* make the website look good under most circumstances(tweaking)
* overflow hidden bugs fixed by using a 'wrapper' idea.
* squish most of the formating bugs. make future debuging less of a hastle (make it rakish on the code side)

image sizing, centering, etc.

#V.7 licitLee
* somehow mention microsoft or something. (that's for you guys.)

> get ssl cert. localy host everything. (get rid of all the console errors maybe?)

not much was done mentioning microsoft. I mean, Virtual Studio, visual basic (which is easy to learn)
teamview server, microsoft virtual accademy, free student licenses, it's a shame really.

#V.8 jazzyJason (lively or bright) / functionalFabian
* make the website color scheme work better. icon final touches.
* make everything a tile, including the linux mint download
* remove the slide structure in favor of a css3 animated shelf. make it friendly and logical.
* use a 'shelf' and pull the slides onto the wings.

#Future developments (on my own):
* use the [Holo theme][http://69.145.68.236:10200/theme.png] and my [sly background][http://69.145.68.236:10200/desktop.png]
* use only these icons: lfs(terminal), sdk, mint, twitter, github, email
* make a small app using the [ubuntu sdk][http://developer.ubuntu.com/get-started/] goal: learn how to use SDKs
* read through and build [Linux From Scratch][http://69.145.68.236:10200/lfs]
* make or modify a program (for apt systems) on eclipse (or something else I guess.)