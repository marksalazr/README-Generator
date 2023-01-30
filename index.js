const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
 {
    type: 'input',
    name: 'title', 
    message: 'What is your projects name?'
 },

{type: 'input',
 name : 'description',
 message : 'List Why you made the project and what \n use case it has.'


},
 { type: 'input',
   name: 'how',
   message:'What did you use for this project? '},

 { type: 'input',
  name:'installation',
  message: 'What are the steps in installing your project?',

 },

 { type: 'input',
   name: 'credits',
   message:'List other collaborators, if any.'},


   { type: 'input',
   name: 'license',
   message:'License?'}



];
inquirer.prompt(questions).then(answers => {  
//console.log 
 createMD(answers);
})

const createMD = data => {
   const template = `#${data.title}

   ## Description 
   ${data.description}

   ## this project is made with${data.how}

   ## This can be installed by/with ${data.installation}
    > YOUR STEPS HERE <

   ## Other collaborators include${data.collaborators}

   ## current license, ${data.license} 
   
   `
   // console.log (template)
   fs.writeFile('README.md',template, err => {
      err ? console.log(err): console.log('File created!')
   }); 
   
}