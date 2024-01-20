export type ObjectType =
  | "SemanticVersion"
  | "Lexicon"
  | "Challenge"
  | "Document"
  | "Instance";

export type Object<T extends ObjectType> = {
  __objectName: T;
};

export type SemanticVersion = Object<"SemanticVersion"> & {
  major: number;
  minor: number;
  patch: number;
};

export type IIdentified = {
  id: string;
};
export type IVersioned = {
  version: SemanticVersion;
};

export type Document<
  T = string,
  N extends ObjectType = "Document"
> = IIdentified &
  IVersioned &
  Object<N> & {
    scope: Scope;
    content: T;
  };

export type Lexicon = Document<
  {
    [key: string]: {
      definition: string;
      description: string;
    };
  },
  "Lexicon"
>;

export type Scope = {
  lexicon: Lexicon | null;
  challenges: Challenge[];
};

export type Challenge = Document<
  {
    target: string;
    replacement: string;
  },
  "Challenge"
> & {
  status: "open" | "closed";
};

export type Instance = Object<"Instance"> & {
  name: string;
  id: string;
  documents: Document[];
};
