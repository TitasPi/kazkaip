function addTask() {
    const inputValue = document.getElementById("taskInput").value;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = crossOut;

    const textNode = document.createTextNode(inputValue);

    li.appendChild(checkbox);
    li.appendChild(textNode);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}

function crossOut() {
    const listItem = this.parentNode;
    if (this.checked) {
        listItem.classList.add("checked");
    } else {
        listItem.classList.remove("checked");
    }
}