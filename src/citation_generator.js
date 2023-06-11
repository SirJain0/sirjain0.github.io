// Variables for the input fields
const lastName = document.getElementById("last-name");
const firstName = document.getElementById("first-name-initial");
const date = document.getElementById("date");
const articleTitle = document.getElementById("article-title");
const publicationName = document.getElementById("publication-name");
const url = document.getElementById("url");

const generateButton = document.getElementById("generate");
const clearButton = document.getElementById("clear");
const outputText = document.getElementById("output-text");

const emptyFieldStr = "Result will be shown here.";
const errorStr = "Please fill out some fields.";

let citation, citationCleaned, allFieldsEmpty;

// Check for the filler gray text and change the style appropriately
if (outputText.innerHTML === emptyFieldStr) {
    outputText.style.setProperty("color", "gray");
}

// Function that updates the HTML according to what the user inputs
function writeValues() {
    allFieldsEmpty = (lastName.value === "" && firstName.value === "" && date.value === "" && articleTitle.value === "" && publicationName.value === "" && url.value === "");
    citation = "";

    // Check - is there input in the fields?
    if (allFieldsEmpty) {
        outputText.innerHTML = errorStr;
        outputText.style.setProperty("color", "#F45555");
        alert(errorStr);
    }

    // Run if everything is okay
    else {
        if (lastName.value != "") citation += lastName.value;
        if (lastName.value != "" && firstName.value != "") citation += ", ";
        if (firstName.value != "") citation += firstName.value;
        if (lastName.value != "" || firstName.value != "") citation += ". "
        if (date.value != "") citation += `(${date.value})` + ". ";
        if (articleTitle.value != "") citation += `<i>${articleTitle.value}</i>` + ". "; // Italic
        if (publicationName.value != "") citation += publicationName.value + ". ";
        if (url.value != "") citation += `<br><b>${url.value}</b>`; // Bold

        outputText.setHTML(citation);
        outputText.style.setProperty("color", "white");

        citationCleaned = citation
            .replaceAll("<b>", "")
            .replaceAll("<i>", "")
            .replaceAll("</b>", "")
            .replaceAll("</i>", "")
            .replaceAll("<br>", "");

        copyTextToClipboard(citationCleaned);
    }
}

// Clears all values of inputs
function clearValues() {
    lastName.value = "";
    firstName.value = "";
    publicationName.value = "";
    date.value = "";
    articleTitle.value = "";
    url.value = "";

    outputText.innerHTML = emptyFieldStr;
    outputText.style.setProperty("color", "gray");
}

// Copies text to clipboard
function copyTextToClipboard(value) {
    navigator.clipboard.writeText(value);
}

// Event listener to check if buttons are clicked
generateButton.addEventListener('click', writeValues);
clearButton.addEventListener('click', clearValues);

// Animation handling
const description = document.querySelector(".tool-page-description");
const inputContainer = document.querySelector(".cite-generator-container");
const outputContainer = document.querySelector(".output-container");

description.style.cssText += `
    transform: translateY(-3%);
    opacity: 0;
    animation: project-ease-in 1000ms ease-out 150ms;
    animation-fill-mode: forwards;
`;

inputContainer.style.cssText += `
    transform: translateY(-3%);
    opacity: 0;
    animation: project-ease-in 1000ms ease-out 150ms;
    animation-fill-mode: forwards;
`;

outputContainer.style.cssText += `
    transform: translateY(-3%);
    opacity: 0;
    animation:project-ease-in 1000ms ease-out 300ms;
    animation-fill-mode: forwards;
`;