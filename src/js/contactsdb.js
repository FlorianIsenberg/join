// NOTE -- Define global variables for Contacts

let contactdata = [];           // Array of Data
let cDataCounter;               // Number of Datablocks
let setcolor;                   // colorNr for css class
let sorted = [];                // contains Last name as Elements in sorted row
let unsorted = [];              // contains Last name as Elements in unsorted row
let indexNr;
// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// let string = [];
// let aString = [];

// NOTE -- Linus template.html loading modul

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

setURL('https://gruppe-07i.developerakademie.net/smallest_backend_ever');

// NOTE -- Initial DB

async function init() {

    await downloadFromServer();
    // fetch Data from Backend.cData
    contactdata = JSON.parse(backend.getItem('cData')) || [];
    cDataCounter = (contactdata.length / 5);

    await sortedListbyName();
}


// NOTE -- Read the first letter of all words in a string

function allFirstLetter(string) {
    var splitString = string.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase();
    }
    return splitString.join('');
}


// NOTE -- DB Algorythm

async function sortedListbyName() {

    // NOTE -- List

    let string = contactdata[0];
    let aString = string.split(' ');

    for (let k = 0; k < cDataCounter * 5; k = k + 5) {
        string = contactdata[k];
        aString = string.split(' ');
        unsorted.push(aString[aString.length - 1]);
    }

    // NOTE -- sorted List
    sorted = unsorted.sort();

    // Do ist again for a unsorted List1

    unsorted = [];

    for (let k = 0; k < cDataCounter * 5; k = k + 5) {
        string = contactdata[k];
        aString = string.split(' ');
        unsorted.push(aString[aString.length - 1]);
    }

    // NOTE -- Search and show alphabetical Block cData

    let alpha = [];
    let showAlphabet = [];

    for (n = 0; n < sorted.length; n++) {
        alpha.push(sorted[n].charAt(0).toUpperCase());
        showAlphabet = [...new Set(alpha)];
    }

    //  NOTE -- show Alphabet and Contacts

    for (m = 0; m < showAlphabet.length; m++) {      // if loop through showAlphabet
        let charFound = 0;      // was the Alphabet character found?

        for (usl = 0; usl < unsorted.length; usl++) {          // if loop through unsorted Array
            if (showAlphabet[m] == unsorted[usl].charAt(0)) {   // Is the First Char from unsorted Element equal to showAlphabet ?
                if (charFound == 0) {
                    document.getElementById('contactleftframeV1Id').innerHTML += /*html*/`
                        <div id="alpha${showAlphabet[m]}" class="alpha${showAlphabet[m]}">${showAlphabet[m]}</div>
                        <div id="alphafootId" class="alphafootcl"></div >
                    `;
            charFound = 1;      // yes, the Alphabet character was already found!
                    // document.getElementById('showContactsId').innerHTML += /*html*/ contactdata[4 + (usl * 5)];
                }
                document.getElementById('contactleftframeV1Id').innerHTML +=/*html*/ `
                <div id="showContactsDatacl" class="showContactsDatacl">
                <div id="elipse5Id" class="elipse5cl"><span>${contactdata[4 + (usl * 5)]}</span></div>
                    <div id="datacontainerId" class="datacontainercl">
                        <div id="showContactsnameId" class="showContactsnamecl">${contactdata[0 + (usl * 5)]}</div>
                        <div id="showContactsmailId" class="showContactsmailcl">${contactdata[1 + (usl * 5)]}</div>
                    </div>
                </div>                    
                `;
                document.getElementById('elipse5Id').classList.add(`${contactdata[3 + (usl * 5)]}`);
            }
        }
    }
}


// document.getElementById('contactleftframeV1Id').innerHTML +=/*html*/ `
// <div id="showContactsDatacl" class="showContactsDatacl">
// <div id="elipse5Id" class="elipse5cl"></div>`;
// document.getElementById('elipse5Id').classList.add(`${contactdata[3 + (usl * 5)]}`);
// document.getElementById('elipse5Id').innerHTML +=/*html*/ `
// <div><span>${contactdata[4 + (usl * 5)]}</span></div>`;
// document.getElementById('contactleftframeV1Id').innerHTML +=/*html*/ `
//     <div id="datacontainerId" class="datacontainercl">
//         <div id="showContactsnameId" class="showContactsnamecl">${contactdata[0 + (usl * 5)]}</div>
//         <div id="showContactsmailId" class="showContactsmailcl">${contactdata[1 + (usl * 5)]}</div>
//     </div>
// </div>
                   
// `;