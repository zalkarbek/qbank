(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{564:function(t,e,r){"use strict";var n=r(0),o=r(83);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({currentLocale:function(t){return t.currentLocale},dateFormats:function(t){return t.dateFormats},dateSwitchLocales:function(t){return t.dateSwitchLocales}})),methods:{formatDateShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateFormat)},formatTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortTimeFormat)},formatDateTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateTimeFormat)},formatDateBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateFormat)},formatTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseTimeFormat)},formatDateTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateTimeFormat)},formatDateLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateFormat)},formatTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longTimeFormat)},formatDateTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateTimeFormat)},formatDate:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateFormat)},formatTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumTimeFormat)},formatDateTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateTimeFormat)}}}},588:function(t,e,r){"use strict";r.r(e);r(9),r(53),r(29),r(184),r(10),r(24),r(30);var n=r(6),o={mixins:[r(564).a],data:function(){return{services:[],lastUpdated:new Date,startDate:null,endDate:null,currentRouteName:"service-range-served"}},computed:{completedServedOperators:function(){return(this.services||[]).filter((function(t){return"completed"===t.turn_status}))},groupByService:function(){return this.$lo.groupBy(this.services,"service_name")},routeName:function(){return this.$route.name.split("___")[0]||""}},mounted:function(){this.getRequestEveryTimes()},methods:{getCompletedAndRedirectCounted:function(t){var e=this.$lo.find(t,{turn_status:"completed"})||{},r=this.$lo.find(t,{turn_status:"redirect"})||{},n=0,o=0;return e&&e.counted&&(n=e.counted),r&&r.counted&&(o=r.counted),Number(n)+Number(o)},getRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api.getApi("turnApi"),e.next=3,r.getRangeServiceServedCount({startDate:t.startDate,endDate:t.endDate});case 3:t.services=e.sent;case 4:case"end":return e.stop()}}),e)})))()},getRequestEveryTimes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest();case 2:return t.lastUpdated=new Date,e.next=5,t.$timer.pause(3e4);case 5:if(t.routeName!==t.currentRouteName){e.next=8;break}return e.next=8,t.getRequestEveryTimes();case 8:case"end":return e.stop()}}),e)})))()}}},c=r(39),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row row-xs"},[r("div",{staticClass:"d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30"},[r("div",[r("h4",{staticClass:"mg-b-0 tx-spacing--1"},[t._v("\n          Количество клиентов по услугам, за выбранное время\n          "),r("br"),t._v(" "),r("span",{staticClass:"h6 text-gray-300"},[t._v("\n            Последнее обновление:\n            "),r("i",{staticClass:"font-weight-bold text-rsk-bank"},[t._v(t._s(t.formatDateTimeLong(t.lastUpdated)))])])])])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("b-row",[r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("div",[r("label",{},[t._v("Начальная дата")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата начала"},domProps:{value:t.startDate},on:{input:function(e){e.target.composing||(t.startDate=e.target.value)}}})])]),t._v(" "),r("b-col",{attrs:{cols:"4"}},[r("div",[r("label",{},[t._v("Конечная дата")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата конец"},domProps:{value:t.endDate},on:{input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:t.getRequest}},[t._v("\n                Показать\n              ")])])],1)],1),t._v(" "),t._l(t.groupByService,(function(e,n,o){return[r("b-col",{key:o+"_"+n,staticClass:"mb-3",attrs:{cols:"3"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02"},[r("span",[t._v(t._s(n))])]),t._v(" "),t._l(e,(function(e,o){return[r("p",{key:n+"_"+o,staticClass:"tx-13 tx-color-03 mg-b-0"},["completed"===e.turn_status?[t._v("\n                      Кол-во обслуженных клиентов:\n                      "),r("span",{staticClass:"text-success font-weight-bold"},[t._v("\n                        "+t._s(e.counted)+"\n                      ")]),t._v(" "),r("br")]:t._e(),t._v(" "),"fail"===e.turn_status?[t._v("\n                      Кол-во неявок:\n                      "),r("span",{staticClass:"text-purple font-weight-bold"},[t._v("\n                        "+t._s(e.counted)+"\n                      ")])]:t._e()],2)]}))],2)])])]}))],2)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);