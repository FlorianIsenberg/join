let todos = [{
    'id': 0,
    'category': 'Design',
    'titel': 'Website redesign',
    'note': 'Modify the contents of the main website..',
    'progresslevel': '1/2 Done',
    'progressbar': '<img src="progressbar.svg">',
    'users': 'pic'
}];

let currentDraggedElement;

function updateHTML() {
    let open = todos.filter (t => t['category'] =='open');

    document.getElementById('open').innerHTML = '';

    for (let index = 0; index < open.length; index++) {
        const element = open[index];
        document.getElementById('open').innerHTML += generateTodoHTML(element);
    }

let closed = todos.filter(t => t['category'] == 'closed');

document.getElementById('closed').innerHTML = '';

    for (let index = 0; index < closed.length; index++) {
        const element = closed[index];
        document.getElementById('closed').innerHTML += generateTodoHTML(element);
    }
}

function startDragging(id) {
    currentDraggedElement = id;
}


function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['title']}</div>`;
}

