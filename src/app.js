require("./db/connection");
const { add } = require("./utils");
const yargs = require("yargs");
const command = process.argv[2];
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;

const app = () => {
    if (command === "add") {
        
        if(actor) {
        add({ title: title, actor: actor });
        } else {
            add({ title: title })
        }

    } else if (command === "list") {
        // list function goes here //
    } else if (command === "update") {

    } else if (command === "delete") {

    }
};

app();