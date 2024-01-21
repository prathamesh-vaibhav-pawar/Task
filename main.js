function add() {
    const task = document.getElementById("Task").value;
    sessionStorage.setItem(task, task);
    const addedTask = sessionStorage.getItem(task);
    const div = "<div class='Taskk' id=" + addedTask + " onclick='redirect(this.id)'>" +
                    "&nbsp;&nbsp;&nbsp;" + addedTask +
                    "<button class='btn btn-primary buttn'>Edit</button>" +
                    "<button class='btn btn-success buttn' onclick='Completed(\"" + addedTask + "\")'>Mark Complete</button>" +
                "</div><br>";
    document.getElementById("Show").innerHTML += div;
    document.getElementById("Task").value = " "
}

function redirect(name) {
    document.getElementById(name).innerHTML = ""
    sessionStorage.removeItem(name)
}
function Completed(name) {
    redirect(name);
    localStorage.setItem("taskCompleted",name)
    const comp = "<div class='Taskk' id=" + name + " onclick='redirect(this.id)'>" +
    "&nbsp;&nbsp;&nbsp;" + name +
    "<button class='btn btn-primary buttn'>Edit</button>" +
    "<button class='btn btn-success buttn' onclick='Completed(\"" + name + "\")'>Mark Complete</button>" +
"</div><br>";
    document.getElementById("tsk").innerHTML += comp
}
