import type { CampsiteConfig } from "../types";

/**
 * Almenland Camping — Miniponyhof Wild (Familie Wild), Tober bei Passail, Steiermark.
 * Kleiner Wiesencampingplatz am Bio-Bauernhof im Naturpark Almenland.
 * Inhalte zu 100 % aus der Quelle (raw/digest) abgeleitet. Keine Preise in der Quelle →
 * Richtpreise als Platzhalter, offen ausgewiesen. Kein See. Design: Original-Palette, center.
 */
const IMG = "/campsites/almenland-camping";

const almenlandCamping: CampsiteConfig = {
  name: "Almenland Camping",
  shortName: "Almenland",
  slug: "almenland-camping",
  ort: "Tober bei Passail",
  region: "Steiermark",
  brandKind: "Camping am Bauernhof",
  regionLong: "Naturpark Almenland · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Campen, wo die Ponys grasen",
  claimEmphasis: "die Ponys",
  emailDetail: "euer kleiner Campingplatz direkt am Miniponyhof",
  intro:
    "Ein kleiner Wiesencampingplatz mitten am Bio-Bauernhof der Familie Wild: Miniponys vor dem Zelt, Hühner und Hasen zum Streicheln und das weite Almenland gleich hinterm Stellplatz — Urlaub, bei dem die Kinder den ganzen Tag draußen sind.",

  statement: {
    text: "Bei uns wird das Frühstücksei noch von den eigenen Hühnern gelegt — und die Ponys grüßen schon vor dem Zelt.",
    emphasis: "von den eigenen Hühnern",
  },

  pillars: [
    {
      title: "Wiesencamping am Hof",
      text: "Ebene Plätze auf der Hofwiese, zwischen Obstbäumen und Spielplatz — klein, ruhig und mittendrin statt am Rand.",
      image: { src: `${IMG}/gallery-eefcd88728.webp`, alt: "Wiesencampingplatz am Spielplatz des Miniponyhof Wild" },
    },
    {
      title: "Ponys & Hoftiere",
      text: "Miniponys, Hühner, Hasen und Katzenbabies gehören zum Hof — beim Ponyreiten und Striegeln sind die Kinder mittendrin.",
      image: { src: `${IMG}/kids-e44e09a8c6.webp`, alt: "Miniponys beim Grasen auf der Hofwiese am Miniponyhof Wild" },
    },
    {
      title: "Familie Wild",
      text: "Familie Wild führt den Bio-Bauernhof persönlich — beim Heuen, Melken und Ernten darfst du gern mit anpacken.",
      image: { src: `${IMG}/kids-04b6a8836a.webp`, alt: "Familie Wild vom Miniponyhof Wild am Hoftisch" },
    },
  ],

  usps: ["Miniponys & Reiten", "Wiesenstellplätze", "Bio-Bauernhof", "Schlafen im Heu", "Naturpark Almenland"],

  trust: {
    heading: "Warum Familien hier campen",
    headingEmphasis: "Familien",
    intro:
      "Klein, persönlich und voller Tiere: Beim Miniponyhof Wild teilst du dir die Wiese mit Ponys und Hühnern, die Kinder helfen am Hof mit, und abends knistert das Lagerfeuer unter dem Almenland-Himmel.",
  },

  awards: [],

  hero: {
    aerial: {
      src: `${IMG}/kids-63a11db422.webp`,
      alt: "Blick über die Wiesen des Miniponyhof Wild mit grasenden Ponys im Naturpark Almenland",
    },
  },

  breather: {
    image: { src: `${IMG}/gallery-bde6573be6.webp`, alt: "Blühende Bergwiese entlang der Wild-Wiesen-Runde im Almenland" },
    line: "Die Wild-Wiesen-Runde beginnt direkt am Hoftor.",
  },

  camping: {
    heading: "Camping am Miniponyhof",
    intro: "Ein überschaubarer Platz auf der Hofwiese — mit Tieren, Spielplatz und viel Auslauf direkt vor dem Vorzelt.",
    features: [
      {
        title: "Wiesenstellplätze",
        text: "Ebene Plätze auf der Hofwiese, umrahmt von Obstbäumen und Weiden — für Wohnwagen, Wohnmobil und Zelt.",
        image: { src: `${IMG}/gallery-51e3a69ea5.webp`, alt: "Wiesenstellplatz mit Campingbus am Miniponyhof Wild" },
      },
      {
        title: "Ruhig im Almenland",
        text: "Der Platz liegt am Dorfrand von Tober, ringsum nur Wiesen, Wald und die sanften Hügel des Naturparks Almenland.",
        image: { src: `${IMG}/gallery-a8731a0343.webp`, alt: "Überdachte Veranda mit Hängestuhl und Blick über die ruhige Hofwiese des Miniponyhof Wild" },
      },
      {
        title: "Schlafen im Heu",
        text: "Wer mag, übernachtet einmal ganz anders: im duftenden Heustadl auf weichem Stroh statt im Zelt.",
        image: { src: `${IMG}/gallery-c0313d8be6.webp`, alt: "Schlafen im Heu im Stadl am Miniponyhof Wild" },
      },
      {
        title: "Spielscheune für jedes Wetter",
        text: "Überdachter Spielbereich mit Sandkiste und Blick über die Wiese — so wird auch ein Regentag zum Spieltag.",
        image: { src: `${IMG}/gallery-53308f068b.webp`, alt: "Überdachter Spielbereich mit Sandkiste am Campingplatz" },
      },
      {
        title: "Tischfußball & Tischtennis",
        text: "Im überdachten Spielbereich treffen sich die Kinder zu Tischfußball, Tischtennis und Tischkicker.",
        image: { src: `${IMG}/gallery-648512437e.webp`, alt: "Kinder beim Tischfußball im überdachten Spielbereich" },
      },
      {
        title: "Mithelfen beim Heuen",
        text: "Wenn der Traktor zur Heuernte ausrückt, dürfen kleine Helfer mit aufladen und am Hof mit anpacken.",
        image: { src: `${IMG}/gallery-8765149d08.webp`, alt: "Kinder helfen beim Heuen im Stadl des Miniponyhof Wild" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber ein eigenes Haus?",
    intro:
      "Neben den Wiesenplätzen vermietet Familie Wild Ferienhäuser am Hof und eine Almhütte auf der Teichalm-Sommeralm — viel Holz, eigene Küche und Platz für die ganze Familie.",
    items: [
      {
        name: "Ferienhäuser am Hof",
        kind: "67 bis 130 m²",
        text: "Eigene Ferienhäuser direkt am Bauernhof, mit Terrasse und Blick auf die Ponyweide.",
        image: { src: `${IMG}/accommodation-4bacb87496.webp`, alt: "Ferienhäuser am Miniponyhof Wild im Almenland" },
      },
      {
        name: "Gemütliche Wohnräume",
        kind: "Viel Holz aus dem eigenen Wald",
        text: "Holzgetäfelte Stuben, voll ausgestattete Küche und kindgerechte Räume zum Wohlfühlen.",
        image: { src: `${IMG}/accommodation-caa708c904.webp`, alt: "Holzgetäfelter Wohn- und Essraum eines Ferienhauses" },
      },
      {
        name: "Holzmeisterhütte",
        kind: "Almhütte auf der Teichalm-Sommeralm",
        text: "Eine urige Almhütte mitten im Naturpark Almenland — ideal für Wanderer und Ruhesuchende.",
        image: { src: `${IMG}/gallery-cdb7d01f8c.webp`, alt: "Holzmeisterhütte auf der Teichalm-Sommeralm" },
      },
    ],
  },

  kinder: {
    heading: "Tiere zum Anfassen",
    intro: "Streicheln, füttern, staunen: Am Hof leben jede Menge Tiere, die Kinder den ganzen Tag beschäftigen.",
    features: [
      {
        title: "Streicheltiere",
        text: "Meerschweinchen, Hasen und Katzenbabies warten auf Streicheleinheiten — gezähmt und geduldig.",
        image: { src: `${IMG}/gallery-73688c41ea.webp`, alt: "Kind mit Meerschweinchen am Miniponyhof Wild" },
      },
      {
        title: "Küken & Hühner",
        text: "Frische Bio-Eier holst du direkt aus dem Stall — und im Frühjahr piepst es im Hühnernest.",
        image: { src: `${IMG}/gallery-046676abce.webp`, alt: "Henne mit Küken im Stroh am Bio-Bauernhof Wild" },
      },
      {
        title: "Hasenbabys",
        text: "Im Stall wuseln junge Hasen durchs Heu — Füttern und Beobachten gehört zum Tagesprogramm.",
        image: { src: `${IMG}/gallery-903dc3bf42.webp`, alt: "Junge Hasen im Heu am Miniponyhof Wild" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Mitmachen am Bauernhof",
    intro: "Beim Miniponyhof Wild bist du nicht nur Gast: Bei den Tieren und auf den Bio-Wiesen darfst du selbst Hand anlegen.",
    items: [
      {
        title: "Ponys im Offenstall",
        text: "Die Ponys leben im offenen Stall gleich an der Wiese — Füttern und Striegeln gehört zum Tag.",
        image: { src: `${IMG}/kids-8fd29b71cf.webp`, alt: "Miniponys grasen auf der grünen Hofwiese am Miniponyhof Wild" },
      },
      {
        title: "Traktorfahrt über den Hof",
        text: "Beim Hofrundgang nehmen die Kinder im Anhänger Platz und fahren beim Bauern mit.",
        image: { src: `${IMG}/gallery-8eb6b0c318.webp`, alt: "Kinder bei der Traktorfahrt am Bauernhof Wild" },
      },
      {
        title: "Kühe melken",
        text: "Bei Biobäuerin Verena darfst du beim Melken zusehen und vorsichtig selbst Hand anlegen.",
        image: { src: `${IMG}/gallery-14ddb280ec.webp`, alt: "Kind beim Kühe melken am Bio-Bauernhof Wild" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Almenland",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Graz über die S35 und Weiz Richtung Passail, dann weiter nach Tober — rund 45 Minuten ab Graz. Parkplatz am Hof.",
      },
      {
        title: "Mit der Bahn",
        text: "Über Graz bis Bahnhof Weiz, von dort mit dem Bus ins Almenland oder Abholung nach Tober auf Anfrage.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Graz-Thalerhof, von dort rund eine Stunde mit dem Auto in den Naturpark Almenland.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Miniponyhof",
    headingEmphasis: "Sommer",
    intro: "Spielwiese, Tiere und Almenland-Hügel — ein paar Eindrücke vom Hof und vom Campingplatz.",
    tag: "Urlaub am Bauernhof",
    moreCount: 30,
    images: [
      { src: `${IMG}/gallery-bc9d2e3338.webp`, alt: "Gemütliche Sommerterrasse am Miniponyhof Wild mit Mosaiktisch und Blick in den Hofgarten" },
      { src: `${IMG}/gallery-0819659928.webp`, alt: "Spielplatz mit Rosengarten am Campingplatz" },
      { src: `${IMG}/gallery-7adf3a8cbe.webp`, alt: "Sommertag auf der Spielwiese am Hof" },
      { src: `${IMG}/gallery-3e651eb499.webp`, alt: "Blühende Margeriten am Wanderweg durch den Naturpark Almenland" },
    ],
  },

  booking: {
    heading: "Reif für ein paar Tage am Hof?",
    headingEmphasis: "am Hof",
    intro: "Sag uns Zeitraum und Personen — Familie Wild meldet sich persönlich mit der Verfügbarkeit für deinen Wiesenplatz.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Zzgl. Ortstaxe und ggf. Strom.",
    highlight: {
      title: "Tiere inklusive",
      text: "Ponys, Hühner und Hasen gehören zum Platz — Streicheln kostet nichts.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnwagen / Wohnmobil", perNight: 32, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 24, perExtraGuest: 6 },
    ],
  },

  kontakt: {
    coords: { lat: 47.287464, lng: 15.492114 },
    tel: "+43 3179 23888",
    telHref: "tel:+43317923888",
    mail: "info@landferien.at",
    adresse: "Tober 32 · 8162 Passail · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Kinder & Tiere", href: "#kinder" },
    { label: "Ferienhäuser", href: "#mobilheime" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default almenlandCamping;
