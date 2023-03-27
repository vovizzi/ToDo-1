
for (let i = 0; i < folders.length; i++) {
    docFolders.appendChild(folders[i].doc.main);
}

docFolders.querySelector("input[type=\"radio\"]").setAttribute("checked", "");

docTaskTextInput.addEventListener("keydown", (event) => {
    //console.log(event.keyCode);
    if (event.keyCode === 13 && docTaskTextInput.value.length > 0) {
        let newTask = currentFolder.addTask(docTaskTextInput.value);
        docTaskList.appendChild(newTask.doc.main);
        newTask.doc.crossButton.addEventListener("click", (event) => {
            docTaskList.removeChild(newTask.doc.main);
            currentFolder.removeTask(newTask);
        });

        newTask.doc.checkbox.addEventListener('change', (event) => {
            newTask.isComplited = !newTask.isComplited;
        });



        docTaskTextInput.value = "";
    }
})