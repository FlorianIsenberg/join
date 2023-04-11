let currentDraggedElement;
let searchedTaskArray = [];
let colors = [];
let categorys = ['Marketing', 'Sales', 'Design', 'Media' , 'Backoffice' ,];
let newTask = [];


let todos = [{

  id: 0,
  title: 'Website redesign',
  description: 'Modify the contents of the main website..',
  date: '14.03.2023',
  priority: 'low',
  priorityimg: ['../img/icons/greenarrowsdown.svg', '../img/icons/urgentorangenote.svg', '../img/icons/mediumbuttonyellow.svg'],
  assignedTo: ['Sven Müller'],
  department: 'DESIGN',
  taskimage: ['../img/icons/design.svg'],
  subtasks: [],
  subtasksDone: "0/2 Done",
  subtasks: "0",
  tasklength: "2",
  category: 'todo'
},
{
  id: 1,
  title: 'Call potential clients',
  description: 'Make the product presentation to prospective buyers',
  date: '01.03.23',
  priority: 'high',
  priorityimg: ['../img/icons/greenarrowsdown.svg', '../img/icons/urgentorangenote.svg', '../img/icons/mediumbuttonyellow.svg'],
  assignedTo: ['Alex Sam'],
  department: 'SALES',
  taskimage: ['../img/icons/sales.svg'],
  subtasks: [],
  subtasksDone: "2/3 Done",
  subtasks: "2",
  tasklength: "3",
  category: 'inprogress',
},
{
  id: 2,
  title: 'Accounting invoices',
  description: 'Write open invoices for customer',
  date: '18.03.2023',
  priority: 'medium',
  priorityimg: ['../img/icons/greenarrowsdown.svg', '../img/icons/urgentorangenote.svg', '../img/icons/mediumbuttonyellow.svg'],
  assignedTo: ['Mark Becker',], 
  department: 'BACKOFFICE',
  taskimage: ['../img/icons/backoffice.svg'],
  subtasks: [],
  subtasksDone: "1/2 Done",
  subtasks: "1",
  tasklength: "2",
  category: 'awaitingfeedback',
},
{
  id: 3,
  title: 'Video cut',
  description: 'Edit the new company video',
  date: '',
  priority: 'medium',
  priorityimg: ['../img/icons/greenarrowsdown.svg', '../img/icons/urgentorangenote.svg', '../img/icons/mediumbuttonyellow.svg'],
  assignedTo: ['Hans Kaiser'],
  department: 'MEDIA',
  taskimage: ['../img/icons/media.svg'],
  subtasks: [],
  subtasksDone: "0/1 Done",
  subtasks: "0",
  tasklength: "1",
  category: 'awaitingfeedback',
},
{
  id: 4,
  title: 'Social media strategy',
  description: 'Develop an ad campaign for brand positioning',
  date: '',
  priority: 'low',
  priorityimg: ['../img/icons/greenarrowsdown.svg', '../img/icons/urgentorangenote.svg', '../img/icons/mediumbuttonyellow.svg'],
  assignedTo: ['Bernd Ziegler'],
  department: 'MARKETING',
  taskimage: ['../img/icons/marketing.svg'],
  subtasks: [],
  subtasksDone: "5/5 Done",
  subtasks: "5",
  tasklength: "5",
  category: 'done',
},
{
    id: 5,
    title: '',
    description: '',
    date: '',
    priority: '',
    priorityimg: ['../img/icons/greenarrowsdown.svg', '../img/icons/urgentorangenote.svg', '../img/icons/mediumbuttonyellow.svg'],
    assignedTo: [''],
    department: [],
    taskimage: '',
    subtasks: [],
    subtasksDone: ["/ Done"],
    subtasks: "",
    tasklength: "",
    category: ['todo', 'in progress', 'awaiting feedback', ],
},
];


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
};

setURL("https://gruppe-07i.developerakademie.net/smallest_backend_ever");


async function init() {

    await downloadFromServer();
    contactdata = JSON.parse(backend.getItem('cData')) || [];
  // cDataCounter = (contactdata.length / 5);
}





function updateHTML() {
    let todo = todos.filter(t => t['category'] == 'todo');
    let inprogress = todos.filter(t => t['category'] == 'inprogress');
    let awaitingfeedback = todos.filter(t => t['category'] == 'awaitingfeedback');
    let done = todos.filter(t => t['category'] == 'done');

    document.getElementById('todo').innerHTML = '';
    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
        updateProgressBar(element);
    }

    document.getElementById('inprogress').innerHTML = '';
    for (let index = 0; index < inprogress.length; index++) {
        const element = inprogress[index];
        document.getElementById('inprogress').innerHTML += generateTodoHTML(element);
        updateProgressBar(element);
    }

    document.getElementById('awaitingfeedback').innerHTML = '';
    for (let index = 0; index < awaitingfeedback.length; index++) {
        const element = awaitingfeedback[index];
        document.getElementById('awaitingfeedback').innerHTML += generateTodoHTML(element);
        updateProgressBar(element);
    }

    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
        updateProgressBar(element);
    }
}


function startDragging(id) {
  currentDraggedElement = id;
  dragStart(id);
}

function dragStart(id){
 document.getElementById(`${id}`).classList.add('dragging');
}



function generateTodoHTML(element) {
    return `
    <div class="notesmain drag" id="${element['id']}" draggable="true" ondragstart="startDragging(${element['id']})" onclick="opentoDoForEdit(${element['id']})">
      <div class="notesection">
      <span class="departmentdesign" id="departmentdesign">${element.department}</span>
      </div>
      <div class="noteheadlinecontainer">
      <h2 class="noteheadline">${element.title}</h2>
      </div>
      <div class="note">
      <span class="tmodifythecontents">${element.description}</span> 
      <div class="loadingbarandspan">
        <div class="progressloadingbar">
        <div class="progress">
        <div class="progressbarline" id="bar${element.id}" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
        <span class="halfdone">${element.subtasksDone}</span>
        </div>    
      </div>
    </div>
      <div class="usericons">
      <div class="${colorClass} member" id="member">AS</div>
      <img class="greenarrowdown" src="../img/icons/greenarrowsdown.svg" alt="doublea arrow green down">
      </div>
`;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    let task = todos.find(t=> t.id == currentDraggedElement);
    task.category = category;
    todos = todos.filter(t => t.id != task.id).concat(task);
    updateHTML();
}

function highlight(id) {
    document.getElementById(id).classList.add("highlight");
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

function AddCreateContact() {
    document.getElementById('addTaskButton').innerHTML += generateSuccessbuttonHTML();
    document.getElementById('addTaskButton').classList.remove('d-none');
    document.getElementById('addTaskButton').classList.remove('showSuccessbuttonoutcl');
    document.getElementById('addTaskButton').classList.add('showSuccessbuttonincl');
    setTimeout(function(){document.getElementById('mastercontainerid').classList.add('d-none')}, 1000);
    setTimeout(contactShowContact(), 1000);
    
    setTimeout(function(){document.getElementById('addTaskButton').classList.add('showSuccessbuttonincl')}, 1000);

    setTimeout(function(){document.getElementById('addTaskButton').classList.add('showSuccessbuttonoutcl')}, 2000);

    setTimeout(function(){document.getElementById('addTaskButton').classList.add('d-none')}, 2250);

}

function overlayAddContact() {
    document.getElementById('mastercontainerid').innerHTML += generateOverlayAddContactHTML();
    document.getElementById('mastercontainerid').classList.remove('overlayAddContactoutcl');
    document.getElementById('mastercontainerid').classList.add('overlayAddContactincl');
    document.getElementById('mastercontainerid').classList.remove('d-none');
   
}

function clearTask() {
    document.getElementById('titleinput').value = '';
    document.getElementById('descriptioninput').value = '';
    document.getElementById('categoryinput').innerHTML = '';
    document.getElementById('inputselection').value = '';
    document.getElementById('dateinput').value = '';
    document.getElementById('urgent').innerHTML = '';
    document.getElementById('medium').innerHTML = '';
    document.getElementById('low').innerHTML = '';
    document.getElementById('subtask').value = '';
    addTask();
}

function closeTask(){
    document.getElementById('mastercontainerid').classList.add('hide');
}

function openNewTask() {
    document.getElementById('mastercontainerid').classList.remove('hide');
}

function closepopupcontainer() {
    document.getElementById('mastertaskcontainerid').classList.add('hide');
}


function priorityButtonChange(priority) {
  if (priority === 'urgent') {
    let urgentButton = document.getElementById('urgent');
    let mediumButton = document.getElementById('medium');
    let lowButton = document.getElementById('low');
    if (urgentButton.src === '../img/icons/urgent.svg') {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/low.svg';
    } else {
      urgentButton.src = '../img/icons/urgentbuttonorange.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/low.svg';
    }
  } else if (priority === 'medium') {
    let urgentButton = document.getElementById('urgent');
    let mediumButton = document.getElementById('medium');
    let lowButton = document.getElementById('low');
    if (mediumButton.src === '../img/icons/medium.svg') {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/mediumbuttonyellow.svg';
      lowButton.src = '../img/icons/low.svg';
    } else {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/mediumbuttonyellow.svg';
      lowButton.src = '../img/icons/low.svg';
    }
  } else if (priority === 'low') {
    let urgentButton = document.getElementById('urgent');
    let mediumButton = document.getElementById('medium');
    let lowButton = document.getElementById('low');
    if (lowButton.src === '../img/icons/lowbuttongreen.svg') {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/lowbuttongreen.svg';
    } else {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/lowbuttongreen.svg';
    }
  }
}

function priorityButtonChange2(priority) {
  if (priority === 'urgent2') {
    let urgentButton = document.getElementById('urgent2');
    let mediumButton = document.getElementById('medium2');
    let lowButton = document.getElementById('low2');
    if (urgentButton.src === '../img/icons/urgent.svg') {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/low.svg';
    } else {
      urgentButton.src = '../img/icons/urgentbuttonorange.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/low.svg';
    }
  } else if (priority === 'medium2') {
    let urgentButton = document.getElementById('urgent2');
    let mediumButton = document.getElementById('medium2');
    let lowButton = document.getElementById('low2');
    if (mediumButton.src === '../img/icons/medium.svg') {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/mediumbuttonyellow.svg';
      lowButton.src = '../img/icons/low.svg';
    } else {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/mediumbuttonyellow.svg';
      lowButton.src = '../img/icons/low.svg';
    }
  } else if (priority === 'low2') {
    let urgentButton = document.getElementById('urgent2');
    let mediumButton = document.getElementById('medium2');
    let lowButton = document.getElementById('low2');
    if (lowButton.src === '../img/icons/lowbuttongreen.svg') {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/lowbuttongreen.svg';
    } else {
      urgentButton.src = '../img/icons/urgent.svg';
      mediumButton.src = '../img/icons/medium.svg';
      lowButton.src = '../img/icons/lowbuttongreen.svg';
    }
  }
}


function opentoDoForEdit(id) {
    let element = todos.find(t=> t.id == id);
    document.getElementById('popupnotemastercontainerid').classList.add('show');
    generateNoteHTML(element);
}

function openNote() {
    document.getElementById('note1').classList.remove('hide');
    document.getElementById('popupnoteid').classList.remove('hide');
}
      
function editNote(id) {
    let element = todos.find(t=> t.id == id);
    document.getElementById('popupnotemastercontainerid').classList.add('hide');
    document.getElementById('mastertaskcontainerid').classList.add('show');
    generateNotePagetwoHTML(element);
}

function closeNoteForEdit() {
    document.getElementById('popupnotemastercontainerid').classList.remove('show');
    document.getElementById('popupnoteid').classList.add('hide');
}

function hideCategory() {
    document.getElementById('categoryhideid').classList.add('hide');
}

 

function searchNotesByTitle(id) {
    let notes = document.querySelectorAll(id);
    notes.forEach((note) => {
      let title = note.querySelector('title').textContent;
      if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
        note.style.display = 'block';
      } else {
        note.style.display = 'none';
      }
    });
  }

  function searchNotesByTitle(searchTerm) {
    const notes = document.querySelectorAll('notesmain');
    notes.forEach((note) => {
      const title = note.querySelector('noteheadline').textContent;
      if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
        note.style.display = 'block';
      } else {
        note.style.display = 'none';
      }
    });
  }

  function searchNotesNew() {
    
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
  
    let searchs = document.getElementById('draganddropsectionid');
    searchs.innerHTML = ``;
  
    for (let i = 0; i < currentDraggedElement.length; i++) {
        let title = currentDraggedElement[i].title;
        if (title.toLowerCase().includes(search)) {
            searchNotesNew = currentDraggedElement[i]
            document.getElementsByClassName("draganddropsectionid")[0].innerHTML += generateNewNoteHTML(searchNotesNew, i);
            document.getElementById('draganddropsectionid').innerHTML ='';
        }
    }
  }

  function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    console.log(search)
  
    let list = document.getElementById('list');
    list.innerHTML = ``;
    let searchResults = todos.filter(s => s.title.startsWith(search));
      console.log(searchResults);
    
  }


function toggleCategory() {
  const dropdown = document.getElementById("categoryhideid");
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
  } else {
    dropdown.classList.add("hide");
  }
}



