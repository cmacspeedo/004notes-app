const chalk = require("chalk");
const yargs = require("yargs");
const yargsParser = require("yargs-parser");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Creat list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);
