console.log("Tweak An Element")

//innerHTML property allows access to set the contents of aan element 
document.body.innerHTML = '<h1>This is now the heading of the body element</h1>'

//innerHTML can also add any valid HTML elemts
document.body.innerHTML = "<h2>This is a header</h2>"
//above code will creat a H2 HTML tag inside the body

console.log("________________________________\n")
console.log("Select and Modify Elements")

//select the first 'h1' element and change the title
document.querySelector('h1').innerHTML = "Most popular Harry Potter characters"

//access element with 'fourth' as an ID and change the context
document.getElementById('fourth').innerHTML = 'Professor Snape'

//Elements is pulurized on ClassName and TagName
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin'
document.getElementsByTagName('li')[0].innerHTML = 'Dobby'

console.log()

console.log("________________________________\n")
console.log("Style An Element")

//Styling background color of the body element
document.querySelector('body').style.backgroundColor = '#201F2E'


/* change heading class to Roboto font
  • stying requires CSS rules, so reading the heading property must include a dot-notation before the class name
 */ 
document.querySelector('.heading').style.fontFamily = "Roboto"

console.log("________________________________\n")
console.log("Create and Insert Elements")

/* .createElement() method creates a new element based on specified tage name passed into as an argument. 
  • .createElement does not append (add) it to the document. it creates an empty element with no inner HTML

  let paragrah = document.createElement('p')
    • above code takes 'p' as an argument wich creates an empty element and stores it as a paragraph variable 

paragraph.id ="info"
paragraph.innerHTML = "The text inside the paragraph"
  • used .id property to assign 'info as ID

to create an element and add it to the web page, it must be assigned to the child of an element that already exists on the DOM

document.body.appendChild('paragraph')
  • .appedbChild() method adds a child element as the parents elements last child node. 

*/

//create a <li> elements using .createElement() and save it in a variable
let newAttraction = document.createElement('li');

//assign newAttraction element an id of 'vespa'
newAttraction.id = 'vespa'

//assign newAttraction element the text: 'rent a Vespa as its innerHTML
newAttraction.innerHTML = "Rent a Vespa"

//append newAttraction element to the list of top attraction with ID 'italy-attrctions'
document.getElementById('italy-attractions').appendChild(newAttraction) //reminder: quotes aren't needed

console.log("________________________________\n")
console.log("Remove an Element")

/* 
  Remove and Element

  .removeChild() - removes a specified child from a parent
let paragraph = document.querySelector('p')
document.body.removeChild(paragraph)
  •querySelector returns first paragraph
  • paragraph is passed an an argument inside remove method 

  .hidden() hides the element rather than removing by setting true or false 

  document.getElementById('sign').hidden = true
  • true hides the element and false reveils

*/ 

// save element with the ID of vespa as a variable
let elementToRemove = document.getElementById('vespa')

// remove the elementToRemove elment from its parent
document.getElementById('italy-attractions').removeChild(elementToRemove)

console.log("________________________________\n")
console.log("Add Click Interactivity")

let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
element.style.backgroundColor = 'red'; //assignes background color to red
element.style.color = 'white'; // assigns 
element.innerHTML = "Red Button"
}
element.onclick = turnButtonRed // .onclick is not CamelCase 

