// plantData.js
export const plantsDetailsData = [
  {
    id: "lavender-english",
    name: "English Lavender",
    botanicalName: "Lavandula angustifolia",
    categories: ["Herbs", "Flowering", "Medicinal"],
    modelPath: "/models/lavender.glb",
    description:
      "English lavender is a compact, aromatic shrub known for its fragrant purple flowers and silver-green foliage. This versatile herb has been cultivated for centuries for its essential oils, culinary uses, and ornamental value.",

    // Basic Care Info
    light: "Full sun",
    water: "Moderate, drought-tolerant",
    temperature: "60-65°F (15-18°C)",
    height: "2-3 feet",

    // Scientific Classification
    classification: {
      kingdom: "Plantae",
      order: "Lamiales",
      family: "Lamiaceae",
      genus: "Lavandula",
      species: "L. angustifolia",
      subspecies: "Multiple cultivars",
    },

    // Detailed Care Information
    care: {
      soil: "Well-draining, slightly alkaline soil with pH 6.7-7.3. Prefers sandy or gravelly soils with low fertility.",
      fertilization:
        "Light feeder, apply balanced fertilizer in spring. Avoid over-fertilizing which can reduce essential oil content.",
      pruning:
        "Prune in late summer after flowering or early spring. Cut back by one-third to maintain shape and promote dense growth.",
      commonProblems: [
        "Root rot in poorly draining soils",
        "Leaf spot in humid conditions",
        "Spider mites during dry spells",
        "Woody growth if not pruned regularly",
      ],
    },

    // Uses and Benefits
    uses: {
      traditional: [
        "Essential oil production",
        "Dried flowers for sachets and potpourri",
        "Culinary herb in Mediterranean cuisine",
        "Natural moth repellent",
      ],
      medicinal: [
        "Aromatherapy for anxiety and stress relief",
        "Antiseptic and anti-inflammatory properties",
        "Sleep aid and relaxation",
        "Natural insect bite treatment",
      ],
    },

    // Additional Scientific Details
    scientific: {
      floweringSeason: "June to August",
      nativeRegion: "Mediterranean",
      pollination: "Attracts bees and butterflies",
      propagation: "Seeds, softwood cuttings, or division",
      chemicalComponents: [
        "Linalool",
        "Linalyl acetate",
        "Lavandulol",
        "Geraniol",
      ],
    },
  },
  {
    id: "rosemary-common",
    name: "Common Rosemary",
    botanicalName: "Rosmarinus officinalis",
    categories: ["Herbs", "Evergreen", "Medicinal"],
    modelPath: "/models/rosemary.glb",
    description:
      "Rosemary is an aromatic evergreen shrub with needle-like leaves and blue flowers. It's a versatile herb prized for its fragrance, culinary uses, and medicinal properties.",

    light: "Full sun",
    water: "Low to moderate",
    temperature: "55-80°F (13-27°C)",
    height: "4-6 feet",

    classification: {
      kingdom: "Plantae",
      order: "Lamiales",
      family: "Lamiaceae",
      genus: "Rosmarinus",
      species: "R. officinalis",
      subspecies: "Various cultivars",
    },

    care: {
      soil: "Well-draining, slightly acidic to neutral soil. Tolerates poor soils but needs good drainage.",
      fertilization:
        "Light feeder, apply balanced fertilizer in spring. Too much nitrogen reduces essential oil content.",
      pruning:
        "Prune after flowering to maintain shape. Can be heavily pruned to rejuvenate.",
      commonProblems: [
        "Root rot in wet conditions",
        "Powdery mildew in humid environments",
        "Spider mites in dry conditions",
        "Scale insects",
      ],
    },

    uses: {
      traditional: [
        "Culinary herb in Mediterranean cooking",
        "Natural air freshener",
        "Companion planting to repel pests",
        "Decorative hedging and topiary",
      ],
      medicinal: [
        "Memory enhancement",
        "Digestive aid",
        "Antimicrobial properties",
        "Circulation improvement",
      ],
    },

    scientific: {
      floweringSeason: "Spring to early summer",
      nativeRegion: "Mediterranean",
      pollination: "Attracts bees and other pollinators",
      propagation: "Stem cuttings preferred",
      chemicalComponents: ["1,8-cineole", "α-pinene", "camphor", "borneol"],
    },
  },
];
