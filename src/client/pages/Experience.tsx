import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const ExperiencePage = styled.div`
  padding-bottom: 100px;
  p.story {
    padding: 8px;
  }
  .list-group {
    padding: 8px;
  }
`;

const JobRow = styled.div`
  min-height: 100px;
  margin: 10px;
`;

const JobImageBox = styled.div`
  min-width: 90px;
  box-shadow: 5px 5px 5px #888;
  border-radius: 7px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 5px;
  @media (max-width: 768px) {
    margin-top: 10px;
    text-align: center;
    img {
      max-height: 80px;
    }
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
`;

const ProjectSkill = styled.div`
  float: left;
  cursor: pointer;
  max-width: 70px;
`;

const ProjectSkillImage = styled.img`
  max-height: 30px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  &:hover {
    transform: scale(1.2);
  }
`;

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
    <JobRow className="row">
      <div className="col-md-2 col-sm-3 col-xs-4 job-header">
        <JobImageBox>
          <img src={`/experience/${job.image}`} alt={job.company} />
        </JobImageBox>
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
                        <ProjectSkill key={skillCode} title={skill.name}>
                          <ProjectSkillImage src={`/skills/${skill.image}`} alt={skill.name} />
                        </ProjectSkill>
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
    </JobRow>
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
    <>
      <Helmet>
        <title>Work Experience — Laurent Debacker</title>
        <meta
          name="description"
          content="Full work history of Laurent Debacker: companies, roles, projects and responsibilities across a career in full stack development."
        />
        <meta property="og:title" content="Work Experience — Laurent Debacker" />
        <meta
          property="og:description"
          content="Full work history of Laurent Debacker: companies, roles, projects and responsibilities across a career in full stack development."
        />
        <meta property="og:url" content="https://belgocanadian.com/experience" />
        <link rel="canonical" href="https://belgocanadian.com/experience" />
      </Helmet>
      <ExperiencePage>
        <h1>Experience</h1>
        {jobs.map((job) => (
          <JobSection key={job.code} job={job} skills={skills} />
        ))}
      </ExperiencePage>
    </>
  );
}
