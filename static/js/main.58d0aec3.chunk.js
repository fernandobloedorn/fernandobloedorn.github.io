(this.webpackJsonpgifter=this.webpackJsonpgifter||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(18),r=a.n(c),i=(a(56),a(57),a(58),a(94)),o=a(95),l=a(2);var j=function(){return Object(l.jsxs)(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(l.jsx)(i.a.Brand,{href:"/",children:"Aprendizado de M\xe1quina II: m\xe9todos supervisionados"}),Object(l.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(l.jsx)(o.a,{className:"mr-auto"}),Object(l.jsx)(o.a,{children:Object(l.jsx)(o.a.Link,{href:"/about",children:"Sobre n\xf3s"})})]})]})},d=a(24),h=a(25),b=a(27),u=a(26),m=a(90),x=a(91),O=a(96),f=a(48),v=a(92),g=a(93),p=a(97),y=a(98),k=a(49),S=(a(63),a(66),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={produtos:[],isLoading:!1,searchText:"1",administrativeDuration:"7",male:!1,female:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.search()}},{key:"search",value:function(){this.setState({isLoading:!1});var e=this.state,t=e.searchText,a=e.male,n=e.female,s="";a?s="M":n&&(s="F");JSON.stringify({gender:s,name:t})}},{key:"searchByDescription",value:function(){var e=this;this.setState({male:!1,female:!1},(function(){e.search()}))}},{key:"searchByMale",value:function(){var e=this;this.setState({male:!0,female:!1},(function(){e.search()}))}},{key:"searchByFemale",value:function(){var e=this;this.setState({male:!1,female:!0},(function(){e.search()}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.produtos;return e=a.isLoading?Object(l.jsx)("div",{className:"Carregando",children:Object(l.jsx)("img",{src:"/loading.gif"})}):0==n.length?Object(l.jsx)(m.a,{className:"justify-content-md-center",children:Object(l.jsx)(x.a,{md:"auto",children:Object(l.jsx)("div",{style:{marginTop:"2rem"},children:"Aguardando buscar os dados..."})})}):Object(l.jsx)(m.a,{className:"justify-content-md-center",children:n.map((function(e){return Object(l.jsx)("a",{href:e.link,style:{textDecoration:"none"},target:"_blank",children:Object(l.jsxs)(O.a,{style:{width:"10rem",margin:"0.5rem"},children:[Object(l.jsx)(O.a.Img,{variant:"top",style:{height:"10rem"},src:e.img}),Object(l.jsxs)(O.a.Body,{children:[Object(l.jsx)(O.a.Title,{style:{color:"#222222",fontSize:"10px",height:"1.5rem"},children:e.name}),Object(l.jsx)(O.a.Text,{}),Object(l.jsx)(f.a,{variant:"primary",href:e.link,target:"_blank",children:e.price})]})]},e.id)})}))}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("br",{}),Object(l.jsxs)(v.a,{style:{minHeight:"30rem"},children:[Object(l.jsxs)(g.a,{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"basic-url",children:"N\xfamero de acessos a p\xe1ginas admnistrativas:"}),Object(l.jsx)(p.a,{placeholder:"0","aria-label":"0","aria-describedby":"basic-addon2",value:this.state.searchText,onChange:function(e){return t.setState({searchText:e.target.value})},onKeyPress:function(e){"Enter"===e.key&&t.searchByDescription()}})]}),Object(l.jsxs)(g.a,{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"basic-url",children:"Dura\xe7\xe3o do acesso \xe0s p\xe1ginas administrativas:"}),Object(l.jsx)(p.a,{placeholder:"0","aria-label":"0","aria-describedby":"basic-addon2",value:this.state.administrativeDuration,onChange:function(e){return t.setState({administrativeDuration:e.target.value})},onKeyPress:function(e){"Enter"===e.key&&t.searchByDescription()}})]}),Object(l.jsx)(m.a,{className:"justify-content-md-center",children:Object(l.jsx)(y.a,{type:"checkbox",children:Object(l.jsx)(k.a,{style:{marginLeft:"30px",marginRight:"15px"},onClick:function(){return t.searchByMale()},children:"Buscar"})})}),e]})]})}}]),a}(n.Component)),N=(a(84),a(16)),B=a(51);var C=function(){return Object(l.jsx)("div",{className:"footer-container",children:Object(l.jsx)("div",{class:"footer-links",children:Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsx)("div",{class:"footer-link-items",children:Object(l.jsx)(N.b,{to:"/about",children:"Sobre n\xf3s"})}),Object(l.jsx)("div",{class:"footer-link-items",children:Object(l.jsx)(N.b,{to:"/contact",children:"Contato"})}),Object(l.jsx)("div",{class:"footer-link-items",children:Object(l.jsx)("a",{href:"https://www.instagram.com/fernandobloedorn/",target:"_blank",children:Object(l.jsx)(B.a,{})})})]})})})};var D=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S,{})})},F=a(7),T=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(l.jsxs)(v.a,{children:[Object(l.jsx)("h1",{children:"Sobre n\xf3s"}),";"]})}}]),a}(n.Component);var w=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(N.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(F.c,{children:[Object(l.jsx)(F.a,{path:"/",exact:!0,component:D}),Object(l.jsx)(F.a,{path:"/about",exact:!0,component:T})]}),Object(l.jsx)(C,{})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),L()}},[[87,1,2]]]);
//# sourceMappingURL=main.58d0aec3.chunk.js.map