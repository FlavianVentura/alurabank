abstract class View <T> {

    private _elemento: Element;

    constructor(seletor: string){

        this._elemento = document.querySelector(seletor);
    }

    abstract template(model: T): string;

    update(model: T): void{

        this._elemento.innerHTML = this.template(model);
    }
}