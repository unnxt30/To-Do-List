const taskInfo = document.querySelector('#taskInfo');
const pageHeading = document.querySelector('#pageHeading');
const display = document.querySelector('.display');

export const todayPage = document.createElement('div');
todayPage.setAttribute('class', 'todayPage');

export const weekPage = document.createElement('div');
weekPage.setAttribute('class', 'weekPage');

export const inboxPage = document.createElement('div');
inboxPage.setAttribute('class', 'inboxPage');

display.appendChild(todayPage);
display.appendChild(weekPage);
display.appendChild(inboxPage);

export  function loadTodayPage(){
    todayPage.classList.add('active');
    pageHeading.innerHTML = "Today";
    weekPage.classList.remove("active");
    inboxPage.classList.remove("active");
}

export  function loadWeekPage(){
    weekPage.classList.add('active')
    pageHeading.innerHTML = "Week"
    todayPage.classList.remove("active");
    inboxPage.classList.remove("active");
}

export  function loadInboxPage(){
    inboxPage.classList.add('active');
    pageHeading.innerHTML = "Inbox";
    todayPage.classList.remove("active");
    weekPage.classList.remove("active");
}
//export the function that occur when the buttons are clicked. Export them. Use them in Index.js .