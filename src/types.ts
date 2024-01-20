export type SemanticVersion = {
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

export type Document<T> = IIdentified &
  IVersioned & {
    scope: Scope;
    content: T;
  };

export type Lexicon = Document<{
  [key: string]: {
    definition: string;
    description: string;
  };
}>;

export type Scope = {
  lexicon: Lexicon | null;
};

export type Challenge = Document<{}> & {
  target: string; // Document ID.
  status: "open" | "closed";
};
