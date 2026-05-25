import { useEffect, useState } from "react";

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

const CATEGORY_ORDER = ["frontend", "backend", "programming", "databases", "platforms", "tools", "monitoring", "ai", "languages"];

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
      (a, b) =>
        CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) || b.percentage - a.percentage,
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
    <div id="print-content">
      {/* ── Header ── */}
      <div className="pr-header">
        <div className="pr-header-left">
          <h1 className="pr-name">Laurent Debacker</h1>
          <h2 className="pr-title">Full Stack Developer</h2>
        </div>
        <div className="pr-header-right">
          <div>debackerlaurent@gmail.com</div>
          <div>604-505-9305</div>
          <div>Duncan, BC, Canada</div>
          <div>belgocanadian.com</div>
          <div>linkedin.com/in/laurent-debacker-1633a916</div>
        </div>
      </div>

      {/* ── Summary ── */}
      <div className="pr-section-title">Summary</div>
      <p className="pr-summary">
        Full Stack Developer with 15+ years of experience building web applications across diverse industries.
        Comfortable across the full stack — from database design to pixel-perfect UIs. Passionate about clean,
        maintainable code and shipping products people enjoy using.
      </p>

      {/* ── Skills ── */}
      <div className="pr-section-title">Skills</div>
      <div className="pr-skills-grid">
        {Object.entries(skillsByCategory).map(([category, catSkills]) => (
          <div key={category} className="pr-skill-category">
            <div className="pr-skill-category-name">{category}</div>
            {catSkills.map((skill) => (
              <div key={skill.name} className="pr-skill-row">
                <span className="pr-skill-name">{skill.name}</span>
                <div className="pr-skill-bar-bg">
                  <div className="pr-skill-bar-fill" style={{ width: `${skill.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Experience ── */}
      <div className="pr-section-title">Experience</div>
      {jobs.map((job) => (
        <div key={job.company} className="pr-job">
          <div className="pr-job-header">
            <span className="pr-job-company">{job.company}</span>
            <span className="pr-job-title">{job.title}</span>
            <span className="pr-job-dates">{getTimeSpan(job)}</span>
          </div>
          <p className="pr-job-story">{job.story}</p>
          {job.responsibilities && job.responsibilities.length > 0 && (
            <ul className="pr-job-responsibilities">
              {[...job.responsibilities]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((r) => (
                  <li key={r.name}>
                    <strong>{r.name}:</strong> {r.description}
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}

      {/* ── Languages ── */}
      <div className="pr-section-title">Languages</div>
      <div className="pr-langs">
        {[
          { lang: "West-Flemish", level: "Mother tongue" },
          { lang: "Dutch", level: "Fluent" },
          { lang: "English", level: "Fluent" },
          { lang: "French", level: "Professional" },
          { lang: "German", level: "Conversational" },
        ].map(({ lang, level }) => (
          <div key={lang} className="pr-lang-item">
            <span className="pr-lang-name">{lang}</span>
            <span className="pr-lang-level">{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
