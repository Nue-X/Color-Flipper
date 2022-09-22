const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.innerHTML = colors[randomNumber];
    color.style.color = colors[randomNumber]
    
})

let getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}
