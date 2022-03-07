const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// console.log('project wired!')

//nav//

const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";

navLinks[0].classList.add('italic');
navLinks[1].classList.add('italic');
navLinks[2].classList.add('italic');
navLinks[3].classList.add('italic');
navLinks[4].classList.add('italic');
navLinks[5].classList.add('italic');



//header logo img//
const headerImg = document.querySelector('#logo-img');
headerImg.src = "http://localhost:9000/img/logo.png";

//h1//
const siteTitle = document.querySelector('h1');
siteTitle.textContent = "DOM is Awesome";

//button// 
const buttonElem = document.querySelector('button');
buttonElem.textContent = "Get Started";

//cta img//

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "http://localhost:9000/img/cta.png";

//top content section//

//h4//
const topContent = document.querySelector('.top-content');
const headerTop = topContent.querySelectorAll('h4');

headerTop[0].textContent = siteContent['main-content']['features-h4']
headerTop[1].textContent = siteContent['main-content']['about-h4']

//p//
const pTop = topContent.querySelectorAll('p');
pTop[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

pTop[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



//bottom content section//

//h4//
const botContent = document.querySelector('.bottom-content');
const headerBot = botContent.querySelectorAll('h4');

headerBot[0].textContent = siteContent['main-content']['services-h4'];
headerBot[1].textContent = siteContent['main-content']['product-h4'];
headerBot[2].textContent = siteContent['main-content']['vision-h4'];

//p//

const pBot = botContent.querySelectorAll('p');
pBot[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pBot[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pBot[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



//middle img//
const middleImg = document.querySelector('#middle-img');
middleImg.src = 'http://localhost:9000/img/accent.png';


//contact//

const contact = document.querySelector('.contact');
const contactHeader = contact.querySelectorAll('h4');
contactHeader[0].textContent = "contact";

contact.children[1].textContent = siteContent.contact['address'];
contact.children[2].textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];

//copyright//

const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;

footerLink.classList.add('bold');
