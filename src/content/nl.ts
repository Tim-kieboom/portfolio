import type { Content } from "./types.js";

export const nl: Content = {
  lang: "nl",
  langName: "Nederlands",

  meta: {
    description:
      "Tim Kieboom, backend- en systeemontwikkelaar. Een compiler, een desktopshell, een terminaleditor en een klein besturingssysteem, plus een teamproject van school en een stage bij CityGIS.",
    ogDescription: "Backend- en systeemontwikkelaar die graag dicht op de machine werkt.",
  },

  nav: {
    verify: "controleer",
    work: "werk",
    about: "over mij",
    contact: "contact",
    sections: "Secties",
    switchLang: "Taal",
  },

  hero: {
    status: "Beschikbaar voor werk",
    lead: "Backend- en systeemontwikkelaar die graag dicht op de machine werkt.",
    sub: "In mijn vrije tijd schrijf ik een compiler, een desktopshell, een terminaleditor en een klein besturingssysteem. Ik zoek een backend- of low-level functie waarin die nieuwsgierigheid van pas komt.",
    seeWork: "Bekijk mijn werk",
  },

  verify: {
    title: "Controleer het zelf",
    shipped: {
      label: "Opgeleverd",
      title: "sol-shell",
      text: "Een statusbalk-, achtergrond- en notificatiedaemon voor Hyprland die ik op mijn eigen computer gebruik. Versie 0.1.0 is uitgebracht: te installeren op NixOS via een flake, en een VM-test start een verse gebruiker op en controleert of de shell opstart en blijft draaien.",
      state: "Uitgebracht, v0.1.0",
      source: "Release-notities",
    },
    team: {
      label: "Samenwerken",
      title: "DSI-logboek",
      text: "Een webapp-prototype voor school, gebouwd door een team van drie ontwikkelaars, met pagina's voor leerlingen en ouders. Ik deed 46 commits, waaronder het databasewerk, in een repository met ongeveer 30 pull requests die binnen het team zijn samengevoegd.",
      state: "Code privé, ik loop er graag doorheen",
    },
    experience: {
      label: "Werkervaring",
      title: "Stage bij CityGIS",
      text: "Een stage bij een bedrijf dat geo-software maakt. Ik schreef Kotlin, Rust en Python voor hun systemen in een privé-repository. De code is bedrijfseigendom, dus ik beschrijf het werk in plaats van ernaar te linken.",
      state: "Code privé, referenties op aanvraag",
    },
  },

  work: {
    title: "Geselecteerd werk",
    label: "Openbare projecten",
    sol: {
      kind: "Compiler · Rust · LLVM",
      why: "Een systeemtaal die de borrow checker van Rust behoudt en veel van de overbodige code weglaat, met een syntax beïnvloed door Kotlin en Swift.",
      stands: "Huidige stand:",
      note: "pre-alpha. De pipeline werkt van broncode tot LLVM IR voor een niet-generieke subset van de taal. De borrow checker is in aanbouw en generics en union types moeten nog komen. Echte programma's compileren nog niet.",
      source: "Lees de broncode",
      features: [
        { term: "Eigenaarschap", text: "Waarden worden standaard verplaatst en de compiler controleert leningen bij het compileren." },
        {
          term: "Bindingen",
          text: "<code>::</code> voor constanten, <code>:=</code> voor onveranderlijke lokale variabelen en <code>mut</code> voor veranderlijke, zodat de naam je vertelt hoe hij kan veranderen.",
        },
        { term: "Methoden", text: "Elk type kan met methoden worden uitgebreid, ook primitieve types." },
        {
          term: "Types",
          text: "Aliassen, nominale wrappers en types met een beperkt bereik, met union types en match-ketens gepland.",
        },
        { term: "Gelijktijdigheid", text: "Een ingebouwde async/await-runtime rond gestructureerde gelijktijdigheid." },
      ],
    },
    panel: {
      aria: "Voorbeeld van sol-lang-syntax en de stand van de compilerpipeline",
      sub: "mijn compiler, in Rust",
      comments: {
        bindings: "constante, onveranderlijke lokale, veranderlijke lokale",
        methods: "voeg een methode toe aan een primitief type",
        error: "geef een fout door aan de aanroeper",
      },
      pipeline: "Compilerpipeline",
      legend: { done: "werkt end to end (niet-generieke subset)", wip: "in aanbouw", plan: "gepland" },
    },
    projects: [
      {
        name: "sol-shell",
        text: "Een statusbalk-, achtergrond- en notificatiedaemon voor Hyprland, geschreven in QML op Quickshell. <b>Singleton-services beheren de systeemstatus</b> (audio, Bluetooth, netwerk, CPU en geheugen) en de UI toont die alleen. Met een themasysteem dat kleuren exporteert naar Wofi, Dolphin, Thunar en Zen, en een NixOS-module.",
        tags: ["QML", "Quickshell", "Nix"],
        url: "https://github.com/Tim-kieboom/sol-shell",
      },
      {
        name: "TerminalCode",
        text: "Een toetsenbordgestuurde code-editor die in de terminal draait, geschreven in Rust met Ratatui. <b>Sneltoetsen en thema's zijn gewone JSON-bestanden</b>, dus de editor is aan te passen zonder opnieuw te compileren.",
        tags: ["Rust", "Ratatui", "TUI"],
        url: "https://github.com/Tim-kieboom/TerminalCode",
      },
      {
        name: "arduinoOS",
        text: "Een klein besturingssysteem in C++ dat ik voor school schreef. Het is gebouwd met PlatformIO bovenop een eigen bibliotheek, <b>TKardunio</b>, en is waar ik voor het eerst direct tegen hardwarebeperkingen aanliep.",
        tags: ["C++", "PlatformIO", "Embedded"],
        url: "https://github.com/Tim-kieboom/arduinoOS",
      },
    ],
    source: "Broncode",
  },

  about: {
    title: "Over mij",
    paragraphs: [
      "Ik wil begrijpen hoe dingen eronder werken. Daarom bouw ik voor de lol compilers en besturingssystemen, en draai ik NixOS met Hyprland op mijn eigen computer die ik steeds blijf bijstellen. sol-shell is uit die gewoonte ontstaan.",
      "Het meeste van mijn low-level werk is in Rust en C++. Ik zoek een backend- of systeemfunctie en sta open voor de richting, terwijl ik ontdek wat het best bij me past.",
    ],
    toolsLabel: "Gereedschap",
    internship: {
      label: "Stage",
      text: "Ik liep mijn stage bij CityGIS, een bedrijf dat geo-software maakt. Het product is bedrijfseigendom, dus er is geen openbare code om te laten zien. Ik vertel graag in een gesprek over het werk en wat ik ervan heb geleerd.",
    },
  },

  contact: {
    title: "Praten over een functie?",
    note: "Referenties op aanvraag. Gebouwd met gewone HTML, SCSS en TypeScript.",
  },
};
