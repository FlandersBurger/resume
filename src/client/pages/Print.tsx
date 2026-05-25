import { useEffect, useState } from "react";
import styled from "styled-components";

const PrintContent = styled.div`
  font-family: "Georgia", serif;
  font-size: 10pt;
  color: #111;
  line-height: 1.45;
`;

const PrHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2.5pt solid #2c5f8a;
  padding-bottom: 8pt;
  margin-bottom: 10pt;
`;

const PrName = styled.h1`
  font-size: 22pt;
  font-weight: 700;
  margin: 0 0 2pt;
  color: #1a1a1a;
`;

const PrTitle = styled.h2`
  font-size: 12pt;
  font-weight: 400;
  margin: 0;
  color: #2c5f8a;
`;

const PrHeaderRight = styled.div`
  text-align: right;
  font-size: 8.5pt;
  color: #444;
  line-height: 1.6;
`;

const PrSectionTitle = styled.div`
  font-size: 11pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #2c5f8a;
  border-bottom: 1pt solid #2c5f8a;
  margin: 10pt 0 5pt;
  padding-bottom: 2pt;
`;

const PrSummary = styled.p`
  margin: 0 0 4pt;
  font-size: 9.5pt;
`;

const PrSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6pt 14pt;
`;

const PrSkillCategoryName = styled.div`
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 0.06em;
  margin-bottom: 3pt;
`;

const PrSkillRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4pt;
  margin-bottom: 2.5pt;
`;

const PrSkillName = styled.span`
  flex: 0 0 90pt;
  font-size: 8.5pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PrSkillBarBg = styled.div`
  flex: 1;
  height: 5pt;
  background: #e0e0e0;
  border-radius: 3pt;
  overflow: hidden;
`;

const PrSkillBarFill = styled.div<{ $width: number }>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background: #2c5f8a;
  border-radius: 3pt;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
`;

const PrJob = styled.div`
  margin-bottom: 8pt;
  page-break-inside: avoid;
`;

const PrJobHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6pt;
  margin-bottom: 2pt;
`;

const PrJobCompany = styled.span`
  font-weight: 700;
  font-size: 10pt;
`;

const PrJobTitle = styled.span`
  font-size: 9.5pt;
  color: #2c5f8a;
`;

const PrJobDates = styled.span`
  margin-left: auto;
  font-size: 8.5pt;
  color: #666;
`;

const PrJobStory = styled.p`
  margin: 0 0 3pt;
  font-size: 9pt;
`;

const PrJobResponsibilities = styled.ul`
  margin: 0;
  padding-left: 14pt;
  font-size: 8.5pt;
  li { margin-bottom: 1.5pt; }
`;

const PrLangs = styled.div`
  display: flex;
  gap: 12pt;
  flex-wrap: wrap;
`;

const PrLangItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrLangName = styled.span`
  font-weight: 700;
  font-size: 9pt;
`;

const PrLangLevel = styled.span`
  font-size: 8pt;
  color: #666;
`;

interface Skill {
  name: string;
  type: string;
  enabled: string | boolean;
  percentage: number;
  category: string;
  since?: number;
}

interface Responsibility {
  name: string;
  description: string;
}

interface Job {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  story: string;
  responsibilities?: Responsibility[];
}

function getTimeSpan(job: Job) {
  const start = new Date(job.startDate).getFullYear();
  const end = job.endDate ? new Date(job.endDate).getFullYear() : "Present";
  return `${start} – ${end}`;
}

const CATEGORY_ORDER = [
  "frontend",
  "backend",
  "programming",
  "databases",
  "platforms",
  "tools",
  "monitoring",
  "ai",
  "languages",
];

export default function Print() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((r) => r.json())
      .then(setSkills)
      .catch(() => {});
    fetch("/experience.json")
      .then((r) => r.json())
      .then(setJobs)
      .catch(() => {});
  }, []);

  const enabledSkills = skills
    .filter((s) => s.type === "skill" && (s.enabled === true || s.enabled === "true"))
    .sort(
      (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) || b.percentage - a.percentage,
    );

  const skillsByCategory = enabledSkills.reduce(
    (acc, s) => {
      if (!acc[s.category]) acc[s.category] = [];
      acc[s.category].push(s);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  return (
    <PrintContent id="print-content">
      {/* ── Header ── */}
      <PrHeader>
        <div>
          <PrName>Laurent Debacker</PrName>
          <PrTitle>Full Stack Developer</PrTitle>
        </div>
        <PrHeaderRight>
          <div>debackerlaurent@gmail.com</div>
          <div>604-505-9305</div>
          <div>Duncan, BC, Canada</div>
          <div>belgocanadian.com</div>
          <div>linkedin.com/in/laurent-debacker-1633a916</div>
        </PrHeaderRight>
      </PrHeader>

      {/* ── Summary ── */}
      <PrSectionTitle>Summary</PrSectionTitle>
      <PrSummary>
        Full Stack Developer with 15+ years of experience building web applications across diverse industries.
        Comfortable across the full stack — from database design to pixel-perfect UIs. Passionate about clean,
        maintainable code and shipping products people enjoy using.
      </PrSummary>

      {/* ── Skills ── */}
      <PrSectionTitle>Skills</PrSectionTitle>
      <PrSkillsGrid>
        {Object.entries(skillsByCategory).map(([category, catSkills]) => (
          <div key={category}>
            <PrSkillCategoryName>{category}</PrSkillCategoryName>
            {catSkills.map((skill) => (
              <PrSkillRow key={skill.name}>
                <PrSkillName>{skill.name}</PrSkillName>
                <PrSkillBarBg>
                  <PrSkillBarFill $width={skill.percentage} />
                </PrSkillBarBg>
              </PrSkillRow>
            ))}
          </div>
        ))}
      </PrSkillsGrid>

      {/* ── Experience ── */}
      <PrSectionTitle>Experience</PrSectionTitle>
      {jobs.map((job) => (
        <PrJob key={job.company}>
          <PrJobHeader>
            <PrJobCompany>{job.company}</PrJobCompany>
            <PrJobTitle>{job.title}</PrJobTitle>
            <PrJobDates>{getTimeSpan(job)}</PrJobDates>
          </PrJobHeader>
          <PrJobStory>{job.story}</PrJobStory>
          {job.responsibilities && job.responsibilities.length > 0 && (
            <PrJobResponsibilities>
              {[...job.responsibilities]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((r) => (
                  <li key={r.name}>
                    <strong>{r.name}:</strong> {r.description}
                  </li>
                ))}
            </PrJobResponsibilities>
          )}
        </PrJob>
      ))}

      {/* ── Languages ── */}
      <PrSectionTitle>Languages</PrSectionTitle>
      <PrLangs>
        {[
          { lang: "West-Flemish", level: "Mother tongue" },
          { lang: "Dutch", level: "Fluent" },
          { lang: "English", level: "Fluent" },
          { lang: "French", level: "Professional" },
          { lang: "German", level: "Conversational" },
        ].map(({ lang, level }) => (
          <PrLangItem key={lang}>
            <PrLangName>{lang}</PrLangName>
            <PrLangLevel>{level}</PrLangLevel>
          </PrLangItem>
        ))}
      </PrLangs>
    </PrintContent>
  );
}
