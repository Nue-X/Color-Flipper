const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let hexColor = "#"
    for (let i = 0; i <= 5; i++){
        let randomNumber = getRandomNumber()
        hexColor += hex[randomNumber]
    }
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
    color.style.color = hexColor;
})

let getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}