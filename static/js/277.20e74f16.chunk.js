"use strict";(self.webpackChunktesting_task=self.webpackChunktesting_task||[]).push([[277],{277:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(791),a=n(694),l=n.n(a),i=n(433),o=n(181);var u=n(168),s=n(413),f=n(439),d="style_label__kK2Vq",c="style_input__BfNfU",v="style_invalid__14X+4",m="style_error__jSzAL",h=n(184),p=function(e){var t=e.label,n=e.labelClass,a=e.defaultValue,i=e.type,o=e.name,s=e.placeholder,p=e.inputClass,b=e.required,y=e.pattern,x=e.maxlength,_=e.onChangeHandler,E=e.onCatchErrorHandler,R=(0,r.useState)({text:e.error}),g=(0,f.Z)(R,2),S=g[0],C=g[1],j=(0,u.$)().t;(0,r.useEffect)((function(){var e=S.path;if(e){var t=j(e);C((function(){return{text:t,path:e}}))}}),[e]);return(0,h.jsxs)("div",{children:[t&&(0,h.jsxs)("label",{htmlFor:o,className:l()(n,d),children:[t,":"]}),(0,h.jsx)("input",{id:o,defaultValue:a,type:i,name:o,placeholder:s,className:l()(p,c,null!==S&&void 0!==S&&S.text?v:""),required:b,pattern:null===y||void 0===y?void 0:y.toString(),maxLength:x,onChange:function(e){var t=e.target.value,n=y&&!new RegExp(y).test(t),r=b&&"undefined"==typeof t||""==t,a=n||r,l="";if(n){var i="FORM.ERRORS.INCORRECT";l=j(i),C((function(){return{text:l,path:i}}))}if(r){var u="FORM.ERRORS.REQUIRED";l=j(u),C((function(){return{text:l,path:u}}))}E&&l&&E(t,o,l),!a&&_&&(C((function(){return{text:""}})),_(t,o,l))}}),(null===S||void 0===S?void 0:S.text)&&(0,h.jsx)("div",{className:l()(m),children:null===S||void 0===S?void 0:S.text})]})},b=r.memo(p,(function(e,t){return e.label==t.label||e.placeholder==t.placeholder})),y=function(e){return(0,h.jsx)(b,(0,s.Z)({},e))},x=n(32),_=n(135),E="style_container__jYCas",R="style_form__PpCmV",g="style_button__YwCzJ",S="style_invalid__3Kgo4",C=(0,x.Pi)((function(){var e=(0,_.m)().formStore,t=(0,u.$)().t;return(0,h.jsx)("input",{type:"submit",value:t("FORM.BUTTONS.READY",""),className:l()(g,e.isDisabled?S:""),disabled:e.isDisabled})})),j=function(e){var t=(0,_.m)().formStore,n=e.fields,a=void 0===n?[]:n,s=(0,u.$)().t,f=(0,r.useRef)(null),d=(0,r.useCallback)((function(e,n){t.setField({value:e,name:n});var r=t.fieldErrors.findIndex((function(e){return e.name==n})),l=a.length==t.fieldValues.length;-1!=r&&t.removeFieldErrorByIndex(r),t.setIsDisabled(!!t.fieldErrors.length||!l)}),[]),c=(0,r.useCallback)((function(e,n,r){var a=[].concat((0,i.Z)(t.fieldErrors.filter((function(e){return e.name!=n}))||[]),[{value:e,name:n,error:r}]);t.setIsDisabled(!0),t.setFieldErrors(a)}),[]);return null!==a&&void 0!==a&&a.length?(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSumbit();var n,r=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,o.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw l}}}}(a);try{for(r.s();!(n=r.n()).done;){var l=n.value;e.currentTarget[l.name].value=""}}catch(i){r.e(i)}finally{r.f()}},ref:f,className:l()(R),noValidate:!0,children:[a.map((function(e,t){var n=e.name,r=e.type,a=e.defaultValue,l=e.required,i=e.pattern,o=e.maxlength;return(0,h.jsx)(y,{label:s("FORM.FIELDS.".concat(n,".LABEL"),""),defaultValue:a,type:r,name:n,placeholder:s("FORM.FIELDS.".concat(n,".PLACEHOLDER"),""),pattern:i,required:l,maxlength:o,onChangeHandler:d,onCatchErrorHandler:c},t)})),(0,h.jsx)(C,{})]}):s("FORM.ERRORS.NOT_FIELDS")},F=function(){var e=(0,_.m)().formStore;return(0,h.jsx)("div",{className:l()(E),children:(0,h.jsx)(j,{fields:e.fields})})}}}]);
//# sourceMappingURL=277.20e74f16.chunk.js.map