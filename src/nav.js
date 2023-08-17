const taskInfo = document.querySelector('#taskInfo');

export const todayPage = document.createElement('div');
todayPage.setAttribute('class', 'todayPage');

export const weekPage = document.createElement('div');
weekPage.setAttribute('class', 'weekPage');

export const inboxPage = document.createElement('div');
inboxPage.setAttribute('class', 'inboxPage');


export  function loadTodayPage(){
    taskInfo.insertAdjacentElement('afterend', todayPage);
}

export  function loadWeekPage(){
    taskInfo.insertAdjacentElement('afterend', weekPage);
}

export  function loadinboxPage(){
    taskInfo.insertAdjacentElement('afterend', inboxPage);
}
//export the function that occur when the buttons are clicked. Export them. Use them in Index.js .