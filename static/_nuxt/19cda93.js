(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{555:function(t,e,n){"use strict";var r=n(0),o=n(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({currentLocale:function(t){return t.currentLocale},dateFormats:function(t){return t.dateFormats},dateSwitchLocales:function(t){return t.dateSwitchLocales}})),methods:{formatDateShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateFormat)},formatTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortTimeFormat)},formatDateTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateTimeFormat)},formatDateBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateFormat)},formatTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseTimeFormat)},formatDateTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateTimeFormat)},formatDateLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateFormat)},formatTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longTimeFormat)},formatDateTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateTimeFormat)},formatDate:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateFormat)},formatTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumTimeFormat)},formatDateTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateTimeFormat)}}}},572:function(t,e,n){"use strict";n.r(e);n(28),n(67),n(10),n(24),n(33);var r=n(8),o={mixins:[n(555).a],data:function(){return{turnsLeft:[],turnsRight:[],lastUpdated:new Date,startDateLeft:null,endDateLeft:null,startDateRight:null,endDateRight:null,currentRouteName:"compares"}},computed:{uniqueTurnsLeft:function(){return this.$lo.uniqBy(this.turnsLeft,"turn_nomer")},countByStatusLeft:function(){return this.$lo.countBy(this.uniqueTurnsLeft,"turn_status")||{}},turnStatusKeysLeft:function(){return Object.keys(this.countByStatusLeft)},uniqueTurnsRight:function(){return this.$lo.uniqBy(this.turnsRight,"turn_nomer")},countByStatusRight:function(){return this.$lo.countBy(this.uniqueTurnsRight,"turn_status")||{}},turnStatusKeysRight:function(){return Object.keys(this.countByStatusRight)},routeName:function(){return this.$route.name.split("___")[0]||""}},mounted:function(){},methods:{getTurnsLeftRangeDate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"days";this.startDateLeft=this.$moment().subtract(t,e).format("YYYY-MM-DD"),this.endDateLeft=this.$moment().subtract(n,r).format("YYYY-MM-DD")},getTurnsRightRangeDate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"days";this.startDateRight=this.$moment().subtract(t,e).format("YYYY-MM-DD"),this.endDateRight=this.$moment().subtract(n,r).format("YYYY-MM-DD")},getLeftTurnsRage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api.getApi("turnApi"),e.next=3,n.getRangeTurns({startDate:t.startDateLeft,endDate:t.endDateLeft});case 3:t.turnsLeft=e.sent,t.lastUpdated=new Date;case 5:case"end":return e.stop()}}),e)})))()},getRightTurnsRage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api.getApi("turnApi"),e.next=3,n.getRangeTurns({startDate:t.startDateRight,endDate:t.endDateRight});case 3:t.turnsRight=e.sent,t.lastUpdated=new Date;case 5:case"end":return e.stop()}}),e)})))()}}},c=n(47),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row row-xs"},[n("div",{staticClass:"d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30"},[n("div",[n("h4",{staticClass:"mg-b-0 tx-spacing--1"},[t._v("\n          Сравнение потока клиента, за выбранное время\n          "),n("br"),t._v(" "),n("span",{staticClass:"h6 text-gray-300"},[t._v("\n            Последнее обновление:\n            "),n("i",{staticClass:"font-weight-bold text-rsk-bank"},[t._v(t._s(t.formatDateTimeLong(t.lastUpdated)))])])])])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("b-row",[n("b-col",{staticClass:"mb-3 border-right border-primary",attrs:{cols:"6"}},[n("b-row",[n("b-col",{attrs:{cols:"4"}},[n("div",[n("label",{},[t._v("Начальная дата")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.startDateLeft,expression:"startDateLeft"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата начала"},domProps:{value:t.startDateLeft},on:{input:function(e){e.target.composing||(t.startDateLeft=e.target.value)}}})])]),t._v(" "),n("b-col",{attrs:{cols:"4"}},[n("div",[n("label",{},[t._v("Конечная дата")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDateLeft,expression:"endDateLeft"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата конец"},domProps:{value:t.endDateLeft},on:{input:function(e){e.target.composing||(t.endDateLeft=e.target.value)}}})])]),t._v(" "),n("b-col",{attrs:{cols:"3"}},[n("div",[n("label",{},[t._v("Кнопка для показа")]),t._v(" "),n("input",{staticClass:"btn btn-dark",attrs:{type:"button",value:"Показать"},on:{click:t.getLeftTurnsRage}})])]),t._v(" "),n("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(3,"months")}}},[t._v("\n                За три месяца\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(2,"months")}}},[t._v("\n                За два месяца\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(1,"months")}}},[t._v("\n                За месяц\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(10,"days")}}},[t._v("\n                За 10 дней\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(7,"days")}}},[t._v("\n                За 7 дней\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(3,"days")}}},[t._v("\n                За три дня\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(1,"days",1,"days")}}},[t._v("\n                Вчера\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsLeftRangeDate(0,"days")}}},[t._v("\n                Сегодня\n              ")])]),t._v(" "),t._l(t.turnStatusKeysLeft,(function(e){return[n("b-col",{key:e,staticClass:"mb-3",attrs:{cols:"12"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body tx-center"},[n("h4",{staticClass:"tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0"},[n("span",{class:{"text-primary":"new"===e,"text-info":"served"===e,"text-success":"completed"===e,"text-purple":"fail"===e,"text-warning":"waiting"===e}},[t._v("\n                        "+t._s(t.countByStatusLeft[e])+"\n                      ")])]),t._v(" "),n("p",{staticClass:"tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02"},["new"===e?n("span",{},[t._v("Новых очередей")]):t._e(),t._v(" "),"served"===e?n("span",{},[t._v("Обслуживается клиентов")]):t._e(),t._v(" "),"completed"===e?n("span",[t._v("Завершенные")]):t._e(),t._v(" "),"fail"===e?n("span",[t._v("Неявка")]):t._e(),t._v(" "),"waiting"===e?n("span",[t._v("В ожидании")]):t._e()]),t._v(" "),n("p",{staticClass:"tx-12 tx-color-03 mg-b-0"},["new"===e?n("span",{},[t._v("\n                        Новые клиенты\n                      ")]):t._e(),t._v(" "),"served"===e?n("span",{},[t._v("\n                        Клиенты обслуживается\n                      ")]):t._e(),t._v(" "),"completed"===e?n("span",[t._v("\n                        Завешенные талоны\n                      ")]):t._e(),t._v(" "),"fail"===e?n("span",[t._v("\n                        Талоны которые были отменены\n                      ")]):t._e(),t._v(" "),"waiting"===e?n("span",[t._v("\n                        Клиенты ждущие в ожидании\n                      ")]):t._e()])])])])]}))],2)],1),t._v(" "),n("b-col",{staticClass:"mb-3",attrs:{cols:"6"}},[n("b-row",[n("b-col",{attrs:{cols:"4"}},[n("div",[n("label",{},[t._v("Начальная дата")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.startDateRight,expression:"startDateRight"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата начала"},domProps:{value:t.startDateRight},on:{input:function(e){e.target.composing||(t.startDateRight=e.target.value)}}})])]),t._v(" "),n("b-col",{attrs:{cols:"4"}},[n("div",[n("label",{},[t._v("Конечная дата")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDateRight,expression:"endDateRight"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата конец"},domProps:{value:t.endDateRight},on:{input:function(e){e.target.composing||(t.endDateRight=e.target.value)}}})])]),t._v(" "),n("b-col",{attrs:{cols:"3"}},[n("div",[n("label",{},[t._v("Кнопка для показа")]),t._v(" "),n("input",{staticClass:"btn btn-dark",attrs:{type:"button",value:"Показать"},on:{click:t.getRightTurnsRage}})])]),t._v(" "),n("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(3,"months")}}},[t._v("\n                За три месяца\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(2,"months")}}},[t._v("\n                За два месяца\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(1,"months")}}},[t._v("\n                За месяц\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(10,"days")}}},[t._v("\n                За 10 дней\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(7,"days")}}},[t._v("\n                За 7 дней\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(3,"days")}}},[t._v("\n                За три дня\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(1,"days",1,"days")}}},[t._v("\n                Вчера\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(e){return t.getTurnsRightRangeDate(0,"days")}}},[t._v("\n                Сегодня\n              ")])]),t._v(" "),t._l(t.turnStatusKeysRight,(function(e){return[n("b-col",{key:e,staticClass:"mb-3",attrs:{cols:"12"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body tx-center"},[n("h4",{staticClass:"tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0"},[n("span",{class:{"text-primary":"new"===e,"text-info":"served"===e,"text-success":"completed"===e,"text-purple":"fail"===e,"text-warning":"waiting"===e}},[t._v("\n                        "+t._s(t.countByStatusRight[e])+"\n                      ")])]),t._v(" "),n("p",{staticClass:"tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02"},["new"===e?n("span",{},[t._v("Новых очередей")]):t._e(),t._v(" "),"served"===e?n("span",{},[t._v("Обслуживается клиентов")]):t._e(),t._v(" "),"completed"===e?n("span",[t._v("Завершенные")]):t._e(),t._v(" "),"fail"===e?n("span",[t._v("Неявка")]):t._e(),t._v(" "),"waiting"===e?n("span",[t._v("В ожидании")]):t._e()]),t._v(" "),n("p",{staticClass:"tx-12 tx-color-03 mg-b-0"},["new"===e?n("span",{},[t._v("\n                        Новые клиенты\n                      ")]):t._e(),t._v(" "),"served"===e?n("span",{},[t._v("\n                        Клиенты обслуживается\n                      ")]):t._e(),t._v(" "),"completed"===e?n("span",[t._v("\n                        Завешенные талоны\n                      ")]):t._e(),t._v(" "),"fail"===e?n("span",[t._v("\n                        Талоны которые были отменены\n                      ")]):t._e(),t._v(" "),"waiting"===e?n("span",[t._v("\n                        Клиенты ждущие в ожидании\n                      ")]):t._e()])])])])]}))],2)],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);