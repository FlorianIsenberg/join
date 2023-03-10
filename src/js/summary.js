async function init() {
    await includeHTML();
        // document.getElementById('MasterContainerDefaultPageId').innerHTML = 'Herzlich willkommen!';
    // await downloadFromServer(); 
    // users = JSON.parse(backend.getItem('users')) || [];
    // backend.setItem('Test', 'Hallo');
    }


   
    
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
    }



let titles = [];
let notes = [];
load();

function render() {
    const content = document.getElementById('content');
    const posts = document.getElementById('posts');
    posts.innerHTML = ``;
    

    for (let i = 0; i < notes.length; i++) {
        posts.innerHTML += `
        <div class="post note-bg">
            <div class="title">
                <h3>Notiz ${i+1}: ${titles[i]}</h3>
            </div>
        
            <div class="noteDescreption" >
                ${notes[i]}
            </div>
            <button class="delete" id="delete" onclick="deleteNote(${[i]})" title="Notiz löschen";> <img src="img/delete.png"> </button> 
            
        </div>     
         `;
        }
       

}
// function choose() {
//     // document.getElementById('submit').onclick = 
//      let e = document.getElementById("kategorie");
//     let text = e.options[e.selectedIndex].text;
//     document.getElementById("container").innerHTML = 'The selected text is ' + text;
//  }


function addNote() {
    let text = document.getElementById('noteDescreption').value;
    let title= document.getElementById('title').value;
    
    notes.push(text);
    titles.push(title);
    document.getElementById('title').value = '';
    document.getElementById('noteDescreption').value = '';
    render();
    save();
}

function checkInput() {
    let text = document.getElementById('noteDescreption').value;
    let title = document.getElementById('title').value;
    if (text == '' || title == '') {
        alert('Bitte Titel und Notiz eintragen')
    }
    else {
        addNote();
    };
    }


function deleteNote(i) {
    titles.splice(i,1);
    notes.splice(i,1);
    render();
    save();
}

function save() {
   let titlesAsText = JSON.stringify(titles);
   let notesAsText = JSON.stringify(notes);
   localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notes' , notesAsText);

}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');
    if(titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }
}