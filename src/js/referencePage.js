let users = [];

setURL('https://gruppe-07i.developerakademie.net/smallest_backend_ever');

async function init() {
    // await includeHTML();
        // document.getElementById('MasterContainerDefaultPageId').innerHTML = 'Herzlich willkommen!';
    await downloadFromServer(); 
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    // backend.setItem('Test', 'Hallo');
    // getCurrentUser();
    // renderSummary();
    }


   
    
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
