import sayHi from './modules/module.js';
import stuff from './modules/operations.js';

function start() {
    sayHi();
    console.log(stuff.sum(1, 1));
}

start();