let todos = [{
    id: 0,
    title: 'Website redesign',
    description: 'Modify the contents of the main website..',
    date: '',
    priority: 'low',
    assignedTo: ['Sven Müller'],
    department: 'Design', 
    taskStatus: 'todo',
    subtasks: [],
    subtasksDone: [0.5],
    category: 'todo'   
},
{
    id: 1,
    title: 'Call potential clients',
    description: 'Make the product presentation to prospective buyers',
    date: '',
    priority: 'high',
    assignedTo: ['Alex Sam'],
    department: 'Sales',
    taskStatus: 'inprogress',
    subtasks: [],
    subtasksDone: [],
    category: 'inprogress',  
},
{
    id: 2,
    title: 'Accounting invoices',
    description: 'Write open invoices for customer',
    date: '',
    priority: 'medium',
    assignedTo: ['Mark Becker'],
    department: 'Backoffice',
    taskStatus: 'awaitingfeedback',
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
    taskStatus: 'awaitingfeedback',
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
    taskStatus: 'done',
    subtasks: [],
    subtasksDone: [],
    category: 'done',  
}
];

let currentDraggedElement;

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
    <div class="notesmain" id="note1" draggable="true" ondragstart="startDragging(${element['id']})" onclick="opentoDoForEdit()">
    <div class="notesection">
    <span class="departmentdesign">${element.department}</span>
    <img src="./src/img/icons/design.svg" alt="Designlabel">
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


function closeTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
}

function clearTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
}

function openNewTask() {
    document.getElementById('mastercontainerid').classList.remove('hide');
}



    function urgentButtonChange() {
        if (document.getElementById("urgent").src == "./src/img/icons/urgentbuttonorange.svg"){
            document.getElementById("urgent").src = "./src/img/icons/urgent.svg";
        } else {
            document.getElementById("urgent").src = "./src/img/icons/urgentbuttonorange.svg";
        }
    }


    function returnUrgentButtonChange(){
        if (document.getElementById("urgent").src == "./src/img/icons/urgent.svg"){
            document.getElementById("urgent").src = "./src/img/icons/urgentbuttonorange.svg";
        } else {
            document.getElementById("urgent").src = "./src/img/icons/urgent.svg";
        }
    }
    

    function mediumButtonChange() {
        if (document.getElementById("medium").src == "./src/img/icons/mediumbuttonyellow.svg"){
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


  function opentoDoForEdit() {
    document.getElementById('note1').classList.add('hide')
    document.getElementById('taskcontainerid').classList.add('hide');
    document.getElementById('taskcontainerid').classList.remove('hide');
  }

  function closetoDoForEdit() {
    document.getElementById('taskcontainerid').classList.add('hide')
    document.getElementById('note1').classList.add('hide');
    document.getElementById('note1').classList.remove('hide');
  }

function okButtonCloseAndSafeNote() {
    document.getElementById('taskcontainerid').classList.add('hide')
    document.getElementById('note1').classList.add('hide');
    document.getElementById('note1').classList.remove('hide');
  }
  
function createNewToDo() {
let todo = document.getElementById('titleinput').value;

}

function blurClose() {
    document.getElementById('mastertaskcontainerid').classList.add('hide');
    document.getElementById('note1').classList.add('hide');
    document.getElementById('note1').classList.remove('hide');
}

function addTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
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
                                        <option>New category</option>
                                        <option>Sales<img src="" ></option>
                                        <option>Backoffice</option>
                                        <option>Marketing</option>
                                        <option>Design</option>
                                        <option>Media</option>
                                        </select>
                                </div> 
                                <span class="assignedto">Assigned to</span>
                                    <div class="inputfieldandimage" id="inputselection">
                                        <select class="dropdownassignedto">
                                            <option disabled selected>Select contacts to assign</option>
                                            <option>You</option> 
                                            <option>Anton Meyer</option>
                                            <option>Anja Schulz</option>
                                            <option>David Eisenberg</option>
                                            <option>Eva Fischer</option>
                                            <option>Marius Müller</option>
                                            <option>Peter Jackson</option>
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
                                        <img src="./src/img/icons/Rectangle5.svg" alt="rectangle">
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