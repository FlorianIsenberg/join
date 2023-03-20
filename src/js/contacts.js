
// NOTE -- Default page content

// builddefaultcontactpage();


function builddefaultcontactpage() {
    document.getElementById('contactrightframeId').innerHTML += generateContactHTML();
    document.getElementById('contactleftframeId').innerHTML += mobileNewContactButton();
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


// NOTE -- cancel -- Addcontact

function AddContactCancel() {
    document.getElementById('overlayAddContactId').classList.remove('overlayAddContactincl');
    document.getElementById('overlayAddContactId').classList.add('overlayAddContactoutcl');
    setTimeout(function(){document.getElementById('overlayAddContactId').classList.add('d-none')}, 999);
}


// NOTE -- cancel -- Editcontact

function EditContactCancel2() {
    document.getElementById('overlayEditContactId').classList.remove('overlayAddContactincl');
    document.getElementById('overlayEditContactId').classList.add('overlayAddContactoutcl');
    setTimeout(function(){document.getElementById('overlayEditContactId').classList.add('d-none')}, 999);
}


// NOTE -- Overlaycard: edit contact

function overlayEditContact(showId) {
    document.getElementById('overlayEditContactId').innerHTML += generateOverlayEditContactHTML(showId);
    document.getElementById('overlayEditContactId').classList.remove('overlayAddContactoutcl');
    document.getElementById('overlayEditContactId').classList.add('overlayAddContactincl');
    document.getElementById('overlayEditContactId').classList.remove('d-none');
}


// NOTE -- Save

function EditSaveContact(showId) {
    document.getElementById('overlayEditContactId').classList.add('d-none');
    writeChangeToBackend(showId);
}


// NOTE -- Show contact

function contactShowContact(showId) {
    
    document.getElementById('overlayShowContactId').innerHTML = '';
    document.getElementById('overlayShowContactId').innerHTML += generateOverlayShowContactHTML(showId);
    document.getElementById('overlayShowContactId').classList.remove('d-none');
    document.getElementById('overlayShowContactId').classList.add('overlayShowContactIncl');
   
}


// NOTE -- generate Success Button

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


// NOTE -- generate Index list of contacts

function showIndexContacts() {
    document.getElementById('contactleftframeId').innerHTML += generateShowRegisterHTML();
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