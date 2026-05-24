"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function getTimeSpan(job) {
    const start = new Date(job.startDate).getFullYear();
    const end = job.endDate ? new Date(job.endDate).getFullYear() : "Today";
    return `${start} - ${end}`;
}
function Print() {
    const [skills, setSkills] = (0, react_1.useState)([]);
    const [jobs, setJobs] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch("/skills.json").then((r) => r.json()).then(setSkills).catch(() => { });
        fetch("/experience.json").then((r) => r.json()).then(setJobs).catch(() => { });
    }, []);
    const enabledSkills = skills
        .filter((s) => s.type === "skill" && (s.enabled === true || s.enabled === "true"))
        .sort((a, b) => a.category.localeCompare(b.category) || b.percentage - a.percentage);
    return (<div id="print-content">
      <h1>Laurent Debacker</h1>
      <h2>Full Stack Web Developer</h2>
      <hr />
      <div className="col-xs-12">
        <h5>
          This resume was automatically generated using ReactJs and NodeJs on my website:{" "}
          <b>belgocanadian.com</b>
          <br />I would recommend going there to experience this resume differently :)
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-6" style={{ marginTop: -20 }}>
          <h4>Details</h4>
          <ul>
            <li>Mail: debackerlaurent@gmail.com</li>
            <li>Home: 250-597-0595</li>
            <li>Mobile: 604-505-9305</li>
            <li>Location: Duncan, BC</li>
            <li>Pronouns: He/Him</li>
          </ul>
        </div>
        <div className="col-xs-6" style={{ marginTop: -20 }}>
          <h4>Languages</h4>
          <ul>
            <li>West-Flemish - Mother Tongue</li>
            <li>Dutch - Fluent</li>
            <li>English - Fluent</li>
            <li>French - Professional</li>
            <li>German - Conversational</li>
          </ul>
        </div>
      </div>
      <hr />
      <h3>Skills</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {enabledSkills.map((skill) => (<div key={skill.name} style={{ width: "33.33%", display: "flex", alignItems: "center", marginBottom: 4 }}>
            <div style={{ width: "58%", paddingRight: 4 }}>{skill.name}</div>
            <div style={{ width: "42%", backgroundColor: "#cccccc", borderRadius: 10, overflow: "hidden" }}>
              <div style={{
                width: `${skill.percentage}%`,
                backgroundColor: "#777777",
                borderRadius: 10,
                paddingLeft: 6,
            }}>
                <p style={{ margin: 0, fontSize: 11, color: "#fff" }}>{skill.since}</p>
              </div>
            </div>
          </div>))}
      </div>
      <div className="col-xs-12"><br /></div>
      <hr />
      <h3>Experience</h3>
      {jobs.map((job) => (<div key={job.company} style={{ marginBottom: 20 }}>
          <h4>
            {job.company} - {job.title} ~ {getTimeSpan(job)}
          </h4>
          <p>{job.story}</p>
          {job.responsibilities && job.responsibilities.length > 0 && (<ul className="list-group">
              {[...job.responsibilities].sort((a, b) => a.name.localeCompare(b.name)).map((r) => (<li key={r.name} className="list-group-item">
                  <strong>{r.name}:</strong> {r.description}
                </li>))}
            </ul>)}
          <hr />
        </div>))}
    </div>);
}
exports.default = Print;
//# sourceMappingURL=Print.js.map