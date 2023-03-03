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

}

// NOTE -- Overlaycard: edit contact

function overlayEditContact() {

}