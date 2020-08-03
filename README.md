# Happy Hour

Upon exploring [Application Programming Interfaces](https://en.wikipedia.org/wiki/Application_programming_interface), I had come across a [Cocktail API](https://api-cocktails.herokuapp.com/api/v1/cocktails) which provided the user with various information depending on the level of access key obtained. From this, [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) was created on the basis of easily providing individuals access to 20 different cocktail descriptions and images.

I had decided to target cocktails specifically as to not want to overload the user with information and keep it niche. Cocktails generally consist of fun and fruity mixtures and are usually associated with happy hours, hence the name of the website. The alcohol business is a forever growing industry, and due to current circumstances involving lockdown of pubs, bars and restaurants a lot of individuals have concluded to consuming alcohol from the comfort of their own homes. Taking all this into consideration, I felt it would be a good opportunity to develop a website which provided users with information about specific alcoholic drinks for them to be able to make and enjoy at home.

# UX
## Strategy
The aim for [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) is to provide website users with a fast, effective approach in acquiring cocktail descriptions to make the necessary drinks from the comfort of their own home. Due to the recent closure of bars and restaurants, entertaining in the home has become widely popular. The website was created with the intention of providing a list of 20 different cocktails, along with their name, descriptions and images for each, to ensure the user can explore the options available to them.

## Scope
The features I will include in the website will mainly be the [API cocktail](https://api-cocktails.herokuapp.com/api/v1/cocktails) function. This will allow users to have access to 20 different types of cocktails, and by clicking on their chosen drink name, they will be presented with the drink description and image. Another feature I will include, will be the [EmailJS](https://www.emailjs.com/), which will allow website users to contact [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) with their enquiries. I will also include a small navigation menu to take the user from the Home page to the Cocktail request page. 

## Structure
I will group information separated by page. The [index.html](https://amiejohnstone18.github.io/Happy-Hour/index.html) home page will include a brief description about [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) along with an [EmailJS](https://www.emailjs.com/) Enquiry form. The footer of each page will include links to social media platforms [Facebook](https://www.facebook.com/?stype=lo&jlou=Afc1nAXOsIjH4Vj6TUi22TW1AtBpBM8Gjo6SsESQ-h7nkxHXsBnDt7CFnYtypdJsZFWjHqsuZDjg19hvfpf46o3fnOqMve_zd4PeDBhTwMrgvQ&smuh=35897&lh=Ac8yIBc8rTPieSZN), [Twitter](https://twitter.com/explore) and [Instagram](https://www.instagram.com/). 
The [cocktail.html](https://amiejohnstone18.github.io/Happy-Hour/cocktail.html) will be accessible on the second page. Due to not wanting to over crowd either page of the website, and because of the interactivity of using the cocktail request, I feel it is best to keep this on its own page.

## Skeleton
As the website will only present two pages, one being the [index.html](https://amiejohnstone18.github.io/Happy-Hour/index.html) Home page and the other being the [cocktail.html](https://amiejohnstone18.github.io/Happy-Hour/cocktail.html) Cocktail page, the information will be simply laid out and therefore making it very easier for the user to navigate themselves around. The home page will provide a button to link to the [cocktail.html](https://amiejohnstone18.github.io/Happy-Hour/cocktail.html) Cocktails, along with an [EmailJS](https://www.emailjs.com/) enquiry form. 

Through using the [Cocktail API](https://api-cocktails.herokuapp.com/api/v1/cocktails), my drink information will display 20 buttons which upon click will provide the user with the information regarding that selected drink. 

## Surface 
The finished product will stay in theme with what you would typically expect from cocktails. Fruity gradient colours will reflect that of a cocktail, and images of delicious drinks will entice users to use the [API](https://en.wikipedia.org/wiki/Application_programming_interface) feature and select a drink.


## Mock-ups.
* I had initially created [mock-up designs](design-mockups/Happy_Hour_MockUp.pdf) of the website using [Adobe InDesign](https://www.adobe.com/uk/products/indesign.html). 
* The font used is [Pacifico](https://fonts.google.com/specimen/Pacifico?selection.family=Dancing+Script&query=pac) from [Google Fonts](https://fonts.google.com/).
* Gradient colours for the Navaigation and Footer menu are #ff6666 and #ffff8f.


## User Stories 

I had asked three peers to come up with user stories so that I was able to refer back to them again and again during the website development to ensure I was able to successfully satisfy their requirements for [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html).

**User A:**

* *I am have used Happy Hour before, I would like to contact the website owners to request more information about their services.*

**User B:**

* *I have just turned 18 and I am not sure what type of cocktail I would like. I need to find out some more information about them.*

**User C:**

* *I am having a party and would like my guests to have a selection of cocktails to choose from. I need to know what each description is so I can make a choice based on what my guests like to drink normally.*

## Reflection on UX Design Upon Project Completion  
[Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) has altered slightly from the initial [mock-ups](design-mockups/Happy_Hour_MockUp.pdf) UX Design to the finished product. I had initially had the email enquiry available next to the cocktail button on the home page. After careful consideration, I had decided to move the form below the button to ensure the call- to- action was visible with no distractions. I had also changed the cocktail description front to be [Dancing Script](https://fonts.google.com/specimen/Dancing+Script?selection.family=Dancing+Script) from [Google Fonts](https://fonts.google.com/) due to the fact I found [Pacifico](https://fonts.google.com/specimen/Pacifico?selection.family=Dancing+Script&query=pac) was too difficult to read in greater lengths of text.




# Features
* **Cocktail Buttons** - Allows the user to find selected cocktail information from the [API](https://en.wikipedia.org/wiki/Application_programming_interface), found on the [cocktail.html](https://amiejohnstone18.github.io/Happy-Hour/cocktail.html) page.
* **Cocktail Link** - Takes the user to the cocktail page and is presented on the [index.html](https://amiejohnstone18.github.io/Happy-Hour/index.html) home page.
* **Enquiry Form** - Allows the user to contact [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) by filing out the form, presented on the [index.html](https://amiejohnstone18.github.io/Happy-Hour/index.html) home page.
* **Social Media Links** - Takes the user to the social media platforms and presented in the website's footer.
* **Navigation Menu** - Allows the user to navigate themselves around the site from the home page to the cocktail page and vice versa. 

## Features Left to Implement
An additional feature I would like to implement in the future would be to require a higher-level access key to the [API](https://en.wikipedia.org/wiki/Application_programming_interface) and provide users with a more diverse choice of cocktail information to chose from. This would include up to 950+ choice of drinks along with their ingredients, categories, timing, IBA, rating, and random.


# Technologies Used

* [HTML](https://en.wikipedia.org/wiki/HTML)- Used as the main language for the webpage.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)- Used to style the website. 
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)- Used for some Frontend factuality. 
* [GitHub](https://github.com/)- Used to store my project source code.
* [Google Fonts](https://fonts.google.com/)- Used for website fonts.
* [Font Awesome](https://fontawesome.com/)- Used for some icons on the website.
* [Bootstrap](https://getbootstrap.com/)- Used for design templates.
* [JQuery](https://en.wikipedia.org/wiki/JQuery)- Used to simplify the JavaScript code.
* [API](https://www.programmableweb.com/api/cocktails-rest-api-v1)- Used to access the cocktail data.
* [EmailJS](https://www.emailjs.com/)- Used to implement the enquiry email form.

## Other Tools
* [Grammarly](https://app.grammarly.com/?network=g&utm_source=google&matchtype=e&gclid=Cj0KCQjw6575BRCQARIsAMp-ksMKg808zGMEQUPDy4ti1w0gJQCNwbrdJJP0QmhQ-MUhGEEcyYgj148aAhPYEALw_wcB&placement=&q=brand&utm_content=329885936576&utm_campaign=brand_f1&utm_medium=cpc&utm_term=grammarly)- Used to double-check all my spelling and grammar.
* [W3C Mark-up](https://validator.w3.org/)- Used this to check my HTML for errors and typos.
* [W3C CSS](https://jigsaw.w3.org/css-validator/)- Used this to check the validity of my CSS.
* [JavaScript Validator](https://jshint.com/)- Used to check the JavaScript code.
* [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html)- Used to create the Logo.
* [Adobe InDesign](https://www.adobe.com/uk/products/indesign.html)- Use to create the mock-ups.


# Testing

Through testing whether [Happy Hour](https://amiejohnstone18.github.io/Happy-Hour/index.html) was serving its purpose, I came back to my initial user stories and put them into practice.

**User A:**

*I am have used Happy Hour before, I would like to contact the website owners to request more information about their services.* 
1. Scroll down the home page.
2. Fill in your details in the enquiry form, along with a brief description of your enquiry. 
3. Any form submitted with an invalid email address will not be accepted and you will be asked to provide another email address.
4. Send the request using the submit button.


**User B:**

*I have just turned 18 and I am not sure what type of cocktail I would like. I need to find out some more information about them.*
1. From the home page, select "Cocktails" from the navigation menu or click on the "Find Your Perfect Cocktail" link.
2. This will take you to a separate page which displays 20 different cocktails.
3. Click on a drink of your choice where you will be provided with an image and drink description.


**User C:**

*I am having a party and would like my guests to have a selection of cocktails to choose from. I need to know what each description is so I can make a choice based on what my guests like to drink normally.*
1. From the home page, select "Cocktails" from the navigation menu or click on the "Find Your Perfect Cocktail" link.
2. Presented with a list of 20 different cocktails, press each button to make your way through the list.
3. From the drink descriptions and images provided, chose your cocktails.

An issue that I had come across rather late in my website development process was that my [Cocktail API](https://www.programmableweb.com/api/cocktails-rest-api-v1) had run out of capability serving free requests under the free tier for [Heroku](https://en.wikipedia.org/wiki/Heroku). Upon contacting the API owner, he had replied that the server will be automatically spun out within two days. This, of course, put a pause on the website development and caused a timing issue. Now knowing this information and taking it into consideration, for future potential development on this project I would require a higher tier paid [Cocktail API](https://www.programmableweb.com/api/cocktails-rest-api-v1) key for the data to ensure there would be no server timing issues or delays.


# Deployment

I deployed my project through [GitHub Pages](https://pages.github.com/). The deployment process was as follows:
1.	Visited my [Happy-Hour repository](https://github.com/Amiejohnstone18/Happy-Hour)
2.	Clicked on settings 
3.	Selected the Master Branch
4.	Clicked Save
5.	Website link can be found at [https://amiejohnstone18.github.io/Happy-Hour/](https://amiejohnstone18.github.io/Happy-Hour/index.html)
6.	Ran the URL in a new browser window, left with a 404 server error
7.  Left the browser for a few minutes and refreshed the page, the website was then displayes.

There is no difference between the deployed version and the development version.

# Credits

## Content

The API cocktail content was accessed through [https://cocktailsapi.xyz/](https://cocktailsapi.xyz/).

## Media

* The hero shot on the home page was downloaded from [Adobe Stock](https://stock.adobe.com/uk/). 
* All other images were provided by the [Cocktail API](https://cocktailsapi.xyz/).
* Social Media icons were from [Font Awesome](https://fontawesome.com/).
* The shaker logo was downloaded as an [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) from [Font Awesome](https://fontawesome.com/), which I then added the wording on [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html) to complete the logo. 
