let notes = [];
let avatars = [];


function generateNotePagetwoHTML(task) {
    document.getElementById('mastertaskcontainerid').innerHTML = `
          <div class="containeropennote">
            <img src="../img/icons/closecross.svg" alt="close x button" onclick="closeBig(${task['id']})" id="close" class="closebuttonx">
            <div class="title">
              <span class="title">Titel</span>
            </div>
            <input class="titleinput" placeholder="Enter a title" type="text" id="titleinput" value="${task['title']}">
            <div class="description">
              <span class="description">Description</span>
            </div>
            <div class="descriptionandimage">
              <input class="descriptioninput" placeholder="Enter a Description" text="text" id="descriptioninput" value="${task['description']}">
              <img src="../img/icons/Recurso11.svg" alt="three lines drop down" class="threelinesdropdown">
            </div>
            <div class="duedate3">
              <span class="duedate3">Due date</span>
            </div>
            <div class="dateinput">
            <input type="date" class="dateinputandimage4" id="inputdate" value="2023-02-03" min="023-02-01" max="023-02-28" value="${task.date}">
            </div>
            <div class="Prioritys">
              <span class="prio">Prio</span>
            </div>
            <div class="prio-selections">
              <img src="../img/icons/urgent.svg" alt="urgent priority symbol" onclick="priorityButtonChange2('urgent2')" class="urgentpriority" value="${task.priority === 'urgent' ? 'active' : ''}" id="urgent2">
              <img src="../img/icons/medium.svg" alt="medium priority symbol" onclick="priorityButtonChange2('medium2')" class="mediumpriority" value="${task.priority === 'medium' ? 'active' : ''}" id="medium2">
              <img src="../img/icons/low.svg" alt="low priority symbol" onclick="priorityButtonChange2('low2')" class="lowpriority" value="${task.priority === 'low' ? 'active' : ''}" id="low2">
            </div>
            <div class="assignedto">
            <span>Assigned to</span>
            <img onclick="showAssignetTo()" src="../img/icons/dropdowncategory.svg" alt="arrow down black" class="arrowdropdown">
              <label for="inputselection" class="dropdownassignedto dnone" id="assignetoid" onclick="hideAssignedTo()">Assigned to:</label>
              <select class="inputfieldandimage dnone" id="inputselection" multiple>
                <option disabled selected required class="select">Select contacts to assign</option> 
                <option class="${colorClass}" id="0">${contactdata[0]}</option>
                <option class="${colorClass}" id="1">${contactdata[5]}</option>
                <option class="${colorClass}" id="2">${contactdata[10]}</option>
                <option class="${colorClass}" id="3">${contactdata[15]}</option>
                <option class="${colorClass}" id="4">${contactdata[20]}</option>
                <option class="${colorClass}" id="5">${contactdata[25]}</option>
                <option class="${colorClass}" id="0">${contactdata[30]}</option>
                <option class="${colorClass}" id="1">${contactdata[35]}</option>
                <option class="${colorClass}" id="2">${contactdata[40]}</option>
                <option class="${colorClass}" id="3">${contactdata[45]}</option>
                <option class="${colorClass}" id="4">${contactdata[50]}</option>
                <option class="${colorClass}" id="5">${contactdata[55]}</option>
                <option class="${colorClass}" id="3">${contactdata[60]}</option>
                <option class="${colorClass}" id="4">${contactdata[65]}</option>
                <option class="${colorClass}" id="5">${contactdata[70]}</option>
              </select>
           
            </div>
                    <div class="iconsfromusers"></div>
                    <img src="../img/icons/okbutton.svg" alt="button ok" onclick="editedNote(${task.id})" class="okbutton" id="okbuttonsafe">
                    </div>
            </div>`;
}

function generateNoteHTML(element) {
    document.getElementById('popupnoteid').innerHTML = `
    
        <img src="../img/icons/closecross.svg" alt="close x button" onclick="closeNoteForEdit()" id="closenote" class="closenotebuttonx">
        <span class="departmentdesign2 ${colorClass}">${element.department}</span>
        <h2 class="noteheadline2">${element.title}</h2>
        <span class="tmodifythecontents2">${element.description}</span>
        <span class="duedate2" value="18-03-1987"><b>Due date: ${element.date}</b></span>
            <div class="prio2">
            <span class="priority2<"><b>Priority:</b></span>
            <img src="../img/icons/urgentorangenote.svg" alt="urgent priority symbol" class="urgentpriority2" id="urgentnote">
            </div>
                <span class="assignedto2"><b>Assigned To:</b></span>
        
        <div class="chosenuser">
            <div class="usericonsnote">
               <div class="member${contactdata[4]} ${colorClass}">${contactdata[4]}</div>
            </div>
            <div class="names">
                   
            </div>    
        </div>
        <img src="../img/icons/editbuttonpencil.svg" alt="edit button" onclick="editNote(${element.id})" class="editbutton" id="editbuttonid">
    </div>
    </div>
        `;
}

let checkedPosition = ['New Category', 'Sales', 'Marketing', 'Backoffice', 'Media', 'Design']

function addTask() {
    document.getElementById('mastercontainerid').classList.add('hide');
    document.getElementById('mastercontainerid').classList.remove('hide');
    document.getElementById('mastercontainerid').innerHTML = `
    <div class="mastercontainer hide movingcontainertoleftcl" id="mastercontainerid">
    <div class="headaddtask">
    <h1 class="taddtask">Add Task</h1>
    <img src="../img/icons/closecross.svg" onclick="closeTask()" alt="close button x" id=closebuttonidaddtask class="closebuttonclassaddtask">
    </div>
            <div class="container-selections">
                <div class="container-left">
                    <span class="title">Title</span>
                    <input class="titleinput" placeholder="Enter a title" required text="text" value="" id="titleinput">
                    <span class="description" required>Description</span>
                        <div class="descriptionandimage">
                            <input class="descriptioninput" placeholder="Enter a Description" text="text" id="descriptioninput">
                            <img src="../img/icons/Recurso11.svg" alt="three lines drop down" class="threelinesdropdown">
                        </div>
                               
                      <div class="dropdownmenucategory">
                        <div class="onclickcategory" id="clickcategory">
                          <span class="category">Category</span>
                          <img src="../img/icons/dropdowncategory.svg" alt="arrow down black" class="arrowdropdown" onclick="showCategory()">
                        </div>
                        <div class="dropdownc dnone" id="categoryhideid" >
                          <label for="category" disabled required selected class="categoryselect">Select task category:</label>
                          <label  for="new-category">
                            <span>New category</span>
                            <input  onclick="checkedBoxId(0)" type="checkbox" id="checkbox0" class="checkbox1"> 
                          </label>
                          <label for="sales">
                            <span>Sales</span>
                            <input onclick="checkedBoxId(1)" type="checkbox" id="checkbox1" class="checkbox2">
                          </label>
                          <label for="backoffice">
                            <span>Backoffice</span>
                            <input onclick="checkedBoxId(2)" type="checkbox" id="checkbox2" class="checkbox3">
                          </label>
                          <label for="marketing">
                            <span>Marketing</span>
                            <input onclick="checkedBoxId(3)" type="checkbox" id="checkbox3" class="checkbox4">
                          </label>
                          <label for="design">
                            <span>Design</span>
                            <input onclick="checkedBoxId(4)" type="checkbox" id="checkbox4" class="checkbox5">
                          </label>
                          <label for="media">
                            <span>Media</span>
                            <input onclick="checkedBoxId(5)" type="checkbox" id="checkbox5" class="checkbox6">
                          </label>
                        </div>
                      </div> 
                  <div class="assignedto">
                  <span>Assigned to</span>
                  <img onclick="showAssignetTo()" src="../img/icons/dropdowncategory.svg" alt="arrow down black" class="arrowdropdown">
                    <label for="inputselection" class="dropdownassignedto dnone" id="assignetoid" onclick="hideAssignedTo()">Assigned to:</label>
                    <select class="inputfieldandimage dnone" id="inputselection" multiple>
                      <option disabled selected required class="select">Select contacts to assign</option> 
                      <option id="0">${contactdata[0]}</option>
                      <option id="1">${contactdata[5]}</option>
                      <option id="2">${contactdata[10]}</option>
                      <option id="3">${contactdata[15]}</option>
                      <option id="4">${contactdata[20]}</option>
                      <option id="5">${contactdata[25]}</option>
                      <option id="0">${contactdata[30]}</option>
                      <option id="1">${contactdata[35]}</option>
                      <option id="2">${contactdata[40]}</option>
                      <option id="3">${contactdata[45]}</option>
                      <option id="4">${contactdata[50]}</option>
                      <option id="5">${contactdata[55]}</option>
                      <option id="3">${contactdata[60]}</option>
                      <option id="4">${contactdata[65]}</option>
                      <option id="5">${contactdata[70]}</option>
                    </select>
                  </div>
                </div>
	
            <img src="../img/icons/Vector4line.svg" alt="verticalline" class="verticalline">
            
                <div class="container-right">
                    <span class="duedate">Due date</span>
                        <div class="dateinput">
                        <input type="date" required class="dateinputandimage4" value="2023-02-03" min="023-02-01" max="023-02-28" id="dateinput">
                        
                        </div>
                            <div class="Prioritys">
                                <span class="prio">Prio</span>
                            </div>
                                <div class="prio-selections required">
                                    <img src="../img/icons/urgent.svg" alt="urgent priority symbol" onclick="priorityButtonChange('urgent')" class="urgentpriority" id="urgent">
                                    <img src="../img/icons/medium.svg" alt="medium priority symbol" onclick="priorityButtonChange('medium')" class="mediumpriority" id="medium">  
                                    <img src="../img/icons/low.svg" alt="low priority symbol" onclick="priorityButtonChange('low')" class="lowpriority" id="low">   
                                </div>
                                <div class="subtasks-selection">
                                    <span class="subtasktitle">Subtasks</span>
                                </div>
                                    <div class="addnewsubtaskinputandimage">
                                        <input text="text" placeholder="Add new subtask" class="subtask" id="subtask">
                                        <img src="../img/icons/Vectorplusblack.svg" alt="blackplusbutton" class="blackplusbuttonsubtasks">
                                    </div>
                                    <div class="rectangleandsubtask1">
                                        <input type="checkbox" alt="rectangle" class="rectangle">
                                        <span class="subtask1">Subtask 1</span>
                                    </div>
                                        <div class="clearandcreatetask">
                                            <img src="../img/icons/clearx.svg" alt="clear x button" onclick="clearTask(id)" id="clear" class="clearxbutton">
                                            <img src="../img/icons/createtaskbutton.svg" alt="button create task" id="newnote" onclick="addNewTask(id)" class="createtaskbutton">
                                        </div>
                </div>
            </div>
    </div></div>
    `;
}

 
  
async function addNewTask() {
      
  let title = document.getElementById('titleinput').value;
  let description = document.getElementById('descriptioninput').value;
  let category = colorClass.toUpperCase();
  let assignedTo = Array.from(document.getElementById('inputselection').options)
                         .filter(option => option.selected)
                         .map(option => option.text);
  let dueDate = document.getElementById('dateinput').value;
  let priorityImg = document.querySelector('.prioritys img.selected');
  let priority = priorityImg ? priorityImg.alt : '';
  let subtasks = Array.from(document.querySelectorAll('.rectangleandsubtask1 span'))
                        .map(span => span.textContent);
                        let id = new Date().getTime();

  let newNote = {
    id,
    title,
    description,
    category,
    assignedTo,
    dueDate,
    priority,
    subtasks,
    
  };
console.log(newNote)

  todos.push(newNote);
  await backend.setItem('todos', JSON.stringify(todos));
  let inputFields = document.querySelectorAll('#titleinput, #descriptioninput, .checkbox1, .checkbox2, .checkbox3, .checkbox4, .checkbox5, .checkbox6, #inputselection, #dateinput, .prioritys img, .rectangleandsubtask1 span');
  inputFields.forEach(field => {
    if (field.type === 'checkbox' || field.tagName === 'IMG') {
      field.checked = false;
    } else if (field.tagName === 'SELECT') {
      field.selectedIndex = 0;
    } else {
      field.value = '';
    }
  });
  console.log(inputFields)

alert('Neues To-Do wurde erstellt!');
generateNewTask(newNote); 
closeTask();
}


  function generateNewTask(element) {
      
  let colorIndex = 4;
  let color = contactdata[colorIndex];

 
  let designStyles = document.querySelectorAll('#departmentstyle');
  for (let i = 0; i < designStyles.length; i++) {
    designStyles[i].classList.add(color);
  }
    document.getElementById('todo').innerHTML = `
  <div class="notesmain" id="${element['id']}" draggable="true" ondragstart="startDragging(${element['id']})" onclick="opentoDoForEdit(${element['id']})">
    <div class="notesection">
    <span class="${contactdata[3]} departmentdesign" id ="departmentstyle">${element.category}</span>
    </div>
    <div class="noteheadlinecontainer">
    <h2 class="noteheadline">${element.title}</h2>
    </div>
    <div class="note">
    <span class="tmodifythecontents">${element.description}</span> 
    <div class="loadingbarandspan">
      <div class="progressloadingbar">
      <div class="progress">
      <div class="progressbarline" role="progressbar" id="bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
      <span class="halfdone">${element.subtasks[0]} / ${element.subtasks.length}</span>
      </div>    
    </div>
  </div>
    <div class="usericons">
    <div class="${contactdata[4]}" id="memberszone">${contactdata[4]}</div>
    <img class="greenarrowdown" src="../img/icons/greenarrowsdown.svg" value="${element.priorityImg}"alt="doublea arrow green down">
    </div>
`;
}




async function editedNote(id) {
  let title = document.getElementById('titleinput').value;
  let description = document.getElementById('descriptioninput').value;
  let category = colorClass;
  let dueDate = document.getElementById('inputdate').value;
  let priorityImg = document.querySelector('.prioritys img.selected');
  let priority = priorityImg ? priorityImg.alt : '';
  let subtasks = Array.from(document.querySelectorAll('.rectangleandsubtask1 span'))
                        .map(span => span.textContent);
  let assignedTo = Array.from(document.getElementById('inputselection').options)
                        .filter(option => option.selected)
                        .map(option => option.text);
                       
  
  let newNote2 = {
    id,
    title,
    description,
    category,
    assignedTo,
    dueDate,
    priority,
    subtasks,
    
  };

  todos.push(newNote2);
  await backend.setItem('todos', JSON.stringify(todos));
  let inputFields = document.querySelectorAll('#titleinput, #descriptioninput, .checkbox1, .checkbox2, .checkbox3, .checkbox4, .checkbox5, .checkbox6, #inputselection, #inputdate, .prioritys img, .rectangleandsubtask1 span');
  inputFields.forEach(field => {
    if (field.type === 'checkbox' || field.tagName === 'IMG') {
      field.checked = false;
    } else if (field.tagName === 'SELECT') {
      field.selectedIndex = 0;
    } else { 
      field.value = '';
    }
  });
 

alert('To-Do wurde erfolgreich geändert!');
closeBig();
generateEditedNote(newNote2); 
}

function closeBig(i) {
document.getElementById('mastertaskcontainerid').classList.add('show');
document.getElementById('mastertaskcontainerid').classList.remove('show');
closeBigPopup();
}
  
function closeBigPopup(){
  document.getElementById('popupnotemastercontainerid').classList.remove('show');
  document.getElementById('popupnoteid').classList.add('hide');
}

function generateEditedNote(element) {
document.getElementById('todo').innerHTML += `
<div class="notesmain drag" id="${element.id}" draggable="true" ondragstart="startDragging(${element.id})" onclick="opentoDoForEdit(${element['id']})">
<div class="notesection">
<span class="${colorClass} departmentdesign2" id="departmentstyle">${element.category}</span>
</div>
<div class="noteheadlinecontainer">
<h2 class="noteheadline">${element.title}</h2>
</div>
<div class="note">
<span class="tmodifythecontents">${element.description}</span> 
<div class="loadingbarandspan">
  <div class="progressloadingbar">
  <div class="progress">
  <div class="progress-bar" id="bar${element.id}" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">bar${element.id}</div>
</div>
  <span class="halfdone">${element.subtasks} / ${element.tasklength}</span>
  </div>    
</div>
</div>
<div class="usericons">
<div class="namelabels ${contactdata[3]} ${colorClass} member"></div>
<img class="greenarrowdown" src="${element.priority} alt="doublea arrow green down">
</div>
`;
}

function showCategory() {
  const category = document.getElementById('categoryhideid');
  if (category.classList.contains('dnone')) {
    category.classList.remove('dnone');
  } else {
    category.classList.add('dnone');
  }
}

function showAssignetTo() {
  const category = document.getElementById('inputselection');
  if (category.classList.contains('dnone')) {
    category.classList.remove('dnone');
  } else {
    category.classList.add('dnone');
  }
}



function fetchColor(element) {
  let color = generateColor();
  element.style.backgroundColor = color;
  coloredElements.push(element);
}

let elements = document.getElementsByClassName('departmentdesign');
let coloredElements = [];

for (let i = 0; i < elements.length; i++) {
  
  if (!coloredElements.includes(elements[i])) {
    fetchColor(elements[i]);
  }
}

function generateColor() {
  for (let i = 0; i < contactdata.length; i++) {
    return colors;
  }
}


let colorPos = ['newCategory','sales', 'backoffice', 'marketing', 'design', 'media']
let colorClass;
function checkedBoxId(id) {
  colorClass = colorPos[id];
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    if (index === id) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}


function updateProgressBar(element) {
  let progressBar = document.getElementById(`bar${element.id}`);
  let subtasksDone = element.subtasksDone; 
  let [x, y] = subtasksDone.split(' ');
  let [completed, total] = x.split('/').map(Number); 
  let percentage = (completed / total) * 100; 
  progressBar.style.width = percentage + '%'; 
}


