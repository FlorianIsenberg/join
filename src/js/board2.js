let notes = [];

function generateNotePagetwoHTML(task) {
    document.getElementById('mastertaskcontainerid').innerHTML = `
          <div class="containeropennote">
            <img src="../img/icons/closecross.svg" alt="close x button" onclick="closetoDoForEdit(${task['id']})" id="close" class="closebuttonx">
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
              <img src="../img/icons/urgent.svg" alt="urgent priority symbol" onclick="urgentButtonChange()" class="urgentpriority ${task.priority === 'urgent' ? 'active' : ''}" id="urgent">
              <img src="../img/icons/medium.svg" alt="medium priority symbol" onclick="mediumButtonChange()" class="mediumpriority ${task.priority === 'medium' ? 'active' : ''}" id="medium">
              <img src="../img/icons/low.svg" alt="low priority symbol" onclick="lowButtonChange()" class="lowpriority ${task.priority === 'low' ? 'active' : ''}" id="low">
            </div>
            <div class="assignedto">
              <span class="assignedto">Assigned to</span>
            </div>
            <div class="inputfieldandimage2" id="inputselection">
              <select class="dropdownassignedto" id="assignedto">
                <option disabled>Select contacts to assign</option>
                <option>${task.assignedTo}</option>
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
        <img src="${element.taskimage}" alt="label sale" class="labelimage">
        <span class="departmentdesign2"></span>
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
                <img src="../img/icons/de2.svg" alt="usericon DE">
                <img src="../img/icons/bz2.svg" alt="usericon BZ">
                <img src="../img/icons/mb2.svg" alt="usericon MB">
                <img src="../img/icons/sf.svg" alt="usericon SF">
            </div>
            <div class="names">
                <label>David Eisenberg</label>
                <label>Benedikt Ziegler</label>
                <label>Marcel Bauer</label>
                <label>Stefanie Farber</label>
            </div>    
        </div>
        <img src="../img/icons/editbuttonpencil.svg" alt="edit button" onclick="editNote(${element.id})" class="editbutton" id="editbuttonid">
    </div>
    </div>
        `;
}

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
                    <input class="titleinput" placeholder="Enter a title" text="text" id="titleinput">
                    <span class="description">Description</span>
                        <div class="descriptionandimage">
                            <input class="descriptioninput" placeholder="Enter a Description" text="text" id="descriptioninput">
                            <img src="../img/icons/Recurso11.svg" alt="three lines drop down" class="threelinesdropdown">
                        </div>
                               
                      <div class="dropdownmenucategory">
                        <div class="onclickcategory" id="clickcategory" onclick="toggleCategory()">
                          <span class="category">Category</span>
                        </div>
                        <div class="dropdownc hide" id="categoryhideid">
                          <label for="category" disabled selected class="categoryselect">Select task category:</label>
                          <label for="new-category">
                            <span>New category</span>
                            <input type="checkbox" id="new-category" class="checkbox1"> 
                          </label>
                          <label for="sales">
                            <span>Sales</span>
                            <input type="checkbox" id="sales" class="checkbox2">
                          </label>
                          <label for="backoffice">
                            <span>Backoffice</span>
                            <input type="checkbox" id="backoffice" class="checkbox3">
                          </label>
                          <label for="marketing">
                            <span>Marketing</span>
                            <input type="checkbox" id="marketing" class="checkbox4">
                          </label>
                          <label for="design">
                            <span>Design</span>
                            <input type="checkbox" id="design" class="checkbox5">
                          </label>
                          <label for="media">
                            <span>Media</span>
                            <input type="checkbox" id="media" class="checkbox6">
                          </label>
                        </div>
                      </div> 
                  <div class="assignedto">
                  <span>Assigned to</span>
                    <label for="inputselection" class="dropdownassignedto hide" id="assignetoid" onclick="hideAssignedTo()">Assigned to:</label>
                    <select class="inputfieldandimage" id="inputselection" multiple>
                      <option disabled selected>Select contacts to assign</option> 
                      <option>Anton Meyer</option>
                      <option>Anja Schulz</option>
                      <option>David EIsenberg</option>
                      <option>Eva Fischer</option>
                      <option>Marius Müller</option>
                      <option>Peter Jackson</option>
                    </select>
                  </div>
                </div>
	
            <img src="../img/icons/Vector4line.svg" alt="verticalline" class="verticalline">
            
                <div class="container-right">
                    <span class="duedate">Due date</span>
                        <div class="dateinput">
                        <input type="date" class="dateinputandimage4" value="2023-02-03" min="023-02-01" max="023-02-28" id="dateinput">
                        
                        </div>
                            <div class="Prioritys">
                                <span class="prio">Prio</span>
                            </div>
                                <div class="prio-selections">
                                    <img src="../img/icons/urgent.svg" alt="urgent priority symbol" onclick="urgentButtonChange()" class="urgentpriority" id="urgent">
                                    <img src="../img/icons/medium.svg" alt="medium priority symbol" onclick="mediumButtonChange()" class="mediumpriority" id="medium">  
                                    <img src="../img/icons/low.svg" alt="low priority symbol" onclick="lowButtonChange()" class="lowpriority" id="low">   
                                </div>
                                <div class="subtasks-selection">
                                    <span class="subtasktitle">Subtasks</span>
                                </div>
                                    <div class="addnewsubtaskinputandimage">
                                        <input text="text" placeholder="Add new subtask" class="subtask" id="subtask">
                                        <img src="../img/icons/Vectorplusblack.svg" alt="blackplusbutton" class="blackplusbuttonsubtasks">
                                    </div>
                                    <div class="rectangleandsubtask1">
                                        <input type="checkbox" alt="rectangle">
                                        <span class="subtask1">Subtask 1</span>
                                    </div>
                                        <div class="clearandcreatetask">
                                            <img src="../img/icons/clearx.svg" alt="clear x button" onclick="clearTask(id)" id="clear" class="clearxbutton">
                                            <img src="../img/icons/createtaskbutton.svg" alt="button create task" id="newnote" onclick="addNewTask()">
                                        </div>
                </div>
            </div>
    </div></div>
    `;
}

function toggleCategory() {
    const dropdown = document.getElementById("categoryhideid");
    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
    } else {
      dropdown.classList.add("hide");
    }
  }

  function hideAssignedTo() {
    document.getElementById('assignetoid').classList.remove('hide');

  }
  
  function addNewTask() {
      
      let title = document.getElementById('titleinput').value;
      let description = document.getElementById('descriptioninput').value;
      let department = document.getElementById('sales').value = "Sales";
      document.getElementById('marketing').value = "Marketing";
      document.getElementById('backoffice').value = "Backoffice";
      document.getElementById('media').value = "Media";
      document.getElementById('design').value = "Design";
      let category = document.querySelector('input[type="checkbox"]:checked').nextSibling.textContent.trim();
      let assignedTo = Array.from(document.getElementById('inputselection').options)
                             .filter(option => option.selected)
                             .map(option => option.text);
      let dueDate = document.getElementById('dateinput').value;
      let priorityImg = document.querySelector('.prioritys img.selected');
      let priority = priorityImg ? priorityImg.alt : '';
      let subtasks = Array.from(document.querySelectorAll('.rectangleandsubtask1 span'))
                            .map(span => span.textContent);
    
      let newNote = {
        title,
        description,
        category,
        assignedTo,
        dueDate,
        priority,
        subtasks,
        department,
      };
    
      notes.push(newNote);
    
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
    
    alert('Neues To-Do wurde erstellt!');
    generateNewTask(newNote); 
  }
  


  function generateNewTask(element) {
    document.getElementById('todo').innerHTML += `
  <div class="notesmain" id="${element['id']}" draggable="true" ondragstart="startDragging(${element})" onclick="opentoDoForEdit(${element['id']})">
    <div class="notesection">
    <span class="departmentdesign">${element.category}</span>
    </div>
    <div class="noteheadlinecontainer">
    <h2 class="noteheadline">${element.title}</h2>
    </div>
    <div class="note">
    <span class="tmodifythecontents">${element.description}</span> 
    <div class="loadingbarandspan">
      <div class="progressloadingbar">
      <img class="progressloadingbarimage" src="../img/icons/progress.svg" alt="Progressbar">
      <span class="halfdone">${element.subtasksDone}</span>
      </div>    
    </div>
  </div>
    <div class="usericons">
    <img src="../img/icons/sm.svg" alt="User SM">
    <img src="../img/icons/mv.svg" alt="User MV" class="iconsinicons">
    <img src="../img/icons/ef.svg" alt="User EF" class="iconsinicons">
    <img class="greenarrowdown" src="../img/icons/greenarrowsdown.svg" value="${element.priorityImg}"alt="doublea arrow green down">
    </div>
`;
}


function editedNote() {
  let title = document.getElementById('titleinput').value;
  let description = document.getElementById('descriptioninput').value;
  let category = document.querySelector('input[type="checkbox"]:checked');
  let dueDate = document.getElementById('inputdate').value;
  let priorityImg = document.querySelector('.prioritys img.selected');
  let priority = priorityImg ? priorityImg.alt : '';
  let subtasks = Array.from(document.querySelectorAll('.rectangleandsubtask1 span'))
                        .map(span => span.textContent);
  
  let newNote2 = {
    title,
    description,
    category,
    dueDate,
    priority,
    subtasks,
    categorys,
  };

  notes.push(newNote2);

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

function closeBig() {
document.getElementById('mastertaskcontainer').classList.remove('show');
}
  

function generateEditedNote(element) {
document.getElementById('todo').innerHTML = `
<div class="notesmain" id="${element['id']}" draggable="true" ondragstart="startDragging(${element})" onclick="opentoDoForEdit(${element['id']})">
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
  <img class="progressloadingbarimage" src="../img/icons/progress.svg" alt="Progressbar">
  <span class="halfdone">${element.subtasksDone}</span>
  </div>    
</div>
</div>
<div class="usericons">
<img src="../img/icons/sm.svg" alt="User SM">
<img src="../img/icons/mv.svg" alt="User MV" class="iconsinicons">
<img src="../img/icons/ef.svg" alt="User EF" class="iconsinicons">
<img class="greenarrowdown" src="${element.priorityimg} alt="doublea arrow green down">
</div>
`;
}


