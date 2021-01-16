(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{555:function(t,e,r){"use strict";var o=r(0),n=r(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({currentLocale:function(t){return t.currentLocale},dateFormats:function(t){return t.dateFormats},dateSwitchLocales:function(t){return t.dateSwitchLocales}})),methods:{formatDateShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateFormat)},formatTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortTimeFormat)},formatDateTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateTimeFormat)},formatDateBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateFormat)},formatTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseTimeFormat)},formatDateTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateTimeFormat)},formatDateLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateFormat)},formatTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longTimeFormat)},formatDateTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateTimeFormat)},formatDate:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateFormat)},formatTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumTimeFormat)},formatDateTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateTimeFormat)}}}},574:function(t,e,r){"use strict";r.r(e);r(9),r(28),r(10),r(24),r(33);var o=r(8),n={mixins:[r(555).a],data:function(){return{operators:[],lastUpdated:new Date,startDate:null,endDate:null,currentRouteName:"operator-range-served"}},computed:{completedServedOperators:function(){return(this.operators||[]).filter((function(t){return"completed"===t.turn_status}))},groupByOperator:function(){return this.$lo.groupBy(this.operators,"user_name")},routeName:function(){return this.$route.name.split("___")[0]||""}},mounted:function(){this.getRequestEveryTimes()},methods:{getRequest:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api.getApi("turnApi"),e.next=3,r.getRangeOperatorServedCount({startDate:t.startDate,endDate:t.endDate});case 3:t.operators=e.sent;case 4:case"end":return e.stop()}}),e)})))()},getRequestEveryTimes:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest();case 2:return t.lastUpdated=new Date,e.next=5,t.$timer.pause(3e4);case 5:if(t.routeName!==t.currentRouteName){e.next=8;break}return e.next=8,t.getRequestEveryTimes();case 8:case"end":return e.stop()}}),e)})))()}}},c=r(47),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row row-xs"},[r("div",{staticClass:"d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30"},[r("div",[r("h4",{staticClass:"mg-b-0 tx-spacing--1"},[t._v("\n          Количество обслуженных клиентов операторами, за выбранное время\n          "),r("br"),t._v(" "),r("span",{staticClass:"h6 text-gray-300"},[t._v("\n            Последнее обновление:\n            "),r("i",{staticClass:"font-weight-bold text-rsk-bank"},[t._v(t._s(t.formatDateTimeLong(t.lastUpdated)))])])])])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("b-row",[r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("div",[r("label",{},[t._v("Начальная дата")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата начала"},domProps:{value:t.startDate},on:{input:function(e){e.target.composing||(t.startDate=e.target.value)}}})])]),t._v(" "),r("b-col",{attrs:{cols:"4"}},[r("div",[r("label",{},[t._v("Конечная дата")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата конец"},domProps:{value:t.endDate},on:{input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:t.getRequest}},[t._v("\n                Показать\n              ")])])],1)],1),t._v(" "),t._l(t.groupByOperator,(function(e,o,n){return[r("b-col",{key:n+"_"+o,staticClass:"mb-3",attrs:{cols:"3"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02"},[r("span",[t._v(t._s(o))])]),t._v(" "),t._l(e,(function(e,n){return[r("p",{key:o+"_"+n,staticClass:"tx-13 tx-color-03 mg-b-0"},["served"===e.turn_status?[t._v("\n                      В данное время обслуживает:\n                      "),r("span",{staticClass:"text-info font-weight-bold"},[t._v("\n                        "+t._s(e.counted)+"\n                      ")]),t._v(" "),r("br")]:t._e(),t._v(" "),"completed"===e.turn_status?[t._v("\n                      Кол-во обслуженных клиентов:\n                      "),r("span",{staticClass:"text-success font-weight-bold"},[t._v("\n                        "+t._s(e.counted)+"\n                      ")]),t._v(" "),r("br")]:t._e(),t._v(" "),"completed"===e.turn_status?[t._v("\n                      Кол-во неявок:\n                      "),r("span",{staticClass:"text-purple font-weight-bold"},[t._v("\n                        "+t._s(e.counted)+"\n                      ")])]:t._e()],2)]}))],2)])])]}))],2)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);