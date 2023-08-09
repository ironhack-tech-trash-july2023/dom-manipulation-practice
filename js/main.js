
/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "TechTrash e-commerce";


// by class name
const infoCollection = document.getElementsByClassName("info"); // returns an html collection
const infoElementsArray = [...infoCollection]; // convert html collection to an array
infoElementsArray.forEach(function(element){
    element.style.color = "blue";
});


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");


// by css selectors....
const first = document.querySelector("header h2"); //first element matching this css selector
const all = document.querySelectorAll("header h2"); //all elements matching this css selector

all.forEach((elm) => elm.style.color = "orange" ); //querySelectorAll returns a nodelist (we can use forEach)


//
// context: document vs. element
//

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");

const allParagraphsInProductsElm_Alternative  = document.querySelectorAll("#products p");



/**************/
/* Properties */
/**************/


// Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `
        <div>
            <p>one<p>
            <p>two
                <a href="#">click here for more info</a>
            <p>
        </div>
    `;


// Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us -- we are amazing!"


// Read/Modify CSS --> elm.style
mainTitle.style.color = "green";
mainTitle.style.border = "2px solid green";
mainTitle.style.backgroundColor = "orange";


// Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id"

//Read/Modify class --> elm.className
mainTitle.className = "box rounded"


//(bonus) elm.classList (provides methods to access class names)

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("important");



/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const linkUrl = linkElm.getAttribute("href");
console.log(linkUrl)

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com"); // modify
linkElm.setAttribute("target", "_blank"); // create

// remove: elm.removeAttribute(attrName);




/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element
const newImg = document.createElement("img");

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful image of pikachu");

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);




/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events:
- Document (DOMContentLoaded, ...)
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)
- ...


elm.addEventListener("nameOfTheEvent", () => {});

*/

const btn1 = document.getElementById("button-1");


btn1.addEventListener("click", (event) => {
    console.log("user has clicked in our button....");

    // step1: create the element
    const newP = document.createElement("p");

    // step2: add content or modify (ex. innerHTML...)
    newP.innerText = "this paragraph has been created dynamically";

    //step3: append to the dom: `parentElm.appendChild()`
    const box1 = document.getElementById("box-1");
    box1.appendChild(newP);

});


//
// Detect keyboard event
//

document.addEventListener("keydown", (event) => {
    if(event.code === "Space"){
        console.log("user pressed space bar")
    } else {
        console.log(`user pressed other key.... ${event.code}`)
    }
});


//
// Attach an event listener to multiple elements
//

const h2List = document.querySelectorAll("header h2");

h2List.forEach( (elm) => {
    elm.addEventListener("click", (event) => {
        console.log("user clicked on one of our h2....")
        event.target.innerText = "Unicorns are amazing"
    })
});

