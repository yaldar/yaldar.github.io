(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){e.exports=a(128)},105:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},125:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(105),a(58)),i=a(73),s=a(87),u=function(e){var t=e.to;return r.a.createElement(s.Link,{to:t.toLocaleLowerCase(),activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},t)},m=(a(115),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"navbar ".concat(a?"collapsed":""),id:"navbar"},r.a.createElement(i.a,{name:"bars",className:"icon",onClick:function(){return l((function(e){return!e}))},size:"big"}),r.a.createElement(u,{to:"About"}),r.a.createElement(u,{to:"Experience"}),r.a.createElement(u,{to:"Skills"}),r.a.createElement(u,{to:"Projects"}))}),d=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(m,null))},p=(a(116),a(89)),h=a.n(p),f=function(){return r.a.createElement("div",{className:"intro"},r.a.createElement("h1",null,"Hi! My name is Yaldar"),r.a.createElement("img",{src:h.a,alt:"me",className:"profile-pic"}))},g=(a(117),function(){return r.a.createElement("div",{className:"about",id:"about"},r.a.createElement(f,null),r.a.createElement("p",null,"I\u2019m an ambitious, 27 year-old"," ","<","/salt",">"," ","graduate with a passion for programming currently living in Stockholm. Learning new technologies and concepts and helping others develop is something I really enjoy, as well making tools and building amazing software that makes life easier for others. I used to work as a personal technician but now want to get involved more with software as it is my true passion."),r.a.createElement("hr",null),r.a.createElement("div",{className:"about-links"},r.a.createElement("a",{href:"https://github.com/yaldar",target:"blank"},r.a.createElement(i.a,{name:"github",size:"huge"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/yaldar-hapak/",target:"blank"},r.a.createElement(i.a,{name:"linkedin",size:"huge"})),r.a.createElement("a",{href:"mailto:yaldar.hapak@gmail.com",target:"blank"},r.a.createElement(i.a,{name:"mail",size:"huge"}))))}),E=(a(118),function(){return r.a.createElement("footer",{className:"footer"})}),b=a(91),v=(a(119),function(e){var t=e.title,a=e.list;return r.a.createElement("ul",{className:"".concat(t," skill-list")},r.a.createElement("h2",null,t),a.map((function(e,t){return r.a.createElement("li",{key:t},e)})))}),k=(a(120),function(e){var t=e.languages,a=e.backend,n=e.frontend,l=e.tools;return r.a.createElement("div",{className:"skills-wrapper",id:"skills"},r.a.createElement(v,{title:"languages",list:t}),r.a.createElement(v,{title:"backend",list:a}),r.a.createElement(v,{title:"frontend",list:n}),r.a.createElement(v,{title:"tools",list:l}))}),w=a(141),y=(window.pageYOffset,function(e){var t=e.substring(0,4),a=function(e){return["January","February","March","April","May","June","July","August","September","November","December"][parseInt(e,10)]}(e.substring(5,7));return"".concat(a," ").concat(t)}),j=(a(121),function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users/yaldar/repos").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.fork}))})).then((function(e){return e.sort((function(e,t){return e.created_at<t.created_at?1:-1}))})).then(l)}),[]),r.a.createElement("div",{className:"projects-wrapper",id:"projects"},r.a.createElement("h2",null,"My projects:"),r.a.createElement("div",{className:"projects-list"},a.map((function(e){return r.a.createElement(w.a,{href:e.html_url,target:"blank",header:e.name,meta:y(e.created_at),description:e.description})}))))}),N={languages:["java","javascript","typescript"],backend:["node","express.js","MongoDB","SQL"],frontend:["React","Redux","Bootstrap","CSS3","HTML5"],tools:["jest","git","docker","npm"]},S=(a(125),[{title:"Full Stack JavaScript - School of Applied Technology </salt>",timeRange:"Apr 2020 - Jul 2020",desc:"Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning."},{title:"Information and Communication technology - KTH",timeRange:"Aug 2017 - on hold",desc:"Bachelors program taught in English. The program includes a wide array of both software and hardware courses, as well as basic to advanced math that\u2019s required of a software engineer. Core courses include: Java, Algorithms and data structures, Functional programming, Mobile software development, Algebra and Calculus."},{title:"Personal technician \u2013 TechBuddy AB, Stockholm",timeRange:"Jun 2018 - Mar 2020",desc:"Performed over 60 tasks as a personal technician. The job role required contacting the customers to get an understanding of the issue and then booking a time to visit the customer and solve the problem."}]),A=function(){return r.a.createElement("ul",{className:"exp-wrapper",id:"experience"},r.a.createElement("h4",null,"Past experience:"),S.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.timeRange),r.a.createElement("p",null,e.desc))})))},J=(a(126),function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(g,null),r.a.createElement(A,null),r.a.createElement(k,N),r.a.createElement(j,null),r.a.createElement(E,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a.p+"static/media/profile.7002cba5.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.98941b63.chunk.js.map