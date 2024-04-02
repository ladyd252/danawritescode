---
title: Getting started with CSS transitions
publish_date: "October 14, 2019"
date: 2019-10-14
preview_text: Recently I’ve been working with more transitions and animations at work and on my personal project, and I find them to be a pretty confusing topic that tends to trip people (me) up. So I thought I'd take a stab at breaking these down...
---
Recently I’ve been working with more transitions and animations at work and on my personal project, and I find them to be a pretty confusing topic that tends to trip people (me) up. So I thought I'd take a stab at breaking these down!&nbsp;

### What are CSS transitions?

CSS transition allows you to **choose the speed and timing with which a css property changes.**&nbsp;

For example, imagine you wanted to expand a div on your page when the user hovered over it. It would look pretty abrupt if that div just suddenly got bigger when a user hovered on it.

<div class="expandableDiv">Hover Me</div>

<br>**CSS**:

```css
.expandableDiv {
  width: 100px;
}

.expandableDiv:hover {
  width: 200px;
}
```

&nbsp;

We can create a smoother interaction by using css transitions on this div.

<div class="expandableDiv smooth">Hover Me</div>

&nbsp;

**CSS**:

```css
.smoothExpandableDiv {
  transition: width 200ms;
  width: 100px;
}

.smoothExpandableDiv:hover {
  width: 200px;
}
```

### How are CSS transitions triggered?

Transitions are triggered by changes to a CSS property, and they dictate **how** that property will transition to its new state. In the example above, hovering over the element changes its width, and the transition property defines that change should take 200ms. Read on to see how we can get even more specific in how we define a transition.

### How do we define a transition?

There are four parts to a transition:

### Transition-property

The property that should be transitioned, e.g. height, width, opacity, border, and more. Not all CSS properties can be transitioned, e.g. display. To see the full list of properties that can be transitioned, [look here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

Some examples:

<div class="heightTransition">Transition height</div>

&nbsp;

<div class="opacityTransition">Transition opacity</div>

&nbsp;

<div class="borderTransition">Transition border color</div>

&nbsp;

### Transition-duration

How long the transition should take, i.e 200ms or 3s.

<div class="expandableDiv long">I take a long time!</div>

&nbsp;

<div class="expandableDiv short">I take a short time!</div>

&nbsp;

### Transition-timing-function

You can use this property to make your animation faster or slower at different times. There are **a lot** of different values you can use here ([see the full list here](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)). The default one is **ease**, which goes faster towards the middle of the transition and slower towards the end. Some other popular values:

**ease-in:** start slowly and speed up until complete

<div class="expandableDiv easeIn">Easeeeeee In</div>

&nbsp;

```css
.easeInExpandableDiv {
  transition: width 1s ease-in;
}
```

**ease-out:** the opposite of ease in :)&nbsp;

<div class="expandableDiv easeOut">Easeeeeee Out</div>

&nbsp;

```css
.easeOutExpandableDiv {
  transition: width 1s ease-out;
}
```

**cubic-bezier(p1, p2, p3, p4):** allows you to set 4 different points of speed for your transition.&nbsp;

<div class="expandableDiv cubicBezier">Custom Cubic Bezier</div>

&nbsp;

```css
.easeOutExpandableDiv {
  transition: width 1s cubic-bezier(0.2, 0.6, 0.3, 0.9);
}
```

### Transition-delay

A time delay before your transition starts. For example, maybe you only want something to happen 200ms **after** a user clicks on a button, or to sequence a bunch of transitions into one large animation. You can do that using the transition-delay property.

<div class="expandableDiv delayed">Delayed and sequenced transitions</div>

&nbsp;

```css
.delayedExpandableDiv {
  transition: width 0.25s ease-in, background-color 0.25s ease-in 0.25s,
    color 0.25s ease-in 0.25s;
  &:hover {
    background-color: #2e9898;
    color: #ffffff;
  }
}
```

In this example, we've added 3 different transitions to one element by listing them and separating them with a comma.

First off, we expand the width of the div with `width 0.25s ease-in`. Then, after 0.25 seconds, we change the background color and the text color with `background-color 0.25s ease-in 0.25s,color 0.25s ease-in 0.25s`.

### In Conclusion

Hopefully this has given you a little teaser on how to define css transitions - now go forth and try out some different properties on your own! [Let me know](mailto:dyakoobinsky@gmail.com "dyakoobinsky@gmail.com"){: target="_blank" rel="nofollow noopener"} if this guide helped you build a cool transition or if there's another topic you'd like me to cover.