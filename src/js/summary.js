async function init() {
    await includeHTML();
        // document.getElementById('MasterContainerDefaultPageId').innerHTML = 'Herzlich willkommen!';
    // await downloadFromServer(); 
    // users = JSON.parse(backend.getItem('users')) || [];
    // backend.setItem('Test', 'Hallo');
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

    function currentUser() {
        currentUser = parseInt(localStorage.getItem('currentUser'));
      }

    function greet() {
        document.getElementById('summary-userName').innerHTML = `
        <h3>${users[currentUser].name}</h3>`;
      }
/**
 * This function is used to drop down navbar after click on avatar.
 */
function genaretDropDown() {
    let dropDownProfile = document.getElementById('dropdown-links').classList;
    if (dropDownProfile.contains('dNon')) {
        dropDownProfile.remove('dNon');
    } else {
        dropDownProfile.add('dNon');
    }
}
function genaretDropDownMobile() {
    let dropDownProfile = document.getElementById('mobile-dropdown-links').classList;
    if (dropDownProfile.contains('dNon')) {
        dropDownProfile.remove('dNon');
    } else {
        dropDownProfile.add('dNon');
    }
}

   /* greet() beim LogIn oder Signup onclik=greet() */ 
// function greet(x) {
//     document.getElementById('summary-userName').innerHTML = '${users[name]}';
// }


function taskTotal() {
    let sum = 4;
    sum++;
    return document.getElementById('task-counter-all').innerHTML = '${sum}';
}


