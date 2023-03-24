let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentUser;

async function initSummary() {
    await init();
    await dataFromServer();
    getCurrentDate();
    greetUser1();
    // renderWelcome();
    // setCurrentUser();
    // returnUsersName()
}
 

async function dataFromServer() {
    setURL('https://gruppe-428.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem("keyTasks")) || [];
    users = JSON.parse(backend.getItem("users")) || [];
    countStatus();
}



function greetUser1() {
    //gemacht
    console.log(1);
    let name= document.getElementById('summary-userName');
    let i= users.findIndex(u=>{
        return u.loggedIn == true;
    })
    if (i !== -1) {
        name.innerText= users[i].name;
        console.log(10);
    }
    else {
        name.innerText= "GuestUser";
        
    }
}



  

//  task-categories sum

function countStatus() {
    console.log(4);
    let statusInprogress = 0;
    let statusFeedback = 0;
    let statusUrgent = 0;
    let statusToDo = 0;
    let statusDone = 0;

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        
        if ( todo.category ==='inprogress') statusInprogress++;
        if ( todo.category === 'awaitingFeedback') statusFeedback++;
        if ( todo.priority === 'urgent') statusUrgent++;
        
        if ( todo.category === 'todo') statusToDo++;
        if ( todo['category'] == "done") statusDone++;        
    }

    //gemacht
    document.getElementById('sumTasksInBoard').innerHTML = `${todos.length}`;
    document.getElementById('sumTasksInProgress').innerHTML = `${statusInprogress}`;
    document.getElementById('sumTasksAwaiting').innerHTML = `${statusFeedback}`;
    document.getElementById('sumTasksUrgent').innerHTML = `${statusUrgent}`;
    document.getElementById('sumTasksTodo').innerHTML = `${statusToDo}`;
    console.log(5);
    document.getElementById('sumTasksDone').innerHTML = `${statusDone}`;
}




/**
 * welcome screen view mobile
 */
function WelcomeScreenMobile() {
    let isLogin = new URLSearchParams(window.location.search);
    if (!isLogin.get("userLogIn")) return;
  
    const windowWidth = window.innerWidth;
    const delay = WELCOME_MSG_TRANS + WELCOME_MSG_DELAY + 10;
  
    if (windowWidth <= MOBILE_MAX_WIDTH) {
      const welcome = document.getElementById("welcome-mobile");
      welcome.classList.remove("display-none");
      setTimeout(() => {
        welcome.classList.add("welcome-mobile-fade");
      }, 1);
      setTimeout(() => {
        welcome.classList.add("display-none");
      }, delay);
    }
  }

//****************************fertige Funktionen***************************************** */

  //  ******This function is used to drop down navbar after click on avatar.   
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
 function getCurrentDate() {
     let year = new Date().getFullYear();
     let month = new Date().getMonth();
     let day = new Date().getDate();
     let hour = new Date().getHours();
     //gemach
     document.getElementById('greet').innerHTML = getGreetings(hour);
     document.getElementById('deadline-date').innerHTML = getFullDate(month, day, year);
 }
 // ******* greetings change depending on the time of the day
 function getGreetings(hour) {
    console.log(6);
     if (hour > 5 && hour < 11) return 'Good morning,';
     if (hour > 11 && hour < 18) return 'Good afternoon,';
     else  return 'Good evening,';
     
 } 
 // 
 function getFullDate(month, day, year) {
    console.log(7);
     let m = months[month];
     let d = day;
     let y = year;
     return `${m} ${d}, ${y}`;
 }

 function toPageBoard() {
    console.log(8);
    window.location.href = './board.html'
}


// function returnUsersName() {
//     console.log(8);
//     // let userMail = localStorage.getItem('joinLoginMail')
//     const usersMail = localStorage.getItem('email');
//     let user = users.find(u => u.email == usersMail)
//     return `
//     document.getElementById('summary-name').innerHTML = user.name; `
// }

// function getCurrentUser() {
//     return JSON.parse(localStorage.getItem("currentUserName"));
// }
// /**
//  * Checking if guest log in, else Loading currentUser and changing welcome message
//  */
// async function setCurrentUser() {
//     // document.getElementById('welcome-name-mobile').innerHTML = escapeHTML(currentUser['name']);
//     document.getElementById('summary-userName').innerHTML = JSON.parse(localStorage.getItem("currentUserName"));
// }

// function greetGuest() {
//     console.log(2);
//     let name= document.getElementById('summary-userName');
//     return `
//     name.innerText= "GuestUser";
//         <span class="welcomeUsername">Guestuser</span>`;
// }
// function renderWelcome(user) {
//     console.log(3);
//     return `
//     name.innerText= ${user};
//        <span class="welcomeUsername">${user}</span>
      
//         `;
// }