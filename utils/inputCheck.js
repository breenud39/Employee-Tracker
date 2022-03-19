const mysql = require('mysql2');
var inquirer = require('inquirer');
const cTable = require('console.table');

const ask_questions = () =>
{
  return inquirer.prompt([
    {
      /* Pass your questions in here */
      type: 'list',
      name: 'chooseList',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'and update an employee role']
    },
  ]).then(choices =>
    {
      if(choices.chooseList === 'view all departments')
      {
        /*function */
      }
      else if(choices.chooseList === 'view all roles')
      {
        /*function */
      }
      else if(choices.chooseList === 'view all employees')
      {
        /*function */
      }
      else if(choices.chooseList === 'add a department')
      {
        /*function */
      }
      else if(choices.chooseList === 'add a role')
      {
        /*function */
      }
      else if(choices.chooseList === 'add an employee')
      {
        /*function */
      }
      else if(choices.chooseList === 'and update an employee role')
      {
        /*function */
      }
    })
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

ask_questions()