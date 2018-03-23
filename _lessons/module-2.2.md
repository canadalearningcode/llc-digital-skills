---
layout: lessons
module: 2
lesson: 2
title: CSS Fundamentals
description: The Box Model Advanced selectors, block and inline elements 
permalink: module2-2.html
---

## Spacing and CSS

Using space is a key part in design to ensure that the content is easy to read, view, find and aesthetically pleasing. Sometimes a few pixels can make all the difference!

By default, many HTML tags are styled with some default spacing. For example, there is extra space between two paragraphs. Headings also have extra space around them.

CSS uses 5 properties to determine the size and spacing of these elements: `width`, `height`, `padding`, `margin` and `border`. 

This is referred to as **The Box Model**.


## Intro to The Box Model

The browser looks at every HTML element on the page as a square/rectangular box. The **CSS Box Model** describes the way CSS handles the size and spacing of HTML elements. 

CSS uses 5 properties to determine the size and spacing of these boxes: 

* `width` - change the default width
* `height` - change the default height
* `margin` - add or remove default space *around* the element
* `padding` - add or remove default space *inside* the element
* `border` -  add a border around the element


Each of these boxes can have different combinations of the above properties, which in turn changes the element's size and how much space it takes up on the page.

### Width & Height

The `width` & `height` properties can be used to set specific heights and widths to only *block* level elements.  (More on block elements in Module 3.)

<div style="background:lightgreen;">This is a div with default width & height.</div>
<div style="background:lightgreen;width:60%;height:80px;margin-top:10px;">This is a div with a set width & height.</div>

    div {
      width: 60%;
      height: 80px;
    }

### Padding

The `padding` property adds/removes space *inside* of the element. It only accepts positive numerical values.

Setting the padding to "0" will remove any default space on an HTML element. Any positive value will add space *inside* of the element.

    /* longhand */
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;

    /* shorthand */
    padding: 2px; /* same on all sides */
    padding: 2px 10px; /* top & bottom, right & left */
    padding: 2px 10px 5px; /* top, right & left, bottom */
    padding: 2px 2px 2px 2px; /* top right bottom left */

<p style="background:lightblue;padding:0px;">This is a paragraph without padding.</p>
<p style="background:lightblue;padding:20px;">This is a paragraph with padding.</p>

### Margin
Margin adds/removes space *outside* of an element. However, the shorthand and longhand rules are the same as padding. 

    /* longhand */
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    margin-left: 2px;

    /* shorthand */
    margin: 2px; /* same on all sides */
    margin: 2px 10px; /* top & bottom, right & left */
    margin: 2px 10px 5px; /* top, right & left, bottom */
    margin: 2px 2px 2px 2px; /* top right bottom left */
    
<p style="background:lightgreen;margin:0px;">This is a paragraph without margin.</p>
<p style="background:lightgreen;margin:40px;">This is a paragraph with margin.</p>

> Edit the CodePen below and try editing padding and margin.

<p data-height="268" data-theme-id="0" data-slug-hash="bVaymY" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/bVaymY/'>margin & padding</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>


### Margin & Negative values

Margin also accepts negative values.  This will nudge it just outside of its stacked position.

<p style="background:lightgreen;margin:0px;">This a paragraph without margin.</p>
<p style="background:lightblue;margin:-15px 0 0 340px;">This a paragraph with a <strong>negative top</strong> margin value and a <strong>positive left</strong> value.</p>

### Auto/Center Aligning with `margin`
The margin property can also be used to center align elements. 

First a width needs to be set. Then by setting the left & right values to `auto`, it finds the center of the page. The `0` refers to the top and bottom value and can be set to any value depending on the desired page style.

    div {
      background: lightblue;
      width: 600px;
      height: 60px;
      margin: 0 auto; /* 0 on the top & bottom, auto on the left & right */
    }

<div style="height:60px;width:600px;margin: 0 auto;background:lightblue;">
  <p>Auto aligned!</p>
</div>


### Border
The `border` property resides between the `margin` and `padding` and creates an outline around the element. Also has longhand and shorthand syntax.

    /* longhand */
    border-width: 2px;
    border-style: solid;
    border-color: red;

    /* shorthand */
    border: 2px solid red;

Like padding and margin, a border can be added to a specific side of the element.

    /* longhand */
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: red;

    /* shorthand */
    border-top: 2px solid red;


Read more about the Box Model [here](https://www.addedbytes.com/articles/for-beginners/the-box-model-for-beginners/).  We'll also be revisiting it in Module 3.


## Dev tools & designing in the browser

Getting to know your browser dev tools will be super handy when tweaking styles on your web page.  You'll be able to try out different CSS styles right in the browser and see the changes update right away rather than flipping back and forth between your editor and browser.

It's also useful for finding the correct css selectors faster than hunting through your files (or someone else's).

<img src="{{ site.img }}/module2/inspect-element-css.gif" class="print-hide">

In Chrome, you can access the tools in 3 ways:

* **Option 1:** right-click / two-finger tap / Ctrl + click on any web page and select **Inspect Element** to open the console
* **Option 2:** select the menu icon in the top right hand corner and select **More Tools > Developer Tools**
* **Option 3:** keyboard shortcut: **Ctrl + Shift + I (PC)** / **Cmnd + Option + I (Mac)**

> Pick your favorite website and try it out!

> ## EXERCISE: Margin & Padding
> Download the [exercise file](exercises/module2/margin-padding.zip) (zip file).  Base HTML & CSS is already included.
>
>With a partner, edit/add/remove some margin and padding to make this web page look just a little bit nicer and more balanced.
>
>Using the class added to the HTML, `<div class="wrapper">`, add `margin` and `width` to auto align the page content.
>
>**solution.css** has been included for reference.


## The Box Model Problem and Fix

In CSS ,the relationship between the width, padding and border properties is not always straightforward.
For example, if you set the width of a box to 480px and added 20px of padding and a 15px border on the left and right side, the width of the box will actually be:

480 (width) + 20 (padding-left) + 20 (padding-right) + 15 (border-left) + 15 (border-right) = 550px total width

But, there's a fix! Let's first compare how the element's sizing differs with and without the fix, looking at the CSS example below.

    background: lightblue;
    width: 480px;
    padding: 0px 20px;
    border: 15px solid green;

<div style="box-sizing: content-box;background: lightblue; width: 480px;padding: 0px 20px;border: 15px solid green; margin-bottom: 5px;">
  <p style="box-sizing: content-box;">This example does NOT have the border box fix.</p>
</div>

<div class="example" style="background: lightblue; width: 480px;padding: 0px 20px;border: 15px solid green;">
  <p>This example DOES have the border box fix.</p>
</div>


<br>
Notice that without the fix, the element is larger than the set `width`.

The box model fix is a CSS code snippet you can (and should) add to all your projects.  With this fix, padding and border will not affect the overall sizing of the element.

Here is the snippet:

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

Read more about the fix [here](http://www.paulirish.com/2012/box-sizing-border-box-ftw/).

> ## EXERCISE: Margin & Padding on Your Project
> Open up your project files and based on the last exercise, add margin and padding to make your website look more balanced.
>
>Wrap your content with a <div class="wrapper">`, and add `margin` and `width` to auto align the page content.
>
> Add the box model fix to the top of your CSS file.

## Advanced Selectors
In the previous lessons, we covered a few ways to select an element using element type, class and id selectors to apply CSS to it, but there are many more ways of targeting content!

## Descendant Selectors
Descendant selectors can be used to target *nested* elements. To use a descendant selector, add a *space* between selectors.

    <parent>
      <child>
        content here
      </child>
    </parent>
    
---
    parent child {
      /* targets only the child elements contained in that parent */
    }

---

    <ul>
      <li><a href="#">link 1</a></li>
      <li><a href="#">link 2</a></li>
      <li><a href="#">link 3</a></li>
    </ul>
    
---
    ul li a {
      color: blue;
    }

In the above example, this style would apply only to links inside of a list item, inside of an unordered list. Descendant selectors apply to any nested element, no matter how many levels deep.

You can even "skip" an element. The below example will work as well.

    ul a {
      color: blue;
    }

### Descendant Selectors and Specificity
A good rule of thumb for descendant selectors is to avoid going more than **three** levels deep.  Browsers read selectors from right to left and work its way up the [DOM](http://www.w3.org/TR/WD-DOM/introduction.html) tree.  Having many selectors can impact the site performance.

#### Yes
    p a {
      /* targets anchor link tags nested inside of a p tag */
    }
    .about p {
      /* targets paragraphs within an element with the .about class*/
    }

#### No!
    .about ul li a span {
      ...
    }

Also, a more *specific* selector will override the descendant selector, regardless of written order in the CSS file.
    
    ul a {
      /* least specific */
    }
    ul li a {
      /* more specific */
    }
    ul.nav li a {
      /* most specific */
    }


## Combining selectors
You can also combine selectors if you want the same style to be applied to multiple elements by separating the selectors with a *comma*. Any type of selector can be combined.

    .special, #special {
      color: red;
    }
    h1, h2 {
      text-transform: uppercase;
    }
    header h1, h2 {
      text-transform: uppercase;
    }

> What is the difference is between combining `h1, h2` and `header h1, h2`?

## Pseudo-class Selectors

Pseudo-class selectors target an elements *state* or *action*. The most commonly used pseudo-class is `:hover`.  Note the syntax. It must start with a colon (`:`) and be attached to an HTML element, with no white-space.

    <a href="#">Example link</a>

---
    a { 
      color: red;
    }
    a:hover { 
      color: black;
    }

### Pseudo Class & links

`:hover` - selects the link on mouse hover.  
&nbsp; Can also be used to create hover effects for elements other than an `<a>`.

`:link` - links that have *not* been clicked/visited

`:visited` - links that *have* been clicked/visited in the the current browser

`:active` - selects the link while it is being activated/clicked.


<br>
There are **many** more ways to select elements such as position in the HTML document or by attribute name. Explore the resources below for more information about advanced CSS selectors.


>## EXERCISE: Selectors
>
>Download the <a href="exercises/module3/selectors.zip" download>exercise</a> (zip file). The answer key has been included so no peeking unless you really really need to! 
>
>All the instructions are contained in the comments at the very top of `selector.html`.
> **Bonus** Open up your project's style.css file and add a hover effect to your nav links. Tip: You might even be able to combine descendant selectors with pseudo selectors for this one! 


## Block vs Inline Elements


Though CSS can be used to add a lot of new styles to your webpage, CSS is also used to override default HTML styles.


Block level HTML elements default behavior:

* takes up 100% width of its container, no matter how long the actual content is
* will be the same height as its content
* always starts on a new line
* can wrap other block level elements or inline elements
* can apply sizing related CSS to it (margin, padding, height, width)
* examples: `<p>`, `<div>`, `<ul>`

Inline level HTML elements default behavior:

* will be the height and width of its content
* always appears "in a line" with other inline level elements
* can wrap other inline elements but cannot wrap block level elements *except* `<a>` tags.  This is only valid with an HTML5 doctype.
* does not render CSS height and width at all, will apply margin and padding but with unexpected results
* examples: `<a>`, `<span>`

<br>
**Pro tip!** If you're not quite sure if an element is block or inline, put a background color on the element.  If it stretches the full width of the browser window, it's a block element.  If it spans only the length of its content, it's an inline element.

<div style="background:lightblue;">this is a div</div>

<span style="background:lightgreen;">this is a span</span>


## CSS Display

CSS can be used to change how inline and block elements display using the `display` property. There are three values we'll look at today: 

* `block` - makes inline elements display as block elements
* `inline` - makes block elements display as inline-block
* `inline-block` - best of both worlds

This property will come in handy when using the Box Model properties.  Let's do a review before we put display to use.

### Resource 

[CSS Tricks: Display property](https://css-tricks.com/almanac/properties/d/display/)


## Display + Box Model: A match made in heaven

The last lesson introduced the Box Model and 5 CSS properties: width, height, padding, margin, border.  It's important to note that these 5 properties will affect elements differently depending on whether they are inline or block. (or inline-block) 

Let's explore their unique behaviour:

### Width & Height
These properites won't work for *inline* level elements unless you use `display` to change it to `block` or `inline-block`.

### Padding

When adding padding to an *inline* element it will look like the below example.
<p style="background:lightblue;padding:0px;">This is a block element without padding.</p>
<a href="#" style="background:lightgreen;padding:20px;">This is an inline element with padding.</a>

<br>
Notice that there's no space between the two element? Inline elements don't apply padding the same way as block elements.  You will need to use the CSS `display` property to make an element 'block' if you want to add padding.. 

More on this in the upcoming exercise.

### Margin

Just like padding, margin and spacing is not applied the same way to block and inline elements.

<p style="background:lightblue;margin:0px;">This is a block element without margin.</p>
<a href="#" style="background:lightgreen;margin:40px;">This is an inline element with margin.</a>


> ## Class Exercise: Box Model & `display`
> In this [Codepen](http://codepen.io/learningcode/pen/vNRadg), let's try the different `display` property values and see how it affects inline & block HTML elements.

## Center Aligning with `margin`
Using `margin:0 auto` to auto-align content only works with block elements! If you're trying to center an inline-element you need to apply the `text-align: center` property and value to the parent of the inline element.

Looking back at our auto-aligned block element: 
<div style="width:600px;margin: 0 auto;background:lightblue;">
  <p>Auto aligned!</p>
</div>

<br>
Notice how the background color only extends the set width of the element?  What if you want to auto align the content only and have different background colors or images?  In the example below, notice that content stays in the middle but the background styles expand the width of the page?

![]({{ site.img }}/module3/content-align.jpg)


In the previous lesson, a wrapper was included around all of the page content.  

But to create a style where different background styles apply to each section, we'll need to:

* create a wrapper, just for the content, not the whole page
* auto align the content wrapper
* use the outer container for the background styles

>Looking at this [CodePen example](http://codepen.io/learningcode/pen/avYXvq), compare the difference between using and not using a content wrapper.

> ## EXERCISE: Content Wrappers in our project
> Originally we added padding to our project sections to make the content a little narrower and nice to read. But it would be much better to use content wrappers in each of our sections (nav, header, section, footer). 
> Go ahead and apply the codepen example from above to each of the sections of your project. 
>
> All in all, [this](exercises/module2/project-one-final/index.html) is how the project might look like now that we've added so many styles. 
>
><a href="exercises/module2/project-one-final.zip" download>Download </a>the example files as a reference. 

<br>
~ End ~


