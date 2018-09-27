var quotesArray;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function setup() {
    quotesArray = [
        ["You can't use up creativity.  The more you use, the more you have.", "Maya Angelou"],
        ["An idea that is not dangerous is unworthy of being called an idea at all.", "Oscar Wilde"],
        ["Vulnerability is the birthplace of innovation, creativity, and change.", "Brene Brown"],
        ["Create with the heart; build with the mind.", "Criss Jami"],
        ["Creativity is piercing the mundane to find the marvelous.", "Bill Moyers"]
    ]
}

function renderNewQuote() {
    let randomInt = getRandomInt(0, quotesArray.length);
    let quoteBox = document.getElementById("quoteBox");
    quoteBox.innerHTML = quotesArray[randomInt][0];
    let nameBox = document.getElementById("nameBox");
    nameBox.innerHTML = "- " + quotesArray[randomInt][1];
}

setup();
