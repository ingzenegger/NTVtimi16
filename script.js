const body = document.body;
const joke = document.getElementById('joke');
const jokeButton = getElementById('jokeButton');

function createContainer(){
    const container = document.createElement('div');
    container.id = 'boxContainer';
    container.style.display = "flex"
    container.style.backgroundColor = "black"
    body.appendChild(container);
}

function createRandomColor(){
    
    let color = "#";
    const baseLine = "0123456789ABCDEF";

        for(let i = 0; i < 6; i++){
            let random = Math.floor(Math.random() *16);
            console.log(random)
            color += baseLine[random];
        }
        console.log(color);
        return color;
}

function createBox() {
    const box = document.createElement('div');
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = createRandomColor();
    boxContainer.appendChild(box)
}

function createButton(){
    const button = document.createElement('button');
    button.innerHTML = "Submit";
    button.id = "boxButton";
    button.style.padding = "20px";
    body.appendChild(button);
}

async function fetchJoke () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()
    joke.innerHTML = JSON.stringify(data.address.geo.lat);
    console.log(data.username)
}

function initialize () {
    createContainer();
    createButton();
    jokeButton.addEventListener('click', fetchJoke);
    const boxButton = document.querySelector("#boxButton");
    boxButton.addEventListener('click', createBox);
}

initialize();
