class UniqueGen {
    currentState;
    constructor() {
        this.currentState = 0x0;
    }

    getUnique() {
        this.currentState++;
        return this.currentState;
    }

    reset() {
        this.currentState = 0;
    }
}

class Folder {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.idgen = new UniqueGen();
        this.doc = Folder.createDocFolderElement(this);
    }

    //Adds new task to folader array and returns added task;
    addTask(text) {
        let newTask = new Task(text, this.idgen.getUnique());
        this.tasks.push(newTask);
        return newTask;
    }

    //Removes <task> from the array of tasks if it exists there
    removeTask(task) {
        this.tasks = this.tasks.filter(el => el != task);
    }

    static createDocFolderElement(folder) {
        const docDiv = document.createElement("div");
        docDiv.classList.add("folder-div", "effect-hover");

        const docDivLabel = document.createElement("label");
        docDivLabel.classList.add("folder-label");

        const docDivLabelText = document.createTextNode(folder.name);
        docDivLabel.appendChild(docDivLabelText);
        docDiv.appendChild(docDivLabel);

        return {
            main: docDiv,
        };
    }


}

class Task {
    constructor(text, id) {
        this.text = text;
        this.id = id;
        this.isComplited = false;
        this.doc = Task.createDocListElement(this);

    }

    static createDocListElement(task) {
        const docLi = document.createElement("li")

        const docLabel = document.createElement("label");
        docLabel.classList.add("todo-checkbox-representation-label");
        docLabel.setAttribute("for", task.id.toString());

        const docLabelCheckbox = document.createElement("input");
        docLabelCheckbox.setAttribute("type", "checkbox");
        docLabelCheckbox.setAttribute("id", task.id.toString());
        docLabelCheckbox.classList.add("checkbox-input");

        const docLabelSpan = document.createElement("span");
        docLabelSpan.classList.add("todo-checkbox-representation-span");

        docLabel.append(docLabelCheckbox, docLabelSpan);

        const docSpan = document.createElement("span");
        docSpan.classList.add("todo-task-span");
        const docSpanText = document.createTextNode(task.text);
        docSpan.append(docSpanText);

        const docButton = document.createElement("input");
        docButton.setAttribute("type", "button");
        docButton.setAttribute("value", "\u2716");
        docButton.classList.add("todo-task-remove-button");

        docLi.append(docLabel, docSpan, docButton);

        return {
            main: docLi,
            checkbox: docLabelCheckbox,
            crossButton: docButton,
        };
    }
}