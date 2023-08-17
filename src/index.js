import tasks from "./tasks";
import { isToday } from 'date-fns';

import { todayPage, weekPage, inboxPage, loadTodayPage, loadWeekPage, loadinboxPage } from "./nav";

const display = document.querySelector(".display");
const task_form = document.getElementById("taskInfo");
const formBtn = document.getElementById("addTask");
const addTaskBtn = document.getElementById('add');
const cancelBtn = document.getElementById('cancel');

formBtn.onclick = () => {
    task_form.classList.add('active');
}

cancelBtn.onclick = () => {
    task_form.classList.remove('active');
}

function displayTask(fooTask)
{
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'taskContainer');

    const task_name = document.createElement('div');
    task_name.setAttribute('id', 'task_name');
    task_name.innerHTML = fooTask.getTitle();

    const date = document.createElement('div');
    date.setAttribute('id', 'date');
    date.innerHTML = fooTask.getDate();

    const status = document.createElement('div');
    status.setAttribute('id', 'status');

    status.onclick = () =>{
        if (fooTask.completed){
            fooTask.completed = false;
            status.classList.remove("complete");
            taskContainer.classList.remove('complete');
        }
        else{
            fooTask.completed = true;
            status.classList.add("complete");
            taskContainer.classList.add("complete");
        }
    }

    taskContainer.appendChild(task_name);
    taskContainer.appendChild(date);
    taskContainer.appendChild(status)

    return taskContainer;
}

addTaskBtn.onclick = () => {
    
    const task_name = document.querySelector('#title').value;
    const task_date = document.querySelector('#task_date').value;
    if(task_name == ""){
        alert("Please fill in a Title.");
        return;
    }

    const thisTask = new tasks(task_name, task_date);
    display.appendChild(displayTask(thisTask));
    task_form.classList.remove('active');
}



