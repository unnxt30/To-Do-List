import tasks from "./tasks";
import { isEqual, format, toDate } from 'date-fns';
import { todayPage, weekPage, inboxPage, loadTodayPage, loadWeekPage, loadInboxPage } from "./nav";

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

loadInboxPage()

function displayTask(fooTask)
{
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'taskContainer');

    const task_name = document.createElement('div');
    task_name.setAttribute('id', 'task_name');
    task_name.innerHTML = fooTask.getTitle();

    const date = document.createElement('div');
    date.setAttribute('id', 'date');
    date.innerHTML = fooTask.getFormattedDate();

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
    console.log(task_date); 
    const todayDate = new Date();
    const today = format(todayDate, 'yyyy-MM-dd');

    console.log(today);
    if(task_name == ""){
        alert("Please fill in a Title.");
        return;
    }

    const thisTask = new tasks(task_name, task_date);
    inboxPage.appendChild(displayTask(thisTask));

    if(task_date === today){
        todayPage.appendChild(displayTask(thisTask));
    }
    else{
        weekPage.appendChild(displayTask(thisTask));
    }
    task_form.classList.remove('active');
}

const inboxBtn = document.querySelector('#inbox');
const todayBtn = document.querySelector('#today');
const weekBtn = document.querySelector('#week')

inboxBtn.onclick = () => {
    loadInboxPage()
}

todayBtn.onclick = () => {
    loadTodayPage()
}

weekBtn.onclick = () => {
    loadWeekPage();
}