/*! For license information please see index.js.LICENSE.txt */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],e);else{var i="object"==typeof exports?e(require("blockly/core")):e(t.Blockly);for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(this,(t=>(()=>{"use strict";var e={573:e=>{e.exports=t}},i={};function n(t){var o=i[t];if(void 0!==o)return o.exports;var u=i[t]={exports:{}};return e[t](u,u.exports,n),u.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var t=n(573),e=n.n(t);function i(e){if(e.saveExtraState){var i=e.saveExtraState();return i?JSON.stringify(i):""}if(e.mutationToDom){var n=e.mutationToDom();return n?t.Xml.domToText(n):""}return""}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=new t.FieldImage(a,15,15,void 0,r);return i.args_=e,i}function r(e){var n=e.getSourceBlock();if(!n.isInFlyout){t.Events.setGroup(!0);var o=i(n);n.plus(e.args_);var u=i(n);o!=u&&t.Events.fire(new t.Events.BlockChange(n,"mutation",null,o,u)),t.Events.setGroup(!1)}}var a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNzFjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MWMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==";function s(e){var n=e.getSourceBlock();if(!n.isInFlyout){t.Events.setGroup(!0);var o=i(n);n.minus(e.args_);var u=i(n);o!=u&&t.Events.fire(new t.Events.BlockChange(n,"mutation",null,o,u)),t.Events.setGroup(!1)}}var p="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAwIDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K",d={itemCount_:0,mutationToDom:function(){var t=e().utils.xml.createElement("mutation");return t.setAttribute("items",this.itemCount_),t},domToMutation:function(t){var e=parseInt(t.getAttribute("items"),10);this.updateShape_(e)},saveExtraState:function(){return{itemCount:this.itemCount_}},loadExtraState:function(t){this.updateShape_(t.itemCount)},updateShape_:function(t){for(;this.itemCount_<t;)this.addPart_();for(;this.itemCount_>t;)this.removePart_();this.updateMinus_()},plus:function(){this.addPart_(),this.updateMinus_()},minus:function(){0!=this.itemCount_&&(this.removePart_(),this.updateMinus_())},addPart_:function(){0==this.itemCount_?(this.getInput("EMPTY")&&this.removeInput("EMPTY"),this.topInput_=this.appendValueInput("ADD"+this.itemCount_).appendField(u(),"PLUS").appendField("Make lookup")):this.appendValueInput("ADD"+this.itemCount_),this.itemCount_++},removePart_:function(){this.itemCount_--,this.removeInput("ADD"+this.itemCount_),0==this.itemCount_&&(this.topInput_=this.appendDummyInput("EMPTY").appendField(u(),"PLUS").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1)))},updateMinus_:function(){var e=this.getField("MINUS");!e&&this.itemCount_>0?this.topInput_.insertFieldAt(1,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=new t.FieldImage(p,15,15,void 0,s);return i.args_=e,i}(),"MINUS"):e&&this.itemCount_<1&&this.topInput_.removeField("MINUS")}};e().Extensions.isRegistered("text_join_mutator")&&e().Extensions.unregister("text_join_mutator"),e().Extensions.registerMutator("text_join_mutator",d,(function(){e().Extensions.apply("text_quotes",this,!1),this.updateShape_(2)}))})(),o})()));
//# sourceMappingURL=index.js.map