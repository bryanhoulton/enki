import { readFileSync, writeFileSync } from "fs";

import { Document } from "./types";

export function loadEnki(path: string): Document<string> {
  const file = readFileSync(path, "utf8");
  const obj = JSON.parse(file) as Document<string>;
  return obj;
}

export function saveEnki(path: string, doc: Document<string>): void {
  const json = JSON.stringify(doc);
  return writeFileSync(path, json, "utf8");
}
