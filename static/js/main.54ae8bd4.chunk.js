(this["webpackJsonpperjansson.github.io-v2"]=this["webpackJsonpperjansson.github.io-v2"]||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),s=n(12),l=n.n(s),c=n(8),d=n(1),p=n(2),m=n(3);function u(){var e=Object(d.a)(["\n      cursor: ",";\n    "]);return u=function(){return e},e}function f(){var e=Object(d.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return f=function(){return e},e}var h=p.b.div(f(),m.e,m.a,m.f,m.d,m.c,m.b,m.g,(function(e){var t=e.cursor;return Object(p.a)(u(),t)})),g=n(6),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.3;return Array.from(Array(4)).map((function(n,a){return e*Math.max(1,a*t-a+1)}))};function b(){var e=Object(d.a)(["\n  0%, 95% {\n    transform: translate(-50%, -50%);\n  }\n\n  100% {\n    transform: translate(-49%, -53%);\n  }\n"]);return b=function(){return e},e}function w(){var e=Object(d.a)(["\n  0%, 95% {\n    transform: translate(-50%, -50%);\n  }\n\n  100% {\n    transform: translate(-51%, -48%);\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(d.a)(["\n  5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {\n    filter: blur(0.018em);\n    transform: translateY(0.018em) rotate(0deg);\n  }\n\n  10%, 30%, 40%, 50%, 70%, 80%, 90% {\n    filter: blur(0.01em);\n    transform: translateY(-0.018em) rotate(0deg);\n  }\n\n  20%, 60% {\n    filter: blur(0.03em);\n    transform: translate(-0.018em, 0.018em) rotate(0deg);\n  }\n\n  45%, 85% {\n    filter: blur(0.03em);\n    transform: translate(0.018em, -0.018em) rotate(0deg);\n  }\n\n  100% {\n    filter: blur(0.007em);\n    transform: translate(0) rotate(-0.5deg);\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(d.a)(["\n  from {\n    transform: scale(.95);\n    opacity: 0;\n  }\n\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n"]);return x=function(){return e},e}var k=Object(p.c)(x()),j=Object(p.c)(y()),S=Object(p.c)(w()),O=Object(p.c)(b());function E(){var e=Object(d.a)(["\n      text-transform: ",";\n      text-decoration: ",";\n      white-space: ",";\n      cursor: ",";\n    "]);return E=function(){return e},e}function A(){var e=Object(d.a)(["\n      text-shadow: 0 0 0.25em ",";\n    "]);return A=function(){return e},e}function B(){var e=Object(d.a)(["\n      opacity: 0;\n      animation: "," 250ms 500ms ease-in forwards;\n    "]);return B=function(){return e},e}function T(){var e=Object(d.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n   "]);return T=function(){return e},e}var I=16,z=20,C=26,L=32,F=36,D=40,P=p.b.div(T(),m.e,m.a,m.f,m.d,m.b,m.g,m.c,(function(e){return e.fadeIn&&Object(p.a)(B(),k)}),(function(e){var t=e.glowColor;return t&&Object(p.a)(A(),t)}),(function(e){var t=e.textTransform,n=e.textDecoration,a=e.whiteSpace,r=e.cursor;return Object(p.a)(E(),t,n,a,r)}),(function(e){var t=e.noSizeScale;return Object(m.h)({variants:{xSmall:{fontSize:t?I:v(I)},small:{fontSize:t?z:v(z)},medium:{fontSize:t?C:v(C)},large:{fontSize:t?L:v(L,1.1)},xLarge:{fontSize:t?F:v(F,1.4)},xxLarge:{fontSize:t?D:v(D,1.4)},xxxLarge:{fontSize:t?D:v(D,1.8)}}})})),q=Object(g.oneOf)(["xSmall","small","medium","large","xLarge","xxLarge","xxxLarge"]);P.propTypes={variant:q,glowColor:g.string,fadeIn:g.bool,noSizeScale:g.bool},P.defaultProps={variant:"medium"};var _=P;function M(){var e=Object(d.a)(["\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 6px;\n  text-transform: uppercase;\n  text-shadow: 0 0 0.15em var(--landing-page-shadow-color);\n  white-space: nowrap;\n  filter: blur(0.007em);\n  animation: "," 2.5s linear forwards;\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-50%, -50%);\n    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);\n    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);\n  }\n\n  ::before,\n  ::after {\n    content: attr(data-text);\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  ::before {\n    animation: "," 2.5s linear forwards;\n    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);\n  }\n\n  ::after {\n    animation: "," 2.5s linear forwards;\n    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);\n  }\n"]);return M=function(){return e},e}var N=p.b.h1(M(),j,S,O),R=function(e){var t=e.children;return r.a.createElement(_,{variant:"xxxLarge",textAlign:"center"},r.a.createElement(N,{"data-text":t},r.a.createElement("span",null,t)))},W={me:{name:"Per Jansson",title:"Fullstack Web Developer",contacts:[{medium:"Medium",url:"https://medium.com/@perjansson"},{medium:"GitHub",url:"https://github.com/perjansson"},{medium:"LinkedIn",url:"https://www.linkedin.com/in/pichdude"},{medium:"Stack Overflow",url:"https://stackoverflow.com/users/274426/per-jansson"},{medium:"Twitter",url:"https://www.twitter.com/per_jansson"},{medium:"Instagram",url:"https://instagram.com/per_jansson"},{medium:"Facebook",url:"https://www.facebook.com/pichdude"},{medium:"Email",url:"mailto:per.r.jansson@gmail.com"}],short:"Hi, I'm Per, a curious software developer with a passion to build great applications and help others do the same.",long:'I\u2019m a <span class="focus">curious software developer</span> with a passion to build great stuff and support others to do the same. My core skills are in <span class="focus">full-stack web development</span> and, although I\u2019m no stranger to backend, I\u2019ve always been drawn to the <span class="focus">frontend</span> side. I like the things that are visual and that a user interacts with and I have many years of experience in how to build systems and applications that are a <span class="focus">good mix of quality, robustness and ease of use</span>. I really enjoy working with <span class="focus">Node, React, React-Native and JavaScript</span> in general, but I also have done a lot of Java previously together with both Android och iOS development. I addition to that I also like the architectural part of how a solid frontend is created together with making the <span class="focus">Developer Experience</span> really good for the current team so it\u2019s a joy to work with.<br/><br/>I love helping teams become <span class="focus">more efficient</span> by supporting the establishment of great practices for <span class="focus">agile product development</span> methods with a focus on teamwork and organizing the work. I have experience in <span class="focus">team leadership and coaching</span> activities within the agile way of delivering software and I strive to be a person who gets others to grow, the team to achieve more, and to <span class="focus">maximize the value for the end-user</span> and the client.'},projects:[{title:"Panasonic Avionics Corporation",description:"Platform to enable airplane passengers to attain wireless internet connectivity.",me:"Software developer helping Panasonic developing new services to enable airplane passengers to attain wireless internet connectivity. Daily work consists of implementing new features and at the same time gradually modernizing the technical solution as well as helping the development team build a solution that will be a solid platform for the future.",role:"Frontend developer",date:"2020-",asset:"pac",tags:["javascript","react","redux","redux-saga","material-ui","storybook","jest","react-testing-library","cypress","cucumber","node","npm","lerna","gitlab","docker"]},{title:"HBO GO app",description:"HBO GO client in US for TV platforms: Samsung Orsay, TiVo set-top box and Hotels (LG and Enseo devices). A web application using HTML, CSS, and TypeScript. Frameworks and libraries used are React, Redux, Styled Components and Ramda. It is built using Grunt and Browserify.",me:"Software developer of the HBO GO app for different platforms and devices. Daily work consists of both developing new features in a shiny new codebase but also maintaining and solving tricky problems in a legacy codebase. Fun and challenging!",role:"Frontend developer",date:"2018-2019",asset:"hbogo",tags:["typescript","react","redux","styled-components","storybook","jest","enzyme","node","npm","git","jenkins","vs code"]},{title:"Unibet Frontend for Kindred Group",description:"Several different betting websites built using web technologies and using configuration of a headless CMS to create the final experience for the client.",me:"Frontend developer in a team responsible for Unibet, Storspelare, Bingo.com and Bohemia Casino. Development of mostly new features build with the latest technologies but also maintaining legacy code. Trying daily to contribute to team becoming more efficient both in programming but also in team work and good development practices.",role:"Frontend developer",date:"2017-2018",asset:"unibet",tags:["javascript","react","redux","reselect","styled-components","jest","enzyme","storybook","storyshots","webpack","babel","html","sass","node","yarn","cypress","codemods","jscodeshift","git","jenkins","vs code"]},{title:"Insourcing Matchmaking Tool for EY",description:"A web application that act as a matchmaking tool to find the best candidate of insourced consultants and employees for a given client and project. Also a back-office module for administrators and consultants to manage their skills, CVs, personal video, details etc.",me:"Responsible for building the full experience, ie. the client, a responsive web app that's both fast and intuitive to use, and the server with business logic, a nodejs app with mongodb as persistence.",role:"Fullstack developer",date:"2016-2018",asset:"matchmaking-tool",tags:["javascript","angular","ngxs","react","graphql","apollo","sass","animate.css","express","jwt","passport","lodash","node","npm","webpack","typescript","mongodb","heroku","aws s3","mlab","papertrail","pushover"]},{title:"New Admin web for Leadenhancer",description:"Web application for back office of company that bridges the gap between known and anonymous web visitors by identifying and segmenting the companies visiting a website, and providing detailed, targetable business attributes in real-time.",me:"Frontend responsible to build a new admin web to support the needs of the admin users of Leadenhancer. Involves everything from architecture and build and deploy pipeline, REST api design to coding the bits and pieces that are a modern web application.",role:"Frontend developer",date:"2016-2017",asset:"le",tags:["javascript","angular","node","npm","sass","eslint","prettier","webpack"]},{title:"Digitalization and Advisory Cockpit Tool for Nordea Bank",description:"Advisory Cockpit Tool to be used by advisors and help digitize an advisor's everyday. The bar was set very high and the application should not only contain a lot of functionality to simplify the days of an advisor, but the end result will also be a great user experience.",me:"Development and architecture of the frontend and BFF part of the application. Setting up fast and solid development experience and in general building the foundation of an easy to develop and maintain system. Daily work with building pages and components together with API design.",role:"Frontend architect & developer",date:"2016-2018",asset:"cocpit",tags:["javascript","react","redux","reselect","express","node","npm","webpack","babel","lodash","html","material-ui","sass","css modules","standardjs","mocha","chai","sinon","enzyme","faker.js","moment","postman","java","spring","jackson","scrum","tdd","jenkins"]},{title:"Mindmend prototype",description:"A prototype for a digital platform for KBT treatment.",me:"Developer of a responsive web app, everything from Sketch to running in the cloud.",role:"Fullstack developer",asset:"mindmend",date:"2017",tags:["javascript","html","jquery","materialize","sass","animate.css","express","node","npm","webpack","heroku","agile"]},{title:"Nordic portfolio system for Nordea Bank",description:"A brand new back office solution along with enhancing and introducing an existing portfolio system in the Nordic countries",me:"Coding frontend architect developing the frontend tier, setting up fast and solid development practices/processes/style guides and build system together with being a happy team player working very close to the end user to guarantee the best result.",role:"Frontend developer",asset:"admin_tool",tags:["javascript","angularjs","es2015","node","npm","gulp","bower","jquery","underscore","html","bootstrap","sass","jshint","csslint","htmlhint","karma","protractor","mocha","chai","sinon","java","spring","hibernate","dozer","flying saucer","intellij","git","maven","jenkins","sonarqube","sql server","tdd","ddd","kanban","xp"]},{title:"Risk Calculator for Nordea Bank",description:"A system for calculating risk and return, both based on a customer's current portfolio but also on a better allocated portfolio that will be recommended to the customer.",me:"Full stack developer of the entire system, although primarily responsible for frontend and API, together with being a happy team player working very close to the end user to guarantee the best result.",role:"Fullstack developer",asset:"risk_calculator",tags:["angularjs","html","css","boostrap","karma","protractor","java","spring","hibernate","thymeleaf","flying Saucer","jensoft","dozer","intellij","git","maven","jenkins","sonarqube","sql server","tdd","ddd","scrum","xp"]},{title:"Multi portfolio for Nordea Bank",description:"Portfolio analysis system extended to support structuring a customer's total engagement in different portfolios to be able to twist and turn the customers current assets.",me:"Development and Scrum Master making sure that the team delivers what the end user expects with good code quality.",role:"Fullstack developer",asset:"multi_portfolio",tags:["gwt","java","spring","hibernate","apache camel","dozer","html","css","javascript","intellij","svn","maven","jenkins","sonarqube","sql Server","tdd","ddd","scrum","xp"]},{title:"Customized analysis and recommendation for Nordea Bank",description:"A system for doing customized analysis, optimization and recommendation of customer's current portfolio to be able to recommend a better portfolio that can give a higher return with a lower risk. <a href='https://medium.com/@perjansson/offshoring-from-the-scream-to-friendship-and-success-5b409c30d287' target='_blank' rel='noopener noreferrer'>Blog post about project on Medium</a>.",me:"Development and architecture of the system. Being UX and front end responsible to make the system easy and fast to use. Be proactive in efforts to get a distributed team between Sweden, Denmark and India to work.",role:"Fullstack developer",asset:"care",tags:["gwt","java","spring","hibernate","dozer","html","css","javascript","eclipse","svn","maven","jenkins","sonarqube","sql Server","tdd","ddd","scrum","xp","lean"]},{title:"Portfolio for advisors for Nordea Bank",description:'A web application for advisors to use when doing analysis of a customers holdings, for instance asset allocation, current and previous holdings, transactions, performance and profit and loss. <a href="https://medium.com/@perjansson/how-we-invented-and-introduced-drama-driven-demo-9cc564bc741f" target="_blank" rel="noopener noreferrer">Blog post about project on Medium</a>.',me:"Development and UX making sure the system makes sense and is easy to use, looks nice and is quick and responsive. Advocate efficient software development practices such as pair programming, TDD, code reviews and brown bag lunches.",role:"Fronted developer",asset:"portfolio",tags:["gwt","java","spring","hibernate","dozer","html","css","javascript","eclipse","svn","maven","jenkins","sonarqube","sql Server","tdd","ddd","scrum","xp","lean"]},{title:"App on Android for Swedish Pharmacy",description:"An Android app to view the current pollen level at a given location as well as recommended treatments and view closest pharmacy.",me:"Develop the Apoteket (swedish pharmacy) application for Android. Took the project from requirements and development to testing and release on Google Play.",role:"Mobile app developer",asset:"pharmacy_app",tags:["android","java","android studio","scrum"]},{title:"App on Android for Statoil",description:"An Android app to view the closest Statoil gas station as well as book trailers, vans etc.",me:"Develop the Swedish Statoil application for Android. Took the project from requirements and development to testing and release on Google Play.",role:"Mobile app developer",asset:"statoil_app",tags:["android","java","android studio","scrum"]},{title:"Planning and sorting system for Swedish Postal Service",description:"A system to improve the planning and sorting of incoming and outgoing parcels for the Swedish postal service.",me:"Development with frontend responsibility to make sure the system was intuitive and easy to use. Held workshops with end users about how the interface should look like.",role:"Fronted developer",asset:"postal_service",tags:["jsf","richfaces","seam","html","css","javascript","java ee","ejb2","bibernate","sculptur","eclipse","svn","maven","hudson","tdd","ddd","rup"]},{title:"Automatic Payments for L\xe4nsf\xf6rs\xe4kringar Bank",description:"Change several existing bank systems to make sure they worked after a backend system for automatic payments was updated.",me:"Technical project manager and developer which involved planning and being part of the implementation.",tags:["jsf","struts","java","spring","hibernate","eclipse","svn","maven","jenkins","xp","scrum"]},{title:"Proof Of Concept new Internet bank for SEB (Bank)",description:"A Proof of concept application to prove that a current internet banking solution could be modified to work for another bank.",me:"Developer and development lead to show how we worked with planning, analysis, design, development, test and release.",tags:["jsf","myfaces","html","css","javascript","java","spring","hibernate","eclipse","svn","maven","xp","rup"]},{title:"New Internet Bank for L\xe4nsf\xf6rs\xe4kringar Bank",description:"Build a new shiny internet bank with new technologies, frameworks and most importantly new functionality. ",me:"Developer and front end specialist to make sure that the selected technologies played well together when both rebuilding existing functionality but also when adding new.",tags:["jsf","myfaces","shale","html","css","javascript","java","spring","hibernate","eclipse","svn","maven","apache continuum","xp","rup"]},{title:"Change bank application for L\xe4nsf\xf6rs\xe4kringar Bank",description:"A system to support bank officers help new customers move all of their existing engagement from other banks to L\xe4nsf\xf6rs\xe4kringar Bank.",me:"Developer with front end responsibility.",tags:["jsf","myfaces","shale","html","css","javascript","java","spring","hibernate","eclipse","svn","maven","apache continuum","xp","rup"]},{title:"Bank officers secure communication for L\xe4nsf\xf6rs\xe4kringar Bank",description:"a system to enable a secure communication channel between bank officers and bank customers via the internet bank and an internal bank officer application.",me:"Developer with front end responsibility.",tags:["struts","html","css","javascript","java ee","ejb 3","hibernate","eclipse","cvs","ant","rup"]},{title:"Internet bank for SEB (Bank) in Germany",description:"A new internet bank for SEB in Germany.",me:"Developer with fullstack responsibility.",tags:["struts","html","css","javascript","java ee","ejb 3","hibernate","eclipse","cvs","ant","rup"]}]};function G(){var e=Object(d.a)(["\n  padding-right: 40px;\n  color: var(--link-color);\n  opacity: 0;\n  animation: "," 250ms ease-in forwards;\n\n  a {\n    color: var(--link-color);\n  }\n"]);return G=function(){return e},e}var H=Object(p.b)(_)(G(),k),U=function(e){var t=e.onClick,n=Object(a.useState)(!1),o=Object(c.a)(n,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){var e=window.setTimeout((function(){return s(!0)}),3500);return function(){return window.clearTimeout(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{width:"100%",height:"90%",display:"flex",alignItems:"center",justifyContent:"center",onClick:t,cursor:"pointer"},r.a.createElement(R,null,W.me.name)),r.a.createElement(h,{width:"100%",height:"10%",display:"flex",alignItems:"center",justifyContent:"flex-end"},i&&r.a.createElement(H,{"data-cy":"enter-link",onClick:t,cursor:"pointer"},"Click anywhere to enter...")))},V=n(5);function J(){var e=Object(d.a)(["\n  ","\n  ","\n  > a {\n    display: block;\n    text-decoration: none;\n  }\n"]);return J=function(){return e},e}var K=p.b.nav(J(),m.f,m.d),X=function(e){var t=e.href,n=e.children,a=Object(V.a)(e,["href","children"]);return r.a.createElement("a",{href:t},r.a.createElement(_,Object.assign({variant:"medium",color:"var(--link-color)",fadeIn:!0},a),n))},Y=function(e){var t=e.children,n=e.contrast,a=e.glow,o=e.textVariant,i=e.textTransform,s=e.noSizeScale,l=Object(V.a)(e,["children","contrast","glow","textVariant","textTransform","noSizeScale"]);return r.a.createElement(h,l,r.a.createElement(_,{textTransform:i,variant:o,noSizeScale:s,color:n?"var(--primary-header-contrast-color)":"var(--primary-header-color)",glowColor:a?n?"var(--primary-header-contrast-glow-color)":"var(--primary-header-glow-color)":void 0,fadeIn:!0},t))};Y.defaultProps={textVariant:"xxLarge",textTransform:"none",glow:!0};var $=Y;function Q(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return Q=function(){return e},e}var Z=function(e){var t=e.title,n=e.text,a=e.children,o=Object(V.a)(e,["title","text","children"]);return r.a.createElement(ee,Object.assign({id:t,paddingBottom:["20px","40px","60px"]},o),t&&r.a.createElement(te,null,t),n&&r.a.createElement(ae,{text:n}),a)},ee=Object(p.b)(h)(Q()),te=function(e){var t=e.children,n=Object(V.a)(e,["children"]);return r.a.createElement($,Object.assign({marginTop:["40px","50px","60px"],marginBottom:["20px"],marginLeft:["20px","40px","60px"],textTransform:"lowercase"},n),t)},ne=function(e){var t=e.children,n=Object(V.a)(e,["children"]);return r.a.createElement($,Object.assign({marginTop:["20px"],textVariant:"large",glow:!1},n),t)},ae=function(e){var t=e.scroll,n=e.text,a=e.children,o=Object(V.a)(e,["scroll","text","children"]);return r.a.createElement(re,Object.assign({scroll:t,marginTop:["10px","20px","30px"],marginBottom:["20px","40px","60px"],text:n},o),a)},re=function(e){var t=e.scroll,n=e.text,a=e.children,o=Object(V.a)(e,["scroll","text","children"]);return r.a.createElement(h,Object.assign({width:1,display:"flex",alignItems:"flex-start",justifyContent:"center",overflowX:t?"scroll":"hidden",className:t?"scroll":void 0},o),n&&r.a.createElement(_,{variant:"small",lineHeight:["28px","36px","44px"],color:"var(--primary-header-color)",marginLeft:["20px","40px","60px"],marginRight:["20px","40px","60px"],dangerouslySetInnerHTML:{__html:n}}),a)};function oe(){var e=Object(d.a)(["\n  background-image: ",";\n\n  @media (min-width: 52em) and (orientation: landscape) {\n    background-image: ",";\n  }\n\n  @media (min-width: 64em) and (orientation: landscape) {\n    background-image: ",";\n  }\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  transition: all 0.2s ease-in-out;\n  z-index: 1;\n  border-radius: ",";\n  opacity: 1;\n\n  @media (min-width: 52em) and (orientation: landscape) {\n    opacity: ",";\n  }\n\n  &:hover {\n    opacity: 1;\n    transform: ",";\n    z-index: 2;\n    cursor: pointer;\n  }\n\n  "," {\n    margin-bottom: 50px;\n\n    > a {\n      margin-bottom: 5px;\n\n      @media (min-width: 52em) and (orientation: landscape) {\n        margin-bottom: 15px;\n      }\n    }\n  }\n"]);return oe=function(){return e},e}var ie={toBottom:"linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color))",full:"linear-gradient(to bottom, var(--primary-bg-half-transparent-color), var(--primary-bg-half-transparent-color))"},se=Object(p.b)(ee)(oe(),(function(e){var t=e.asset,n=e.gradientType;return ie[n]+", url(assets/"+t+"_small"+("profile"===t?"_portrait":"")+".jpg)"}),(function(e){var t=e.asset,n=e.gradientType;return ie[n]+", url(assets/"+t+"_medium.jpg)"}),(function(e){var t=e.asset,n=e.gradientType;return ie[n]+", url(assets/"+t+"_large.jpg)"}),(function(e){return"profile"===e.asset?0:"20px"}),(function(e){return"profile"===e.asset?1:.8}),(function(e){e.asset;return"scale(1.0)"}),K);se.propTypes={asset:g.string,gradientType:Object(g.oneOf)(["toBottom","full"])},se.defaultProps={gradientType:"toBottom"};var le=function(e){var t=e.project;return r.a.createElement(se,{key:t.title,gradientType:"full",asset:"projects/".concat(t.asset),flex:["1 0 90%","1 0 45%","1 0 30%"],height:["90vw","45vw","30vw"],marginBottom:["20px","30px"],marginLeft:["10px","15px"],marginRight:["10px","15px"]},r.a.createElement(h,{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},r.a.createElement(h,{width:"90%"},t.date&&r.a.createElement(_,{position:"absolute",top:"20px",left:"20px",padding:"10px",bg:"rgba(0,0,0,0.4)",borderRadius:"10px",variant:"xSmall",noSizeScale:!0},t.date),r.a.createElement(ne,{textAlign:"center",noSizeScale:!0},t.title),r.a.createElement(_,{variant:"small",marginTop:["10px","20px","30px"],textAlign:"center",noSizeScale:!0},t.role))))},ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{asset:"profile",height:"100vh",justifyContent:["space-between","space-between"]},r.a.createElement(te,{maxWidth:["90%","80%","60%"]},W.me.name,r.a.createElement("br",null),W.me.title),r.a.createElement(X,{href:"#who am i",marginLeft:["20px","40px","60px"],marginBottom:["140px","40px"],"data-cy":"who-am-i-link"},"Read more"," ",r.a.createElement("span",{role:"img","aria-label":"point down"},"\ud83d\udc47"))),r.a.createElement(Z,{title:"who am i",text:W.me.long,"data-cy":"who-am-i-section"}),r.a.createElement(Z,{title:"get in contact","data-cy":"get-in-contact-section"},r.a.createElement(ae,{scroll:!0,minHeight:"50px",justifyContent:"flex-start"},W.me.contacts.map((function(e,t){var n=e.url,a=e.medium;return r.a.createElement(H,{key:t,whiteSpace:"nowrap",marginLeft:0===t?["20px","40px","60px"]:0},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},a))})))),r.a.createElement(Z,{title:"what have i done","data-cy":"what-have-i-done-section"},r.a.createElement(h,{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:["10px","20px","30px"],paddingLeft:["10px","15px"],paddingRight:["10px","15px"]},W.projects.map((function(e,t){return r.a.createElement(le,{key:t,project:e})})))))};var de=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1];return n?r.a.createElement(ce,null):r.a.createElement(U,{onClick:function(){return o(!0)}})},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.polyfill(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):me(t,e)}))}}({onUpdate:function(e){var t=e.waiting;t&&(t.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})),t.postMessage({type:"SKIP_WAITING"}))}})}},[[16,1,2]]]);
//# sourceMappingURL=main.54ae8bd4.chunk.js.map