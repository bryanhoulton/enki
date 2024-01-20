import { readFileSync, writeFileSync } from "fs";

import { Document } from "./types";

export function load(path: string): Document<string> {
  const file = readFileSync(path, "utf8");
  const obj = JSON.parse(file) as Document<string>;
  return obj;
}

export function save(path: string, doc: Document<string>): void {
  const json = JSON.stringify(doc);
  return writeFileSync(path, json, "utf8");
}

const doc = load("./test-instance/base-enki.json");
console.log(doc);
