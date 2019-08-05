const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', 'img/header-img.png')

let navs = document.querySelectorAll("a");
navs[0].textContent = 'Services';
navs[1].textContent = 'Products';
navs[2].textContent = 'Vision';
navs[3].textContent = 'Features';
navs[4].textContent = 'About';
navs[5].textContent = 'Contact';

let ctah = document.querySelector('.cta h1');
ctah.textContent = 'DOM Is Awsome';

let ctab = document.querySelector('button');
ctab.textContent = 'Get Started';

let otherimg = document.querySelector('#middle-img');
otherimg.setAttribute('src', 'img/mid-page-accent.jpg');

let headers4 = document.querySelectorAll('h4');
console.log(headers4);
headers4[0].textContent = 'Features';
headers4[1].textContent = 'About';
headers4[2].textContent = 'Services';
headers4[3].textContent = 'Procucts';
headers4[4].textContent = 'Vision';
headers4[5].textContent = 'Contacts';

let contents = document.querySelectorAll('p');
console.log(contents);
contents[0].textContent =  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contents[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contents[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contents[3].textContent = "Products content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contents[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contents[5].textContent = "123 Way 456 Street Somewhere, USA";
contents[6].textContent = "1 (888) 888-8888";
contents[7].textContent = "sales@greatidea.io";
contents[8].textContent = "Copyright Great Idea! 2018";

/*Task 3*/
let greennav = document.querySelector('nav');
greennav.style.background = 'green';
let nav1 = document.querySelector('nav');
const newA = document.createElement('a');
newA.href = "#";
newA.textContent= "Home";
const newB = document.createElement('a');
newB.href = "#";
newB.textContent = "New";
nav1.prepend(newA);
nav1.appendChild(newB);