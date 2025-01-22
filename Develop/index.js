

// 'Description: ',
// 'Table of Contents: ',
// 'Installation: ',
// 'Usage: ',
// 'License: ',
// 'Contributing: ',
// 'Tests: ',
// 'Questions: ',

// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'Please submit the title of your application: ',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Please (briefly) describe your application: ',
		name: 'description',
	},
	{
		type: 'input',
		message: 'Please describe the installation process: ',
		name: 'install',
	},
	{
		type: 'input', 
		message: 'Please describe the usage/functionality: ',
		name: 'usage',
	},
	{
		type: 'list',
		message: 'Please select a license from the following options: ',
		name: 'license',
		choices: ['No License', 'Apache', 'Boost', 'MIT', 'Mozilla', 'Perl', 'SIL', 'Unlicense', 'WTFPL',],
	},
	{
		type: 'input',
		message: 'Please outline contribution guidelines: ',
		name: 'contributions',
	},
	{
		type: 'input',
		message: 'Please describe the testing process for this application: ',
		name: 'tests'
	},
	{
		type: 'input',
		message: 'Please enter your GitHub username: ',
		name: 'github',
	},
	{
		type: 'input',
		message: 'Please enter your Email: ',
		name: 'email',
	},
	{
		type: 'input',
		message: 'Please enter contact instructions: ',
		name: 'contact',
	}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
		err ? console.error(err) : console.log('File Saved')
	)
};

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((response) => {			// Inquire
		console.log(response);
		console.log(generateMarkdown(response));
		writeToFile('README.md', generateMarkdown(response));
		return(response);
	})
};

// Function call to initialize app
init();