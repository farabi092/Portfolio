export type TimelineItem = {
  period: string; // dates, shown in the left column
  title: string; // main line (role or institution)
  subtitle: string; // second line, in the accent colour (organization or degree)
  location?: string;
  meta?: string; // extra line, e.g. GPA
  details?: string[]; // bullet points
};

export type ExperienceGroup = {
  id: string;
  title: string;
  items: TimelineItem[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "professional",
    title: "Professional Experience",
    items: [
      {
        period: "September 2025 \u2013 Present",
        title: "Data Analyst, Part-time",
        subtitle: "Office of the Registrar, BRAC University",
        details: [
          "Working in a data analytics role for university ranking-related work.",
        ],
      },
    ],
  },
  {
    id: "education",
    title: "Educational Background",
    items: [
      {
        period: "September 2022 \u2013 September 2026",
        title: "BRAC University",
        subtitle: "Bachelor of Science in Computer Science & Engineering",
        location: "Dhaka, Bangladesh",
      },
      {
        period: "2021",
        title: "Viqarunnisa Noon School & College",
        subtitle: "Higher Secondary Certificate (Science)",
        location: "Dhaka, Bangladesh",
        
      },
      {
        period: "2019",
        title: "Viqarunnisa Noon School & College",
        subtitle: "Secondary School Certificate (Science)",
        location: "Dhaka, Bangladesh",
        
      },
    ],
  },
  {
    id: "extracurricular",
    title: "Extracurricular Activities",
    items: [
      {
        period: "February & November 2025",
        title: "Program Committee Co-ordinator",
        subtitle: "16th & 17th BRACU Convocation",
      },
      {
        period: "November 2024 \u2013 November 2026",
        title: "Director, Information Technology",
        subtitle: "BRAC University Response Team (BURT)",
      },
      {
        period: "October 2022 \u2013 August 2024",
        title: "Executive, Creative Department",
        subtitle: "BRAC University Computer Club (BUCC)",
      },
    ],
  },
];
