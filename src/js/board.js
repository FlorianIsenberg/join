let todos = [{
    id: 0,
    title: 'Website redesign',
    description: 'Modify the contents of the main website..',
    date: '14.03.2023',
    priority: 'low',
    assignedTo: ['Sven Müller'],
    department: 'Design',
    taskimage: './src/img/icons/design.svg',
    subtasks: [],
    subtasksDone: [1 / 2],
    category: 'todo'
},
{
    id: 1,
    title: 'Call potential clients',
    description: 'Make the product presentation to prospective buyers',
    date: '01.03.23',
    priority: 'high',
    assignedTo: ['Alex Sam'],
    department: 'Sales',
    taskimage: './src/img/icons/sales.svg',
    subtasks: [],
    subtasksDone: [],
    category: 'inprogress',
},
{
    id: 2,
    title: 'Accounting invoices',
    description: 'Write open invoices for customer',
    date: '18.03.2023',
    priority: 'medium',
    assignedTo: ['Mark Becker'],
    department: 'Backoffice',
    taskimage: './src/img/icons/backoffice.svg',
    subtasks: [],
    subtasksDone: [],
    category: 'awaitingfeedback',
},
{
    id: 3,
    title: 'Video cut',
    description: 'Edit the new company video',
    date: '',
    priority: 'medium',
    assignedTo: ['Hans Kaiser'],
    department: 'Media',
    taskimage: './src/img/icons/media.svg',
    subtasks: [],
    subtasksDone: [],
    category: 'awaitingfeedback',
},
{
    id: 4,
    title: 'Social media strategy',
    description: 'Develop an ad campaign for brand positioning',
    date: '',
    priority: 'low',
    assignedTo: ['Bernd Ziegler'],
    department: 'Marketing',
    taskimage: './src/img/icons/marketing.svg',
    subtasks: [],
    subtasksDone: [],
    category: 'done',
}
];

let currentDraggedElement;
let prios = [];
let newPriority; 
let searchedTaskArray = [];
let noteIds = ['note1', 'note2', 'note3', 'note4','note6', 'note7','note8','note9','note10',];
let tasks=[];
load();

function updateHTML() {
    let todo = todos.filter(t => t['category'] == 'todo');
    let inprogress = todos.filter(t => t['category'] == 'inprogress');
    let awaitingfeedback = todos.filter(t => t['category'] == 'awaitingfeedback');
    let done = todos.filter(t => t['category'] == 'done');

    document.getElementById('todo').innerHTML = '';
    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
    }

    document.getElementById('inprogress').innerHTML = '';
    for (let index = 0; index < inprogress.length; index++) {
        const element = inprogress[index];
        document.getElementById('inprogress').innerHTML += generateTodoHTML(element);
    }

    document.getElementById('awaitingfeedback').innerHTML = '';
    for (let index = 0; index < awaitingfeedback.length; index++) {
        const element = awaitingfeedback[index];
        document.getElementById('awaitingfeedback').innerHTML += generateTodoHTML(element);
    }

    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
    }
}

function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    console.log(search)

    let list = document.getElementById('list');
    list.innerHTML = ``;

    for (let index = 0; index < todos.length; index++) {
        let titel = todos[index];                         
        if (titel.toLowerCase().includes(search)) {
        list.innerHTML += `<li>${todos.titel}</li>`;
    }
}
}



function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `
    <div class="notesmain" id="${element['id']}" draggable="true" ondragstart="startDragging(${element['id']})" onclick="opentoDoForEdit(${element['id']})">
    <div class="notesection">
    <span class="departmentdesign">${element.department}</span>
    
    </div>
    <div class="noteheadlinecontainer">
        <h2 class="noteheadline">${element.title}</h2>
    </div>
        <div class="note">
            <span class="tmodifythecontents">${element.description}</span> 
                <div class="loadingbarandspan">
                    <div class="progressloadingbar">
                        <img class="progressloadingbarimage" src="./src/img/icons/progress.svg" alt="Progressbar">
                        <span class="halfdone">${element.subtasksDone}</span>
                    </div>    
    </div>
</div>
        <div class="usericons">
            <img src="./src/img/icons/sm.svg" alt="User SM">
            <img src="./src/img/icons/mv.svg" alt="User MV" class="iconsinicons">
            <img src="./src/img/icons/ef.svg" alt="User EF" class="iconsinicons">
            <img class="greenarrowdown" src="./src/img/icons/greenarrowsdown.svg" alt="doublea arrow green down">
        </div>
</div>`;
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


function urgentButtonChange() {
    if (document.getElementById("urgent").src == "./src/img/icons/urgentbuttonorange.svg") {
        document.getElementById("urgent").src = "./src/img/icons/urgent.svg";
    } else {
        document.getElementById("urgent").src = "./src/img/icons/urgentbuttonorange.svg";
    }
}


function returnUrgentButtonChange() {
    if (document.getElementById("urgent").src == "./src/img/icons/urgent.svg") {
        document.getElementById("urgent").src = "./src/img/icons/urgentbuttonorange.svg";
    } else {
        document.getElementById("urgent").src = "./src/img/icons/urgent.svg";
    }
}


function mediumButtonChange() {
    if (document.getElementById("medium").src == "./src/img/icons/mediumbuttonyellow.svg") {
        document.getElementById("medium").src = "./src/img/icons/medium.svg";
    } else {
        document.getElementById("medium").src = "./src/img/icons/mediumbuttonyellow.svg";
    }
}

function lowButtonChange() {
    if (document.getElementById("low").src == "./src/img/icons/lowbuttongreen.svg") {
        document.getElementById("low").src = "./src/img/icons/low.svg";
    } else {
        document.getElementById("low").src = "./src/img/icons/lowbuttongreen.svg";
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

function closetoDoForEdit() {
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', function() {
      const masterTaskContainer = document.getElementById('mastertaskcontainerid');
      const taskContainer = document.getElementById('taskcontainerid');
      masterTaskContainer.style.display = "none";
      taskContainer.style.display = "none";
    });
  }


function editNote(id) {
    let element = todos[id];
    document.getElementById('popupnotemastercontainerid').classList.add('hide');
    document.getElementById('mastertaskcontainerid').classList.add('show');
    generateNotePagetwoHTML(element);
}

function closeNoteForEdit() {
    document.getElementById('popupnotemastercontainerid').classList.remove('show');
    document.getElementById('popupnoteid').classList.add('hide');
}

function okButtonCloseAndSafeNote() {
    document.getElementById('taskcontainerid').classList.add('hide')
    document.getElementById('note1').classList.add('hide');
    document.getElementById('note1').classList.remove('hide');
}



function hideCategory() {
    document.getElementById('categoryhideid').classList.add('hide');
}

function deleteTasks() {
    document.getElementById('draganddropsectionid').innerHTML = '';
}


  function generateNewNoteHTML() {
    const title = document.getElementById('titleinput').value;
    const description = document.getElementById('descriptioninput').value;
    const date = document.getElementById('dateinput').value;
    const priority = document.querySelector('.prio-selections .active').alt;
    const assignedTo = document.getElementById('assignedto').value;
  
    const newNote = {
      id: generateUniqueId(), 
      title: title,
      description: description,
      date: date,
      priority: priority,
      assignedTo: assignedTo
    };

    function save() {
        let titlesAsText = JSON.stringify(title);
        localStorage.setItem("title", titlesAsText);
        let descriptionAsText = JSON.stringify(description);
        localStorage.setItem("description", descriptionAsText);
      }
      
      function load() {
        let titleAsText = localStorage.getItem("title");
        let descriptionAsText = localStorage.getItem("description");
        if (titleAsText && descriptionAsText) {
          title = JSON.parse(titleAsText);
          description = JSON.parse(descriptionAsText);
        }
      }

      updateHTML();

  document.getElementById('draganddropsectionid').innerHTML = `
  <div class="containeropennote">
  <img src="./src/img/icons/closecross.svg" alt="close x button" onclick="closetoDoForEdit(${todos['id']})" id="close" class="closebuttonx">
  <div class="title">
    <span class="title">Titel</span>
  </div>
  <input class="titleinput" placeholder="Enter a title" type="text" id="titleinput" value="${todos['title']}">${todos['title']}
  <div class="description">
    <span class="description">Description</span>
  </div>
  <div class="descriptionandimage">
    <input class="descriptioninput" placeholder="Enter a Description" text="text" id="descriptioninput" value="${todos['description']}">
    <img src="./src/img/icons/Recurso11.svg" alt="three lines drop down" class="threelinesdropdown">
  </div>
  <div class="duedate">
    <span class="duedate">Due date</span>
  </div>
  <div class="dateinputandimage">
    <input class="dateinput" placeholder="dd/mm/yyyy" text="date" required id="dateinput" value="${todos.date}">
    <img src="./src/img/icons/Vectorkalender.svg" alt="datecalendarsymbol" class="datecalendarsymbol">
  </div>
  <div class="Prioritys">
    <span class="prio">Prio</span>
  </div>
  <div class="prio-selections">
    <img src="./src/img/icons/urgent.svg" alt="urgent priority symbol" onclick="urgentButtonChange()" class="urgentpriority ${todos.priority === 'urgent' ? 'active' : ''}" id="urgent">
    <img src="./src/img/icons/medium.svg" alt="medium priority symbol" onclick="mediumButtonChange()" class="mediumpriority ${todos.priority === 'medium' ? 'active' : ''}" id="medium">
    <img src="./src/img/icons/low.svg" alt="low priority symbol" onclick="lowButtonChange()" class="lowpriority ${todos.priority === 'low' ? 'active' : ''}" id="low">
  </div>
  <div class="assignedto">
    <span class="assignedto">Assigned to</span>
  </div>
  <div class="inputfieldandimage" id="inputselection">
    <select class="dropdownassignedto" id="assignedto">
      <option disabled>Select contacts to assign</option>
      <option>Anton Meyer</option>
      <option>Anja Schulz</option>
      <option>David Eisenberg</option>
      <option>Eva Fischer</option>
      <option>Marius Müller</option>
      <option>Peter Jackson</option>
    </select>
  </div>
          <div class="iconsfromusers"></div>
          <img src="./src/img/icons/okbutton.svg" alt="button ok" onclick="okButtonCloseAndSafeNote()"
              class="okbutton" id="okbuttonsafe">
          </div>
  </div>`;
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
    const notes = document.querySelectorAll('.notesmain');
    notes.forEach((note) => {
      const title = note.querySelector('.noteheadline').textContent;
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


  noteIds.forEach(id => {
    letnote = document.getElementById(id);
    
    note.setAttribute('draggable', 'true');
    
    note.ondragstart = function() {
      note.classList.add('dragging');
    };
    
    note.ondragend = function() {
      note.classList.remove('dragging');
    };
  });

 
let element = document.querySelector('notesmain');


element.ondragstart = function(event) {
  event.target.classList.add('dragging');
}

element.ondragend = function(event) {
  event.target.classList.remove('dragging');
}

function toggleCategory() {
  const dropdown = document.getElementById("categoryhideid");
  if (dropdown.classList.contains("hide")) {
    dropdown.classList.remove("hide");
  } else {
    dropdown.classList.add("hide");
  }
}

