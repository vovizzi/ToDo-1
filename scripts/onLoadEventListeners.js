
docFolders.appendChild(currentFolder.doc.main);
docTaskTextInput.addEventListener("keydown", (event) => {
    //console.log(event.keyCode);
    if (event.keyCode === 13) {
        let newTask = currentFolder.addTask(docTaskTextInput.value);
        docTaskList.appendChild(newTask.doc.main);
        newTask.doc.crossButton.addEventListener("click", (event) => {
            docTaskList.removeChild(newTask.doc.main);
            currentFolder.removeTask(newTask);
        });

        docTaskTextInput.value = "";
    }
})