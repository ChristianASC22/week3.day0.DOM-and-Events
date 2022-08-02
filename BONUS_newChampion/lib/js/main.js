//creates the first div and add the class
let mainDiv = document.querySelector(".main_container");
let newElement = document.createElement("div");
newElement.className="champ_container pyke";
let updated1=mainDiv.appendChild(newElement);

//creates the heading and adds the text and last part makes it within the divide
let text=document.createElement("h2");
let textnode=document.createTextNode("pyke, the bloodharbor ripper");
text.appendChild(textnode);
let updated2=newElement.appendChild(text);

//add the h2 color and the image
let backgroundColour=document.querySelector(".pyke")
backgroundColour.style.color="#92fdfe"
backgroundColour.style.backgroundImage="url(assets/pyke.jpg)"



// h2element.appendChild(textnode)
// classes.appendChild(h2element)
// newElement.appendChild(classes)
// document.querySelector(".main_container").appendChild(newElement)

// let mainDiv = document.querySelector(".main_container");
// let newElement = document.createElement("div");
// let classes= document.className="champ_container pyke"
// let update1=newElement.appendChild(classes)
// let h2element= document.createElement("h2")
// let textnode=document.createTextNode("pyke, the bloodharbor ripper")
// let update2=h2element.appendChild(textnode)
// update1.appendChild(update2)
// mainDiv.appendChild(update1)