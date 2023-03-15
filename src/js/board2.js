function generateNotePagetwoHTML() {
    document.getElementById('mastertaskcontainerid').innerHTML = `
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
                               
                        <div class="dropdownmenucategory">
                        <div class="onclickcategory" id="clickcategory" onclick="toggleCategory()"><span class="category">Category</span></div>
                        <div class="dropdownc hide" id="categoryhideid">
                          <label for="category">Select task category:</label>
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
                                        <input type="checkbox" alt="rectangle">
                                        <span class="subtask1">Subtask 1</span>
                                    </div>
                                        <div class="clearandcreatetask">
                                            <img src="./src/img/icons/clearx.svg" alt="clear x button" onclick="clearTask()" id="clear" class="clearxbutton">
                                            <img src="./src/img/icons/createtaskbutton.svg" alt="button create task" id="newnote" onclick="generateNewNoteHTML(element)">
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

  
  