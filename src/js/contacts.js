
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

function overlayAddContact2() {
    document.getElementById('overlayAddContact2Id').innerHTML = '';
    document.getElementById('overlayAddContact2Id').innerHTML += generateOverlayAddContact2HTML();
    document.getElementById('addcontactinputnameId').value = '';
    document.getElementById('addcontactinputemailId').value = '';
    document.getElementById('addcontactinputphoneId').value = '';
    document.getElementById('overlayAddContact2Id').classList.remove('overlayAddContactout2cl');
    document.getElementById('overlayAddContact2Id').classList.remove('d-none');
    document.getElementById('overlayAddContact2Id').classList.add('overlayAddContactin2cl');

}

// NOTE -- cancel -- Addcontact

function AddContactCancel() {
    document.getElementById('overlayAddContactId').classList.remove('overlayAddContactincl');
    document.getElementById('overlayAddContactId').classList.add('overlayAddContactoutcl');
    setTimeout(function(){document.getElementById('overlayAddContactId').classList.add('d-none')}, 999);
}

function AddContactCancel2() {
    document.getElementById('overlayAddContact2Id').classList.remove('overlayAddContactin2cl');
    document.getElementById('overlayAddContact2Id').classList.add('overlayAddContactout2cl');
    setTimeout(function(){document.getElementById('overlayAddContact2Id').classList.add('d-none')}, 999);
    // builddefaultcontactpage();
    // showIndexContacts();
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

function overlayEditContact2(showId) {
    document.getElementById('overlayShowContact2Id').classList.add('d-none');
    document.getElementById('overlayEditContact2Id').innerHTML += generateOverlayEditContact2HTML(showId);
    document.getElementById('overlayEditContact2Id').classList.remove('overlayAddContactoutcl');
    document.getElementById('overlayEditContact2Id').classList.add('overlayAddContactincl');
    document.getElementById('overlayEditContact2Id').classList.remove('d-none');
}


// NOTE -- Save

function EditSaveContact(showId) {
    document.getElementById('overlayEditContactId').classList.add('d-none');
    writeChangeToBackend(showId);
}


// NOTE -- Show contact

function contactShowContact(showId) {
    // document.getElementById('overlayShowContact2Id').classList.add('d-none');
    document.getElementById('overlayShowContactId').innerHTML = '';
    document.getElementById('overlayShowContactId').innerHTML += generateOverlayShowContactHTML(showId);
    document.getElementById('overlayShowContact2Id').classList.add('d-none');
    document.getElementById('overlayShowContactId').classList.remove('d-none');
    document.getElementById('overlayShowContactId').classList.add('overlayShowContactIncl');
}

function contactShowContact2(showId) {
    // document.getElementById('overlayShowContactId').classList.add('d-none');
    document.getElementById('overlayShowContact2Id').innerHTML = '';
    document.getElementById('overlayShowContact2Id').innerHTML += generateOverlayShowContact2HTML(showId);
    document.getElementById('overlayShowContact2Id').classList.remove('d-none');
    console.log('contactShowContact2:', showId)
    // document.getElementById('overlayShowContact2Id').classList.add('overlayShowContactIncl');
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
            // document.getElementById('overlayShowContact2Id').classList.add('d-none');
            contactShowContact(i);
        }
    }
}

function showNameToEdit2(name) {
    for ( let i = 0; i < contactdata.length; i = i + 5 ) {
        if (contactdata[i] == name) {
            showId = i;
            console.log('Edit-2 RD')
            // document.getElementById('overlayShowContactId').classList.add('d-none');
            contactShowContact2(i);
        }
    }
}