import{r as h,j as e,H as j,e as d}from"./index-BTFEpXDS.js";import{p as u}from"./purify.es-DxCUJf2h.js";const f=d.div`
  width: 100%;
`,b=d.div`
  position: relative;
`,k=d.div`
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
`,v=d.div`
  width: 100%;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
  &:hover .skill-item-inner {
    background-color: #333;
  }
  ${({$highlighted:a})=>a&&`
    .skill-item-inner { background-color: #444 !important; }
    .skill-percentage-bar { background-color: rgba(255,255,255,0.9); }
  `}
`,S=d.div`
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
`,y=d.p`
  margin: 0;
  font-size: 0.85em;
  font-weight: 500;
  color: #fff;
`,w=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: ${({$width:a})=>a}%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 8px 8px;
`;function L({percentage:a,image:m}){const n=h.useRef(null);return h.useEffect(()=>{const c=n.current;if(!c)return;const r=c.getContext("2d");if(!r)return;const o=150;c.width=o,c.height=o;const p=o/2,g=o/2,t=60,i=15,s=-Math.PI/2,l=s+2*Math.PI*a/100;r.clearRect(0,0,o,o),r.beginPath(),r.arc(p,g,t,0,2*Math.PI),r.strokeStyle="#ddd",r.lineWidth=i,r.stroke(),r.beginPath(),r.arc(p,g,t,s,l),r.strokeStyle="#333",r.lineWidth=i,r.stroke()},[a]),e.jsxs("div",{className:"selected-skill",style:{position:"relative",width:150,height:150,margin:"0 auto"},children:[e.jsx("canvas",{ref:n}),e.jsx("img",{src:`/skills/${m}`,alt:"",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:60,maxHeight:60,pointerEvents:"none"}})]})}function D(){const[a,m]=h.useState({}),[n,c]=h.useState(null),[r,o]=h.useState([]),p=e.jsxs(j,{children:[e.jsx("title",{children:"Technical Skills — Laurent Debacker"}),e.jsx("meta",{name:"description",content:"Technical skills of Laurent Debacker: programming languages, frameworks, databases, and tools used across full stack development projects."}),e.jsx("meta",{property:"og:title",content:"Technical Skills — Laurent Debacker"}),e.jsx("meta",{property:"og:description",content:"Technical skills of Laurent Debacker: programming languages, frameworks, databases, and tools."}),e.jsx("meta",{property:"og:url",content:"https://belgocanadian.com/skills"}),e.jsx("link",{rel:"canonical",href:"https://belgocanadian.com/skills"})]});h.useEffect(()=>{fetch("/skills.json").then(t=>t.json()).then(t=>{const i=t.filter(l=>l.enabled),s=i.reduce((l,x)=>(l[x.category]||(l[x.category]=[]),l[x.category].push(x),l),{});m(s),i.length&&c(i[0])}),fetch("/experience.json").then(t=>t.json()).then(t=>{o(t.reduce((i,s)=>s.projects?i.concat(s.projects):i,[]))})},[]);const g=n?r.filter(t=>{var i;return(i=t.skills)==null?void 0:i.includes(n.code)}):[];return e.jsxs(f,{children:[p,e.jsx("h1",{children:"Skills"}),e.jsx(b,{className:"col-xs-3",style:{padding:0},children:e.jsx(k,{children:Object.entries(a).map(([t,i])=>e.jsxs("div",{children:[e.jsx("h3",{className:"hidden-xs",children:t}),[...i].sort((s,l)=>l.percentage-s.percentage).map(s=>e.jsx(v,{$highlighted:(n==null?void 0:n.code)===s.code,onClick:()=>c(s),children:e.jsxs(S,{className:"skill-item-inner",children:[e.jsx("img",{src:`/skills/${s.image}`,alt:s.name}),e.jsx(y,{children:s.name}),e.jsx(w,{className:"skill-percentage-bar",$width:s.percentage})]})},s.code))]},t))})}),e.jsx("div",{className:"skill-display col-xs-9",children:n&&e.jsxs(e.Fragment,{children:[e.jsx(L,{percentage:n.percentage,image:n.image}),e.jsxs("div",{className:"selected-skill-text",children:[e.jsx("h1",{children:n.name}),e.jsx("p",{dangerouslySetInnerHTML:{__html:u.sanitize(n.description)}}),n.tldr&&e.jsxs("p",{children:[e.jsx("strong",{title:"Too Long; Didn't Read",children:"TL;DR"})," ",e.jsx("span",{dangerouslySetInnerHTML:{__html:u.sanitize(n.tldr)}})]}),g.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Used in projects:"}),e.jsx("ul",{children:g.map(t=>e.jsx("li",{children:t.name},t.name))})]})]})]})})]})}export{D as default};
