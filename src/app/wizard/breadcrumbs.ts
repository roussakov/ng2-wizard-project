export class Breadcrumbs {
    public title:string;
    public current:boolean;

    constructor(title, current) {
        this.title = title;
        this.current = current;
    }
}
