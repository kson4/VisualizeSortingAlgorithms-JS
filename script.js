let container = document.getElementsByClassName("graph")[0];
console.log(container);

const numBars = 200;
const windowWidth = 1000;
const windowHeight = 800;
const width = windowWidth/numBars;

function createGraph() {
    for (let i = 0; i < numBars; i++) {
        const heightRng = Math.floor((Math.random() * 10000) % windowHeight + 100);
        let divBar = document.createElement("div");
        divBar.setAttribute("class", "bar");
        divBar.setAttribute("id", i);
        divBar.style.height = heightRng + "px";
        divBar.style.width = width + "px"
        divBar.style.opacity = "25%";
        container.appendChild(divBar);
    }
}

function bubbleSort(numBars) {
    let container = document.getElementsByClassName("bar");

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const loop = async() => {
        for (let i = 0; i < numBars - 1; i++) {
            for (let j = 0; j < numBars - i - 1; j++) {
                container[j].style.opacity = "100%";
                if (container[j].style.height > container[j + 1].style.height) {
                    [container[j].style.height, container[j + 1].style.height] 
                        = [container[j + 1].style.height, container[j].style.height];
                    await wait(1);
                        
                }
                container[j].style.opacity = "25%";
            }
            container[numBars - i - 1].style.opacity = "100%";
        }
    }
    loop();
}

function selectionSort(numBars) {
    let container = document.getElementsByClassName("bar");
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const loop = async() => {
        for (let i = 0; i < numBars; i++) {
            let min = i;
            container[min].style.opacity = "75%";
            for (let j = i + 1; j < numBars; j++) {
                if (container[min].style.height > container[j].style.height) {
                    container[min].style.opacity = "25%";
                    min = j;
                    container[min].style.opacity = "75%";
                }
            }
            await wait(1);
            container[min].style.opacity = "25%";
            if (min != i) {
                [container[min].style.height, container[i].style.height] = 
                [container[i].style.height, container[min].style.height];
            }
            container[i].style.opacity = "100%";
        }
    }
    loop();
}

createGraph();

document.getElementsByClassName("reset")[0].onclick = function() {
    let container = document.getElementsByClassName("graph")[0];
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGraph();
};

document.getElementsByClassName("bubble")[0].onclick = function() {
    bubbleSort(numBars);
};

document.getElementsByClassName("selection")[0].onclick = function() {
    selectionSort(numBars);
};


//bubbleSort(numBars);