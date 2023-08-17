import { format } from 'date-fns';

export default class tasks{
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
        this.completed = false;
    }

    getTitle(){
        return this.title;
    }

    getDate(){
        const foo = new Date(this.dueDate);
        return format(foo, 'MMMM d, yyyy'); 
    }

}

