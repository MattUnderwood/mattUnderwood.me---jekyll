---
layout: post
title: A Look Inside My Portfolio Site
category: Web Development
excerpt: As I continued to advance my web development skills I realized that I needed a place to showcase my work. This sparked the creation of my personal portfolio site. In this post I will share the thought process, technologies used, and the different versions of my portfolio site that have led to the current version. 
---

<h3>What Do I Want to Acheive?</h3>

The main goal of my portfolio site is to showcase my projects, share my contact information, and provide a place where I can write blog posts. 

I wanted to create a responsive site that was visually appealing and utilized the latest web development technologies. I browsed the portfolios of a few designers and gathered inspiration for my design before writing any code. 

<h3>Achieving My Goals</h3>

The responsive layout of the site was achieved by using CSS Grid and CSS Flexbox. I wanted something that would look good at any viewport size and I created a lot of custom media queries to get everything just right. 

I used pictures from Unsplash.com to create a professional look for the site. These pictures are used throughout the entire site and can be seen in the header image, the portfolio images, the blog image, and inside each individual blog post. 

{% include image.html url="https://res.cloudinary.com/dls40gzte/image/upload/v1551207764/mattUnderwood.me/jonas-verstuyft-352716-unsplash.jpg" description="A random image from Unsplash" %}

I bought the domain name from NameCheap and currently host the portfolio site with a shared hosting plan from StableHost. I run all of this through GitHub Pages which supports Jekyll and allows for automatic updates when new code is pushed to my GitHub repository. 

Since I have shared hosting (that is relatively slow) I host the pictures with the Cloudinary CDN. Hosting the images on an outside server improves load times and decreases the workload for the shared server that is hosting the site.

<h3>Adding Javascript</h3>

I use javascript throughout the site to provide an engaging user experience and make the site feel “alive”. I’ve explained a few of the places where javascript is utilized on the site below. 

- The navigation bar disappears as you scroll down and reappears at the top of the page as you scroll back up. 

- The navigation bar turns into a “hamburger menu” when the screen reaches a certain size. This makes the site much more readable at small screen sizes and saves space. A similar navigation bar is used in the Ubud Taxi Service site. 

- The “Contact Me” button at the bottom of the homepage triggers a toggle when it is clicked which hides the button and shows the contact form.

- The contact form uses javascript to interact with a Firebase backend (used for storing form submissions). It also displays a confirmation message and hides the contact form upon successful form submission. 

<h3>Implementing a Blog</h3>

During my first release, the portfolio site didn’t include a blog section but I recently upgraded the site and added a blog with Jekyll. Jekyll is a static site generator that was written in Ruby. After researching the different blog alternatives, I decided it was my best option since it is lightweight and widely supported.

The syntax and blog folder structure of Jekyll are a little different than what I’m used to, but the official Jekyll documentation was very clear and helpful. 

It took me a while to display the blog posts the way I wanted and it required a lot of CSS. I researched best practices for blog layouts and implemented many of the tips I discovered. 

I particularly like the “last post” and “next post” buttons at the bottom of the page that are dynamically generated based on the current blog post that is being viewed. 

{% include image.html url="https://res.cloudinary.com/dls40gzte/image/upload/v1551208299/mattUnderwood.me/css_code.jpg" description="CSS code on computer screen" %}

<h3>Future Projects</h3>

At this point, I’m happy with my portfolio site and will focus on building advanced web applications for my portfolio. 

I’m currently working on implementing React into my “Weather App” project. I’ve worked through some tutorials on React but I haven’t created my own project with it yet. This seems like a relatively easy way to test it out and will build my confidence for more advanced projects. 

Once I complete the React Weather App I’m planning a full stack MERN (Mongo, Express, React, Node) application. This application will be an exercise tracker with a data visualization component to track overall progress. Although this isn’t the most unique idea, I’m going to build it from scratch and will create the specs based on my personal use case. 

