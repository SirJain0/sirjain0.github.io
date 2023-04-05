// Variables for the input fields
const lastName = document.getElementById("last-name");
const firstName = document.getElementById("first-name-initial");
const date = document.getElementById("date");
const articleTitle = document.getElementById("article-title");
const publicationName = document.getElementById("publication-name");
const url = document.getElementById("url");

const generateButton = document.getElementById("generate");
const outputText = document.getElementById("output-text");

let var1, var2, var3, var4, var5, var6;

if (outputText.innerHTML === "Result will be shown here.") {
    outputText.style.setProperty("color", "gray");
}

function writeValues() {
    let citation = "";

    var1 = citation.concat(lastName.value)
    var2 = var1.concat(", " + firstName.value)
    var3 = var2.concat(".");
        
    console.log(var3)
    outputText.innerHTML = var3;

    navigator.clipboard.writeText(var3);
    outputText.style.setProperty("color", "white");
}

generateButton.addEventListener('click', writeValues)