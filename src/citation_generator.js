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

let citation, citationCleaned, allFieldsEmpty;

// Check for the filler gray text and change the style appropriately
if (outputText.innerHTML === "Result will be shown here.") {
    outputText.style.setProperty("color", "gray");
}

// Function that updates the HTML according to what the user inputs
function writeValues() {
    allFieldsEmpty = (lastName.value === "" && firstName.value === "" && date.value === "" && articleTitle.value === "" && publicationName.value === "" && url.value === "");
    citation = "";

    // Check - is there input in the fields?
    if (allFieldsEmpty) {
        outputText.innerHTML = `Please fill out some fields.`;
        outputText.style.setProperty("color", "#F45555");
        alert("Please fill out some fields.");
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

        outputText.innerHTML = citation;
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
}

// Copies text to clipboard
function copyTextToClipboard(value) {
    navigator.clipboard.writeText(value);
}

// Event listener to check if buttons are clicked
generateButton.addEventListener('click', writeValues);
clearButton.addEventListener('click', clearValues);