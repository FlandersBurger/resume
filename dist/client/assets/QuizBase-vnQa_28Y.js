import{r as p,j as t,H as V,e as j}from"./index-BTFEpXDS.js";import{g as F}from"./quizzes-CKGZsNDV.js";import{f as L}from"./games-BYKNfKL-.js";const Q=j.div`
  margin: 5px auto;
  padding-bottom: 50px;
`,T=j.div`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  vertical-align: top;
  margin: 4px;
  width: 320px;
  .panel-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 300px;
      height: 200px;
      object-fit: contain;
      object-position: center;
      background: #f5f5f5;
    }
  }
`;function E({name:i,title:d,labelsUrl:h,description:x}){const[o,g]=p.useState([]),[b,w]=p.useState([]),[y,z]=p.useState({}),v=p.useRef([]);p.useEffect(()=>{Promise.all([F(i),fetch("/quiz-aliases.json").then(e=>e.json()),h?fetch(h).then(e=>e.json()):Promise.resolve({})]).then(([e,s,c])=>{const a=e.map(n=>{const r=n.replace(/\.[^.]+$/,"");return c[r]??r.replace(/_/g," ")}),u=s[i]??{},l={};for(const[n,r]of Object.entries(u))for(const m of r)l[m]=n;z(l),w([...a,...Object.keys(l)]),g(e.map((n,r)=>({file:n,label:a[r],inputValue:"",state:"unanswered",matchedLabel:null})))})},[i,h]);const f=async e=>{const s=o[e];if(s.state!=="unanswered"||!s.inputValue.trim())return;const c=await L(b,s.inputValue.trim()),a=(c==null?void 0:c.value)??null,u=a!==null?y[a]??a:null,l=u===s.label;g(n=>n.map((r,m)=>m===e?{...r,state:l?"correct":"wrong",matchedLabel:u}:r))},N=(e,s)=>{e.key==="Enter"&&f(s)},$=o.filter(e=>e.state!=="unanswered").length,k=o.filter(e=>e.state==="correct").length;return t.jsxs(Q,{className:"quiz-photos-page",children:[t.jsxs(V,{children:[t.jsxs("title",{children:[d," Quiz — belgocanadian.com"]}),t.jsx("meta",{name:"description",content:x??`Test your knowledge with the ${d} quiz.`}),t.jsx("meta",{property:"og:title",content:`${d} Quiz`}),t.jsx("meta",{property:"og:description",content:x??`Test your knowledge with the ${d} quiz.`}),t.jsx("meta",{property:"og:url",content:`https://belgocanadian.com/${i}`}),t.jsx("link",{rel:"canonical",href:`https://belgocanadian.com/${i}`})]}),t.jsx("h1",{children:d}),o.map((e,s)=>{const c=e.state==="correct"?"panel-success":e.state==="wrong"?"panel-danger":"panel-default";return t.jsxs(T,{className:`panel ${c}`,children:[t.jsx("div",{className:"panel-heading",children:s+1}),t.jsxs("div",{className:"panel-body",children:[t.jsx("img",{className:"img-responsive img-rounded",src:`/${i}/${e.file}`,alt:"",style:{marginBottom:10}}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{ref:a=>{v.current[s]=a},type:"text",className:"form-control",placeholder:"Your guess…",value:e.inputValue,disabled:e.state!=="unanswered",onChange:a=>g(u=>u.map((l,n)=>n===s?{...l,inputValue:a.target.value}:l)),onKeyDown:a=>N(a,s)}),t.jsx("span",{className:"input-group-btn",children:t.jsx("button",{className:`btn ${e.state==="correct"?"btn-success":e.state==="wrong"?"btn-danger":"btn-default"}`,disabled:e.state!=="unanswered",onClick:()=>f(s),children:t.jsx("i",{className:`fas ${e.state==="correct"?"fa-check":e.state==="wrong"?"fa-times":"fa-paper-plane"}`})})})]}),e.state==="correct"&&t.jsx("p",{className:"text-success",style:{marginTop:6,marginBottom:0},children:t.jsx("strong",{children:e.label})}),e.state==="wrong"&&t.jsx("p",{className:"text-danger",style:{marginTop:6,marginBottom:0},children:e.matchedLabel?t.jsxs(t.Fragment,{children:["Closest match: ",t.jsx("strong",{children:e.matchedLabel})," — correct answer:"," ",t.jsx("strong",{children:e.label})]}):t.jsxs(t.Fragment,{children:["Correct answer: ",t.jsx("strong",{children:e.label})]})})]})]},s)}),$===o.length&&o.length>0&&t.jsxs("h1",{children:[k," / ",o.length]})]})}export{E as F};
