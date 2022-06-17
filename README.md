# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the Loopstudios landing page coding challenge](./design/desktop-preview.jpg)


### Links

- Live Site URL: [Live Solution](https://bengera.github.io/loopstudios/)

## My process
- A mistake I had made previously was not looking carefully enough at both the mobile and desktop versions of the site and thinking about
how I would need to structure the HTML (e.g having divs that do nothing until they become relavant in the desktop site.) This time
I had a good look at both screenshots of the mobile and desktop sites, figured out where I would need to change flex elements into grids and how
many columns, rows would be needed.
- I took the mobile first apporach. This makes more sense as most traffic does come from mobile users. It is also easier to build up to a bigger design and
not having to remove lots of styling as you make the screen smaller. I can definately feel that time has been saved by taking this apporach.

### Built with

- Semantic HTML5 markup
- SASS/CSS
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

A few new things I tried / learned about.

1.Resize the background image to cover the entire container.
```css
background-size: cover;
```
2. This is the first time I have used the picture and source elements to load different pictures at different sizes. This was more convenient than writing media queries. The picture element can contain one or more source elements that refer to different images through the srcset attribute depending on the current view.
```css
<picture class="about__picture">
        <source media="(min-width: 650px)" srcset="/img/mobile/image-interactive.jpg"">
        <source media="(min-width: 465px)" srcset="/img/mobile/image-interactive.jpg"">
        <img src="/img/mobile/image-interactive.jpg">
      </picture>
```

3. Inserting line break to otherwise unbreakable strings to prevent text from overlowing its line box.
```css
overflow-wrap: break-word;
```

4. The figure tag specified self-contained content. Very useful for making a gallery. The figcaption element also makes the html a bit clearer.
```html
<figure class="gallery">
        <picture class="gallery__picture">
          <source media="(min-width: 650px)" srcset="./img/desktop/image-deep-earth.jpg">
          <source media="(min-width: 465px)" srcset="./img/mobile/image-deep-earth.jpg">
          <img class="gallery__img" alt="the earth from space" src="./img/mobile/image-deep-earth.jpg">
        </picture>
        <figcaption class="gallery__figcaption">Deep <br> earth</figcaption>
      </figure>
```

5. The first time I have used aria labels, scored 100 on accesibilty on lighthouse but I still feel that there is a lot to learn in this area. 
```html
 <button aria-label="open the menu" class="hamburger-menu"></button>
```

6. Meta description
```html
<meta name="description" content="world-class virtual reality projects for some of the best companies around the globe.">
```


### Continued development

I want to learn more about accesibilty, it was interesting to install a screen reader and see how easy the website was to navigate just by tabbing.
I would like to look into this more.


### Useful resources

- [Aria-label](https://www.aditus.io/aria/aria-label/) - A little introduction to how aria-labels are used.




