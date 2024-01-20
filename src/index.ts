import { Command } from "commander";
import { textSync } from "figlet";
import { prompt } from "promptly";

import config from "../package.json";
import { minLength } from "./validators";

(async () => {
  const program = new Command();
  program
    .version(config.version)
    .description("A CLI implementation of the Enki Protocol.");

  console.log(textSync("Enki  CLI"));

  const instance = program.command("instance");
  instance
    .command("create")
    .description("Create a new Enki instance.")
    .action(async () => {
      const name = await prompt("Instance Name: ", { validator: minLength(4) });
    });

  program.parse(process.argv);
})();
