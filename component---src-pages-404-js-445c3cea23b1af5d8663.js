(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("YcKm"),l=a("q1tI"),i=a.n(l),r=a("Wbzz"),s=(a("wcMv"),a("tUrg"),a("f3/d"),function(e){return i.a.createElement("nav",null,e.menuLinks.map((function(e){return e.items?i.a.createElement(i.a.Fragment,{key:e.name},i.a.createElement(r.Link,{className:"link depth-0",to:e.link},e.name),i.a.createElement("span",{className:"indent-0"}),e.items.map((function(e){return e.items?i.a.createElement(i.a.Fragment,{key:e.name},i.a.createElement(r.Link,{style:{marginLeft:"20px"},className:"link depth-0",to:e.link},e.name),e.items.map((function(e){return i.a.createElement("div",{key:e.name},i.a.createElement(r.Link,{style:{marginLeft:"40px"},className:"link depth-2",to:e.link},e.name))}))):i.a.createElement("div",{key:e.name},i.a.createElement(r.Link,{style:{marginLeft:"20px"},className:"link depth-1",to:e.link},e.name))}))):i.a.createElement("div",{key:e.name},i.a.createElement(r.Link,{className:"link depth-0",to:e.link},e.name))})))});var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},(function(){a.state.active?a.setState({mobileActiveClass:"navPanel-visible"}):a.setState({mobileActiveClass:""})}))},a.enterButton=function(){a.setState({mouseOverButton:!0})},a.leaveButton=function(){setTimeout((function(){a.setState({mouseOverButton:!1})}),300)},a.enterMenu=function(){a.setState({mouseOverMenu:!0})},a.leaveMenu=function(){setTimeout((function(){a.setState({mouseOverMenu:!1})}),300)},a.enterSubButton=function(){a.setState({mouseOverSubButton:!0})},a.leaveSubButton=function(){setTimeout((function(){a.setState({mouseOverSubButton:!1})}),300)},a.enterSubMenu=function(){a.setState({mouseOverSubMenu:!0})},a.leaveSubMenu=function(){setTimeout((function(){a.setState({mouseOverSubMenu:!1})}),300)},a.state={active:!1,mobileActiveClass:"",mouseOverButton:!1,mouseOverMenu:!1,mouseOverSubButton:!1,mouseOverSubMenu:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.handleMouseHover=function(){this.setState(this.toggleHoverState)},l.toggleHoverState=function(e){return{isHovering:!e.isHovering}},l.render=function(){var e=this,t=this.props.siteTitle,a=this.props.menuLinks,n=this.state.mouseOverButton||this.state.mouseOverMenu,l=this.state.mouseOverSubButton||this.state.mouseOverSubMenu;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"navbar-menu "+this.state.mobileActiveClass},i.a.createElement("div",{id:"titleBar"},i.a.createElement("a",{role:"button",onClick:function(){return e.toggleHamburger()},className:"toggle","aria-label":"Open mobile menu"}),i.a.createElement("span",{className:"title"},i.a.createElement(r.Link,{to:"/"},t))),i.a.createElement("div",{id:"navPanel"},i.a.createElement(s,{siteTitle:t,menuLinks:a}))),i.a.createElement("header",{id:"header"},i.a.createElement("h1",{id:"logo"},i.a.createElement(r.Link,{to:"/"},t)),i.a.createElement("div",{className:"navbar-menu"},i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flex:1}},a.map((function(t){return t.items?i.a.createElement(i.a.Fragment,{key:t.name},i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{onMouseEnter:e.enterButton,onMouseLeave:e.leaveButton,className:t.cl,to:t.link},t.name),i.a.createElement("ul",{style:n?{display:"block",background:"rgba(39, 40, 51, 0.965)",position:"absolute",right:"55%",minWidth:"150px",borderRadius:"5px"}:{display:"none"},onMouseEnter:e.enterMenu,onMouseLeave:e.leaveMenu},t.items.map((function(t){return t.items?i.a.createElement(i.a.Fragment,{key:t.name},i.a.createElement("li",{key:t.name,style:{textAlign:"left",marginLeft:"0",paddingLeft:"0",fontSize:"14px",display:"block",lineHeight:"2.5"}},i.a.createElement(r.Link,{onMouseEnter:e.enterSubButton,onMouseLeave:e.leaveSubButton,to:t.link},t.name),i.a.createElement("ul",{style:l?{display:"block",background:"rgba(39, 40, 51, 0.965)",borderRadius:"5px",position:"absolute",right:"100%",width:"100%",marginTop:"-35px"}:{display:"none"},onMouseEnter:e.enterSubMenu,onMouseLeave:e.leaveSubMenu},t.items.map((function(e){return i.a.createElement("li",{key:e.name,style:{textAlign:"left",marginLeft:"0",paddingLeft:"0",fontSize:"14px",whiteSpace:"nowrap",lineHeight:"2.5",display:"block"}},i.a.createElement(r.Link,{to:e.link},e.name))}))))):i.a.createElement("li",{key:t.name,style:{textAlign:"left",marginLeft:"0",paddingLeft:"0",fontSize:"14px",lineHeight:"2.5",display:"block"}},i.a.createElement(r.Link,{to:t.link},t.name))}))))):i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{className:t.cl,to:t.link},t.name))})))))))},n}(i.a.Component),m=function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("a",{href:"/",className:"button primary"}," Jump back to home")," ",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/kadhirash",className:"icon brands alt fa-linkedin-in"},i.a.createElement("span",{className:"label"},"LinkedIn"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/kadhirash/",className:"icon brands alt fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/kadhirash",className:"icon brands alt fa-github"},i.a.createElement("span",{className:"label"},"GitHub"))),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:kadhirash@gmail.com?subject=[Website]%20Potenial%20Meetup",className:"icon solid alt fa-envelope"},i.a.createElement("span",{className:"label"},"Email")))),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Untitled. All rights reserved."),i.a.createElement("li",null,"Image Credits: ",i.a.createElement("a",{href:"https://unsplash.com"},"Unsplash"))))};t.a=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["children"]);return i.a.createElement(r.StaticQuery,{query:"1409411657",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"/"===a.location?"landing":""},i.a.createElement("div",{id:"page-wrapper"},i.a.createElement(o,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),t,i.a.createElement(m,null))))},data:n})}},OGtf:function(e,t,a){var n=a("XKFU"),l=a("eeVq"),i=a("vhPU"),r=/"/g,s=function(e,t,a,n){var l=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(r,"&quot;")+'"'),s+">"+l+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*l((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},YcKm:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"","description":"A Gatsby.js V2 Starter based on Landed by HTML5 UP","menuLinks":[{"name":"Home","link":"/"},{"name":"About Me","link":"/about"},{"name":"Spare Time","link":"/ec"}]}}}}')},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("Bl7J");t.default=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-js-445c3cea23b1af5d8663.js.map