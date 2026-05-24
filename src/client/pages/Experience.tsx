import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface Skill {
  code: string;
  name: string;
  image: string;
  description: string;
  enabled: boolean;
  percentage: number;
}

interface Project {
  name: string;
  url?: string;
  description?: string;
  tldr?: string;
  skills: string[];
}

interface Responsibility {
  name: string;
  description: string;
}

interface Job {
  code: string;
  company: string;
  title: string;
  image: string;
  story: string;
  startDate: string;
  endDate?: string;
  projects?: Project[];
  responsibilities?: Responsibility[];
}

function getTimeSpan(job: Job) {
  const start = new Date(job.startDate).getFullYear();
  const end = job.endDate ? new Date(job.endDate).getFullYear() : "Today";
  return `${start} - ${end}`;
}

function JobSection({ job, skills }: { job: Job; skills: Skill[] }) {
  const [tab, setTab] = useState<"story" | "projects" | "responsibilities">("story");
  const getSkill = (code: string) => skills.find((s) => s.code === code);

  return (
    <div className="job-section row">
      <div className="col-md-2 col-sm-3 col-xs-4 job-header">
        <div className="job-image">
          <img src={`/experience/${job.image}`} alt={job.company} />
        </div>
      </div>
      <div className="col-md-10 col-sm-9 col-xs-8">
        <div className="job-title">
          <h2>{job.company}</h2>
          <h4>
            {job.title} ~ {getTimeSpan(job)}
          </h4>
        </div>
        <div className="job-body">
        {job.projects?.length || job.responsibilities?.length ? (
          <ul className="nav nav-pills">
            <li className={tab === "story" ? "active" : ""}>
              <a onClick={() => setTab("story")} style={{ cursor: "pointer" }}>
                Story
              </a>
            </li>
            {job.projects && job.projects.length > 0 && (
              <li className={tab === "projects" ? "active" : ""}>
                <a onClick={() => setTab("projects")} style={{ cursor: "pointer" }}>
                  Projects
                </a>
              </li>
            )}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <li className={tab === "responsibilities" ? "active" : ""}>
                <a onClick={() => setTab("responsibilities")} style={{ cursor: "pointer" }}>
                  Responsibilities
                </a>
              </li>
            )}
          </ul>
        ) : null}

        {tab === "story" && <p className="story">{job.story}</p>}

        {tab === "projects" && job.projects && (
          <div>
            {job.projects.map((project, i) => (
              <div key={i}>
                <h4>{project.name}</h4>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.url}
                  </a>
                )}
                {project.description && (
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description) }} />
                )}
                {project.tldr && (
                  <p>
                    <strong title="Too Long; Didn't Read">TL;DR</strong>{" "}
                    <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.tldr) }} />
                  </p>
                )}
                <div className="clearfix">
                  {[...project.skills].sort().map((skillCode) => {
                    const skill = getSkill(skillCode);
                    if (!skill) return null;
                    return (
                      <div key={skillCode} className="project-skill" title={skill.name}>
                        <img className="project-skill-image" src={`/skills/${skill.image}`} alt={skill.name} />
                      </div>
                    );
                  })}
                </div>
                {i < job.projects!.length - 1 && <hr />}
              </div>
            ))}
          </div>
        )}

        {tab === "responsibilities" && job.responsibilities && (
          <ul className="list-group">
            {[...job.responsibilities]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((r) => (
                <li key={r.name} className="list-group-item">
                  <strong>{r.name}:</strong> {r.description}
                </li>
              ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("/experience.json")
      .then((r) => r.json())
      .then(setJobs);
    fetch("/skills.json")
      .then((r) => r.json())
      .then((data: Skill[]) => setSkills(data.filter((s) => s.enabled)));
  }, []);

  return (
    <div id="experience-page">
      <h1>Experience</h1>
      {jobs.map((job) => (
        <JobSection key={job.code} job={job} skills={skills} />
      ))}
    </div>
  );
}
