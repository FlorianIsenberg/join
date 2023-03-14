
// NOTE -- Default page content

// builddefaultcontactpage();


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

// NOTE -- Create Contact sign

function AddCreateContact() {
    document.getElementById('showSuccessbuttonId').innerHTML += generateSuccessbuttonHTML();
    document.getElementById('showSuccessbuttonId').classList.remove('d-none');
    document.getElementById('showSuccessbuttonId').classList.remove('showSuccessbuttonoutcl');
    document.getElementById('showSuccessbuttonId').classList.add('showSuccessbuttonincl');
    setTimeout(function(){document.getElementById('overlayAddContactId').classList.add('d-none')}, 1000);
    setTimeout(contactShowContact(), 1000);  // PRÜFEN !!
    
    setTimeout(function(){document.getElementById('showSuccessbuttonId').classList.add('showSuccessbuttonincl')}, 1000);

    setTimeout(function(){document.getElementById('showSuccessbuttonId').classList.add('showSuccessbuttonoutcl')}, 2000);

    setTimeout(function(){document.getElementById('showSuccessbuttonId').classList.add('d-none')}, 2250);
}

function showIndexContacts() {

    document.getElementById('contactleftframeId').innerHTML += generateShowRegisterHTML();
    // showContacts();
}

// function showContacts() {
//     document.getElementById('contactleftframeId').innerHTML += generateShowContactsHTML();
// }

