/**
 * Everything that is translated lives in a Content object, one per language.
 * Strings may contain a little trusted inline HTML (<b>, <em>, <code>).
 */

export type Lang = "en" | "nl";

export interface Content {
  lang: Lang;
  /** Language name shown in the switch, in that language. */
  langName: string;

  meta: { description: string; ogDescription: string };

  nav: { verify: string; work: string; about: string; contact: string; sections: string; switchLang: string };

  hero: { status: string; lead: string; sub: string; seeWork: string };

  verify: {
    title: string;
    shipped: VerifyItem;
    team: VerifyItem;
    experience: VerifyItem;
  };

  work: {
    title: string;
    label: string;
    sol: {
      kind: string;
      why: string;
      stands: string; // bold lead-in, e.g. "Where it stands:"
      note: string;
      source: string;
      features: { term: string; text: string }[];
    };
    panel: {
      aria: string;
      sub: string;
      comments: { bindings: string; methods: string; error: string };
      pipeline: string;
      legend: { done: string; wip: string; plan: string };
    };
    projects: Project[];
    source: string;
  };

  about: {
    title: string;
    paragraphs: string[];
    toolsLabel: string;
    internship: { label: string; text: string };
  };

  contact: { title: string; note: string };
}

export interface VerifyItem {
  label: string;
  title: string;
  text: string;
  state: string;
  /** Link text, only for items that link to a public repo. */
  source?: string;
}

export interface Project {
  name: string;
  text: string;
  tags: string[];
  url: string;
}
