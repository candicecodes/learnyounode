/* MAKE IT MODULAR =========================== */
let argv = process.argv[2];
let extension = process.argv[3];

let myModule = require('./module');

myModule(argv, extension, (err, list) => {
    err ? console.log('Error!') : console.log(list);
})

