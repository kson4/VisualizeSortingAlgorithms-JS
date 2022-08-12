let container = document.getElementsByClassName("graph")[0];
console.log(container);

const numBars = 20;
const windowWidth = 1000;
const windowHeight = 800;
const width = windowWidth/numBars;

let graph = [];

for (let i = 0; i < numBars; i++) {
    const heightRng = Math.floor((Math.random() * 10000) % windowHeight + 100);
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

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function bubbleSort(numBars) {
    let container = document.getElementsByClassName("bar");
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const loop = async() => {
        for (let i = 0; i < numBars - 1; i++) {
            for (let j = 0; j < numBars - i - 1; j++) {
                if (container[j].style.height > container[j + 1].style.height) {
                    [container[j].style.height, container[j + 1].style.height] 
                        = [container[j + 1].style.height, container[j].style.height];
                }
                await wait(10);
            }
        }
    }
    loop();
    
}

// let container2 = document.getElementsByClassName("bar");
// console.log(container2);

bubbleSort(20);