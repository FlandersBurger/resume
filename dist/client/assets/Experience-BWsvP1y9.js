import{r as p,j as e,H as g,e as c}from"./index-BTFEpXDS.js";import{p as h}from"./purify.es-DxCUJf2h.js";const u=c.div`
  padding-bottom: 100px;
  p.story {
    padding: 8px;
  }
  .list-group {
    padding: 8px;
  }
`,j=c.div`
  min-height: 100px;
  margin: 10px;
`,f=c.div`
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
`,k=c.div`
  float: left;
  cursor: pointer;
  max-width: 70px;
`,y=c.img`
  max-height: 30px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  &:hover {
    transform: scale(1.2);
  }
`;function v(s){const l=new Date(s.startDate).getFullYear(),t=s.endDate?new Date(s.endDate).getFullYear():"Today";return`${l} - ${t}`}function b({job:s,skills:l}){var o,x;const[t,a]=p.useState("story"),n=i=>l.find(r=>r.code===i);return e.jsxs(j,{className:"row",children:[e.jsx("div",{className:"col-md-2 col-sm-3 col-xs-4 job-header",children:e.jsx(f,{children:e.jsx("img",{src:`/experience/${s.image}`,alt:s.company})})}),e.jsxs("div",{className:"col-md-10 col-sm-9 col-xs-8",children:[e.jsxs("div",{className:"job-title",children:[e.jsx("h2",{children:s.company}),e.jsxs("h4",{children:[s.title," ~ ",v(s)]})]}),e.jsxs("div",{className:"job-body",children:[(o=s.projects)!=null&&o.length||(x=s.responsibilities)!=null&&x.length?e.jsxs("ul",{className:"nav nav-pills",children:[e.jsx("li",{className:t==="story"?"active":"",children:e.jsx("a",{onClick:()=>a("story"),style:{cursor:"pointer"},children:"Story"})}),s.projects&&s.projects.length>0&&e.jsx("li",{className:t==="projects"?"active":"",children:e.jsx("a",{onClick:()=>a("projects"),style:{cursor:"pointer"},children:"Projects"})}),s.responsibilities&&s.responsibilities.length>0&&e.jsx("li",{className:t==="responsibilities"?"active":"",children:e.jsx("a",{onClick:()=>a("responsibilities"),style:{cursor:"pointer"},children:"Responsibilities"})})]}):null,t==="story"&&e.jsx("p",{className:"story",children:s.story}),t==="projects"&&s.projects&&e.jsx("div",{children:s.projects.map((i,r)=>e.jsxs("div",{children:[e.jsx("h4",{children:i.name}),i.url&&e.jsx("a",{href:i.url,target:"_blank",rel:"noreferrer",children:i.url}),i.description&&e.jsx("p",{dangerouslySetInnerHTML:{__html:h.sanitize(i.description)}}),i.tldr&&e.jsxs("p",{children:[e.jsx("strong",{title:"Too Long; Didn't Read",children:"TL;DR"})," ",e.jsx("span",{dangerouslySetInnerHTML:{__html:h.sanitize(i.tldr)}})]}),e.jsx("div",{className:"clearfix",children:[...i.skills].sort().map(m=>{const d=n(m);return d?e.jsx(k,{title:d.name,children:e.jsx(y,{src:`/skills/${d.image}`,alt:d.name})},m):null})}),r<s.projects.length-1&&e.jsx("hr",{})]},r))}),t==="responsibilities"&&s.responsibilities&&e.jsx("ul",{className:"list-group",children:[...s.responsibilities].sort((i,r)=>i.name.localeCompare(r.name)).map(i=>e.jsxs("li",{className:"list-group-item",children:[e.jsxs("strong",{children:[i.name,":"]})," ",i.description]},i.name))})]})]})]})}function S(){const[s,l]=p.useState([]),[t,a]=p.useState([]);return p.useEffect(()=>{fetch("/experience.json").then(n=>n.json()).then(l),fetch("/skills.json").then(n=>n.json()).then(n=>a(n.filter(o=>o.enabled)))},[]),e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx("title",{children:"Work Experience — Laurent Debacker"}),e.jsx("meta",{name:"description",content:"Full work history of Laurent Debacker: companies, roles, projects and responsibilities across a career in full stack development."}),e.jsx("meta",{property:"og:title",content:"Work Experience — Laurent Debacker"}),e.jsx("meta",{property:"og:description",content:"Full work history of Laurent Debacker: companies, roles, projects and responsibilities across a career in full stack development."}),e.jsx("meta",{property:"og:url",content:"https://belgocanadian.com/experience"}),e.jsx("link",{rel:"canonical",href:"https://belgocanadian.com/experience"})]}),e.jsxs(u,{children:[e.jsx("h1",{children:"Experience"}),s.map(n=>e.jsx(b,{job:n,skills:t},n.code))]})]})}export{S as default};
