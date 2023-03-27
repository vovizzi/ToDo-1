
const docTaskList = document.querySelector(".todo-list-ul");
const docFolders = document.querySelector(".section-folders");
const docTaskTextInput = document.querySelector(".input-todo");

let folders = [];
let currentFolder;

addFolder(new Folder("Tasks"));
addFolder(new Folder("Shopping"));

currentFolder = folders[0];


function clearDocTasks() {
    while (docTaskList.firstChild) {
        docTaskList.removeChild(docTaskList.lastChild);
    }

}

function fillDocTasksFromFolder(folder) {
    for (let i = 0; i < folder.tasks.length; i++) {
        docTaskList.appendChild(folder.tasks[i].doc.main);
    }
}

function changeFolder(folder) {
    if (currentFolder !== folder) {
        clearDocTasks();
        currentFolder = folder;
        fillDocTasksFromFolder(folder);
    }
}

function addFolder(folder) {
    if (!folders.find(inFolder => inFolder === folder)) {
        folders.push(folder);
        docFolders.appendChild(folder.doc.main);
        folder.doc.main.addEventListener("click", (event) => {
            changeFolder(folder);
        })
    }
}
