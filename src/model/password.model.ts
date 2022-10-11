import {AbstractEntity} from "./abstract-entity.model";

export class Password extends AbstractEntity{
    descricao! : string
    login! : string
    url! : string
    password! : string

    constructor(){
        super();
        this.ativo = true
    }
}
