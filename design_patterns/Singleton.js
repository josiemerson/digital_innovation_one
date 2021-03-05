'use strict';

function Pessoa(customProperties) {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Josiemerson'});
const p1 = Pessoa.call({name: 'Gabriela'})
console.log(p);//Retornará Josiemerson
console.log(p1);//Retornará Josiemerson