//modules
//const fs = require('fs')
//fs.writeFileSync('notes.txt' , 'Hello')
//console.log(fs.readFileSync('notes.txt').toString())

//appendFilesync
//fs.appendFileSync( 'notes.txt', 'This is the appended text')

///////////////////////////////////

//const z = require('./data')
//console.log(z(9,6))

//////////////////////////////////
//const validator = require ('validator')
//console.log(validator.isEmail('sabah@gmail.com'))

/////////////////////////////////
//const chalk = require('chalk')
//console.log(chalk.green('Hello %s'));

//////////////////////////////////////
//console.log(process.argv)
//const command = process.argv[2]

/////////////////////////////////
const yargs = require('yargs')
const { demandCommand, demandOption } = require('yargs')


const notes = require('./notes')
///////////  Add  ////////////////
yargs.command({
    command:'add',
    describe:'Add notes',
    builder:{
        title:{
            describe:'this is title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addN(argv.title,argv.body);
    }
})

//////// Delete ///////////////////
yargs.command({
    command:'delete',
    describe:'Delete notes',
    builder:{
        title:{
            describe:'this is title',
            demandOption:true,
            type:'string'
        }
    },
    
    handler:(argv)=>{
        notes.removeN(argv.title);
    }
})

////////// list ////////////////
yargs.command({
    command:'list',
    describe:'List notes',
    handler:(argv)=>{
        notes.listN();
    }
})

//////// read //////////
yargs.command({
    command:'read',
    describe:'Read notes',
    builder:{
        title:{
            describe:'this is title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readN(argv.title)
    }
})

yargs.parse()