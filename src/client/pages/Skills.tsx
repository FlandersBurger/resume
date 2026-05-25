import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const SkillsPage = styled.div`
  width: 100%;
`;

const SkillSelectorWrap = styled.div`
  position: relative;
`;

const SkillSelector = styled.div`
  column-gap: 0;
  margin-left: 0;
  line-height: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SelectableSkill = styled.div<{ $highlighted?: boolean }>`
  width: 100%;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
  &:hover .skill-item-inner {
    background-color: #333;
  }
  ${({ $highlighted }) =>
    $highlighted &&
    `
    .skill-item-inner { background-color: #444 !important; }
    .skill-percentage-bar { background-color: rgba(255,255,255,0.9); }
  `}
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #222;
  border-radius: 8px;
  margin: 4px;
  width: calc(100% - 8px);
  padding-bottom: 4px;
  box-sizing: border-box;
  img {
    max-height: 42px;
    max-width: 42px;
    padding: 6px;
    flex-shrink: 0;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
  }
`;

const SkillLabel = styled.p`
  margin: 0;
  font-size: 0.85em;
  font-weight: 500;
  color: #fff;
`;

const SkillPercentageBar = styled.div<{ $width: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: ${({ $width }) => $width}%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 8px 8px;
`;

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
    <SkillsPage>
      {helmetNode}
      <h1>Skills</h1>
      <SkillSelectorWrap className="col-xs-3" style={{ padding: 0 }}>
        <SkillSelector>
          {Object.entries(categories).map(([categoryName, categorySkills]) => (
            <div key={categoryName}>
              <h3 className="hidden-xs">{categoryName}</h3>
              {[...categorySkills]
                .sort((a, b) => b.percentage - a.percentage)
                .map((skill) => (
                  <SelectableSkill
                    key={skill.code}
                    $highlighted={selectedSkill?.code === skill.code}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <SkillItem className="skill-item-inner">
                      <img src={`/skills/${skill.image}`} alt={skill.name} />
                      <SkillLabel>{skill.name}</SkillLabel>
                      <SkillPercentageBar className="skill-percentage-bar" $width={skill.percentage} />
                    </SkillItem>
                  </SelectableSkill>
                ))}
            </div>
          ))}
        </SkillSelector>
      </SkillSelectorWrap>
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
    </SkillsPage>
  );
}
