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
    let task = todos[currentDraggedElement];
    task.category = category;
    todos = todos.filter(t => t.id != task.id).concat(task);
    updateHTML();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}
function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}



//function AddCreateContact() {
    document.getElementById('addTaskButton').innerHTML += generateSuccessbuttonHTML();
    document.getElementById('addTaskButton').classList.remove('d-none');
    document.getElementById('addTaskButton').classList.remove('showSuccessbuttonoutcl');
    document.getElementById('addTaskButton').classList.add('showSuccessbuttonincl');
    setTimeout(function(){document.getElementById('mastercontainerid').classList.add('d-none')}, 1000);
    setTimeout(contactShowContact(), 1000);
    
    setTimeout(function(){document.getElementById('addTaskButton').classList.add('showSuccessbuttonincl')}, 1000);

    setTimeout(function(){document.getElementById('addTaskButton').classList.add('showSuccessbuttonoutcl')}, 2000);

    setTimeout(function(){document.getElementById('addTaskButton').classList.add('d-none')}, 2250);


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

function openNewTask() {
    document.getElementById('mastercontainerid').classList.remove('hide');
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
    let element = todos[id];
    document.getElementById('popupnotemastercontainerid').classList.add('show');
    generateNoteHTML(element);
}

function openNote() {
    document.getElementById('note1').classList.remove('hide');
    //document.getElementById('popupnoteid').classList.add('hide');
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

function closeNoteForEdit(id) {
    document.getElementById('popupnotemastercontainerid').classList.remove('show');
    document.getElementById('popupnoteid').classList.add('hide');

}

function okButtonCloseAndSafeNote() {
    document.getElementById('taskcontainerid').classList.add('hide')
    document.getElementById('note1').classList.add('hide');
    document.getElementById('note1').classList.remove('hide');
}

function createNewToDo() {
    let todo = document.getElementById('titleinput').value;
}


function addTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
    document.getElementById('mastercontainerid').classList.remove('hide');
    document.getElementById('mastercontainerid').innerHTML = `
    <div class="mastercontainer hide movingcontainertoleftcl" id="mastercontainerid">
    <div class="headaddtask">
    <h1 class="taddtask">Add Task</h1>
    <img src="./src/img/icons/closecross.svg" onclick="closeTask()" alt="close button x" id=closebuttonidaddtask class="closebuttonclassaddtask">
    </div>
            <div class="container-selections">
                <div class="container-left">
                    <span class="title">Title</span>
                    <input class="titleinput" placeholder="Enter a title" text="text" id="titleinput">
                    <span class="description">Description</span>
                        <div class="descriptionandimage">
                            <input class="descriptioninput" placeholder="Enter a Description" text="text" id="descriptioninput">
                            <img src="./src/img/icons/Recurso11.svg" alt="three lines drop down" class="threelinesdropdown">
                        </div>
                            <span class="category">Category</span>
                                <div class="inputfieldandimage"id="opencategory">
                                    <select class="categoryinput">
                                        <option disabled selected class="categoryinput"id="categoryinput">Select task category</option>
                                        <option>New category<input type="checkbox" id="checkboxcategory1"></option>
                                        <option>Sales<input type="checkbox" id="checkboxcategory2"></option>
                                        <option>Backoffice<input type="checkbox" id="checkboxcategory3"></option>
                                        <option>Marketing<input type="checkbox" id="checkboxcategory4"></option>
                                        <option>Design<input type="checkbox" id="checkboxcategory5"></option>
                                        <option>Media<input type="checkbox" id="checkboxcategory6"></option>
                                        </select>
                                </div> 
                                <span class="assignedto">Assigned to</span>
                                    <div class="inputfieldandimage" id="inputselection">
                                        <select class="dropdownassignedto">
                                            <option disabled selected>Select contacts to assign</option>
                                            <option>You<input type="checkbox" id="checkboxassignetto1"></option> 
                                            <option>Anton Meyer<input type="checkbox" id="checkboxassignetto2"></option>
                                            <option>Anja Schulz<input type="checkbox" id="checkboxassignetto3"></option>
                                            <option>David Eisenberg<input type="checkbox" id="checkboxassignetto4"></option>
                                            <option>Eva Fischer<input type="checkbox" id="checkboxassignetto5"></option>
                                            <option>Marius Müller<input type="checkbox" id="checkboxassignetto6"></option>
                                            <option>Peter Jackson<input type="checkbox" id="checkboxassignetto7"></option>
                                            </select>
                                        </div>              
                </div>
                                        <img src="./src/img/icons/Vector4line.svg" alt="verticalline" class="verticalline">
                <div class="container-right">
                    <span class="duedate">Due date</span>
                        <div class="dateinputandimage">
                        <input class="dateinput" placeholder="dd/mm/yyyy" text="date" id="dateinput">
                        <img src="./src/img/icons/Vectorkalender.svg" alt="datecalendarsymbol" class="datecalendarsymbol">
                        </div>
                            <div class="Prioritys">
                                <span class="prio">Prio</span>
                            </div>
                                <div class="prio-selections">
                                    <img src="./src/img/icons/urgent.svg" alt="urgent priority symbol" onclick="urgentButtonChange()" class="urgentpriority" id="urgent">
                                    <img src="./src/img/icons/medium.svg" alt="medium priority symbol" onclick="mediumButtonChange()" class="mediumpriority" id="medium">  
                                    <img src="./src/img/icons/low.svg" alt="low priority symbol" onclick="lowButtonChange()" class="lowpriority" id="low">   
                                </div>
                                <div class="subtasks-selection">
                                    <span class="subtasktitle">Subtasks</span>
                                </div>
                                    <div class="addnewsubtaskinputandimage">
                                        <input text="text" placeholder="Add new subtask" class="subtask" id="subtask">
                                        <img src="./src/img/icons/Vectorplusblack.svg" alt="blackplusbutton" class="blackplusbuttonsubtasks">
                                    </div>
                                    <div class="rectangleandsubtask1">
                                        <input type="checkbox"  alt="rectangle">
                                        <span class="subtask1">Subtask 1</span>
                                    </div>
                                        <div class="clearandcreatetask">
                                            <img src="./src/img/icons/clearx.svg" alt="clear x button" onclick="clearTask()" id="clear" class="clearxbutton">
                                            <img src="./src/img/icons/createtaskbutton.svg" alt="button create task">
                                        </div>
                </div>
            </div>
    </div></div>
    `;
}

function deleteTasks() {
    document.getElementById('draganddropsectionid').innerHTML = '';
}

function generateNoteHTML(element) {
    document.getElementById('popupnoteid').innerHTML = `
    
        <img src="./src/img/icons/closecross.svg" alt="close x button" onclick="closeNoteForEdit()" id="closenote" class="closenotebuttonx">
        <img src="${element.taskimage}" alt="label sale" class="labelimage">
        <span class="departmentdesign2"></span>
        <h2 class="noteheadline2">${element.title}</h2>
        <span class="tmodifythecontents2">${element.description}</span>
        <span class="duedate2" value="18-03-1987"><b>Due date: ${element.date}</b></span>
            <div class="prio2">
            <span class="priority2<"><b>Priority:</b></span>
            <img src="./src/img/icons/urgentorangenote.svg" alt="urgent priority symbol" class="urgentpriority2" id="urgentnote">
            </div>
                <span class="assignedto2"><b>Assigned To:</b></span>
        
        <div class="chosenuser">
            <div class="usericonsnote">
                <img src="src/img/icons/de2.svg" alt="usericon DE">
                <img src="src/img/icons/bz2.svg" alt="usericon BZ">
                <img src="src/img/icons/mb2.svg" alt="usericon MB">
                <img src="src/img/icons/sf.svg" alt="usericon SF">
            </div>
            <div class="names">
                <label>David Eisenberg</label>
                <label>Benedikt Ziegler</label>
                <label>Marcel Bauer</label>
                <label>Stefanie Farber</label>
            </div>    
        </div>
        <img src="src/img/icons/editbuttonpencil.svg" alt="edit button" onclick="editNote()" class="editbutton" id="editbuttonid">
    </div>
    </div>
        `;
}

function generateNotePagetwoHTML(element) {
    document.getElementById('mastertaskcontainerid').innerHTML = `
          <div class="containeropennote">
            <img src="./src/img/icons/closecross.svg" alt="close x button" onclick="closetoDoForEdit(${todos['id']})" id="close" class="closebuttonx">
            <div class="title">
              <span class="title">Titel</span>
            </div>
            <input class="titleinput" placeholder="Enter a title" text="text" id="titleinput" value="${todos}">
            <div class="description">
              <span class="description">Description</span>
            </div>
            <div class="descriptionandimage">
              <input class="descriptioninput" placeholder="Enter a Description" text="text" id="descriptioninput" value="${todos.description}">
              <img src="./src/img/icons/Recurso11.svg" alt="three lines drop down" class="threelinesdropdown">
            </div>
            <div class="duedate">
              <span class="duedate">Due date</span>
            </div>
            <div class="dateinputandimage">
              <input class="dateinput" placeholder="dd/mm/yyyy" text="date" id="dateinput" value="${todos.date}">
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

let note = document.getElementById('id');
noteIds.forEach(id => {
    const element = document.getElementById(id);
  
  note.addEventListener('dragstart', () => {
    note.classList.add('dragging');
  });

  note.addEventListener('dragend', () => {
    note.classList.remove('dragging');
  });
});
