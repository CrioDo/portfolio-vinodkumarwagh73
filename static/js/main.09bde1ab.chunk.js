(this["webpackJsonpgithub-portfolio-criodo"]=this["webpackJsonpgithub-portfolio-criodo"]||[]).push([[0],{104:function(e,t,a){e.exports=a(200)},109:function(e,t,a){},152:function(e,t,a){},177:function(e,t){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(95),o=a.n(r),s=(a(109),a(6)),l=a(7),c=a(9),d=a(8),p=a(98),m=a(212),u=a(22),g=a(23),h=a(48),f=a(15),v=a.n(f),y=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.container},this.props.children)}}]),a}(n.Component),b=v()((function(e){return{container:{margin:"40px 0px",height:"auto",background:e.palette.primary.white,padding:"65px 0px 25px 0px",boxShadow:"0 10px 20px 0 rgba(20,21,26,0.1)"}}}))(y),x=a(214),E=a(99),_=a(215),k=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":case"headLine":case"button":case"title":case"subHeader":case"button":default:return"Open Sans"}},w=function(e){switch(e){case"heading1":return"32px";case"heading2":return"24px";case"heading3":return"18px";case"heading4":return"16px";case"heading5":return"14px";case"body1":return"18px";case"body2":return"16px";case"body3":return"14px";case"body4":return"12px";case"quote":return"20px";case"button":default:return"14px"}},S=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"600";case"body1":case"body2":case"body3":case"body4":return"400";case"quote":case"button":return"600";case"bold":return"800";default:return"400"}},I=function(e){var t=e.classes,a=(e.color,Object(E.a)(e,["color"]));return i.a.createElement(_.a,Object.assign({className:t.root,style:{cursor:e.cursor?e.cursor:"default",fontFamily:e.fontFamily?e.fontFamily:k(e.type),fontSize:e.fontSize?e.fontSize:w(e.type),fontWeight:e.fontWeight?e.fontWeight:S(e.type),color:e.color?e.color:function(t){if("dark"===e.currentTheme)return"#ffffff";switch(t){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"#000000";case"button":return"#FFFFFF";default:return"#000000"}}(e.type),letterSpacing:"0.04em"}},a),e.children)};I.defaultProps={type:"body"};var C=v()((function(e){return{root:{letterSpacing:0,opacity:1}}}))(I),O=a(27),M=a(59),R=a.n(M),D=(a(70),a(152),n.Component,a(16)),P=a.n(D),T=a(52),B=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={meDetail:{},user:"",isLoading:!0,qbox:{},qmoney:"",qcharm:"",qprep:""},n.title=n.title.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"title",value:function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{row:!0,lg:2,md:1,xs:1}),i.a.createElement(x.a,{row:!0,lg:7,md:10,xs:10},i.a.createElement(b,null,i.a.createElement("div",{className:e.top},i.a.createElement(C,{fontSize:"48px"},"Vinod Kumar Wagh"),i.a.createElement("div",{className:e.subtitle},i.a.createElement(C,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},"Backend Developer"),"https://www.linkedin.com/in/vinod-kumar-wagh/".length>0?i.a.createElement("a",{href:"https://www.linkedin.com/in/vinod-kumar-wagh/",target:"_blank",rel:"noopener"},i.a.createElement(O.a,{icon:["fab","linkedin"],className:e.socialIcon})):"","https://github.com/VinodKW".length>0?i.a.createElement("a",{href:"https://github.com/VinodKW",target:"_blank",rel:"noopener"},i.a.createElement(O.a,{icon:["fab","github"],className:e.socialIcon})):""),i.a.createElement("div",{className:e.programs},i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{item:!0,lg:1,md:1,xs:12},i.a.createElement(C,{type:"body2",color:"rgba(0,0,0,0.6)"},"Programs:")),i.a.createElement(x.a,{item:!0,lg:5,md:5,xs:12,style:{marginLeft:"40px"}},i.a.createElement(C,{type:"body2",color:"#7C8DFF"},"Crio ","".concat("Launch, Crio Launch Plus 2020"))))),"https://raw.githubusercontent.com/CrioDo/portfolio-vinodkumarwagh73/gh-pages/static/media/Crio-Launch-Plus-2020-Certificate.png".length>0?i.a.createElement("a",{href:"".concat("https://raw.githubusercontent.com/CrioDo/portfolio-vinodkumarwagh73/gh-pages/static/media/Crio-Launch-Plus-2020-Certificate.png"),target:"_blank"},i.a.createElement("div",{className:"viewCertificate",style:{padding:"10px",border:"1px solid #7C8DFF",width:"max-content",borderRadius:"4px",margin:"0px 0px 60px 0px",display:"inline-flex",alignItems:"center"}},i.a.createElement(O.a,{icon:["fas","file-alt"],style:{marginRight:"10px"},className:e.arrowIcon}),i.a.createElement(C,{type:"body2",color:"#7C8DFF",cursor:"pointer"},"VIEW CERTIFICATE"))):""),i.a.createElement("div",{className:e.middle},i.a.createElement(C,{type:"body1",color:"rgba(0,0,0,0.6)"},"Crio Experience"),i.a.createElement("div",{className:e.programRow},i.a.createElement("div",{className:e.programPill},i.a.createElement("img",{alt:"Crio.Do",src:R.a,style:{marginRight:"10px"}}),i.a.createElement(C,{type:"heading3",color:"rgba(255,255,255,1)"},"Crio ","".concat("Launch, Crio Launch Plus 2020"))),i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,0.6)"},"31 Jan, 2020 - 20 Aug, 2020")),i.a.createElement("ul",{className:"timeline"},T.data.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("div",{className:e.MERow,class:"meRow"},i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{item:!0,xs:12},i.a.createElement(C,{type:"heading3",color:"rgba(0,0,0,1)"},t.meName),i.a.createElement("div",{style:{marginTop:"16px"}},i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,1)"},P()(t.outer.data)," "),i.a.createElement("div",{style:{marginTop:"25px"}},i.a.createElement(x.a,{item:!0,xs:12,md:2},i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),i.a.createElement(x.a,{item:!0,xs:12,md:10},i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,1)"},P()(t.outer.skills)," ")))))))," ",t.inner.milestones.length>0?i.a.createElement("div",{style:{margin:"30px 0px"}},i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{item:!0,xs:4},i.a.createElement(u.b,{to:{pathname:"/detail/"+t.meId,data:{meName:t.meName,title:t.inner.title,description:t.outer.data,image:t.inner.image,milestones:t.inner.milestones}}},i.a.createElement(C,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",i.a.createElement(O.a,{icon:["fas","arrow-right"],className:e.arrowIcon})))))):""," ")," ",a!==T.data.length-1?i.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}}):"")})))))),i.a.createElement(x.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(n.Component),L=v()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"35px 0px 30px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"10px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(B),Q=a(97),A=a.n(Q),N=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.navbar},i.a.createElement(u.c,{to:"/"},i.a.createElement("img",{alt:"Crio.Do",src:A.a}),i.a.createElement("div",{style:{marginLeft:"16px"}},i.a.createElement(C,{type:"heading4",fontWeight:"bold",cursor:"pointer"},this.props.title))))}}]),a}(n.Component),F=v()((function(e){return{navbar:{height:"80px",background:e.palette.primary.white,display:"flex",padding:"0px 32px",alignItems:"center",borderBottom:"1px solid"+e.palette.primary.primaryBorder}}}))(N),j=(a(196),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={meDetail:{},data:"",me:"",isLoading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.meid;this.setState({me:e},(function(){})),this.container.scrollTop=0}},{key:"render",value:function(){var e=this;this.props.location.data||(window.location="/");var t=this.props.classes;return i.a.createElement(x.a,{container:!0,ref:function(t){return e.container=t}},i.a.createElement(x.a,{row:!0,lg:2,md:1,xs:1}),i.a.createElement(x.a,{row:!0,lg:7,md:10,xs:10},i.a.createElement(b,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(u.b,{to:{pathname:"/"}},i.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},i.a.createElement(O.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),i.a.createElement(C,{cursor:"pointer",color:"#999"},"Back"))),i.a.createElement("div",{className:t.top},i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{item:!0,xs:12},i.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},i.a.createElement(C,{fontSize:"46px"},this.props.location.data.meName)),i.a.createElement(C,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},P()(this.props.location.data.title)," "),i.a.createElement(C,{fontSize:"14px"},P()(this.props.location.data.description)," ")),i.a.createElement(x.a,{item:!0,xs:5,style:{textAlign:"right"}}),i.a.createElement(x.a,{item:!0,xs:12},i.a.createElement("div",{style:{textAlign:"center"}},P()(this.props.location.data.image)," ")))),i.a.createElement("div",{className:t.middle},i.a.createElement(C,{color:"rgba(0,0,0,1)",fontSize:"20px"},this.props.location.data.meName," Modules"),i.a.createElement("ul",{className:"timeline"},this.props.location.data.milestones.map((function(a,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("div",{className:t.MERow,class:"meRow"},i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{item:!0,xs:12},i.a.createElement(C,{type:"heading3",color:"rgba(0,0,0,1)"},P()(a.title)),i.a.createElement("div",{style:{marginTop:"16px"}},i.a.createElement(x.a,{container:!0},i.a.createElement(x.a,{item:!0,xs:12,md:12,lg:12},i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),i.a.createElement(x.a,{item:!0,xs:12,md:12,lg:12},i.a.createElement("br",null),i.a.createElement(C,{type:"body5",color:"#000"},P()(a.data)))),i.a.createElement("div",{style:{marginTop:"25px"}},i.a.createElement(x.a,{item:!0,xs:12,md:2},i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),i.a.createElement(x.a,{item:!0,xs:12,md:10},i.a.createElement(C,{type:"body5",color:"rgba(0,0,0,1)"},P()(a.skills))))))))),n!==e.props.location.data.milestones.length-1?i.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))))),i.a.createElement(x.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(n.Component)),q=v()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px 60px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"45px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"60px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"inline-flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(j),z=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).theme=Object(p.a)({palette:{primary:{main:"#7C8DFF",primary:"#7C8DFF",primaryBackground:"#F1F4FE",primaryBorder:"#D8D8D8",white:"#fff",black:"#000000",red:"#E66565",green:"#70CC63",orange:"#E6935A",grey:"#999999",greyTwo:"#EEEEEE",purple:"#570DA8",yellow:"#F1C21B"},secondary:{main:"#ffffff",secondaryBackground:"#C9D0FF",tertiaryBackground:"#F7F7F7"}}}),n.state={title:"Crio.Do Portfolio",defaultPath:"/portfolio-vinodkumarwagh73",detailPath:"/detail/:meid"},n}return Object(l.a)(a,[{key:"getTitle",value:function(e){this.setState({title:this.state.title.concat(e)})}},{key:"render",value:function(){var e=this;this.props.classes;return i.a.createElement(u.a,{basename:this.state.defaultPath},i.a.createElement(m.a,{theme:this.theme},i.a.createElement("div",{style:{backgroundColor:this.theme.palette.secondary.tertiaryBackground,height:"100vh",overflowX:"scroll"}},i.a.createElement(F,{title:this.state.title}),i.a.createElement(g.c,null,i.a.createElement(g.a,{exact:!0,path:"/",render:function(){return i.a.createElement(L,{getTitle:e.getTitle.bind(e)})}}),i.a.createElement(g.a,{path:"/detail/:meid",exact:!0,component:q}),i.a.createElement(g.a,{render:function(){return i.a.createElement(L,{getTitle:e.getTitle.bind(e)})}})))))}}]),a}(n.Component),J=a(40),U=a(62),W=a(41);J.b.add(U.b,U.a,W.b,W.d,W.c,W.a);var H=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Portfolio - Crio.Do"}},{key:"render",value:function(){return i.a.createElement(z,null)}}]),a}(n.Component);a(197).config(),o.a.render(i.a.createElement(H,null),document.getElementById("root"))},52:function(e){e.exports=JSON.parse('{"data":[{"meName":"QBox","meId":"ME_QBOX","outer":{"skills":"Linux Commands, OS Concepts, Networking Concepts, Network Security","data":"<div class=\'Overview_card card-content-body\'><p>QBox is a secure file-sharing service. It is a customized version of the popularly available VSFTPD server.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Created pre-install scripts to run system checks, install and configure QBox.</p>\\n</li>\\n<li>\\n<p>Developed tools to automatically analyze performance and functionality issues in different versions of QBox.</p>\\n</li>\\n</ul></div>"},"inner":{"title":"A secure file-sharing service hosted in the cloud.","image":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><h5>File transfer using the QBox server</h5></div>","milestones":[{"title":"Check system requirements and install QBox","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>Implemented a pre-installation script that validated the minimum system requirements to be met for QBox installation. The script checked the availability of the following system resources:</li>\\n</ol><ul>\\n<li>\\n<p>Processor</p>\\n</li>\\n<li>\\n<p>Memory</p>\\n</li>\\n<li>\\n<p>Disk space</p>\\n</li>\\n<li>\\n<p>OS version</p>\\n</li>\\n</ul><ol start=\'2\'>\\n<li>Installed the QBox server and connected it to various QBox clients.</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_1.jpg\' style=\'max-width:750px;\'/></p></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Linux commands</p></div>"},{"title":"Debug performance issues and identify regressions","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Created a performance benchmark using a base version of QBox.</p>\\n</li>\\n<li>\\n<p>Identified regressions in newer QBox versions (memory usage, cpu usage, file transfer speed, file permission issues).</p>\\n</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_2.jpg\' style=\'max-width:750px;\'/></p></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Linux commands, OS Concepts</p></div>"},{"title":"Troubleshoot network issues","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Collected and analyzed pcap files using Wireshark.</p>\\n</li>\\n<li>\\n<p>Identified the following network issues in different versions of QBox: TCP retransmissions, connection refusals, dropped connections, sub-optimal TCP window sizes and retransmission delays.</p>\\n</li>\\n<li>\\n<p>Identified several network issues in different versions of QBox including TCP retransmissions, connection refusals and retransmission delays.</p>\\n</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_3.jpg\' style=\'max-width:750px;\'/></p></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Networking Concepts</p></div>"},{"title":"Enable end-to-end encryption","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Created SSL certificates and used them to enable secured file transfer.</p>\\n</li>\\n<li>\\n<p>Snooped network traffic using Wireshark and ensured that it was indeed encrypted.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Network Security</p></div>"}]}},{"meName":"QMoney","meId":"ME_QMONEY","outer":{"skills":"Java, REST API, Jackson, Interfaces, Code Refactoring, Gradle, Exception Handling, Multithreading","data":"<div class=\'Overview_card card-content-body\'><p>QMoney is a visual stock portfolio analyzer. It helps portfolio managers make trade recommendations for their clients.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Implemented the core logic of the portfolio manager and published it as a library.</p>\\n</li>\\n<li>\\n<p>Refactored code to add support for multiple stock quote services.</p>\\n</li>\\n<li>\\n<p>Improved application stability and performance.</p>\\n</li>\\n</ul></div>"},"inner":{"title":"<div class=\'Headline_card card-content-body\'><p>A visual stock portfolio analyzer.</p></div>","image":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><p>QMoney Architecture</p><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_1.png\' style=\'max-width:750px;\'/></p><p>QMoney Portfolio Manager Interface</p></div>","milestones":[{"title":"Fetch stock quotes and compute annualized stock returns","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Used Tiingo\u2019s REST APIs to fetch stock quotes.</p>\\n</li>\\n<li>\\n<p>Computed the annualized returns based on stock purchase date and holding period.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Java, REST API, Jackson</p></div>"},{"title":"Refactor using Java interfaces and publish a JAR file","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Refactored code to adapt to an updated interface contract published by the backend team.</p>\\n</li>\\n<li>\\n<p>Published the portfolio manager library as a JAR for easy versioning and distribution.</p>\\n</li>\\n<li>\\n<p>Created examples to help document library (JAR) usage.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Interfaces, Code Refactoring, Gradle</p></div>"},{"title":"Improve application availability and stability","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Added support for a backup stock quote service (Alpha Vantage) to improve service availability.</p>\\n</li>\\n<li>\\n<p>Improved application stability with comprehensive error reporting and better exception handling.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Interfaces, Exception Handling</p></div>"},{"title":"Enhance application performance","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Improved application responsiveness by introducing multithreading.</p>\\n</li>\\n<li>\\n<p>Wrote unit tests to measure performance improvements.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Multithreading</p></div>"}]}},{"meName":"QCharm","meId":"ME_QCHARM","outer":{"skills":"Applied DS, ArrayList, Naive Search, String manipulation, KMP search, Linked List, Time Complexity, Stack, Dequeue, Binary Search","data":"<div class=\'Overview_card card-content-body\'><p>QCharm is an online IDE. Programmers use QCharm to write source code and execute it inside the editor.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Implemented basic editor features that included: opening a file, navigation, search/replace, cut/copy/paste, undo/redo.</p>\\n</li>\\n<li>\\n<p>Implemented the same functionality with multiple data structures to understand the effect of design choices on performance.</p>\\n</li>\\n<li>\\n<p>Improved the performance further by using hybrid data structures and algorithms.</p>\\n</li>\\n</ul></div>"},"inner":{"title":"A browser-based online code editor.","image":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QCHARM_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><h5>QCharm Architecture</h5><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QCHARM_MODULE_PROJECT_REPORT_image_1.png\' style=\'max-width:750px;\'/></p><h5>QCharm IDE</h5></div>","milestones":[{"title":"Load a source file into memory and perform file navigation operations","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Wrote code to load a source code into an ArrayList in memory.</p>\\n</li>\\n<li>\\n<p>Implemented file navigation operations (scroll up/down).</p>\\n</li>\\n<li>\\n<p>Developed the search feature using Hashmap</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>ArrayList, String, Naive Search</p></div"},{"title":"Edit operations and improved performance","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Implemented the cut, copy, and paste features.</p>\\n</li>\\n<li>\\n<p>Improved search performance using KMP algorithm.</p>\\n</li>\\n<li>\\n<p>Enhanced head-of-file edit performance by migrating to a LinkedList implementation.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>String manipulation, KMP search, LinkedList, Time Complexity</p></div>"},{"title":"Advanced editing features using LinkedLists","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Implemented the Search/Replace feature.</p>\\n</li>\\n<li>\\n<p>Developed the undo/redo feature using Stack and Deque.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Stack, Dequeue</p></div>"},{"title":"Hybrid data structures","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Used a blended data structure to aggregate the benefits of ArrayList and LinkedList.</p>\\n</li>\\n<li>\\n<p>Refactored all editor features to take advantage of the hybrid data structure.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Binary Search</p></div>"}]}},{"meName":"QEats","meId":"ME_QEATS","outer":{"skills":"Spring Boot, Spring Data, REST API, Jackson, Mockito, JUnit, MongoDB","data":"<div class=\'Overview_card card-content-body\'><p>QEats is a popular food ordering app that allows users to browse and order their favorite dishes from nearby restaurants. During the course of this Micro-Experience, developers build different parts of the QEats backend which is a Spring Boot application. Several REST API endpoints are implemented to query restaurant information and place food orders. <br><br>To give a sense of real-world problems, production issues are introduced for the developer to investigate using Scientific Debugging methods. Along with this, the developer is expected to improve the app performance under large load scenarios as well as include an advanced search feature in the app.</p></div>"},"inner":{"title":"A scalable distributed backend for a food-ordering app.","image":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-assets-bucket/QEats/QEats.png\' style=\'width:300px;\'/></p></div>","milestones":[{"title":"Retrieve restaurant data for a given user location","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>Implement GET /API/v1/restaurants and the corresponding request handler and response methods.</li><li>Use Mockito to enable the development of the relevant MVCS layers independently.</li><li>Retrieve a list of restaurants from MongoDB based on a user location.</li></ol><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-assets-bucket/QEats/QEatsNearbyRestaurants.jpg\' style=\'width:300px;\'/></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Spring Boot, Spring Data, REST API, Jackson, Mockito, JUnit, MongoDB</p></div>"}]}},{"meName":"Buildouts","meId":"ME_BUILDOUT_QA","outer":{"skills":"Spring Boot, REST API, MongoDB, JUnit","data":"<div class=\'Overview_card card-content-body\'><p>Create a quiz application that supports the following API endpoint: /quiz</p><p>This endpoint supports the following operations:</p><ul>\\n<li>\\n<p>GET /quiz/{moduleId}: fetches the quiz questions for a given module.</p>\\n</li>\\n<li>\\n<p>POST /quiz/{moduleId}: submits user answers and returns an evaluation.</p>\\n</li></ul></div>"},"inner":{"title":"Create an online quiz application","image":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://crio-assets.s3.ap-south-1.amazonaws.com/buildouts-1.png\' style=\'width:500px;\'/></p><p><img alt=\'image alt text\' src=\'https://crio-assets.s3.ap-south-1.amazonaws.com/buildouts-2.png\' style=\'width:500px;\'/></p><h5>Images</h5></div>","milestones":[{"title":"Create an API to fetch quiz questions","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Implement GET /quiz/{module-id} and the corresponding request handler and response methods.</p>\\n</li>\\n<li>\\n<p>Retrieve a list of questions from MongoDB based on the module-id.</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Spring Boot, Spring Data, REST API, Jackson, JUnit, MongoDB</p></div"},{"title":"Submit quiz answers and return an evaluation","data":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Accept user answers to a given quiz via a POST request</p>\\n</li>\\n<li>\\n<p>Evaluate user answers for correctness and compute the total score</p>\\n</li>\\n<li>\\n<p>Return a response with explanations for all answers</p>\\n</li>\\n</ol></div>","skills":"<div class=\'Skills_used_card card-content-body\'><p>Scientific Debugging</p></div>"}]}},{"meName":"QPrep","meId":"ME_QPREP","outer":{"skills":"Applied DSA","data":"<div class=\'Overview_card card-content-body\'><p>Learn and Practice algorithmic problems in a structured way.</p><p>During the course of this QPrep Micro-Experience, the developer is expected to solve problems in a structured way by:</p><ul>\\n<li>\\n<p>First articulating the problem statement clearly with examples.</p>\\n</li>\\n<li>\\n<p>Brainstorming multiple approaches, understanding trade-offs and writing pseudocode for the chosen approach.</p>\\n</li>\\n<li>\\n<p>Implementing the solution and testing it.</p>\\n</li>\\n</ul><p>The deliberate divide-and-conquer practice helps the developer to approach unknown problems with reasonable confidence.</p></div>"},"inner":{"title":"","image":"","milestones":[]}}]}')},59:function(e,t,a){e.exports=a.p+"static/media/crio-logo-white.c9536e04.svg"},97:function(e,t,a){e.exports=a.p+"static/media/crio-logo.63be71d0.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.09bde1ab.chunk.js.map