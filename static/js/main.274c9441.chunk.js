(this["webpackJsonpassignment-7"]=this["webpackJsonpassignment-7"]||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),c=n.n(i),r=n(20),s=n.n(r),o=(n(29),n(30),n(17)),l=n.n(o),d=n(21),u=n(7),f=n(8),h=n(10),j=n(9),b=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).handleChange=function(e){console.log("inside handleChange"),t.setState({gifName:e.target.value})},t.getData=Object(d.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside getData"),e.prev=1,e.next=4,fetch("https://api.giphy.com/v1/gifs/search?q="+t.state.gifName+"&api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8");case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Something went wrong");case 7:return e.next=9,n.json();case 9:a=e.sent,t.setState({allGifs:a.data,filteredGifs:a.data}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),t.handleSearch=function(){""===t.state.gifName?alert("no results"):(t.getData(),t.setState({rating:"all"}))},t.handleRating=function(e){console.log("inside handle rating"),t.setState({rating:e.target.value})},t.handleFilter=function(){switch(t.state.rating){case"g":t.setState({filteredGifs:t.state.allGifs.filter((function(t){return"g"===t.rating}))});break;case"pg":t.setState({filteredGifs:t.state.allGifs.filter((function(t){return"pg"===t.rating}))});break;case"pg-13":t.setState({filteredGifs:t.state.allGifs.filter((function(t){return"pg-13"===t.rating}))});break;default:t.setState({filteredGifs:t.state.allGifs})}},t.state={gifName:"",rating:"all",allGifs:[],filteredGifs:[]},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{id:"search-filter-field",children:[Object(a.jsxs)("div",{id:"search-field",children:[Object(a.jsx)("label",{id:"search-text",for:"ratings",children:"Enter a Keyword:"}),Object(a.jsx)("input",{id:"search-input",type:"text",name:"searchInput",placeholder:"Search for a gif!",onChange:this.handleChange}),Object(a.jsx)("button",{id:"search-btn",onClick:function(){return t.handleSearch()},children:"Search"})]}),Object(a.jsxs)("div",{id:"filter-field",children:[Object(a.jsx)("label",{id:"filter-text",for:"ratings",children:"Filter by rating:"}),Object(a.jsxs)("select",{id:"dropdown",name:"ratings",onChange:this.handleRating,children:[Object(a.jsx)("option",{value:"all",selected:!0,children:"Show all"}),Object(a.jsx)("option",{value:"g",children:"G (General Audience)"}),Object(a.jsx)("option",{value:"pg",children:"PG (Parental Guidance Suggested)"}),Object(a.jsx)("option",{value:"pg-13",children:"PG-13 (Parents Strongly Cautioned)"})]}),Object(a.jsx)("button",{id:"filter-btn",onClick:function(){return t.handleFilter()},children:"Filter"})]}),Object(a.jsx)("div",{id:"gif-field",children:this.state.filteredGifs.map((function(t){return Object(a.jsx)("img",{class:"gif",src:t.images.original.url})}))})]})}}]),n}(i.Component),g=n(13),p=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={gifList:[]},t.componentDidMount=t.componentDidMount.bind(Object(g.a)(t)),t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("In Mount"),fetch("https://api.giphy.com/v1/gifs/trending?api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8").then((function(t){return t.json()})).then((function(e){console.log(e.data),t.setState({gifList:e.data}),console.log(t.state.gifList)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.gifList.map((function(t){return Object(a.jsx)("img",{class:"gif",src:t.images.original.url,alt:"gif"})}))})}}]),n}(c.a.Component),O=n(11),m=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"App-header",children:Object(a.jsx)("h1",{children:"GIPHY"})}),Object(a.jsxs)("div",{className:"nav-bar",children:[Object(a.jsx)(O.b,{to:"/",children:Object(a.jsx)("button",{className:"nav-button",children:"TRENDING"})}),Object(a.jsx)(O.b,{to:"/Search",children:Object(a.jsx)("button",{className:"nav-button",children:"SEARCH"})}),Object(a.jsx)(O.b,{to:"/Random",children:Object(a.jsx)("button",{className:"nav-button",onClick:function(){return window.location.href="/Random"},children:"RANDOM"})})]})]})}}]),n}(i.Component),x=n(2),v=n(23),S=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).handleRandom=function(){t.getData(),O.b},t.state={gifList:[]},t.componentDidMount=t.componentDidMount.bind(Object(g.a)(t)),t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("In Mount"),fetch("https://api.giphy.com/v1/gifs/random?api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8").then((function(t){return t.json()})).then((function(e){console.log(e.data),t.setState({gifList:[].concat(Object(v.a)(t.state.gifList),[e.data])}),console.log(t.state.gifList)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),this.state.gifList.map((function(t){return Object(a.jsx)("img",{id:"gif",src:t.images.original.url,alt:"gif"})}))]})}}]),n}(c.a.Component);var C=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(O.a,{basename:"/Giphy-Search-And-Filter-App",children:[Object(a.jsx)(m,{}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/",exact:!0,component:p}),Object(a.jsx)(x.a,{path:"/Search",component:b}),Object(a.jsx)(x.a,{path:"/Random",component:S})]})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.274c9441.chunk.js.map