

# Syntax Used For Writing Posts
First of all, this project use kramdown, which means all syntaxs supported by kramdown applies here.

[Kramdown Syntax](https://kramdown.gettalong.org/syntax.html)

Additionally, i have some custom classes which are used to add some custom styles to posts, only these are documented here. I assume you read above kramdown syntax or you know them !

> ## ATTENTATION
> 
> In this project, it is recommended to add custom classes before (start) of the element, so it is easier to understand what class is applying to which element. An example below:
> 
>       {: .custom-class}               # Class added just before the element
>       element starts here .....
>       ..... ends here
>
> So It needs one line break gap from previous element, other wise it won't add the class, example below:
>
>
>       previous element ends here
>                                       # This is the line break
>       {: .custom-class}               # Class added just before the element to which it will apply (no line break with applying class) 
>       element starts here .....
>       ..... ends here
>
> Although you can add vice-verse (exactly below to the element) in this case you need a line break below `{: .custom-class}`.

## Adding Note
You can call this and custom blockquote. Use this class when you want to focus on some tip, note etc. Note class has custom css property defined in [posts.css](https://github.com/GEEKOFIA/blog/blob/master/assets/css/post.css#L139). It has another 3 child classes (r,g,y) just to colorize background of note.

Below are some sample images how they looks:

- Red Note (For caution, danger, though etc.)classes: `note r`

![Note Red](/assets/images/docs/note-r.png)

- Green Note (For success, safe, easy etc.)classes: `note g`

![Note Red](/assets/images/docs/note-r.png)

- Yello Note (For warning, mild tough etc.)classes: `note y`

![Note Red](/assets/images/docs/note-r.png)

Class | Subclass | Including Syntax | Example
------|----------|------------------|--------
`note` | `r` | {: .note .r} | [Here](https://github.com/GEEKOFIA/blog/edit/master/_posts/2019-06-11-how-to-setup-flutter-web.md)
`note` | `b` | {: .note .b} | [Here](https://github.com/GEEKOFIA/blog/edit/master/_posts/2019-06-11-how-to-setup-flutter-web.md)
`note` | `y` | {: .note .y} | [Here](https://github.com/GEEKOFIA/blog/edit/master/_posts/2019-06-11-how-to-setup-flutter-web.md)

## Add Code Snippet
I konw, oviously you know how to add a code snippet. My point here is, prism is used here with almost all the language support. So, while for adding a code snippet, you must specify it's language.

You have 2 options to add code snippet to post:
1. add native markdown way (using ```, ~~~)
2. embed gist, jsfiddle, codeen etc. (`<script src="remote-url"></script>`)

While using method one (native way) you must mention the language. Example:

~~~~~~
```ruby
def what?
  42
end
```

# OR

~~~ruby
def what?
  42
end
~~~
~~~~~~

Never use an image to present your code.

## Add Featured Image

Again as a reminder, you shouldn't share your code which people are going to use as an image, add them natively or embed gist, codepen, jsfiddle etc. But if you want to use some legendry code lines for the post's featured image, you should use [carbon](https://carbon.now.sh) and choose `svg` as an export format over `png`.

After that in `<your_post>.md`, add `#img-fluid` to the end of your url, like show below:

```markdown
![alt-text](/assets/images/posts/pulseaudio-default-pa.svg#img-fluid)
```
You must add `#img-fluid` to the end of url. This prevents the image to exceeding the content container as well as make it responsive.

A full example of including above image and centering:

```markdown
{: .align-center} # For centering (discussed below)
![alt-text](/assets/images/posts/pulseaudio-default-pa.svg#img-fluid)
```

Sudo Selector |  Including Syntax | Example
------|----------|------------------|--------
`#img-fluid` | `![alt-text](image-url#img-fluid)` | [Here](https://github.com/GEEKOFIA/blog/edit/master/_posts/2019-06-16-fix-monitor-flickring.md)


## Align Image To Center
Add `{: .align-center}` just above the image line. For example, below snippet:

```markdown
{: .align-center} #This
![alt-text](image-url#img-fluid)
```
Remember to add `#img-fluid` to end of your image url. (**IMPORTANT**)

***More Will Be Added Soon ....***