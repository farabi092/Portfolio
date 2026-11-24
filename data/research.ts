// Content for the Research section.
// Only details you provided are included. Do not add a journal name, date,
// DOI or author list here unless they are confirmed.

export type ResearchEntry = {
  category: string;
  title: string; // the part before ": " is shown first, the rest in the accent colour
  highlights: string[]; // short bullet points
  dataset: {
    name: string;
    description: string;
  };
  statusLabel: string; // small tag
  status: string; // full statement
};

export const researchEntries: ResearchEntry[] = [
  {
    category: "Research",
    title:
      "Structurally Private Heterogeneous Federated Learning: Buffer-Guided Knowledge Distillation for Non-IID Agricultural Pest Classification",
    highlights: [
      "Developed a federated learning framework for six heterogeneous clients, combining FedAvg aggregation with FedProx regularization.",
      "Introduced hierarchical buffer selection using HAC on ConvNeXt features, improving non-buffer class accuracy by 12.57 percentage points and reaching 63.76% overall test accuracy.",
      "Evaluated privacy risk with property-inference attacks, recording 0% attack accuracy in the tested setting.",
    ],
    dataset: {
      name: "IP102",
      description:
        "A large-scale agricultural pest recognition benchmark containing 75,222 images across 102 pest species.",
    },
    statusLabel: "Under review",
    status:
      "Completed as an undergraduate thesis work, submitted to a journal and currently under review.",
  },
];
