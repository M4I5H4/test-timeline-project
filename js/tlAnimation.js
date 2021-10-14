//selcect h1 title tag
const text = document.querySelector('h1');
console.log(text);
//access the text
const strText = text.textContent;
console.log(strText);
//split text into individual letters
const splitText = strText.split("")
console.log(splitText);
// this makes the h1 content nothing otherwise you get a double of the text
text.textContent = ""; 
//turn the list of text letter into an array and make each one a span element
for (let index = 0; index < splitText.length; index++) {
    text.innerHTML += "<span class='head-title'>" + splitText[index] + "</span>" 
}
//create an invertal that runs though each letter and give them all classname 'fade'
let char = 0;
let timer = setInterval(onTick, 100);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}
//make sure it stops running thorugh the spans when it gets to the last letter
function complete(){
    clearInterval(timer);
    timer = null;
}