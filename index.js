import students from "./students.js";
import chalk from "chalk";


// Same color
// for (let i = 0; i < students.length; i++) {
//     console.log(chalk.red(students[i]));
// }
    
    
// differents colors
console.log(chalk.red(students[0]));
console.log(chalk.blue(students[1]));
console.log(chalk.yellow(students[2]));
console.log(chalk.green(students[3]));