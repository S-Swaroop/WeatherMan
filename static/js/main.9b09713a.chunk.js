(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=(n(12),n(13),n(4)),j=n.n(s),d=n(2),o=n(7),h=n(5),u=n(0);var l=function(e){var t=e.data;return console.log({data:t}),Object(u.jsxs)("div",{className:"weather-card",children:[Object(u.jsxs)("h1",{children:["location: ",t.name," (",t.sys.country,")"]}),Object(u.jsxs)("h2",{children:["Coordinates : ",t.coord.lat,"\xb0 ",t.coord.lon,"\xb0"]}),Object(u.jsxs)("table",{className:"weather-data",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"headings",children:[Object(u.jsx)("td",{children:"Current Temperature"}),Object(u.jsx)("td",{children:"Feels Like"}),Object(u.jsx)("td",{children:"Min. Temperature"}),Object(u.jsx)("td",{children:"Max. Temperature"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{className:"temperatures",children:[Object(u.jsxs)("td",{children:[t.main.temp,"\xb0C"]}),Object(u.jsxs)("td",{children:[t.main.feels_like,"\xb0C"]}),Object(u.jsxs)("td",{children:[t.main.temp_min,"\xb0C"]}),Object(u.jsxs)("td",{children:[t.main.temp_max,"\xb0C"]})]})})]}),Object(u.jsxs)("h2",{children:["Conditions: ",t.weather[0].main]}),"   ",Object(u.jsx)("img",{className:"icon",hight:"120px",width:"120px",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")})]})};var b=function(){var e="956636fe9578b6bb2dd9218213325cc2",t=Object(c.useState)({data:null}),n=Object(h.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)({city:"",country:""}),s=Object(h.a)(i,2),b=s[0],p=s[1];function x(){return(x=Object(o.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==b.city){t.next=5;break}alert("Enter a city"),t.next=9;break;case 5:return t.next=7,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(b.city,",").concat(b.country,"&units=metric&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){return e}));case 7:c=t.sent,a({data:c});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=function(e){var t=e.target.name,n=e.target.value;"city"===t&&p(Object(d.a)(Object(d.a)({},b),{},{city:n})),"country"===t&&p(Object(d.a)(Object(d.a)({},b),{},{country:n}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Weather App"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",name:"city",placeholder:"city",onChange:function(e){return O(e)}}),Object(u.jsx)("input",{type:"text",name:"country",placeholder:"country",onChange:function(e){return O(e)}}),Object(u.jsx)("button",{onClick:function(e){return function(e){return x.apply(this,arguments)}(e)},children:"submit"})]}),void 0!=r.data?Object(u.jsx)("div",{children:Object(u.jsx)(l,{data:r.data})}):null]})};var p=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9b09713a.chunk.js.map