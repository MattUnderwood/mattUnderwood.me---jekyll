---
layout: post
title: Building Ubud Taxi Service - Part 2
category: Web Development
excerpt: I recently visited the island of Bali (located in Indonesia). During my time there I met an awesome taxi driver named Dewa that was struggling to keep up with the changing technologies that his customers were using to arrange their transporation while in Bali. This interaction spurred me to create a website for Dewa to help him compete with the changing transporation landscape in Bali. Check out this post to learn more about the website I created and the process/technologies I used to get everything up and running.
---



<h3>Search Engine Optimization (SEO)</h3>
I ran a free SEO audit by SEOptimizer.com and reviewed the results. This didn’t provide me with a ton of new information but I was able to fix an error where multiple elements had the same ID and replace them with new classes that did the job just as well. After this I linked the site to the Google Search Console (which I have experience with from previous sites) and created a sitemap with XML-sitemaps.com

I love everything that goes into a website after the initial design is finished. There is nothing better than continually iterating through a design and optimizing for performance and visibility. I’ll need to wait a while until the search console has crawled my site and am going to wait to make any additional changes until then. I’m actually going to make a github repo for this project which I should have already done and keep my changes up to date. 

After looking into ways to perform a better performance/SEO audit on my website, I discovered a new site from google called web.dev - This site performs the same functions that the “Audit” tab of the Chrome developer tools does, but it packages it all in a nice format and provides links to help you improve your page. I ran the test and discovered I have a lot of room for improvement and I decided that I will fix all of these issues before doing anything else to the design/content. The goal of this page is to rank #1 in the google search results and in order to do this it has to be fully optimized. Since it will take a while to climb the rankings and gain visibility, I don’t think working on the content will pay off until this is taken care of. 

<h3>SEO - Content Best Practices</h3>
I learned a few new things while updating my web page to comply with the advice from the audit. The meta description should be used for the page title and an accurate and detailed description of the page content should be provided. I also learned that using a canonical link helps with SEO and guides crawlers in the right direction while reducing confusion with the indexing of the site. Following Google’s recommendations from the audit improved my SEO rating to 100/100. 

Even though I reached a rating of 100/100 there were still a few suggestions and notices that I wanted to fix up. The first was the robots.txt file, which my site didn’t have. Although the site is currently only 1 page, I read about what a robots.txt file is and why it is useful to improve your SEO ranking. In short, web crawlers have a dynamic limit and you don’t want their limit to be wasted on unimportant or non-indexed parts of your site. I created a file which is allows open access to my site, but may change this as the page grows. I also performed testing for structured data testing and mobile friendliness. These both come out good so I can check them off the list. 

<h4>Page Performance</h4>
My site only scored a 76 on this section and I know it is a very important factor in SEO rankings. This is something that needs to be ranked 100/100 if I want to get to the top of the rankings and provide users with a smooth and hassle free experience. 

<h4>Defer Offscreen Images</h4>
Also referred to as “lazy loading” this is a technique that only loads images that are above the fold (images you will see when initially loading the page). You can use javascript to detect scrolling on the page and load images located further down the page when they are about to be viewed. Doing this results in a faster initial load time for the page, and saves user bandwidth until it is actually needed.

<h4>Properly Size Images (Serve Responsive Images)</h4>
This is something I had never heard of, but it makes a lot of sense. You should only serve the file size that is required for a certain view and there is no need to load a full-size image for a mobile version of a page. This seems quite complicated but I’m going to read through the documentation and try to find the best solution for this project. 

The documentation provided by Google was good,  but not great, so I decided to turn to the trusty MDN web docs. Once I reviewed there explanation I understood how to solve the issue and used the src-set feature to set a few different image sizes based upon the width of the screen. Since I’m using cloudinary I was able to edit the image src link to alter the dimensions. I’m starting to really like the service they offer and can see how useful it may be in the future. 

Eliminate Render Blocking Resources



Ensure Text Remains Visible While Webfont Loads



Does Not Use HTTP/2 For All Of It’s Resources
 I had never heard of this but found a way to solve it by creating/modifying the .htaccess file. 


After getting performance in a decent place, I wanted to add additional pages to fill out the empty links that are on the page. This consisted of adding “About” and “Services” pages. While working on this I realized I didn’t have a Favicon, and decided to focus on that before moving forward. As a web developer its important to use the tools at your disposal, and I found a site called “Favicon Generator” that made things very easy for me! I logged into my cPanel, uploaded the folder, extracted it, and added the proper code to my header file. 

Afterwards I created an “About” page and started to code it out. I had a little confusion with the CSS Grid settings, but figured it out after referring to the docs. Once I had things looking nice, I linked it to the main page, and tested the different window sizes to make sure everything was responsive and looked nice. Next, I will add the “Services” page, but this will likely be a “skeleton” model until I receive more information from Dewa. 


<h3>CSS Tweaks</h3>
While reviewing the page I noticed that when I hit full screen on my 13” macbook there weren't enough pictures to fill the screen in the gallery section. I added 2 more to fix this but realize there may still be issues on larger screens…. I’ll need to figure something out to combat this that will be “infinitely scalable”. 
