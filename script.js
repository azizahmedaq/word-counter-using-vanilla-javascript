

const wordsInput = document.querySelector(".words-input");
const wordCount = document.querySelector(".word-count");
const letterCount = document.querySelector(".letter-count");
const spaceCount = document.querySelector(".space-count");

const count = () =>  {

    //letterCount
    let words = wordsInput.value;
    let trimWords = words.replace(/\s+/g, " ").trim();    
    let letterTotal = trimWords.length;

    //spaceCount
    let spaces = wordsInput.value;
    let spaceNumber = spaces.split(" ").length -1;
    
    //wordCount
    let splitWords = trimWords.split(" ");
    let wordsTotal = splitWords.length;
    if (splitWords[0] === ""){
        
        wordsTotal = 0;
    }

    spaceCount.innerHTML = spaceNumber;
    letterCount.innerHTML = letterTotal;
    wordCount.innerHTML = wordsTotal;
    
};







