(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){e.exports=a(132)},108:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(108),a(94)),i=a(60),s=a(77),u=a(90),m=(a(118),function(e){var t=e.to;return r.a.createElement(u.Link,{to:t.toLocaleLowerCase(),activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500,className:"link"},t)}),d=(a(119),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useRef)(null),c=function(){l(!1)},u=function(e){var t=e.target;t.id&&"icon"!==t.id&&l(!1)};return Object(n.useEffect)((function(){return document.addEventListener("scroll",c),document.addEventListener("click",u),function(){document.removeEventListener("scroll",c),document.removeEventListener("click",u)}}),[]),r.a.createElement("nav",{className:"navbar ".concat(a?"expanded":""),id:"navbar"},r.a.createElement(s.a,{name:"bars",className:"icon",onClick:function(){return l((function(e){return!e}))},size:"big",ref:o}),r.a.createElement(m,{to:"About"}),r.a.createElement(m,{to:"Experience"}),r.a.createElement(m,{to:"Skills"}),r.a.createElement(m,{to:"Projects"}))}),f=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(d,null))},p=(a(120),a(76)),h=a(92),g=a.n(h),E=function(){var e=Object(p.b)({margin:"0",from:{margin:"300px"},config:{duration:550}});return r.a.createElement(p.a.div,{style:e},r.a.createElement("div",{className:"intro"},r.a.createElement("h1",null,"Yaldar Hapak, fullstack developer"),r.a.createElement("img",{src:g.a,alt:"me",className:"profile-pic"})))},v=(a(121),function(){return r.a.createElement("div",{className:"about",id:"about"},r.a.createElement(E,null),r.a.createElement("p",{className:"about-text"},"I\u2019m an ambitious, 27 year-old"," ","<","/salt",">"," ","graduate with a passion for programming currently living in Stockholm. Learning new technologies and concepts and helping others develop is something I really enjoy, as well making tools and building amazing software that makes life easier for others. I used to work as a personal technician but now want to get involved more with software as it is my true passion."),r.a.createElement("hr",{className:"line"}),r.a.createElement("div",{className:"about-links"},r.a.createElement("a",{href:"https://github.com/yaldar",target:"blank"},r.a.createElement(s.a,{name:"github",size:"huge"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/yaldar-hapak/",target:"blank"},r.a.createElement(s.a,{name:"linkedin",size:"huge"})),r.a.createElement("a",{href:"mailto:yaldar.hapak@gmail.com",target:"blank"},r.a.createElement(s.a,{name:"mail",size:"huge"}))))}),b=(a(122),function(){return r.a.createElement("footer",{className:"footer"})}),k=(a(123),function(e){var t=e.title,a=e.list;return r.a.createElement("ul",{className:"".concat(t," skill-list")},r.a.createElement("h3",null,t),a.map((function(e,t){return r.a.createElement("li",{key:t},e)})))}),w=(a(124),function(e){var t=e.languages,a=e.backend,n=e.frontend,l=e.tools;return r.a.createElement("div",{className:"centered-wrapper"},r.a.createElement("h2",null,"Skills and Technologies: "),r.a.createElement("div",{className:"skills-wrapper",id:"skills"},r.a.createElement(k,{title:"Languages",list:t}),r.a.createElement(k,{title:"Backend",list:a}),r.a.createElement(k,{title:"Frontend",list:n}),r.a.createElement(k,{title:"Tools",list:l})))}),y=a(145),N=(window.pageYOffset,function(e){var t=e.substring(0,4),a=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(e,10)-1]}(e.substring(5,7));return"".concat(a," ").concat(t)}),j=(a(125),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users/yaldar/repos").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.fork}))})).then((function(e){return e.sort((function(e,t){return e.created_at<t.created_at?1:-1}))})).then(l)}),[]),r.a.createElement("div",{className:"projects-wrapper",id:"projects"},r.a.createElement("h2",null,"My projects:"),r.a.createElement("div",{className:"projects-list"},a.map((function(e){return r.a.createElement(y.a,{fluid:!0,color:"yellow",className:"card",href:e.html_url,target:"blank",header:e.name,meta:N(e.created_at),description:e.description})}))))}),S={languages:["Java","Javascript","Typescript"],backend:["Node.js","Express.js","MongoDB","SQL","HTTP/JSON/AJAX","REST"],frontend:["React","Redux","CSS/SASS/Styled-components","HTML5","jQuery/Bootstrap"],tools:["Mocha/Jest","git","Docker","npm","Handlebars/Pug","TDD"]},J=(a(129),[{title:"Full Stack JavaScript - School of Applied Technology </salt>",timeRange:"Apr 2020 - Jul 2020",desc:"Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning."},{title:"Information and Communication technology - KTH",timeRange:"Aug 2017 - on hold",desc:"Bachelors program taught in English. The program includes a wide array of both software and hardware courses, as well as basic to advanced math that\u2019s required of a software engineer. Core courses include: Java, Algorithms and data structures, Functional programming, Mobile software development, Algebra and Calculus."},{title:"Personal technician \u2013 TechBuddy AB, Stockholm",timeRange:"Jun 2018 - Mar 2020",desc:"Performed over 60 tasks as a personal technician. The job role required contacting the customers to get an understanding of the issue and then booking a time to visit the customer and solve the problem."}]),T=function(){return r.a.createElement("div",{className:"exp-wrapper",id:"experience"},r.a.createElement("h3",null,"My past experience and education:"),r.a.createElement("div",{className:"exp-list"},J.map((function(e,t){return r.a.createElement(y.a,{fluid:!0,key:t},r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null,e.title),r.a.createElement(y.a.Meta,null,r.a.createElement("span",{className:"date"},e.timeRange)),r.a.createElement(y.a.Description,null,e.desc)))}))))},A=(a(130),function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(T,null),r.a.createElement(w,S),r.a.createElement(j,null),r.a.createElement(b,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a.p+"static/media/profile.7002cba5.jpg"}},[[103,1,2]]]);
//# sourceMappingURL=main.a1949541.chunk.js.map