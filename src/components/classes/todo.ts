import { v4 as uuidv4 } from "uuid";
export class todo {
    constructor(id:string="", title:string="", completed:boolean) {
        this.id=id;
        this.title=title;
        this.completed=completed;
    }
    public id: string=uuidv4();
    public title: string="";
    public completed: boolean=false;
}