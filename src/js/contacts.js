
// NOTE -- Default page content

// builddefaultcontactpage();


function builddefaultcontactpage() {
    document.getElementById('contactrightframeId').innerHTML += generateContactHTML();
}


// NOTE -- Overlaycard: add contact

function overlayAddContact() {
    document.getElementById('overlayAddContactId').innerHTML += generateOverlayAddContactHTML();

     document.getElementById('addcontactinputnameId').value = '';
     document.getElementById('addcontactinputemailId').value = '';
     document.getElementById('addcontactinputphoneId').value = '';

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

function overlayEditContact(showId) {
    document.getElementById('overlayEditContactId').innerHTML += generateOverlayEditContactHTML(showId);
    document.getElementById('overlayEditContactId').classList.remove('overlayAddContactoutcl');
    document.getElementById('overlayEditContactId').classList.add('overlayAddContactincl');
    document.getElementById('overlayEditContactId').classList.remove('d-none');
    // console.log(contactdata[showId])
    // document.getElementById('addcontactinputnameId').value = `${(contactdata[showId+1])}`;
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

function contactShowContact(showId) {
    
    document.getElementById('overlayShowContactId').innerHTML = '';
    document.getElementById('overlayShowContactId').innerHTML += generateOverlayShowContactHTML(showId);
    document.getElementById('overlayShowContactId').classList.remove('d-none');
    document.getElementById('overlayShowContactId').classList.add('overlayShowContactIncl');
}

function contactSuccesButton() {
    document.getElementById('showSuccessbuttonId').innerHTML += generateSuccessbuttonHTML();
}

// NOTE -- Create Contact sign

function AddCreateContact() {
    document.getElementById('showSuccessbuttonId').innerHTML += generateSuccessbuttonHTML();
    document.getElementById('showSuccessbuttonId').classList.remove('d-none');
    AddContactCancel();
    document.getElementById('showSuccessbuttonId').classList.remove('showSuccessbuttonoutcl');
    document.getElementById('showSuccessbuttonId').classList.add('showSuccessbuttonincl');
    setTimeout(function(){document.getElementById('showSuccessbuttonId').classList.add('showSuccessbuttonoutcl')}, 2000);
    setTimeout(function(){document.getElementById('showSuccessbuttonId').classList.add('d-none')}, 2150);
}

function showIndexContacts() {

    document.getElementById('contactleftframeId').innerHTML += generateShowRegisterHTML();
    // showContacts();
}

// NOTE -- Name from list to edit

function showNameToEdit(name) {
    for ( let i = 0; i < contactdata.length; i = i + 5 ) {
        if (contactdata[i] == name) {
            showId = i;
            contactShowContact(i);
        }
    }
}

function overlayEditContactPre(showId) {
    console.log('1: ',showId);
    // document.getElementById('overlayShowContactId').classList.remove('overlayShowContactIncl');
    // document.getElementById('overlayShowContactId').classList.add('overlayShowContactOutcl');
    // document.getElementById('overlayShowContactId').classList.add('d-none');
    overlayEditContact(showId);

}

