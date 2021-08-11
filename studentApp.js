const yargs = require('yargs')
const { demandCommand, demandOption } = require('yargs')


const notes = require('./students')
///////////  Add  ////////////////
yargs.command({
    command:'add',
    describe:'Add Student',
    builder:{
        id:{
            describe:'this is student ID',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'this is student Name',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'this is student Grade',
            demandOption:true,
            type:'number'
        },
        comment:{
            describe:'this is student comment',
            type:'string'
        }
    },
    handler:(argv)=>{
        students.addStudent(argv.id,argv.name,argv.grade,argv.comment);
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