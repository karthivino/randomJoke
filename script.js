// fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
//     .then(response => response.json())
//     .then(dta => console.log(dta.joke))
//     .catch(error => console.log(error));


const jokeButton = document.getElementById("joke-btn");
const jokePara = document.getElementById("joke");

jokeButton.addEventListener("click", () => {
    getJoke();
})

async function getJoke() {
    jokePara.classList.remove("fade");
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    const data = await response.json();

    jokePara.innerHTML = data.joke;
    jokePara.classList.add("fade");
}