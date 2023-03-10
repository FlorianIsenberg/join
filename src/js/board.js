let todos = [{
    id: 0,
    title: 'Website redesign',
    description: 'Modify the contents of the main website..',
    date: '',
    priority: 'low',
    assignedTo: ['Sven Müller'],
    department: 'design',
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
    department: 'sales',
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
    department: 'backoffice',
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
    department: 'media',
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
    department: 'marketing',
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
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element.title}</div> 
    <div class="notesmain" id="note1" draggable="true" ondragstart="startDragging(0)">
    <div class="notesection">
    <img src="./src/img/icons/design.svg" alt="Designlabel">
    </div>
    <div class="noteheadlinecontainer">
        <h2 class="noteheadline">Website redesign</h2>
    </div>
        <div class="note">
            <span class="tmodifythecontents">Modify the contents of the main website..</span> 
                <div class="loadingbarandspan">
                    <div class="progressloadingbar">
                        <img class="progressloadingbarimage" src="./src/img/icons/progress.svg" alt="Progressbar">
                        <span class="halfdone">1/2 Done</span>
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


function addTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
    //document.getElementById('mastercontainerid').classList.remove('overlayAddContactoutcl');
    document.getElementById('mastercontainerid').classList.add('hide');
    document.getElementById('mastercontainerid').classList.remove('hide');
   
}

function clearTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
}

function openNewTask() {
    document.getElementById('mastercontainerid').classList.remove('hide');
}

function openCategory() {
    document.getElementById('opencategory');
    let category = innerHTML += `
    <select class="categorylist" id="categorylistitem">
        <ul>
            <li>Select task category</li>
            <li>New category</li>
            <li>Sales</li>
            <li>Backoffice</li>
        </ul>    
    </select>`;
}

function hoverUrgentPriority() {
    document.getElementById('urgent').innerHTML = `<img src="./src/img/icons/urgentbuttonorange">`;
}