'use strict';

function Pessoa(customProperties) {
    return {
        name : 'Josiemerson', 
        lastName : 'Lacerda',
        ...customProperties
    }
}

// Factory é quando uma função não é chamada com new.
const p = Pessoa({idade: 28, sexo: 'Masculino', name : 'Josiemerson', lastName : 'Lacerda'});

//Isso não é uma Factory pois foi instanciada com new
const p1 = new Pessoa({idade: 28, sexo: 'Feminino', name:'Gabriela', lastName:'Martins'});
console.log(p);
console.log(p1);
