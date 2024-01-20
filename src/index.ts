#! /usr/bin/env node

import { Command } from "commander";
import { textSync } from "figlet";
import { existsSync, readdirSync, unlinkSync } from "fs";
import { prompt } from "promptly";

import config from "../package.json";
import { createNewInstance, saveEnki } from "./files";
import { minLength } from "./validators";

(async () => {
  const program = new Command();
  program
    .version(config.version)
    .description("A CLI implementation of the Enki Protocol.");

  console.log(textSync("Enki  CLI"));

  // Instance commands
  const instance = program.command("instance");
  instance
    .command("create")
    .description("Create a new Enki instance.")
    .action(async () => {
      const name = await prompt("Instance Name: ", { validator: minLength(4) });
      const instance = createNewInstance(name);
      saveEnki(`./.enki/${name}.json`, instance);
      console.log(`Created instance '${name}'`);
    });
  instance
    .command("list")
    .description("List all Enki instances.")
    .action(() => {
      const names = readdirSync("./.enki");
      console.log(names.map((name) => name.replace(".json", "")).join("\n"));
    });
  instance
    .command("delete <name>")
    .description("Delete an Enki instance.")
    .action((name: string) => {
      if (existsSync(`./.enki/${name}.json`) === false) {
        console.log(`Instance '${name}' does not exist.`);
        return;
      }
      unlinkSync(`./.enki/${name}.json`);
    });

  program.parse(process.argv);
})();
