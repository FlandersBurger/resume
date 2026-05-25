import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";

interface Skill {
  code: string;
  name: string;
  image: string;
  description: string;
  tldr?: string;
  enabled: boolean;
  percentage: number;
  category: string;
}

interface Project {
  name: string;
  skills?: string[];
}
interface Job {
  projects?: Project[];
}

function DoughnutChart({ percentage, image }: { percentage: number; image: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const size = 150;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2,
      cy = size / 2,
      r = 60,
      lineW = 15;
    const start = -Math.PI / 2;
    const end = start + (2 * Math.PI * percentage) / 100;
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = lineW;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, r, start, end);
    ctx.strokeStyle = "#333";
    ctx.lineWidth = lineW;
    ctx.stroke();
  }, [percentage]);
  return (
    <div className="selected-skill" style={{ position: "relative", width: 150, height: 150, margin: "0 auto" }}>
      <canvas ref={canvasRef} />
      <img
        src={`/skills/${image}`}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 60,
          maxHeight: 60,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [categories, setCategories] = useState<Record<string, Skill[]>>({});
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const helmetNode = (
    <Helmet>
      <title>Technical Skills — Laurent Debacker</title>
      <meta
        name="description"
        content="Technical skills of Laurent Debacker: programming languages, frameworks, databases, and tools used across full stack development projects."
      />
      <meta property="og:title" content="Technical Skills — Laurent Debacker" />
      <meta
        property="og:description"
        content="Technical skills of Laurent Debacker: programming languages, frameworks, databases, and tools."
      />
      <meta property="og:url" content="https://belgocanadian.com/skills" />
      <link rel="canonical" href="https://belgocanadian.com/skills" />
    </Helmet>
  );

  useEffect(() => {
    fetch("/skills.json")
      .then((r) => r.json())
      .then((data: Skill[]) => {
        const enabled = data.filter((s) => s.enabled);
        const cats = enabled.reduce<Record<string, Skill[]>>((acc, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {});
        setCategories(cats);
        if (enabled.length) setSelectedSkill(enabled[0]);
      });
    fetch("/experience.json")
      .then((r) => r.json())
      .then((jobs: Job[]) => {
        setProjects(jobs.reduce<Project[]>((acc, j) => (j.projects ? acc.concat(j.projects) : acc), []));
      });
  }, []);

  const filteredProjects = selectedSkill ? projects.filter((p) => p.skills?.includes(selectedSkill.code)) : [];

  return (
    <div id="skills-page">
      {helmetNode}
      <h1>Skills</h1>
      <div className="skill-selector-wrap col-xs-3" style={{ padding: 0 }}>
        <div className="skill-selector">
          {Object.entries(categories).map(([categoryName, categorySkills]) => (
            <div key={categoryName}>
              <h3 className="hidden-xs">{categoryName}</h3>
              {[...categorySkills]
                .sort((a, b) => b.percentage - a.percentage)
                .map((skill) => (
                  <div
                    key={skill.code}
                    className={`selectable-skill${selectedSkill?.code === skill.code ? " highlighted-skill" : ""}`}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="skill-item">
                      <img src={`/skills/${skill.image}`} alt={skill.name} />
                      <p className="skill-label">{skill.name}</p>
                      <div className="selectable-skill-percentage" style={{ width: `${skill.percentage}%` }} />
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="skill-display col-xs-9">
        {selectedSkill && (
          <>
            <DoughnutChart percentage={selectedSkill.percentage} image={selectedSkill.image} />
            <div className="selected-skill-text">
              <h1>{selectedSkill.name}</h1>
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedSkill.description) }} />
              {selectedSkill.tldr && (
                <p>
                  <strong title="Too Long; Didn't Read">TL;DR</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedSkill.tldr) }} />
                </p>
              )}
              {filteredProjects.length > 0 && (
                <>
                  <h3>Used in projects:</h3>
                  <ul>
                    {filteredProjects.map((p) => (
                      <li key={p.name}>{p.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
