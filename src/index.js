import os from "os";
import chalk from "chalk";
import { version } from "./../package.json";
import inquirer from "inquirer";

inquirer.prompt([
  
])

function renderGraffiti() {
  console.log(
    chalk.blue.bold(
      "*****   ********         ************    *****     *****    ************    "
    )
  );
  console.log(
    chalk.blue.bold(
      "***** ************     ****************  *****     *****  ****************  "
    )
  );
  console.log(
    chalk.blue.bold(
      "********************  *****        ***** *****     ***** *****        ***** "
    )
  );
  console.log(
    chalk.blue.bold(
      "********************* *****              *****     ***** *****              "
    )
  );
  console.log(
    chalk.blue.bold(
      "******         ******  **************     *****   *****   **************    "
    )
  );
  console.log(
    chalk.blue.bold(
      "*****           *****    **************     *********       **************  "
    )
  );
  console.log(
    chalk.blue.bold(
      "*****           *****              *****      *****                   ***** "
    )
  );
  console.log(
    chalk.blue.bold(
      "*****           ***** *****        *****      *****      *****        ***** "
    )
  );
  console.log(
    chalk.blue.bold(
      "*****           *****  ****************       *****       ****************  "
    )
  );
  console.log(
    chalk.blue.bold(
      "*****           *****    ************         *****         ************    "
    )
  );
}

function renderDetails() {
  // General Info:
  console.log(chalk.red.bold("General Info:"));
  console.log(chalk.blue.bold("PC Hostname: "), os.hostname());
  console.log(chalk.blue.bold("Username: "), os.userInfo().username);
  console.log(chalk.blue.bold("Home Directory Path: "), os.userInfo().homedir);
  console.log(chalk.blue.bold("Default Shell Path: "), os.userInfo().shell);
  console.log(chalk.blue.bold("Operating System Name: "), os.type());
  console.log(chalk.blue.bold("Operating System Platform: "), os.platform());
  console.log(chalk.blue.bold("Operating System Release: "), os.release());
  console.log(chalk.blue.bold("CPU Architecture: "), os.arch(), "\n");

  // Storage Info:
  console.log(chalk.red.bold("Storage Info: "));
  console.log(
    chalk.blue.bold("Total System Memory: "),
    Math.round(os.totalmem() / 1e6),
    "MB"
  );
  console.log(
    chalk.blue.bold("Free System Memory: "),
    Math.round(os.freemem() / 1e6),
    "MB"
  );

  console.log("");

  // CPUs Info:
  console.log(chalk.red.bold("Logical CPUs Info:"));
  let count = 0;
  os.cpus().forEach((cpu) => {
    count++;
    console.log(
      chalk.green.bold(`Logical CPU | ${count}:\n`),
      `    ${chalk.blue.bold("Model: ")} ${cpu.model}\n`,
      `    ${chalk.blue.bold("Speed: ")} ${cpu.speed / 1000} GHz\n`,
      `    ${chalk.blue.bold('Times spent in "user" mode: ')} ${
        cpu.times.user / 1000
      } s\n`,
      `    ${chalk.blue.bold('Times spent in "nice" mode: ')} ${
        cpu.times.nice / 1000
      } s\n`,
      `    ${chalk.blue.bold('Times spent in "sys" mode: ')} ${
        cpu.times.sys / 1000
      } s\n`,
      `    ${chalk.blue.bold('Times spent in "idle" mode: ')} ${
        cpu.times.idle / 1000
      } s\n`,
      `    ${chalk.blue.bold('Times spent in "irq" mode: ')} ${
        cpu.times.irq / 1000
      } s\n`
    );
  });
}

export function cli() {
  console.log("");
  renderGraffiti();
  console.log("");
  console.log(chalk.green.bold(`NSYS | Version: ^${version}`));
  console.log("");
  renderDetails();
  console.log("");

  // Terminated
  console.log(
    chalk.green.bold("SUCCESS"),
    "Fetched information successfully!\n"
  );
}
