"use strict";(self.webpackChunktesting_task=self.webpackChunktesting_task||[]).push([[326],{326:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(791),r=a(32),n=a(694),s=a.n(n),u=a(168),i=a(413),c=a(439),o="style_label__kK2Vq",d="style_input__BfNfU",f="style_invalid__14X+4",_="style_error__jSzAL",R=a(184),m=function(e){var t=e.label,a=e.labelClass,r=e.defaultValue,n=e.type,i=e.name,m=e.placeholder,p=e.inputClass,E=e.required,v=e.pattern,N=(0,l.useState)(e.error),O=(0,c.Z)(N,2),S=O[0],h=O[1],C=(0,u.$)().t;return(0,R.jsxs)("div",{children:[t&&(0,R.jsxs)("label",{htmlFor:i,className:s()(a,o),children:[t,":"]}),(0,R.jsx)("input",{id:i,defaultValue:r,type:n,name:i,placeholder:m,className:s()(p,d,S?f:""),required:E,pattern:v,onChange:function(e){h(""),v&&!new RegExp(v).test(e.target.value)&&h(C("FORM.ERRORS.INCORRECT")),(E&&"undefined"==typeof e.target.value||""==e.target.value)&&h(C("FORM.ERRORS.REQUIRED"))}}),S&&(0,R.jsx)("div",{className:s()(_),children:S})]})},p=function(e){return(0,R.jsx)(m,(0,i.Z)({},e))},E="style_container__jYCas",v="style_form__PpCmV",N="style_button__YwCzJ",O=a(135),S=(0,r.Pi)((function(e){var t=(0,O.m)().commonStore,a=e.fields,r=(0,u.$)().t,n=(0,l.useRef)(null);return null!==a&&void 0!==a&&a.length?(0,R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.currentTarget.FIRST_NAME.value),console.log(e.currentTarget.SECOND_NAME.value);var a={firstName:e.currentTarget.FIRST_NAME.value,secondName:e.currentTarget.SECOND_NAME.value};t.setModal(!0,r("MODAL.WELCOM",a))},ref:n,className:s()(v),children:[a.map((function(e){var t=e.name,a=e.type,l=e.defaultValue,n=e.required,s=e.pattern;return(0,R.jsx)("div",{children:(0,R.jsx)(p,{label:r("FORM.FIELDS.".concat(t,".LABEL"),""),defaultValue:l,type:a,name:t,placeholder:r("FORM.FIELDS.".concat(t,".PLACEHOLDER"),""),pattern:s,required:n})},t)})),(0,R.jsx)("input",{type:"submit",value:r("FORM.BUTTONS.READY",""),className:s()(N)})]}):r("FORM.ERRORS.SECOND_NAME.LABEL")})),h=(0,r.Pi)((function(){var e=(0,O.m)().formStore;return(0,R.jsx)("div",{className:s()(E),children:(0,R.jsx)(S,{fields:e.fields})})}))}}]);
//# sourceMappingURL=326.72ebeb36.chunk.js.map