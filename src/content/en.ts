import type { Content } from "./types.js";

export const en: Content = {
  lang: "en",
  langName: "English",

  meta: {
    description:
      "Tim Kieboom, backend and systems developer. A compiler, a desktop shell, a terminal editor and a small operating system, plus a school team project and a CityGIS internship.",
    ogDescription: "Backend and systems developer who likes working close to the machine.",
  },

  nav: {
    verify: "verify",
    work: "work",
    about: "about",
    contact: "contact",
    sections: "Sections",
    switchLang: "Language",
  },

  hero: {
    status: "Open to work",
    lead: "Backend and systems developer who likes working close to the machine.",
    sub: "I write a compiler, a desktop shell, a terminal editor and a small operating system in my spare time, and I am looking for a backend or low-level role where that curiosity is useful.",
    seeWork: "See the work",
  },

  verify: {
    title: "Check it for yourself",
    shipped: {
      label: "Shipped",
      title: "sol-shell",
      text: "A status bar, wallpaper and notification daemon for Hyprland that I run on my own machine. The first release is still in progress: install docs and a test on a clean machine remain.",
      state: "Release in progress",
      source: "Source",
    },
    team: {
      label: "Teamwork",
      title: "DSI-logboek",
      text: "A school web app prototype built by a team of three contributors, with student and parent pages. I made 46 commits, including the database work, in a repository with about 30 pull requests merged across the team.",
      state: "Code private, happy to walk through it",
    },
    experience: {
      label: "Work experience",
      title: "CityGIS internship",
      text: "An internship at a company that builds geospatial software. I wrote Kotlin, Rust and Python against their systems in a private repository. The code is proprietary, so I describe it rather than link it.",
      state: "Code private, references on request",
    },
  },

  work: {
    title: "Selected work",
    label: "Public projects",
    sol: {
      kind: "Compiler · Rust · LLVM",
      why: "A systems language that keeps Rust's borrow checker and drops much of the boilerplate, with a syntax influenced by Kotlin and Swift.",
      stands: "Where it stands:",
      note: "pre-alpha. The pipeline runs from source to LLVM IR for a non-generic subset of the language. Borrow checking is in progress and generics and union types are still to come. Real programs do not compile yet.",
      source: "Read the source",
      features: [
        { term: "Ownership", text: "Values move by default and the compiler checks borrows at compile time." },
        {
          term: "Bindings",
          text: "<code>::</code> for constants, <code>:=</code> for immutable locals and <code>mut</code> for mutable ones, so a name tells you how it can change.",
        },
        { term: "Methods", text: "Any type can be extended with methods, primitives included." },
        {
          term: "Types",
          text: "Aliases, nominal wrappers and range-limited types, with union types and match chains planned.",
        },
        { term: "Concurrency", text: "A built-in async/await runtime built around structured concurrency." },
      ],
    },
    panel: {
      aria: "Example of sol-lang syntax and the state of its compiler pipeline",
      sub: "my compiler, in Rust",
      comments: {
        bindings: "constant, immutable local, mutable local",
        methods: "add a method to a primitive type",
        error: "propagate an error to the caller",
      },
      pipeline: "Compiler pipeline",
      legend: { done: "works end to end (non-generic subset)", wip: "in progress", plan: "planned" },
    },
    projects: [
      {
        name: "sol-shell",
        text: "A status bar, wallpaper and notification daemon for Hyprland, written in QML on Quickshell. <b>Singleton services own the system state</b> (audio, Bluetooth, network, CPU and memory) and the UI only displays it. It includes a theme system that exports colors to Wofi, Dolphin, Thunar and Zen, and ships with a NixOS module.",
        tags: ["QML", "Quickshell", "Nix"],
        url: "https://github.com/Tim-kieboom/sol-shell",
      },
      {
        name: "TerminalCode",
        text: "A keyboard-driven code editor that runs in the terminal, written in Rust with Ratatui. <b>Keybindings and themes are plain JSON files</b>, so the editor can be reshaped without recompiling.",
        tags: ["Rust", "Ratatui", "TUI"],
        url: "https://github.com/Tim-kieboom/TerminalCode",
      },
      {
        name: "arduinoOS",
        text: "A small operating system in C++ that I wrote for school. It is built with PlatformIO on top of a library of my own, <b>TKardunio</b>, and is where I first worked directly against hardware limits.",
        tags: ["C++", "PlatformIO", "Embedded"],
        url: "https://github.com/Tim-kieboom/arduinoOS",
      },
    ],
    source: "Source",
  },

  about: {
    title: "About",
    paragraphs: [
      "I like understanding how things work underneath. That is why I build compilers and operating systems for fun, and why I run NixOS with Hyprland on my own machine and keep adjusting it. sol-shell grew out of that habit.",
      "Most of my low-level work is in Rust and C++. I am looking for a backend or systems role, and I am open to which direction that takes while I learn what suits me best.",
    ],
    toolsLabel: "Tools",
    internship: {
      label: "Internship",
      text: "I did my internship at CityGIS, a company that builds geospatial software. The product is proprietary, so there is no public code to show. I am happy to talk about the work and what I learned in a conversation.",
    },
  },

  contact: {
    title: "Want to talk about a role?",
    note: "References on request. Built with plain HTML, SCSS and TypeScript.",
  },
};
