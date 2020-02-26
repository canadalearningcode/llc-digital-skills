---
layout: lessons
module: 7
lesson: 1
title: Intro to CMS & WordPress
description: Intro to content management systems and WordPress.
permalink: module7-1.html
---

## Blogs, Websites and CMS

A **Content Management System (CMS)**, is an application used to edit content and manage a website using an interface, without having to edit the code or database.

Let's imagine you're a freelance web developer, and you created a site just like the one you have been working on during this course for your client. If they wanted to make a simple change to their content, you would either have to teach them HTML, or you would have to make every little change for them.

![example of how to edit content in WordPress vs in HTML]({{site.img}}/module7/wordpress-vs-html.jpg)

Using a CMS:
* gives *you* the power to control the layout, design, and functionality
* empowers *your client* to have control over their content - the words and images used on each page

A CMS usually includes features such as:

* database management
* themes and templates for page layouts
* easier to make content searchable and indexable
* and much more!


> Though WordPress is by far the most popular CMS in the world, there are many different CMS available. Have any of you (mentors too!) worked with a CMS before in your jobs, or just for fun?

## What is WordPress?

* primarily blogging software, but can also be used as a CMS
* an online, [open source](https://en.wikipedia.org/wiki/Open-source_software) (editable and free) website creation tool
* can edit, publish content and manage the website using an interface, without having to edit the code or database (though you can if you want to!)
* customizable core - can be extended and modified in anyway you please
* written primarily in PHP but also requires HTML, CSS and JavaScript
* uses PHP for template files
* uses a database to create and store content, vs "static" HTML where you have to manually create a new document for every new page

Depending on your needs, you may not need to write any code to get a website or blog up and running. That is another reason why WordPress is so popular - it allows people with no knowledge of code to create their own website fairly easily, and for free! (Not including hosting costs)

<div class="summary">

### What is a blog, and how is it different from a website?

</div>

<div class="details">

* the term blog is an abbreviation for *weblog*
* blogs contain an ongoing collection of *posts and articles*, presented in chronological order
* a website is a collection of pages, presented in whatever order the person creating the site prefers. Pages are *not time based*
* a website **can** contain both a blog **and** standard informational pages

</div>


## WordPress.com vs WordPress.org

There are two options for using WordPress, [WordPress.org](http://wordpress.org) and [WordPress.com](http://wordpress.com).

<div class="summary">

### WordPress.com

</div>

<div class="details">

* different plans ranging from free - $59/month with added features like eCommerce
* hosting and all technical maintenance handled by WordPress
* your domain will be "yoursite.**wordpress.com**" (paid upgrade for a customized domain)
* don't need to write any PHP to get up and running
* you have no access to the code (without an upgrade)
* no plugins

</div>

<div class="summary">

### WordPress.org

</div>

<div class="details">

* must register and pay for a domain & web hosting (more on this in the next module)
* you are responsible for technical maintenance because of the point above
* requires some web development knowledge (how much depends on level of customization desired)
* you have full control over themes files and all code
* more theme customization options
* thousands of plugins for adding features & functionality, or the ability to create your own!

</div>

Simply put, the wordpress `.com` version doesn't require any technical knowledge, but as a result you are limited on the level of customization.  
The `.org` version can be customized in any way, but requires more technical knowledge.


## Communicating with WordPress: Servers and Files
![]({{site.img}}/module6/wpservers-01.svg)

<div class="summary">

### What is a Server?

</div>

<div class="details">

A <strong>server</strong> is simply a computer that runs software. The server needs to run all day, everyday. If the server is shut off or malfunctions, so does your website. The server lets you access those files and data through the internet whenever you want to use it (eg. when you click on a link, when you click on a search result in Google, or if you go directly to a website by typing the URL in your browser's address bar).

**Anyone** can set up a server, as long and you have the hardware and the know-how. If you don't want to go through the work of setting one up on your own, you can pay for a hosting provider. Paying for hosting is like paying for a storage locker - you pay a monthly fee to have your files and database to live in a physical space.

#### Resources
* WPBeginner: [How to Choose the Best WordPress Hosting](http://www.wpbeginner.com/wordpress-hosting/)
* [Performance of the Best WordPress Hosting Companies Compared](http://www.wpsitecare.com/performance-of-7-top-wordpress-hosting-companies-compared/)
* How to set up a WordPress website locally:
  * [On your Mac](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP)
  * [On your PC](https://themeisle.com/blog/install-xampp-and-wordpress-locally/)

</div>

### How does WP work with a server?

1. We place an empty database on the server, and all of the files we downloaded from WP (including our theme).
1. We visit the WP dashboard to add content, which injects that content into the database.
1. We make our WP template files (written in PHP) request the content we want from the database to display it on our pages.
1. When we visit the website, our server shows us the website according to what our theme files have requested.

You can see below what a page *hardcoded* in HTML would look like vs a template written in PHP:
![example of hardcoded html vs dynamic content with php]({{site.img}}/module7/hardcoded-vs-dynamic.jpg)

### Setting up our WordPress coding environment
WordPress is a collection of files, just like our project. The only difference is that WordPress files are written in a language called PHP, which talk to the database which houses the content the website will display on each page. (See diagram above)
Here's how we would set up a WordPress website:

1. Download the WordPress files from wordpress.org
1. Set up a database on a server (this could be a local server on your computer, or from your hosting provider).
1. Connect the WP files to the database so they can communicate with each other. This is done in the `wp-config.php` file that you download from wordpress.org in step 1.

It's only 3 steps, but they can be a little tricky. We're going to run a local server using a free service called [Local](https://localwp.com/). This will set up the server, the database and the files we need all in one fell swoop!

## WordPress and Local

[Local](https://localwp.com/) is a free development environment that allows us to develop WordPress sites locally. While a web host is usually a paid service where a company stores our website on a server for us, hosting locally means that we are running a server on our personal computer.

Using a local host allows us to test and debug our websites before sharing them widely online. If we're weighing the [pros and cons](https://webable.eu/en/localhost-web-host/) of these two options, usually using localhost can be a long and slightly complicated process (as laid out above), without a lot of support or the ability to share your site. However, Local helps streamline this process AND allows you to create simple demo URLs to easily share your site with others.

### Let's set it up!

1. Go to [http://local.getflywheel.com/](http://local.getflywheel.com/) and select 'free download' <br> ![]({{site.img}}/module7/local-download.png)
1. Select your operating system and enter your email address (this is required) <br> ![]({{site.img}}/module7/local-os.png)
1. Select 'Download' - This may take a few minutes.

**While Local is downloading, let's set up our (free) WordPress account!**

1. Go to [http://wordpress.com/](http://wordpress.com/)
1. Click 'Get Started'
1. Enter your login information (take mental note - we'll need this information for Local in a minute!) <br> ![]({{site.img}}/module7/wp-create.png)
1. Describe the type of site you are building, name of site, and select the free wordpress option for your website's domain name <br> ![]({{site.img}}/module7/wp-domain.png)
1. Select 'start with a free site' <br> ![]({{site.img}}/module7/wp-free.png)

**Continuing with Local:**

1. Once Local has downloaded, right-click > Open and follow the installation instructions. Your computer may prompt you with a warning message: "This type of file can harm your computer.. keep anyway?" - We can select 'Keep', as this is a trusted site.
1. Open Local once it has been installed (it should be in your applications folder). Your computer may prompt you with a warning message: ""Local" is an app downloaded from the Internet. Are you sure you want to open it?" - Select "Open" <br> ![]({{site.img}}/module7/local-icon.png)
1. Select 'X' and exit the Local Pro advertisement to continue for free.
1. Select 'Create a new site' <br> ![]({{site.img}}/module7/local-create.png)
1. Enter your website's name <br> ![]({{site.img}}/module7/local-create2.png)
1. Select 'Preferred' <br> ![]({{site.img}}/module7/local-create3.png)
1. Enter your WordPress account info - which we just created. If you're unsure about any of the details, you can find them under your WordPress 'Account Settings' <br> ![]({{site.img}}/module7/local-create4.png)
1. Click 'Add Site.' You will need admin access to your computer (Local will prompt you to log in as admin)

Troubleshooting: If you come across any issues setting up your site, try searching the error message in the Local community forum, here: [https://localwp.com/community/](https://localwp.com/community/).

> ### Accessing Your Site
> To view your site at any time, select 'View Site'
> ![]({{site.img}}/module7/local-admin.png)
>
> To access the back end of your site at any time, select 'Admin'
> ![]({{site.img}}/module7/local-view.png)
>

## Getting to know WordPress

### WordPress Settings

When you log into the WordPress admin area, the first thing you'll see is the Dashboard. Here you can view your drafts, check out stats, respond to comments, and get a general overview of your blog.

The menu in the left sidebar allows you to access features like:

* creating blog posts (Posts)
* creating/editing pages (Pages)
* changing themes (Appearance)
* uploading media files (Media)
* general site settings like languages, URL patterns and privacy settings

## Configure basic site settings

In the admin panel, go to **Settings > General**.

Here, you can change/update your site's title and tagline. These are important because they're used by search engines to let users know what your site is all about. You can also set your timezone, date/time format and language options here as well. Make sure to select **Save Changes** button at the bottom of the page when you're done!

> Go to **Settings > General**, update your Site Title and Tagline, and any other general settings you'd like to change.


## Posts vs Pages

<div class="summary">

### Posts

</div>

<div class="details">

* used for date-based content
* posts are listed chronologically
* can also be assigned *categories* and *tags* (also referred to as *taxonomies*)
* permalink (URL) will include the date in which the post was published (can change this in the settings > reading)<br>(e.g. `http://your-project-name.dev/2019/02/28/my-catchy-title/`)

</div>

<div class="summary">

### Pages

</div>

<div class="details">

* used for single pages of static content (e.g. about us, contact us)
* cannot have *taxonomies*
* can have a hierarchical structure, ie. child pages (e.g. Travel > Beach vacations)
* permalink (url) will not include the date<br>(e.g. `http://your-project-name.dev/about/`)

</div>


## Content Options and Settings

When adding content into a **post** or a **page**, the default editor offers some simple tools to format the content. Click on the **Toolbar Toggle** to show all of the editing options. Hover over any icon to see a short description of what each tool is used for.

Type

![screenshot of editor in WordPress 5]({{site.img}}/module7/wordpress-editor.png)

When you click within a text block, start typing some content to access the formatting menu:

![formatting options within Wordpress editor]({{site.img}}/module7/wordpress-formatting-options.png)

Clicking on that dropdown will reveal options to allow you to add Headings, lists and quotes.

### WordPress and HTML

To switch from the visual editor to the HTML view, click on the icon with the three vertical dots:

![edit as html]({{site.img}}/module7/edit-as-html.png)


<div class="summary">

### Categories

</div>

<div class="details">

Categories allow for broad grouping of post topics. For example, a food blog can have recipes in the following categories: Soups, Mains, Sides, Desserts.

To add categories, go to **Posts > Categories** or within the post itself.
![]({{site.img}}/module6/dashboard-categories-post.png)

Sub-categories can also be created by selecting a Parent in the **Categories** menu.

![]({{site.img}}/module6/dashboard-categories.png)

</div>

<div class="summary">

### Tags

</div>

<div class="details">

Tags are best used to create groups of content that can apply to multiple categories and be more specific. This gives people the ability to navigate your site quickly and find exactly what they want. For example, a frittata recipe can have the following category and tags:

    Category: Breakfast
    Tags: eggs, kid friendly, gluten free, under 30mins

Just like categories, tags can be added from the menu or when editing a post. But unlike categories, tags *cannot have a hierarchy*.
Tags should not be duplicated from your categories. For example, if you are using a category called *soups*, you do not also need a tag called *soups*.

</div>


> ## Exercise: Add Content
> Having content to work with will make it easier to choose a theme and work with the theme code.
>
> 1. Create a couple of random blog posts in the Posts section. Don't dwell too much on the content. [Dummy text](http://meettheipsums.com) is fine for now.
> 1. Add some categories and tags to your posts.  
> 1. Create a page to mirror each of your project's pages. If you only have 1 page in your project, you could create pages for each section of your site, for eg. Home, About, Blog and Contact. Grab the text content you have in your pages, and put it in the content editor after the title of each page. Remember, you can enter HTML in the content editor by clicking on the 3 vertical dots above the text area and selecting the 'Edit as HTML' option.
> 1. Create another page and call it Blog. No need to add any content to that page yet.
> 1. Go to Settings > Reading and set the Home page as your home page, and the Blog page as the Posts page.


## The Guts of WordPress

Now that we've poked around a bit in the dashboard, let's go deeper and take a look at the files back through Local.

You can locate your website's files by clicking the arrow icon beside the file location. This will open up the folder's location on your computer.
![]({{site.img}}/module7/local-folder.png)

To locate your WordPress files, navigate through 'App' > 'Public'. Here we'll find our WordPress-specific files.

At first glance, it's overwhelming to see how many folders and files WP needs to run. We'll be ignoring the majority of the files which make up the core of WP. You have the ability to change those files, but most people leave them exactly as is. All the files we'll be looking at and editing are in the `wp-content` folder.

Inside of `wp-content` folder, there is a folder named `themes`. That'll be our most used folder.

Outside of `wp-content` we may need to look at `wp-config.php` to provide our database credentials. Today, Local is doing all that database work for us.

> **Pro tip:** a lot of hosting providers offer a quick WordPress setup option, since WordPress is such a popular tool for building websites. Those providers will also help you with the database setup so you likely won't have to edit the `wp-config.php` file.


### What is a theme?

A WordPress Theme is like the clothes your website wears. The content in your pages and posts will stay the same, but the layout, the fonts, colours and other styles will change depending on the theme you choose. It is essentially a group of files that determine the way the WordPress looks, and how content is displayed on each page. The theme files contain the HTML and CSS to control the look and feel. Since we already know HTML and CSS, creating a theme will be a natural progression of our knowledge.

### What's in a theme?

The most basic WP theme consists of no more and no less than an `index.php` file and a `style.css` file. The project files we already worked on are a great start to create our own simple WP theme.

### Uploading our Theme to WP

Currently, there are three default themes inside the themes folder. These always come with WordPress.

In your WordPress Dashboard, go to Appearance > Themes in the left menu to see those 3 default themes. Try changing your active theme and previewing your site to see how the layout and styles change with each theme.

Today we're going to learn to build our very own theme!

> Let's begin by uploading our project folder into our themes folder. If you want to start from scratch, you may just use the [sample starter project folder.](exercises/module5/project-one-sample-w-js.zip).
> 1. Upload your project folder by clicking and dragging it into the `themes` folder inside of `wp-content`
> 1. Next, we need to make WordPress recognize this folder as a WordPress theme. To do this, find your projects main `css` file and make sure it is named `style.css` if it is not already.
>1. Copy the snippet below and paste it at the very top of your `style.css` file. Edit the theme name, author and description:

        /*
        Theme Name: Twenty
        Theme URI: http://wordpress.org/themes/twentythirteen
        Author: the WordPress team
        Author URI: http://wordpress.org/
        Description: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, edisplayed              beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matchheader images,              beautiful typography and icons, and a flexible layout that looks great on any device, big or small.
        Version: 1.0
        License: GNU General Public License v2 or later
        License URI: http://www.gnu.org/licenses/gpl-2.0.html
        Tags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-widcustom-header,              custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-potranslation-ready
        Text Domain: twentythirteen
        This theme, like WordPress, is licensed under the GPL.
        Use it to make something cool, have fun, and share what you've learned with others.
        */

> 4. The next thing we must do is rename `index.html` to `index.php` (right click on file to rename it)
> 5. Go back to your WordPress dashboard and go to Appearance > Themes. Refresh the page to check whether your new theme shows up. If it does, go ahead and activate it.
>
> How does it look?

<div class="summary">

### Why isn't any of our CSS showing up?

</div>

<div class="details">

Our stylesheet link is no longer working because it's looking for our stylesheet in the wrong place. This is because even though our files are in the same theme folder next to each other, they don't work the same way as our basic HTML project from this morning.

WordPress is loading the index.php file in the overall `wordpress` folder, and pulling content from `wp-content/themes`. Open up your Developer tools in the browser when previewing your site, and look in the console to see the error message. It will show you here the path to where it is looking for the file.

When we create a path to the CSS, it needs to be relative to that index.php file, and not the one inside our theme folder. To fix this issue, we could write a really long path to the stylesheet. Let's try it:
Replace our `href` in the stylesheet link with:

    <link rel="stylesheet" href="wp-content/themes/your-theme-folder-name/style.css">

This will work, but there is a better way to link to our CSS.

</div>

### Communicating with WordPress: PHP & Template Tags

Even though the super long URL worked to link our stylesheet, WP provides us with much easier ways to figure out paths and to print out important pieces of content on our page.

The way we communicate with WordPress is by using **Template Tags**.

Template Tags are bits of PHP that will communicate with the WordPress database and print out the things we want on the page.


#### Anatomy of a Template Tag

Template Tags are written in PHP:

    <?php /*template tag goes here*/ ?>

Much like HTML and CSS, you must be syntactically exact when writing PHP. Or else the browser will show you error messages. Whenever we are about to use a template tag, we must first write the opening and closing PHP tags. We can switch between writing HTML & PHP in a PHP file, as long as we **don't forget to close our PHP tags properly!**

Template tags are built-in functions that WordPress gives us to make it easier  for us to request bits of content from the database. Remember `alert();` in JavaScript or ![]({{site.img}}/module5/scratch-builtin.png) in Scratch? WordPress Template Tags are exactly the same!

Template tags are always made up of a one or a couple of words, joined by  underscores and followed at the end by round brackets, just like we do with JavaScript and jQuery functions. For example:

    <?php bloginfo(); ?>

Inside of those brackets we can add additional information, called *arguments*, that WordPress recognizes to pull specific data from the database.

We use template tags anytime we want to ask WordPress for content of any kind that we have entered through the Dashboard (where we added our pages and posts).

#### Resources
* [WordPress Codex](https://codex.wordpress.org/Template_Tags)

>## Exercise: Header Template Tags
> Let's put some of these template tags in use to replace our static HTML content with data coming from WordPress.
>
>We will begin with the ``<head></head>`` in our `index.php` file.
>
>Open up your index.php file in Atom. We'll be adding the following template tags to dynamically pull information from WP :
>
>Where should these go?
>
    1. <?php bloginfo( 'charset' ); ?>
>
    2. <?php bloginfo( 'name' ); ?>
>
    3. <?php language_attributes(); ?>
>
    4. <?php echo get_stylesheet_uri(); ?>
>
>
> In the end, our header should be looking like this:
>
    <html <?php language_attributes(); ?>>
    <head>
     <meta charset="<?php bloginfo( 'charset' );?>">
     <title><?php bloginfo( 'name' ); ?></title>
     <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Parisienne" rel="stylesheet">
     <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    </head>
>
> Notice how much cleaner it is to add the stylesheet using the `get_stylesheet_uri` template tag?

### Resources
* [The bloginfo function](https://developer.wordpress.org/reference/functions/bloginfo/)

<div class="summary">

## The Loop

</div>

<div class="details">

Template Tags allow us to grab quite a bit of information from our database. However, the most important information we want to get is the content of the pages and blog posts. To get that, we have to use something called "**The Loop**".

The Loop is a **conditional statement** in PHP that essentially says *"Hey, Database! **If** you've got any content over there for this page, or for this blog post, print it out for me right here, would ya?"*
That word **if** is what makes it a **conditional statement**. The condition in this case is that the content exists.

In PHP it looks like this:

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    	<!-- content goes here -->
    <?php endwhile; else : ?>
		  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
	  <?php endif; ?>

You've seen a statement like this before! Do you remember this guy?

![]({{site.img}}/module6/c9_scratch_conditional.png)

In the PHP snippet above, **if** the condition is not met, it will display a default message. This is helpful when using a search or filter. If the user searches for a word or phrase that doesn't match the content of any of your posts or pages, they will see that sentence on the page.

We need to add our loop to our `index.php` page. Where should the loop go in our page if we want it to ask for content? In other words, where is the content in our current HTML page?

We'll put it right after the banner.

### The Content

What goes inside the loop? Template tags!

Specifically, we'll be using the following template tags:

    <?php the_title(); ?>
    <?php the_content(); ?>

> ### Exercise: Add your template tags
>
> 1. Copy the loop syntax above and paste it into your `index.php` file right after the banner.
> 1. Add the template tags to inside the loop (to replace the comment that says "content goes here").
> Do you see the content coming through?

Yay! We're communicating with WP now!

</div>

<div class="summary">

## Template Files

</div>

<div class="details">

We've talked about template **tags**, but in WordPress there are also **template files**. - It's possible that you will not want every single page on your website to be identical. In fact, in most websites, the home page and the blog page look a bit different, if they are separate. Currently, all our pages are using the same template, which is the `index.php`. However, WordPress enables us to create custom templates so that we can layout different pages to our liking:

![2 column and single column templates]({{site.img}}/module6/wp-template-types.jpg)

</div>

Templates also enable us to put code that we use more than once (eg. the footer on every page) in their own discrete files, so that we don't need to edit the footer on every page.

> Discussion: Looking at all your HTML documents from your projects, what are the common parts being reused in every page of your website?

> ### Class Exercise: Making your Theme
> 1. Create 4 new files in your theme folder. They can all be empty for now:
	- `header.php`
	- `footer.php`
	- `page.php`
> 1. Together we will now take each of the corresponding parts from `index.php` and paste them into one of these files. That means you will delete the header and navigation from `index.php`, and the footer and put each of these in their corresponding files.
>
> #### `index.php` should now look like this:
>
>	    <main>
>	    	<section class="banner">
>	    		<div class="wrapper">
>	    			<h1>An island girl around towndd</h1>
>	    		</div>
>	    	</section>
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
>	    	<section class="about">
>	    		<div class="wrapper">
>	    			<?php the_content(); ?>
>	    		</div>
>	    	</section>
>	    	<?php endwhile; else : ?>
>	    		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
>	    	<?php endif; ?>
>	    </main>
>
>
> #### `header.php` should look like this:
>
>		    <!DOCTYPE html>
>		    <html <?php language_attributes(); ?>>
>		    <head>
>		     <meta charset="<?php bloginfo( 'charset' );?>">
>		     <title><?php bloginfo( 'name' ); ?></title>
>		     <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Parisienne" rel="stylesheet">
>		     <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
>		    </head>
>		    
>		    <body>
>		    	<header>
>		    		<div class="wrapper">
>		    			<div>
>		    
>		    			<h1>Anne Shirley's Musings</h1>
>		    			</div>
>		    			<nav>
>		    				<ul>
>		    					<li><a href="about.html">About</a></li>
>		    					<li><a href="index.html">Blog</a></li>
>		    					<li><a href="contact.html">Contact</a></li>
>		    				</ul>
>		    			</nav>
>		    		</div>
>		    	</header>
>
> #### `footer.php` should look like this:
>
>	    	<footer>
>	    		<div class="wrapper">
>	    			<p>&copy; Anne Shirley <?php echo date('Y'); ?></p>
>	    		</div>
>	    	</footer>
>	    </body>
>	    </html>
>
> `date('Y')` will output the current year. This way you don't need to update this at the beginning of every year!
>
> 3. In `page.php`, copy (don't cut) everything from `index.php` and paste it there. This will be the default template for any page you add to your website, unless you specify otherwise with a custom template.
> 4. Then into `index.php` and `page.php` we'll bring in the footer and header by using these template tags: `get_header();` and `get_footer();`
>
> #### `index.php` should look like this.
>
>	       <?php get_header(); ?>
>	       <main>
>	    	    	
>	    	    	<section class="banner">
>	    	    		<div class="wrapper">
>	    	    			<h1><?php the_title(); ?></h1>
>	    	    		</div>
>	    	    	</section>
> 	    		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
>	       	<section class="about">
>	       		<div class="wrapper">
>	    	    			<?php the_content(); ?>
>	    	    		</div>
>	    	    	</section>
>	    	    	<?php endwhile; else : ?>
>	        		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
>	    	    	<?php endif; ?>
>	    	    </main>
<?php get_footer();?>
>
> 5. Now that you've organized your repeated code into tidy new files, let's also create a custom page template for our About page that will not have a banner. To create a new page template, do the following:
>	6. Create a special template file for the About page. Call it `page-about.php`.
>	7. In `page-about.php`, add the following line to the very top of the file:
>
		    <?php /* Template Name: About */ ?>
>
>
> 8. Below this, copy over everything from your `index.php` file there and delete what you don't want - in this case, the banner.
> 9. Going back to the WP dashboard, create a new page called "About" if you don't already have one.
> 10. In the right column of the About page, scroll down to the section called 'Page Attributes', and in the 'Template' dropdown select the About template you just created. <br> ![]({{site.img}}/module5/wp-about-template.png)
> 11. In your `header.php` file, update the navigation bar links accordingly (e.g. `<li><a href="about">About</a></li>`)


There's your theme. Great job! You've built your own simple theme and it works! Where do we go from here?


## More WordPress

We have built our very own custom WordPress theme. We did it this way to learn how WordPress really works from the inside out.

It's important to note that most developers will use a starter theme and not always start entirely from scratch. [Underscores](http://underscoes.me) is a good starter theme because it is developed by Automatic, the creators of WordPress. Starter themes are great because they will often break up your theme using the correct Template File structure already in place. [Download Underscores](http://underscores.me/) and explore it. The cool thing about it is provides you with the necessary template files, but very little CSS. You get to customize the style of the website just like you did on you project throughout this class.

<div class="summary">

### Advanced Subjects in WordPress to Look Forward To

</div>

<div class="details">

* [Custom Post Types](https://codex.wordpress.org/Post_Types)
* [Custom Fields](https://codex.wordpress.org/Custom_Fields)
  * You can try using [this plugin](https://en-ca.wordpress.org/plugins/advanced-custom-fields/) if you don't want to code them yourself, but you should read the primer first to get an idea of what they are and why we use them.
* [WP-REST API](https://v2.wp-api.org/)

</div>

### WordPress Community

One of the great benefits of using a popular CMS like WordPress is that is comes along with a huge community of WordPress developers who you can learn from and ask questions to. If you would like to contribute to the WordPress open source community or read many of their awesome resources, checkout:

[http://make.wordpress.org](http://make.wordpress.org)

You can also reference this forum when you run into problems or questions. You can check if someone has asked the question you have before, or ask a new question to the community:

[WordPress Stack Exchange](https://wordpress.stackexchange.com/)

# Bonus Exercises

<div class="summary">

## Bonus: Tweaking the blog

</div>

<div class="details">

You may have noticed that now that you have a `page.php` and an `index.php`, only the blog posts listing page is using `index.php`, while all the other pages except for About are using `page.php`.

This means that you can reserve `index.php` for your blog, and add some additional handy template tags. Try out:
`<?php the_permalink(); ?>` will enable you to link the title of each post to the post page. You can paste it into the `href` value of the `a` tag.
`<?php the_author(); ?>` will print out the author of the post
`<?php the_category(); ?>` will print out the categories assigned to a blog post
`<?php the_tags(); ?>` respectively, will print out the tags assigned to a blog post
`<?php the_date(); ?>` will print out the date that the post was published. You can change the date format by [reading about the parameters you can pass into `the_date` function](https://codex.wordpress.org/Template_Tags/the_date#Parameters).
`<?php the_excerpt(); ?>` will print out a truncated part of the body of the blog post. You can change the length of the excerpt by [reading this article](http://matthewfecher.com/webdesign/wp-quick-tip-how-to-change-the-excerpt-length/).

Play around with these template tags in your `index.php`.
</div>

<div class="summary">

## Bonus: Functions

</div>

<div class="details">

The `functions.php` file is probably the most powerful file we can use in our theme. It's a file in which we can paste snippets of code that increase the functionality of WP. These are some expanded functionality we can get from a functions file:
* Adding and using Widgets
* Adding Navigation menus
* Adding Featured Images for posts and pages
* and many many more

> ### Exercise
>
> 1. In your own custom theme folder, create a new file named `functions.php`.
> 1. Next, we will add the functionality to configure menus (navigation) to our functions file. The following PHP function came straight from [the Codex](https://codex.wordpress.org/), and it will add the ability to add menus to your website from the dashboard:
>
>         <?php
>           function register_my_menus() {
>        register_nav_menus(
>        array(
>         'primary-menu' => __( 'Header Menu' ),
>         'extra-menu' => __( 'Extra Menu' )
>        )
>        );
>            }
>            add_action( 'init', 'register_my_menus' );
>         ?>
>
> 3. Go to the Dashboard and navigate to Appearance > Menus - now this is available!
> 4. Create a Menu with the three links to your 3 pages. Make sure to pick 'Header Menu' as the location when you create the menu.
> 5. Go to the `header.php` file in your theme and replace the `ul` inside your `nav` with the following:
>

    <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>

>
>Refresh your page and now you should have a perfectly working Navigation again! This time when you want to add a page, rearrange the pages or make any other changes to your menu, you can do it straight from your WordPress dashboard.
>
>**Bonus:** WordPress adds a class to the currently viewed page in the menu, the class of `current_page_item`. Use your Developer tools to inspect and see this class in action. You can now use that class in your CSS to style the current menu item differently! Try giving it a bottom border, or changing the background or text colour.

</div>

<div class="summary">

## Bonus: Sidebars and Widgets

</div>

<div class="details">

Sidebars enable you to add [WP widgets](https://www.wpbeginner.com/glossary/widgets/) (e.g. blog feeds, tag clouds, forms) to your website.

> ### Exercise
> 1. First off, we must register our sidebar inside functions.php so that we can enable Widgets on the website.
> Enter this into your `functions.php` file:
>
>        function themename_widgets_init() {
>          register_sidebar( array(
>       'name'
>       => __( 'Primary Sidebar', 'mammaspizza' ),
>       'id'
>         => 'sidebar-1',
>       'before_widget' => '<div id="%1$s" class="third widget %2$s">',
>       'after_widget'  => '</div>',
>       'before_title'  => '<h2 class="widget-title">',
>       'after_title'   => '</h2>',
>          ) );
>      }
>      add_action( 'widgets_init', 'themename_widgets_init' );
>
> 2. In the WP dashboard, Go to Appearance > Widgets and add 3 widgets to your sidebar. **Tip:** If you use the 'Text widget' you can enter any HTML in the widget, including script tags from a video embed, or twitter feed!
> 3. Find your `page.php` and add this code where you want the widgets to appear:
>
>        <?php dynamic_sidebar(); ?>

</div>

<div class="summary">

## Bonus: Featured Images

</div>

<div class="details">

We can add featured image functionality to our pages and posts by adding the following to our `functions.php` file:

    <?php add_theme_support( 'post-thumbnails' ); ?>

Once you've done that, go back into your WP dashboard and edit one of your pages or posts. In the right column you will now see a Featured Image box. Go ahead and select one from your media library, or upload a new one from your computer. Don't forget to save your changes to the page when you're done!

> ### Adding the featured image to a page
>
> We can add featured images anywhere inside the loop in various default sizes:

    the_post_thumbnail(); // Without parameter ->; Thumbnail
    the_post_thumbnail( 'thumbnail' ); // Thumbnail (default 150px x 150px max)
    the_post_thumbnail( 'medium' ); // Medium resolution (default 300px x 300px max)
    the_post_thumbnail( 'large' ); // Large resolution (default 640px x 640px max)
    the_post_thumbnail( 'full' ); // Original image resolution (unmodified)

> Try adding one of those snippets to one of your template files. for example your custom `page-about.php` file.

</div>

<div class="summary">

## Bonus: WordPress Plugins

</div>

<div class="details">

Plugins enable us to add incredible functionality to a website without having to do a lot of coding of our own. Plugins can be downloaded directly from the Plugins area of the WP dashboard. Once a plugin is downloaded, you will see folders being added inside your `plugins` folder inside of `wp-content`.

Popular plugins include:

* [Jetpack](https://en-ca.wordpress.org/plugins/jetpack/)
  * Site stats and analytics
  * Automated social media posting and scheduling in advance
  * SEO tools for Google, Bing, Twitter and Facebook
  * Simple PayPal payment buttons
  * and many more!
* [Mailchimp] for email newsletters(https://en-ca.wordpress.org/plugins/mailchimp-for-wp/)
* [Google Analytics](https://en-ca.wordpress.org/plugins/google-analytics-dashboard-for-wp/)

> ### Exercise: Installing Jetpack
>
>1. In your WP Dashboard, go to Plugins > Add New in the left menu.
>1. Search for Jetpack.
> **Note:** Before you choose and install a plugin, you want to place close attention to the number of installations, when it was last updated and whether it's compatible with your version of WordPress (which should be the latest version). Reading the reviews can also give you a good idea of if this plugin does what you want. If you click on the 'More Details' link, you'll be able to make a good assessment of that plugin. JetPack is safe because it has over one million installations and 4/5 stars.
>
> **Rule of thumb:** Don't download plugins that have few reviews, and few installations. Don't download plugins that are not compatible with the latest version of WordPress. An incompatible plugin could break your website! (If it does, you can simply deactivate and uninstall it.)
>
> 3. Click the Install Now button to install Jetpack. When it has finished installing, click on Activate.
> 4. You'll be then taken to the plugins page where Jetpack will ask you to connect to jetpack.com using your WordPress account. Go ahead and connect, registering for a WP account if you don't have one yet. This will be the account you'll use universally on WordPress websites moving forward. It will also allow you to post questions on the WordPress support forums.
> 5. Once you have successfully connected, Jetpack will ask you to Activate Recommended Features. Go ahead and do that. It will give you sharing options, contact forms, and really cool photo carousels that you can add to pages and posts.
> 6. Now that you have installed Jetpack, head back to your widgets area to take a look at all the cool new widgets you can add to your sidebar! Try a couple of them out!

  <div class="summary">

  Add a carousel with Jetpack to your posts or pages

  </div>

  <div class="details">

  Now that you've installed JetPack, you have some really cool new features in your Media Gallery. If you click on Add Media from the content editor of any of your pages or posts you can `Create Gallery` instead of just Insert Media. Test out some of the available Galleries available.

  </div>

  <div class="summary">

  Enabling Social Media sharing with Jetpack

  </div>

  <div class="details">

  > JetPack makes it really easy for your visitors to share your posts on social media.
  > 1. Head over to Jetpack>Settings from the side navigation in the Dashboard.
  > 1. Click on Engagement.
  > 1. Scroll down to Sharing and click on `Configure your Sharing Settings` after you expand it.
  > 1. Set up your sharing buttons under the `Sharing Buttons` section.
  > There are lots of plugins to set up sharing on WordPress but JetPack provides a very functional and easy to customize option. It's not uncommon for people to download JetPack and only use this feature of the plugin.

  </div>

</div>

### Resources

* [WordPress Codex](https://codex.wordpress.org/Template_Tags)
* [The bloginfo function](https://developer.wordpress.org/reference/functions/bloginfo/)
* WPBeginner: [How to Choose the Best WordPress Hosting](http://www.wpbeginner.com/wordpress-hosting/)
* [On Temple Heirarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
* [On Template Tags](https://codex.wordpress.org/Template_Tags)
* [On single.php](https://codex.wordpress.org/Theme_Development#Single_Post_.28single.php.29)
* [Codex Navigations](https://codex.wordpress.org/Navigation_Menus)


~ end ~
