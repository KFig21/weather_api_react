(this.webpackJsonpweather_api_react=this.webpackJsonpweather_api_react||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(5),s=c.n(i),r=(c(16),c(7)),o=c.n(r),l=c(8),d=c(3),u=(c(18),c(19),c(20),c(1));function p(e){var t=e.now,c=e.tempType,a=e.handleTempType,n=t.name,i=t.fahrenheit,s=t.minFahrenheit,r=t.maxFahrenheit,o=t.celcius,l=t.minCelcius,d=t.maxCelcius,p=t.icon,j=t.description;return Object(u.jsx)("div",{className:"weather",children:Object(u.jsxs)("div",{className:"weather-container",children:[Object(u.jsx)("h1",{children:n}),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("div",{className:"side",children:Object(u.jsx)("div",{className:"icon-container",children:Object(u.jsx)("i",{className:"wi ".concat(p)})})}),Object(u.jsxs)("div",{className:"side",children:[" ",Object(u.jsx)("h2",{className:"current-temp",onClick:a,children:"imperial"===c?"".concat(i,"\xb0F"):"".concat(o,"\xb0C")}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("span",{className:"max-temp",children:"".concat("imperial"===c?r:d,"\xb0")}),Object(u.jsx)("span",{children:"/"}),Object(u.jsx)("span",{className:"min-temp",children:"".concat("imperial"===c?s:l,"\xb0")})]}),Object(u.jsx)("h4",{className:"description",children:j})]})]})]})})}c(22);var j=c(9),m=c.n(j);function h(e){var t=e.cityInput,c=e.countryInput,a=e.setCityInput,n=e.setCountryInput,i=e.getWeather,s=e.error,r=e.backgroundCode,o=""===t;return Object(u.jsxs)("div",{className:"search",children:[Object(u.jsxs)("form",{action:"",children:[Object(u.jsx)("input",{className:"input".concat(r),type:"text",placeholder:"City",onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("input",{className:"input".concat(r),type:"text",placeholder:"Country",onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("button",{className:"button".concat(r),disabled:o,type:"submit",onClick:function(e){e.preventDefault(),i(t,c)},children:Object(u.jsx)(m.a,{})})]}),Object(u.jsx)("div",{className:"error",style:s?{opacity:1}:{opacity:0},children:Object(u.jsx)("span",{children:s||null})})]})}c(31);function b(e){var t=e.forecast,c=e.tempType,a=e.backgroundCode;return Object(u.jsx)("div",{className:"forecast-container bg".concat(a),children:t.map((function(e,t){var a=e.date,n=e.minFahrenheit,i=e.maxFahrenheit,s=e.minCelcius,r=e.maxCelcius,o=e.icon;return Object(u.jsxs)("div",{className:"day-container",children:[Object(u.jsx)("span",{className:"date",children:a}),Object(u.jsx)("div",{className:"icon-container",children:Object(u.jsx)("i",{className:"wi ".concat(o)})}),Object(u.jsxs)("span",{className:"minmax-container",children:[Object(u.jsx)("span",{className:"max-temp",children:"".concat("imperial"===c?i:r,"\xb0")}),Object(u.jsx)("span",{children:"/"}),Object(u.jsx)("span",{className:"min-temp",children:"".concat("imperial"===c?n:s,"\xb0")})]})]})}))})}c.p;var x=c.p+"static/media/background-sunny.e6162554.jpg",O=c.p+"static/media/background-rain.17415aab.jpg",y=c.p+"static/media/background-storm.9ece14c5.jpg",g=c.p+"static/media/background-snow.20bd9145.jpg",f=(c.p,c.p+"static/media/background-cloud-801.25178247.jpg"),w=c.p+"static/media/background-cloud-802.088c9780.jpg",v=c.p+"static/media/background-cloud-803.27698d06.jpg",C=c.p+"static/media/background-cloud-804.8c6c7f57.jpg",N=c.p+"static/media/background-fog.dd14cfba.jpg",k="e705fd2733337e25a8b91977646312e1";var S=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),r=s[0],j=s[1],m=Object(a.useState)({}),S=Object(d.a)(m,2),M=S[0],F=S[1],T=Object(a.useState)("imperial"),I=Object(d.a)(T,2),_=I[0],D=I[1],U=Object(a.useState)(""),E=Object(d.a)(U,2),J=(E[0],E[1]),L=Object(a.useState)(""),W=Object(d.a)(L,2),Z=(W[0],W[1]),q=Object(a.useState)(""),A=Object(d.a)(q,2),B=A[0],P=A[1],z=Object(a.useState)([{},{},{},{},{},{},{},{}]),G=Object(d.a)(z,2),H=G[0],K=G[1],Q=Object(a.useState)(null),R=Object(d.a)(Q,2),V=R[0],X=R[1],Y=function(e){return e-273.15},$=function(e){return 9*(e-273.15)/5+32};function ee(e){return new Date(1e3*e).toLocaleDateString("en-US",{timeZone:"UTC"}).slice(0,-5)}var te=function(){D("imperial"===_?"metric":"imperial"),console.log(_)},ce=function(e,t){switch(!0){case e>=200&&e<232:return!0===t&&X(200),"wi-thunderstorm";case e>=300&&e<=321:return!0===t&&X(300),"wi-sleet";case e>=500&&e<=521:return!0===t&&X(500),"wi-storm-showers";case e>=600&&e<=622:return!0===t&&X(600),"wi-snow";case e>=701&&e<=781:return!0===t&&X(700),"wi-fog";case 800===e:return!0===t&&X(800),"wi-day-sunny";case e>=801&&e<=804:return!0===t&&801===e&&X(801),!0===t&&802===e&&X(802),!0===t&&803===e&&X(803),!0===t&&804===e&&X(804),"wi-day-fog";default:return!0===t&&X(801),"wi-day-fog"}},ae=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var a,n,i,s,r,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(c,"&appid=").concat(k));case 2:return a=e.sent,e.next=5,a.json();case 5:if("404"!==(n=e.sent).cod){e.next=9;break}return P(n.message),e.abrupt("return");case 9:return e.next=11,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n.coord.lat,"&lon=").concat(n.coord.lon,"&exclude=minutely,hourly,alerts&appid=").concat(k));case 11:return i=e.sent,e.next=14,i.json();case 14:for(s=e.sent,console.log("weatherCall",n),console.log("forecastCall",s),J(n.coord.lat),Z(n.coord.lon),F({name:n.name,date:ee(n.dt),fahrenheit:Math.round($(n.main.temp)),minFahrenheit:Math.round($(n.main.temp_min)),maxFahrenheit:Math.round($(n.main.temp_max)),celcius:Math.round(Y(n.main.temp)),minCelcius:Math.round(Y(n.main.temp_min)),maxCelcius:Math.round(Y(n.main.temp_max)),icon:ce(n.weather[0].id,!0),description:n.weather[0].description}),r=[],l=1;l<8;l++)(d={}).date=ee(s.daily[l].dt),d.minFahrenheit=Math.round($(s.daily[l].temp.min)),d.maxFahrenheit=Math.round($(s.daily[l].temp.max)),d.minCelcius=Math.round(Y(s.daily[l].temp.min)),d.maxCelcius=Math.round(Y(s.daily[l].temp.max)),d.icon=ce(s.daily[l].weather[0].id,!1),r.push(d);console.log(r),P(""),K(r);case 25:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){ae("Philadelphia")}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"day-info",children:(new Date).toLocaleDateString("en-US",{timeZone:"UTC"})}),Object(u.jsx)("div",{className:"temp-info",children:Object(u.jsx)("span",{onClick:function(){return te()},children:"imperial"===_?"F\xb0":"C\xb0"})}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(h,{cityInput:c,countryInput:r,setCityInput:n,setCountryInput:j,getWeather:ae,error:B,backgroundCode:V}),Object(u.jsxs)(a.Suspense,{fallback:Object(u.jsx)("div",{className:"suspense",children:"loading..."}),children:[Object(u.jsx)(p,{now:M,tempType:_,handleTempType:te}),Object(u.jsx)(b,{forecast:H,tempType:_,backgroundCode:V})]})]}),Object(u.jsx)("img",{style:200===V?{opacity:1}:{opacity:0},src:y,alt:"thunderstorm"}),Object(u.jsx)("img",{style:300===V?{opacity:1}:{opacity:0},src:O,alt:"sleet"}),Object(u.jsx)("img",{style:500===V?{opacity:1}:{opacity:0},src:O,alt:"showers"}),Object(u.jsx)("img",{style:600===V?{opacity:1}:{opacity:0},src:g,alt:"snow"}),Object(u.jsx)("img",{style:700===V?{opacity:1}:{opacity:0},src:N,alt:"fog"}),Object(u.jsx)("img",{style:800===V?{opacity:1}:{opacity:0},src:x,alt:"sunny"}),Object(u.jsx)("img",{style:801===V?{opacity:1}:{opacity:0},src:f,alt:"few clouds"}),Object(u.jsx)("img",{style:802===V?{opacity:1}:{opacity:0},src:w,alt:"scattered clouds"}),Object(u.jsx)("img",{style:803===V?{opacity:1}:{opacity:0},src:v,alt:"broken clouds"}),Object(u.jsx)("img",{style:804===V?{opacity:1}:{opacity:0},src:C,alt:"overcast clouds"})]})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fc9c6698.chunk.js.map