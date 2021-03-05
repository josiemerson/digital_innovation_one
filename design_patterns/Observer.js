//Observer: É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const obs = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

obs.subscribe(logData1);
obs.subscribe(logData2);
obs.subscribe(logData3);


obs.notify('Execução');
//Será executado:
//Subscribe 1: Execução 
//Subscribe 2: Execução 
//Subscribe 3: Execução 