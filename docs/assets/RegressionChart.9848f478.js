import{c as b,o as y,i as p,m as h,X as f,d as x,f as C,P as $,a as v,t as c,b as k,C as w,g as t,j as M,e as _}from"./index.607c9a9e.js";const S=c('<div class="relative w-full h-full"><div class="absolute top-0 right-0"><button class="text-gray-300 h-6 w-6 p-1" title="\u753B\u50CF\u3068\u3057\u3066\u4FDD\u5B58"></button></div><canvas class="w-full h-full"></canvas></div>'),Z=c('<button class="text-gray-300 h-6 w-6 p-1" title="\u30BA\u30FC\u30E0\u30EA\u30BB\u30C3\u30C8"></button>'),P=a=>{let n,o;const[g,d]=b(!1);y(()=>{o=new w(n,{type:"line",data:{datasets:[{label:`${a.name}(${a.symbol})`,backgroundColor:t("bg-cyan-300"),borderColor:t("bg-cyan-300"),borderWidth:1,pointRadius:0,data:a.data.map(e=>({x:e.date,y:e.close}))},{label:"\u56DE\u5E30\u76F4\u7DDA",backgroundColor:t("bg-green-400"),borderColor:t("bg-green-400"),borderWidth:1,pointRadius:0,data:a.data.map(e=>({x:e.date,y:e.regression}))},{label:"\u56DE\u5E30\u76F4\u7DDA\u3068\u306E\u5DEE",backgroundColor:t("bg-gray-300"),borderColor:t("bg-gray-300"),borderWidth:1,pointRadius:0,fill:{value:0,above:t("bg-red-600"),below:t("bg-blue-600")},data:a.data.map(e=>({x:e.date,y:Math.log10(e.close)-Math.log10(e.regression)})),yAxisID:"y2"}]},options:{animation:!1,maintainAspectRatio:!1,responsive:!0,scales:{x:{type:"time",adapters:{date:{locale:M}},time:{unit:"year",tooltipFormat:"yyyy/MM/dd"},bounds:"ticks"},y:{title:{display:!0,text:"\u4FA1\u683C [US\u30C9\u30EB] (\u30ED\u30B0\u30B9\u30B1\u30FC\u30EB)"},type:"logarithmic",display:"auto",grid:{display:!1}},y2:{title:{display:!0,text:"\u56DE\u5E30\u76F4\u7DDA\u3068\u306E\u5DEE [log10]"},type:"linear",axis:"y",position:"right",display:"auto",max:.7,min:-.7,ticks:{stepSize:.1}}},interaction:{intersect:!1,mode:"index",includeInvisible:!0},plugins:{zoom:{zoom:{wheel:{enabled:!0},pinch:{enabled:!0},drag:{enabled:!0,modifierKey:"shift"},mode:"x",onZoom:e=>d(e.chart.isZoomedOrPanned())},pan:{enabled:!0,mode:"x"},limits:{x:{min:"original",max:"original"}}}}},plugins:[_(t("bg-gray-900"))]})}),k(()=>{o?.destroy()});const u=()=>{o?.resetZoom(),d(!1)};return(()=>{const e=S.cloneNode(!0),l=e.firstChild,i=l.firstChild,m=l.nextSibling;return p(l,(()=>{const s=h(()=>!!g(),!0);return()=>s()&&(()=>{const r=Z.cloneNode(!0);return r.$$click=u,r.innerHTML=f,r})()})(),i),i.$$click=()=>x(o?.toBase64Image(),`SP500_${C(new Date,"yyyyMMdd-HHmmss")}.png`),i.innerHTML=$,(s=>n=s)(m),e})()};v(["click"]);export{P as RegressionChart};
