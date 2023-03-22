
 

 
 
 /**
 * This function is used to drop down navbar after click on avatar.
 */
    
function genaretDropDown() {
    let dropDownProfile = document.getElementById('dropdown-links').classList;
    if (dropDownProfile.contains('d-none')) {
        dropDownProfile.remove('d-none');
    } else {
        dropDownProfile.add('d-none');
    }
}
function genaretDropDownMobile() {
    let dropDownProfile = document.getElementById('mobile-dropdown-links').classList;
    if (dropDownProfile.contains('d-none')) {
        dropDownProfile.remove('d-none');
    } else {
        dropDownProfile.add('d-none');
    }
}
//  function currentUser() {
//         currentUser = parseInt(localStorage.getItem('currentUser'));
//       }
    function currentUser() {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(user);
    }

    function greetUser() {
        document.getElementById('summary-userName').innerHTML = `${user.name}`;
        // <h3>${users[currentUser].name}</h3>`;
        console.log(user.name);
      }
    function greetGuest() {
        return  `
            <h3>Guestuser</h3>`;
    }
    
    function toPageBoard(){
            window.location.href = './board.html'
        }
    // function renderWelcomeGuest() {
    //         return `
    //             <span class="welcomeUser">Guestuser</span>`;
    //     }
        
    // function renderWelcome(user) {
    //         return `
    //             <span class="welcomeUser">${user}</span>
    //             `;
    //     }
 // soll bei Button create task in addtask.html hinzugefügt werden: onklick= "taskTotalplus()"
    function taskTotalplus() {
        let taskTotalCurrent = document.getElementById('sumTasksInBoard').innerHTML;
        let sum = taskTotalCurrent++;
        return`
         document.getElementById('sumTasksInBoard').innerHTML = '${sum}' 
         `;
        console.log(sum);
    }
    // soll bei button task löschen  onklick= "taskTotalminus()" hinzugefüg werden, finde ich leider nicht???
    // function taskTotalminus() {
    //     let taskTotalCurrent = document.getElementById('sumTasksInBoard').innerHTML;
    //     let sum = taskTotalCurrent--;
    //     return`
    //      document.getElementById('sumTasksInBoard').innerHTML = '${sum}' 
    //      `;
    //     console.log(sum);
        
    // }

    function sumTasksInProgress() {
        let tasksInProgressCurrent = document.getElementById('sumTasksInProgress').innerHTML;
        let sum = tasksInProgressCurrent++;
        return`
         document.getElementById('sumTasksInProgress').innerHTML = '${sum}' 
         `;
        console.log(sum);
    }
    


   /* greet() beim LogIn oder Signup onclik=greet() */ 
// function greet(x) {
//     document.getElementById('summary-userName').innerHTML = '${users[name]}';
// }





// setURL('https://gruppe-07i.developerakademie.net/smallest_backend_ever');

// async function init() {
//     // await includeHTML();
//         // document.getElementById('MasterContainerDefaultPageId').innerHTML = 'Herzlich willkommen!';
//     await downloadFromServer(); 
//     users = JSON.parse(backend.getItem('users')) || [];
//     // backend.setItem('Test', 'Hallo');
//     }


   
    
    // async function includeHTML() {
    //     let includeElements = document.querySelectorAll('[w3-include-html]');
    //     for (let i = 0; i < includeElements.length; i++) {
    //         const element = includeElements[i];
    //         file = element.getAttribute("w3-include-html"); // "includes/header.html"
    //         let resp = await fetch(file);
    //         if (resp.ok) {
    //             element.innerHTML = await resp.text();
    //         } else {
    //             element.innerHTML = 'Page not found';
    //         }
    //     }
    // }