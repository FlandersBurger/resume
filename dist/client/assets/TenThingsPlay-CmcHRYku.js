import{i as E,r as i,j as e,e as a}from"./index-BTFEpXDS.js";import{b as L,a as $,c as z,d as A}from"./games-BYKNfKL-.js";import{u as _}from"./useWebSocket-V2Y99kNc.js";const H=a.div``,I=a.div`
  height: 8px;
  border-radius: 4px;
  background: #e9ecef;
  margin-bottom: 12px;
  overflow: hidden;
`,D=a.div`
  height: 100%;
  width: ${({$width:n})=>n}%;
  background: #28a745;
  transition: width 0.4s ease;
`,K=a.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0;
  list-style: none;
`,F=a.li`
  flex-basis: 280px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
  ${({$guessed:n})=>n&&"background-color: #d4edda;"}
`,V=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  h4 {
    margin: 0;
    font-size: 15px;
  }
`,v=a.div`
  background-color: rgba(64, 182, 24, 0.25);
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 4px;
  text-align: center;
  width: 100%;
  font-size: 13px;
  img {
    max-width: 100%;
    max-height: 120px;
    border-radius: 4px;
  }
`;function M(){var h,y,m,j,w,N,k;const{currentUser:n,toast:P}=E(),[t,S]=i.useState(null),[o,d]=i.useState(""),[p,x]=i.useState(!1),c=i.useRef(null),r=async()=>{if(!(n!=null&&n.admin))return;const s=await L();S(s)},f=i.useRef(r);f.current=r,_({tenthings_message:s=>{s!=null&&s.message&&P(s.message),setTimeout(()=>f.current(),300)}}),i.useEffect(()=>{r()},[n]);const g=async()=>{var T;if(!o.trim())return;const s=o;d(""),x(!0);try{await $(1,s),setTimeout(r,800)}finally{x(!1),(T=c.current)==null||T.focus()}},B=async()=>{var s;await z(),await r(),(s=c.current)==null||s.focus()},C=async()=>{var s;await A(),await r(),(s=c.current)==null||s.focus()},G=s=>{s.key==="Enter"&&g()};if(!(n!=null&&n.admin))return e.jsx("h2",{className:"text-danger",children:"Admin only"});const u=((h=t==null?void 0:t.list)==null?void 0:h.values)??[],b=u.filter(s=>s.guesser).length,l=u.length||((y=t==null?void 0:t.list)==null?void 0:y.answers)||0,R=l>0?b/l*100:0;return e.jsxs(H,{className:"page container-fluid",children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,marginBottom:4},children:[e.jsx("h2",{style:{margin:0},children:((m=t==null?void 0:t.list)==null?void 0:m.name)??"Loading..."}),l>0&&e.jsxs("span",{className:"text-muted",style:{fontSize:14},children:[b," / ",l]})]}),((j=t==null?void 0:t.list)==null?void 0:j.description)&&e.jsx("p",{className:"text-muted",style:{marginBottom:4},children:t.list.description}),((N=(w=t==null?void 0:t.list)==null?void 0:w.creator)==null?void 0:N.username)&&e.jsxs("p",{style:{marginBottom:8,fontSize:13},children:[e.jsx("span",{className:"text-muted",children:"By "}),t.list.creator.username]}),l>0&&e.jsx(I,{children:e.jsx(D,{$width:R})}),e.jsxs("div",{className:"play-buttons input-group",style:{marginBottom:8,width:"100%",display:"table"},children:[e.jsx("input",{ref:c,className:"form-control",type:"search",value:o,onChange:s=>d(s.target.value),onKeyDown:G,placeholder:"Type your guess and press Enter",autoFocus:!0,autoComplete:"off"}),e.jsx("div",{className:"input-group-btn",children:e.jsx("button",{className:"btn btn-success",onClick:g,disabled:!o.trim()||p,children:e.jsx("i",{className:`fas ${p?"fa-spinner fa-spin":"fa-paper-plane"}`})})})]}),e.jsxs("div",{className:"btn-group",style:{marginBottom:16},children:[e.jsxs("button",{className:"btn btn-primary",onClick:B,disabled:((t==null?void 0:t.hints)??0)>=6,children:[e.jsx("i",{className:"fas fa-lightbulb"})," Hint (",(t==null?void 0:t.hints)??0,"/6)"]}),((k=t==null?void 0:t.list)==null?void 0:k._id)&&e.jsxs("button",{className:"btn btn-default",onClick:C,children:[e.jsx("i",{className:"fas fa-forward"})," Skip"]})]}),e.jsx(K,{children:u.map(s=>e.jsxs(F,{$guessed:!!s.guesser,children:[e.jsxs(V,{children:[e.jsx("h4",{children:s.guesser?s.value:s.maskedValue}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexShrink:0},children:[s.guesser&&s.blurb&&s.blurbType!=="text"&&e.jsxs("span",{children:[s.blurbType==="image"&&e.jsx("i",{className:"fas fa-image text-muted"}),s.blurbType==="youtube"&&e.jsx("i",{className:"fab fa-youtube text-danger"}),s.blurbType==="spotify"&&e.jsx("i",{className:"fab fa-spotify text-success"}),s.blurbType==="link"&&e.jsx("i",{className:"fas fa-link text-muted"})]}),s.guesser&&e.jsx("span",{className:"label label-success",children:s.guesser.username||s.guesser.first_name})]})]}),s.guesser&&s.blurb&&s.blurbType==="image"&&e.jsx(v,{children:e.jsx("img",{src:s.blurb,alt:s.value})}),s.guesser&&s.blurb&&s.blurbType==="text"&&e.jsx(v,{children:s.blurb})]},s._id))})]})}export{M as default};
