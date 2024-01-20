import cuid from "cuid";
import { readFileSync, writeFileSync } from "fs";

import { Instance } from "./types";

export function loadEnki(path: string): Instance {
  const file = readFileSync(path, "utf8");
  const obj = JSON.parse(file) as Instance;
  return obj;
}

export function saveEnki(path: string, doc: Instance): void {
  const json = JSON.stringify(doc);
  return writeFileSync(path, json, { encoding: "utf8" });
}

export function createNewInstance(name: string): Instance {
  return {
    __objectName: "Instance",
    id: cuid(),
    name,
    documents: [
      {
        __objectName: "Document",
        id: cuid(),
        version: {
          __objectName: "SemanticVersion",
          major: 1,
          minor: 0,
          patch: 0,
        },
        scope: {
          lexicon: {
            __objectName: "Lexicon",
            id: cuid(),
            version: {
              __objectName: "SemanticVersion",
              major: 1,
              minor: 0,
              patch: 0,
            },
            scope: { lexicon: null, challenges: [] },
            content: {},
          },
          challenges: [],
        },
        content: "",
      },
    ],
  };
}
