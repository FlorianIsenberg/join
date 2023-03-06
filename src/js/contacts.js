// NOTE -- smallest_backend_ever

setURL('gruppe-07i.developerakademie.net/src/js/mini_backend.js')
let users = [];


async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

// NOTE -- Save, load, delete Example

// let users = [];

// Save
// Add a user with this function:

// function addUser() {
//     users.push('John');
//     backend.setItem('users', JSON.stringify(users));
// }

// If you want to wait for the request you can add the await keyword as well:
// Add a user with this function:

// async function addUser() {
//     users.push('John');
//     await backend.setItem('users', JSON.stringify(users));
// }

// Load
// Fill your empty array with users from the Server

// async function init() {
//     await downloadFromServer();
//     users = JSON.parse(backend.getItem('users')) || [];
// }

// Delete
// Delete all users from your array:

// function deleteUser(name) {
//   await backend.deleteItem('users');
// }

// NOTE -- close Card by pressing byside

// function doNotClose(event){
//     event.stopPropagation();//popup nur ausserhalb schließbar
// }


// function openPopup(i) {
//     document.getElementById(`popupContainerId`).classList.remove('hide');
//     overlayAddContact();
// }


// function closePopup() {
//     document.getElementById(`popupContainerId`).classList.add('hide');
// }


// NOTE -- Default page content

function builddefaultcontactpage() {
    document.getElementById('contactrightframeId').innerHTML += generateContactHTML();
}


// NOTE -- Overlaycard: add contact

function overlayAddContact() {
    document.getElementById('overlayAddContactId').innerHTML += generateOverlayAddContactHTML();
    document.getElementById('overlayAddContactId').classList.remove('overlayAddContactoutcl');
    document.getElementById('overlayAddContactId').classList.add('overlayAddContactincl');
    document.getElementById('overlayAddContactId').classList.remove('d-none');
   
}

function AddContactCancel() {
    // document.getElementById('overlayAddContactId').innerHTML += generateOverlayAddContactHTML();
    document.getElementById('overlayAddContactId').classList.remove('overlayAddContactincl');
    document.getElementById('overlayAddContactId').classList.add('overlayAddContactoutcl');
    setTimeout(function(){document.getElementById('overlayAddContactId').classList.add('d-none')}, 999);
    
}

// NOTE -- Overlaycard: edit contact

function overlayEditContact() {
    document.getElementById('overlayEditContactId').innerHTML += generateOverlayEditContactHTML();
    document.getElementById('overlayEditContactId').classList.remove('overlayAddContactoutcl');
    document.getElementById('overlayEditContactId').classList.add('overlayAddContactincl');
    document.getElementById('overlayEditContactId').classList.remove('d-none');
}

function EditSaveContact() {
    document.getElementById('overlayEditContactId').classList.add('d-none');
}

function EditContactCancel() {
    document.getElementById('overlayAddContactId').innerHTML += generateOverlayEditContactHTML();
    document.getElementById('overlayEditContactId').classList.remove('overlayAddContactincl');
    document.getElementById('overlayEditContactId').classList.add('overlayAddContactoutcl');
    setTimeout(function(){document.getElementById('overlayAddContactId').classList.add('d-none')}, 999);
}

// NOTE -- Show contact

function contactShowContact() {
    document.getElementById('overlayShowContactId').innerHTML += generateOverlayShowContactHTML();
    document.getElementById('overlayShowContactId').classList.remove('d-none');
}

function contactSuccesButton() {
    document.getElementById('showSuccessbuttonId').innerHTML += generateSuccessbuttonHTML();
}