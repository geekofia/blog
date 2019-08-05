## How To Contribute

You can contribute by:
- Writing posts
- Fixing issues
- Adding new functionality (very rare because this is a static blog)
- Sharing your thoughts on the issues
- Improving documentation
- Writing wiki pages

### Writing Posts

You can share your experience on the stuffs you worked on and knowledge by writing posts about them, in a proper format as the given template. It's just like writing any other markdown file.
The post will be a markdown file with extension `.md` or `.markdown`.

**Post File Naming Scheme**
Your post file will be named as below format
```
YYYY-MM-DD-your-file-name-without-spaces.md
```
year-month-date after that `-` and file name without spaces, recommended is to use `-`.

**Post Writing Scheme**

So you got file naming scheme, now jump into the post writing scheme. Your post will include liquid preprocessor statement like below snippet at the top of the file, contents will go below this portion.

```
---
title:  "Your Post Title"
author: your_short_name
date:   YYYY-MM-DD HH:MM:SS +HHMM
categories: [category1, category2]
tags: [tag1, tag2, tag3]
thumbnail: /assets/images/thumbnails/<your-thumb.extension>
excerpt_separator: <!--excerpt-->
---
```

These are the liquid syntax which will go at the top of your post (`your_post.md`) file. Confused with YYYY-HH-MM ? see the sample below:

```
---
title:  "How to install Django in virtual environment"
author: chankruze
date:   2019-05-26 13:58:12 +0530
categories: [programming]
tags: [howto, django, guide]
thumbnail: /assets/images/thumbnails/django.jpg
excerpt_separator: <!--excerpt-->
---
```

You got the overview ! Now i will break it down for the shake of simplicity.

Parameter   | Type      | What to fill
------------|-----------|----------------------------
title       | required  | `string` (with quotes): "Your Post Title"
author      | required  | <ul><li>`string` : username</li><li>`array` (if more then one author) : [username1, usernmae2]</li></ul>
date        | required  | `string` (format): YYYY-MM-DD HH:MM:SS +HHMM (year-month-date hour-minute-seconds timezone) time can be rough but fill date & timezone correctly.
categories  | required  | `array`: [category1, category2] Try to keep it to only one one category.
tags        | required  | `array`: [tag1, tag2, tag3] Try to add at least 2 tags. Required to find related posts.
thumbnail   | required  | `relative path`: Put your thumbs inside `assets/images/thumbnails/` and reference it by `assets/images/thumbnails/your_thumb.extension`
excerpt_separator | optional | This not required on future, will handle it with other way, trying to make post contant clean.

Now the format is complete you can write your content like normal markdown file.

See some existing full posts [here](https://github.com/GEEKOFIA/blog/tree/master/_posts).

**Author Profile**

We use a simple author file which have lil information about author. Jekyll process these files to generate indivisual author's page (see [here](https://blog.geekofia.in/authors/chankruze.html)) as well as a master page showing our authors (see [here](https://blog.geekofia.in/authors/)).

Most probably if you are reading this, you are new author here and we don't have your author file yet. If this is the case proceed as below:

**Author Profile Naming Scheme**

create a new markdown file `your_username.md` inside `_authors` folder.

**Author Profile Writing Format**

```
---
short_name: your_username
name: Your Full Name
position: Author
---
```

Parameter   | Type      | What to fill
------------|-----------|----------------------------
short_name  | required  | Your username (no space)
name        | required  | Your full name (space allowed)
position    | constant  | It is going to be Author (until unless i add more designation)

See some existing full author profiles [here](https://github.com/GEEKOFIA/blog/tree/master/_authors).

Oh boy !
You read the whole documentation i wrote spending an hour, hope you get **How to contribute by writing posts**

Rest contributing possibilities are self-explanatory.

### Suggesting Category

Categories are not going to change frequently, but still you are welcome to suggets if there is more relevant keywords then supported one.

You can suggest new category by creating a new issue [here](https://github.com/GEEKOFIA/blog/issues).

**Guidelines to follow:**

- The category most be unique then existing suported ones.
- We should be able to categorize posts easily under this category. (For example i removed linux category as i feel like there would be probably one/two posts which i can write, so i decided to throw those 1/2 posts to miscellaneous category).
- Title of the issue must be named as the given format : `[suggestion][category] Category_Name`
- The category name will be in all small letters without space. Try to keep it a single word (i.e. `security` is a good name but `cyber-security` not).

### Suggesting Tags [Currently Disabled]

Fell free to add tags which you thinks most relevant.
You can suggest new tags by creating a new issue [here](https://github.com/GEEKOFIA/blog/issues).

**Guidelines to follow:**

- The tag must be unique then existing suported ones.
- Title of the issue must be named as the given format : `[suggestion][tag] tag_name`
- The tag will be in all small letters without space. Use under score if space is needed in tag (i.e `compilation_error`).

### Sponsor Us

```
# Disclaimer

# Sponsor us only if you have money and willing to support our development. Any payment made is non-refundable.
```

Again this is for who are rich and willing to ... 

we have paln to setup our own community forum to discuss development stuff and hot topics. But this is only possible if people like you support us by sponsoring.

We currently don't have Patreon, Open Collective setup because we focus on small small contributions, people are going to fund their hard erned money and i don't want to waste most of it by paying transiction charges.

We have paytm payments for this purpose. Paypal is currently under review for these funding purpose.

We have 3 plans, described below:

Plan | Amount   | Payment link
-----|----------|------------
Nano | ₹100/-   | https://p-y.tm/Bkbz-ER
Micro| ₹350/-   | https://p-y.tm/81CY-TE
Mini | ₹700/-   | https://p-y.tm/6dC-YTE

After successful payment, notify by writing to `chankruze@gmail.com` with a subject `SPONSORING GEEKOFIA` and in they body of email, write your full name, a short name (username), which plan you choosen. I will update contribution list in no time.

**Email Template:**

```
Name: Your full name
Nick: Your nick name
Plan: The one you paid for
Date: Payment date
```

There is also a `Sponsor` button besides `Watch` button on github repository. Which is generic button for Nano sponsorship.

![sponsor button image](/assets/images/sponsor-btn.png)