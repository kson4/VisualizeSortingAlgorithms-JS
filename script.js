let container = document.getElementsByClassName("graph")[0];
console.log(container);

const numBars = 20;
const windowWidth = 1000;
const windowHeight = 800;
const width = windowWidth/numBars;

let graph = [];

for (let i = 0; i < numBars; i++) {
    const heightRng = Math.floor((Math.random() * 10000) % windowHeight);
    let bar = {
        height: heightRng,
        width: width,
        position: i
    };
    graph.push(bar);
    let divBar = document.createElement("div");
    divBar.setAttribute("class", "bar");
    divBar.setAttribute("id", i);
    //divBar.style.width(width+"px");
    divBar.style.height = heightRng + "px";
    divBar.style.width = width + "px"
    container.appendChild(divBar);
}

function bubbleSort(numBars) {
    let container2 = document.getElementsByClassName("divBar");
    console.log(container2);
    for (let i = 0; i < numBars - 1; i++) {
        for (let j = 0; j < numBars - i - 1; j++) {
            //if (cont)
        }
    }
}
let container2 = document.getElementsByClassName("divBar");
    console.log(container2);