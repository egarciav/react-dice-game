(this["webpackJsonpreact-dice"]=this["webpackJsonpreact-dice"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(8),o=n.n(s),r=(n(13),n(2)),a=n(3),l=n(5),u=n(4),h=n(6),d=(n(14),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("i",{className:"Dice fas fa-dice-".concat(this.props.face," ").concat(this.props.rolling?"shaking":"")})}}]),n}(i.Component),b=(n(16),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={dice1:"one",dice2:"one",rolling:!1},i.roll=i.roll.bind(Object(h.a)(i)),i}return Object(a.a)(n,[{key:"roll",value:function(){var t=this,e=this.props.sides[Math.floor(Math.random()*this.props.sides.length)],n=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];this.setState({dice1:e,dice2:n,rolling:!0}),setTimeout((function(){t.setState({rolling:!1})}),1e3)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"RollDice",children:[Object(d.jsxs)("div",{className:"RollDice-container",children:[Object(d.jsx)(j,{face:this.state.dice1,rolling:this.state.rolling}),Object(d.jsx)(j,{face:this.state.dice2,rolling:this.state.rolling})]}),Object(d.jsx)("button",{onClick:this.roll,disabled:this.state.rolling,children:this.state.rolling?"Rolling":"Roll"})]})}}]),n}(i.Component));b.defaultProps={sides:["one","two","three","four","five","six"]};var f=b,p=(n(17),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(f,{})})}}]),n}(i.Component)),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),s(t),o(t)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.1d73d336.chunk.js.map