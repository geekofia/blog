---
title:  "How To Add External Link Indicator With CSS"
author: chankruze
date:   2019-06-11 10:04:19 +0530
categories: [Programming]
tags: [CSS]
thumbnail: /assets/images/thumbnails/external-icon.png
desc: "Add an external link indicator with CSS to anchor tags"
---
Indicating a link is going to open a new tab, or window, and direct users away from your site is good practice. Yon can do this with an icon, text, or image.

##### 01: Setup the link

You must add a `target="_blank"` attribute to your anchor tag.

```html
<a href="https://geekofia.in" target="_blank">More</a>
```

##### 01: Add CSS sudo selector

For the external link icon, i am going to use font awesome like below:

```css
a[target="_blank"]:after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900; /* 900 (Solid), 400 (Regular or Brands), 300 (Light) */
    content: " \f35d"; /* fa-external-link-alt */
}
```

But you can still use other stuffs like below:

- Simple text indication
```css
a[target="_blank"]:after {
    content: " (external)";
}
```

- Show an image
```css
a[target="_blank"]:after {
    content: url(https://images.unsplash.com/photo-1494790108377-be9c29b29330); /* A demo image from unsplash */
}
```

##### Extra: A fool-proof selector

The previous selector relies on the target tag. This selector will find all links to domains other than your own. I will use geekofia.in to demonstrate.

**Logic:** If a link does not contain geekofia.in then display content after link. Or, if a link does not contain a same-page anchor link (i.e. #top, #section) Or, if a link does not contain an internal website (i.e. /blog, /download), then display external indicator. 
```css
a:not([href*='geekofia.in']):not([href^='#']):not([href^='/']):after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    /* 900 (Solid), 400 (Regular or Brands), 300 (Light) */
    content: " \f35d";
    /* fa-external-link-alt */
}
```

You can also see the actual implementation for this website [here]().

That's it, you implemented external link indicator successfully using CSS.