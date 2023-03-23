// NOTE -- Define global variables for Contacts

let contactdata = [];           // Array of Data
let cDataCounter;               // Number of Datablocks
let setcolor;                   // colorNr for css class
let sorted = [];                // contains Last name as Elements in sorted row
let unsorted = [];              // contains Last name as Elements in unsorted row
let indexNr;
let showId;                     // globale Variable for overall filestructure


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

    sortedListbyName();
}


// NOTE -- write array into backend

async function writeIntoBackend(contactdata) {
    await backend.setItem(`cData`, JSON.stringify(contactdata));
}


// NOTE -- read Data from backend

async function loadFromBackend() {
    contactdata = JSON.parse(backend.getItem('cData')) || [];
    cDataCounter = (contactdata.length / 5);
}


// NOTE -- write modified Data into array and into backend

async function writeChangeToBackend(showId) {
    let cname = document.getElementById('addcontactinputnameId').value;
    let cmail = document.getElementById('addcontactinputemailId').value;
    let cphone = document.getElementById('addcontactinputphoneId').value;
    console.log(showId,3 ,cname, cmail, cphone);
    contactdata.splice(showId,3, cname, cmail, cphone);
    console.log(contactdata);
    writeIntoBackend(contactdata);
    contactShowContact(showId);
    sortedListbyName(); // <- shows sorted NamesList;
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

function sortedListbyName() {
    loadFromBackend()
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

    // NOTE -- Do ist again for a unsorted List1

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

    document.getElementById('contactleftframeV1Id').innerHTML = '';

    for (m = 0; m < showAlphabet.length; m++) {      // if loop through showAlphabet
        let charFound = 0;      // was the Alphabet character found?

        for (usl = 0; usl < unsorted.length; usl++) {          // if loop through unsorted Array
            if (showAlphabet[m] == unsorted[usl].charAt(0)) {   // Is the First Char from unsorted Element equal to showAlphabet ?
                if (charFound == 0) {
                    document.getElementById('contactleftframeV1Id').innerHTML += /*html*/`
                        <div id="alpha${showAlphabet[m]}" class="alpha${showAlphabet[m]}">${showAlphabet[m]}</div>
                        <div id="alphafoot${usl}Id" class="alphafootcl"></div >
                    `;
            charFound = 1;      // yes, the Alphabet character was already found!
                }
                
                document.getElementById('contactleftframeV1Id').innerHTML +=/*html*/ `
                                                                                                                    <!-- , showNameToEdit2('${contactdata[0 + (usl * 5)]}') -->
                <div id="showContactsData${usl}Id" class="showContactsDatacl" onclick="(showNameToEdit('${contactdata[0 + (usl * 5)]}'), showNameToEdit2('${contactdata[0 + (usl * 5)]}'))">
                <!-- <div id="showContactsData${usl}Id" class="showContactsDatacl" onclick="(showNameToEdit('${contactdata[0 + (usl * 5)]}'))"> -->
                <!-- <div id="showContactsData${usl}Id" class="showContactsDatacl" onclick="(showNameToEdit2('${contactdata[0 + (usl * 5)]}'))"> -->
                <div id="elipse5${usl}Id" class="elipse5cl ${contactdata[3 + (usl * 5)]}"><span>${contactdata[4 + (usl * 5)]}</span></div>
                    <div id="datacontainer${usl}Id" class="datacontainercl">
                        <div id="showContactsname${usl}Id" class="showContactsnamecl">${contactdata[0 + (usl * 5)]}</div>
                        <div id="showContactsmail${usl}Id" class="showContactsmailcl">${contactdata[1 + (usl * 5)]}</div>
                    </div>
                </div>                    
                `;           
            }
        }        
    }
}


// NOTE -- generate pseudo random number

function randomColor() {
    let colorNr = Math.floor(Math.random() * 15);
    return `color${colorNr}`;
}


// NOTE -- Save Button

function AddCreateContact2() {    // open overlay addcontact
    let cname = document.getElementById('addcontactinputnameId').value;
    let cmail = document.getElementById('addcontactinputemailId').value;
    let cphone = document.getElementById('addcontactinputphoneId').value;
    addUser(cname, cmail, cphone);
}


//NOTE -- Write Data and go on

function addUser(cname, cmail, cphone) {
    let cfirstLetter = allFirstLetter(cname);
    let ccolorNr = randomColor();

    contactdata.push(cname, cmail, cphone, ccolorNr, cfirstLetter);
    writeIntoBackend(contactdata); // <- save array data into backend;
    AddContactCancel(); // <- After Input an Create Button, slide overlay out;
    AddCreateContact(); // <- shows Successbutton;
    sortedListbyName(); // <- shows sorted NamesList;
}


// NOTE -- for second line RD ------------

// NOTE -- Save Button 3

function AddCreateContact3() {    // open overlay addcontact
    let cname = document.getElementById('addcontactinputnameId').value;
    let cmail = document.getElementById('addcontactinputemailId').value;
    let cphone = document.getElementById('addcontactinputphoneId').value;
    addUser3(cname, cmail, cphone);
}


//NOTE -- Write Data and go on 3

function addUser3(cname, cmail, cphone) {
    let cfirstLetter = allFirstLetter(cname);
    let ccolorNr = randomColor();

    contactdata.push(cname, cmail, cphone, ccolorNr, cfirstLetter);
    writeIntoBackend(contactdata); // <- save array data into backend;
    AddContactCancel2(); // <- After Input an Create Button, slide overlay out;
    AddCreateContact4(); // <- shows Successbutton;
    sortedListbyName(); // <- shows sorted NamesList;
}