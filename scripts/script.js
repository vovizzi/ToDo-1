const docTaskList = document.querySelector(".todo-list-ul");

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


function createDocListElement(task, id) {
    const docLi = document.createElement("li")

    const docLabel = document.createElement("label");
    docLabel.classList.add("todo-checkbox-representation-label");
    docLabel.setAttribute("for", id.toString());

    const docLabelCheckbox = document.createElement("input");
    docLabelCheckbox.setAttribute("type", "checkbox");
    docLabelCheckbox.setAttribute("id", id.toString());
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

    return docLi;    
}

let ugen = new UniqueGen();
function fillExamples(count) {
    for (let i = 0; i < count; i++) {
        let un = ugen.getUnique();
        let li = {
            id: un,
            text: "example " + un.toString(),
        }
        const docLi = createDocListElement(li, li.id);
        docTaskList.appendChild(docLi);
        docLi.querySelector("input[type=\"button\"").addEventListener("click", function (event) {
            docTaskList.removeChild(docLi);
        });
    }
}
