//document.getElementById("start").addEventListener("click", startFlashing) //flash
// Event listener-function to call generateColors function

let halt; // to store or return the id of the generator's setInterval function
document.getElementById("generate").addEventListener("click", () => {
  halt = generateColors();
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(halt);
});

//onclick="generateColors()"

let clear; // to store or return the id of the setInterval function
document.getElementById("start").addEventListener("click", () => {
  clear = setInterval(flashing, 1000)
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(clear);
});

// *** *** COPY FUNCTIONN *** COPY FUNCTION ***********************************
const copyFunction=(element)=> {
  let fakeTextArea = document.createElement("textarea");
  fakeTextArea.value = element.textContent; //element is the js variable which content to be copied
  document.body.appendChild(fakeTextArea);
  fakeTextArea.select();
  document.execCommand("Copy");
  fakeTextArea.remove()
}


/* document.body.append(div); */

const generateHexaColor = () => {
  let string = '0123456789abcdef'
  let hexaColor = '#'
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * string.length)
    hexaColor += string[index]
  }
  return hexaColor
}


/* let userValue = document.getElementById("field")
let valueNum = userValue.val */

let blocksContainer = document.getElementById("container");

function generateColors() {
  document.getElementById("container").textContent = "";
  let userValue = document.getElementById("inputField")
  for (let i = 1; i <= userValue.value; i++) {
    let block = document.createElement("div"); // creates virtual div called block in HTML
    block.className="colorBlock";
    let randomColor = generateHexaColor(); // local variable to capture each color-returning iteration
    block.style.background = randomColor; 
    let copyDiv = document.createElement("div"); //div to contain copy button
    copyDiv.className ="copyBtnDiv";
    let copyButon = document.createElement("button"); // copy button created
    copyButon.className ="copyButton"
    copyButon.textContent = "copy"
    copyButon.addEventListener ("click", ()=>  copyFunction(colorCodeText)); //
    copyDiv.append(copyButon); //container for hexacolor copy button 
    
     // clear all
    //document.getElementById("stop").addEventListener("click", flashing) // stop flashing
    
    
    let copyTextDiv = document.createElement("div"); // div to contain copy paragraph
    copyTextDiv.className ="copyIcon" //class name for copy icon
    console.log("XXZZXX")
    console.log(copyTextDiv)
    let colorCodeText = document.createElement("p"); // paragraph for hexacolor code
    console.log("PPP")
    console.log(colorCodeText)
    colorCodeText.className ="copyCodeParagraph" //class name for generated color
    colorCodeText.textContent = generateHexaColor();
    copyTextDiv.append(colorCodeText); // container for Hexacolor code * going to wrap

    let colorIconWrap = document.createElement("div");
    colorIconWrap.className = "coloIconWrap"

    colorIconWrap.append(copyTextDiv);
    colorIconWrap.append(copyDiv);

    block.append(colorIconWrap);
    blocksContainer.append(block);

  } 
}

/*function startFlashing(){
  setInterval(flashing, 1000);
}  
*/

let coloBlocks = document.getElementsByClassName("colorBlock")
   function flashing(){
    for(let block of coloBlocks)
    block.style.background = generateHexaColor();
  }
//document.getElementById("reset").addEventListener("click", clearAll) // To clear all
//document.getElementById("reset").addEventListener("click", clearContainer) // clear all
//fuction to stop flashing
/*
let flashStopper = () => {
  clearInterval(flashing);
}
*/
/*
 // flashing interval setting (w3school variant)
 myInterval = setInterval(flashing, 1000)

 //flashing function
 let blocks = document.getElementsByClassName("colorBlock")
   function flashing(){
    for(let block of blocks)
    block.style.background = generateHexaColor();
  }

  //flash stopper

 let flashStopper = () => {
  clearInterval(myInterval);
 }

*/
/*

// To clear entry from textfield 
let stopAction  = () => {
  let clear = document.getElementById("inputField")
  clear.value = "";
  clearInterval(startFlashing)

  } 


let clearContainer = () => {
  //let colorContainer = document.querySelector("#container");
  //block.textContent = "";
  clearInterval(startFlashing)
}

document.getElementById("stop").addEventListener("click", clearContainer)
let noAccumulation = () => {

}
// stop action function 1
/*
let blocksGenerator = () => {
 let generateBtn = document.getElementById("container")
  console.log(generateBtn.textContent)
  if(generateBtn.textContent !== ""){
    clearContainer();
    generateColors()

  }else{
    generateColors();
  }
}
*/
// stop action function 1
/*buttonStop.onclick = function () {
	stopAction()
}
*/

 
  

  // for start button
 

let clearElement = document.getElementById("reset");
let wipeDisplay = clearElement.value;
/*
let clearAll = () => {
  let wipe = document.getElementById("inputField")
  let clearInput = wipe.value
  console.log(clearInput)
  clearInput.value= ""
 
  } 

 


/*        
let erase = document.querySelector("inputField");
    erase.onclick = function () {
      erase.innerHTML = "";
  }
  */
 /*
 document.getElementById("reset").addEventListener("click", () =>{
  clearAll();
})
*/
/*
let copyDiv = document.createElement("div"); //div to contain copy button
    let buton = document.createElement("button"); // copy button created
    copyDiv.append(buton); //container for hexacolor copy button *

    let copyTextDiv = document.createElement("div"); // div to contain copy paragraph
    let colorCodeText = document.createElement("p"); // paragraph for hexacolor code
   
    colorCodeText.textContent = generateHexaColor();
    copyTextDiv.append(colorCodeText); // container for Hexacolor code *

    let colorIconWrap = document.createElement("div");
    colorIconWrap.append(copyTextDiv);
    colorIconWrap.append(copyDiv);

    block.append(colorIconWrap);
    
*/