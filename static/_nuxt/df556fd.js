(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{564:function(t,e,r){"use strict";var n=r(0),o=r(83);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({currentLocale:function(t){return t.currentLocale},dateFormats:function(t){return t.dateFormats},dateSwitchLocales:function(t){return t.dateSwitchLocales}})),methods:{formatDateShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateFormat)},formatTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortTimeFormat)},formatDateTimeShort:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.shortDateTimeFormat)},formatDateBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateFormat)},formatTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseTimeFormat)},formatDateTimeBase:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.baseDateTimeFormat)},formatDateLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateFormat)},formatTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longTimeFormat)},formatDateTimeLong:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.longDateTimeFormat)},formatDate:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateFormat)},formatTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumTimeFormat)},formatDateTime:function(t){var e=this.dateSwitchLocales[this.currentLocale];return this.$moment(t).locale(e).format(this.dateFormats.mediumDateTimeFormat)}}}},565:function(t,e,r){"use strict";r(53);var n=r(30),o=r(43),c=r.n(o);e.a={methods:{firstLetter:function(text){return this.$firstLetter(text)},getObjectIfNull:function(object){return object||{}},getProp:function(object,path){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return c.a.get(object,path,t)},cloneDeep:function(object){return c.a.cloneDeep(object)},toLowerCase:function(t){return c.a.toLower(t)},toUpperCase:function(t){return c.a.toUpper(t)},toCapitalize:function(t){return c.a.toCapitalize(t)},has:function(object,t){return c.a.has(object,t)},isObject:function(t){return c.a.isObject(t)},notIn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;if(!e||0===e.length)return!0;var o=r?t[r]:t;return!e.find((function(t){var e=n?t[n]:t;return o===e}))},range:function(t,e,r){var o=[],c=Object(n.a)(t),l=Object(n.a)(e);if(0===r)throw new TypeError("Step cannot be zero.");if("undefined"===c||"undefined"===l)throw new TypeError("Must pass start and end arguments.");if(c!==l)throw new TypeError("Start and end arguments must be of same type.");if(void 0===r&&(r=1),e<t&&(r=-r),"number"===c)for(;r>0?e>=t:e<=t;)o.push(t),t+=r;else{if("string"!==c)throw new TypeError("Only string and number types are supported");if(1!==t.length||1!==e.length)throw new TypeError("Only strings with one character are supported.");for(t=t.charCodeAt(0),e=e.charCodeAt(0);r>0?e>=t:e<=t;)o.push(String.fromCharCode(t)),t+=r}return o}}}},587:function(t,e,r){"use strict";r.r(e);r(68),r(31);var n=r(6),o=r(564),c=r(565),l={mixins:[o.a,c.a],data:function(){return{turns:[],users:[],lastUpdated:new Date,startDate:null,endDate:null,currentRouteName:"range-list"}},computed:{uniqueTurns:function(){return this.turns},countByStatus:function(){return this.$lo.countBy(this.uniqueTurns,"turn_status")||{}},turnStatusKeys:function(){return Object.keys(this.countByStatus)},usersGroupById:function(){return this.$lo.groupBy(this.users,"id")}},mounted:function(){this.getUsersRequest(),this.getRequestEveryTimes()},methods:{getUsersRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api.getApi("userApi"),e.next=3,r.getUsers();case 3:t.users=e.sent;case 4:case"end":return e.stop()}}),e)})))()},getRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$api.getApi("turnApi"),e.next=3,r.getRangeTurns({startDate:t.startDate,endDate:t.endDate});case 3:t.turns=e.sent;case 4:case"end":return e.stop()}}),e)})))()},getRequestEveryTimes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest();case 2:return t.lastUpdated=new Date,e.next=5,t.$timer.pause(3e4);case 5:if(t.routeName!==t.currentRouteName){e.next=8;break}return e.next=8,t.getRequestEveryTimes();case 8:case"end":return e.stop()}}),e)})))()},toClearForm:function(){this.turns=[]}}},m=r(39),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row row-xs"},[r("div",{staticClass:"d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30"},[r("div",[r("h4",{staticClass:"mg-b-0 tx-spacing--1"},[t._v("\n          Очереди за выбранный период\n          "),r("br"),t._v(" "),r("span",{staticClass:"h6 text-gray-300"},[t._v("\n            Последнее обновление:\n            "),r("i",{staticClass:"font-weight-bold text-rsk-bank"},[t._v(t._s(t.formatDateTimeLong(t.lastUpdated)))])])])])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("b-row",[r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("div",[r("label",{},[t._v("Начальная дата")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата начала"},domProps:{value:t.startDate},on:{input:function(e){e.target.composing||(t.startDate=e.target.value)}}})])]),t._v(" "),r("b-col",{attrs:{cols:"4"}},[r("div",[r("label",{},[t._v("Конечная дата")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Дата конец"},domProps:{value:t.endDate},on:{input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:t.getRequest}},[t._v("\n                Показать\n              ")])])],1)],1),t._v(" "),t._l(t.turnStatusKeys,(function(e){return["redirect"!==e?r("b-col",{key:e,staticClass:"mb-3",attrs:{cols:"2"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body tx-center"},[r("h4",{staticClass:"tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0"},[r("span",{class:{"text-primary":"new"===e,"text-info":"served"===e,"text-success":"completed"===e,"text-purple":"fail"===e,"text-warning":"waiting"===e}},[t._v("\n                    "+t._s(t.countByStatus[e])+"\n                  ")])]),t._v(" "),r("p",{staticClass:"tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02"},["new"===e?r("span",{},[t._v("Новых очередей")]):t._e(),t._v(" "),"served"===e?r("span",{},[t._v("Обслуживается клиентов")]):t._e(),t._v(" "),"completed"===e?r("span",[t._v("Завершенные")]):t._e(),t._v(" "),"fail"===e?r("span",[t._v("Неявка")]):t._e(),t._v(" "),"waiting"===e?r("span",[t._v("В ожидании")]):t._e()]),t._v(" "),r("p",{staticClass:"tx-12 tx-color-03 mg-b-0"},["new"===e?r("span",{},[t._v("\n                    Новые клиенты\n                  ")]):t._e(),t._v(" "),"served"===e?r("span",{},[t._v("\n                    Клиенты обслуживается\n                  ")]):t._e(),t._v(" "),"completed"===e?r("span",[t._v("\n                    Завешенные талоны\n                  ")]):t._e(),t._v(" "),"fail"===e?r("span",[t._v("\n                    Талоны которые были отменены\n                  ")]):t._e(),t._v(" "),"waiting"===e?r("span",[t._v("\n                    Клиенты ждущие в ожидании\n                  ")]):t._e()])])])]):t._e()]}))],2)],1),t._v(" "),r("div",{staticClass:"col-md-12",staticStyle:{height:"600px","overflow-y":"scroll"}},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body pd-lg-25"},[r("table",{staticClass:"table table-bordered table-sm"},[t._m(1),t._v(" "),r("tbody",[t._l(t.turns,(function(e,n){return[r("tr",{key:e.id,class:{"bg-primary-light":"new"===e.turn_status,"bg-info-light":"served"===e.turn_status,"bg-success-light":"completed"===e.turn_status,"bg-pink-light":"fail"===e.turn_status,"bg-warning-light":"waiting"===e.turn_status,"bg-brand-01-light":"redirect"===e.turn_status}},[r("td",[t._v("\n                    "+t._s(n+1)+"\n                  ")]),t._v(" "),r("td",[r("span",{staticClass:"font-weight-bold"},[t._v(t._s(""+e.suffix+e.turn_nomer))])]),t._v(" "),r("td",{staticClass:"font-weight-bold"},["new"===e.turn_status?r("span",{},[t._v("новый")]):t._e(),t._v(" "),"served"===e.turn_status?r("span",{},[t._v("обслуживается")]):t._e(),t._v(" "),"completed"===e.turn_status?r("span",[t._v("завершен")]):t._e(),t._v(" "),"redirect"===e.turn_status?r("span",[t._v("завершен")]):t._e(),t._v(" "),"fail"===e.turn_status?r("span",[t._v("неявка")]):t._e(),t._v(" "),"waiting"===e.turn_status?r("span",[t._v("в ожидании")]):t._e()]),t._v(" "),r("td",[t._v(t._s(e.user_name))]),t._v(" "),r("td",[t._v(t._s(e.position_name))]),t._v(" "),r("td",[t._v(t._s(e.service_name))]),t._v(" "),r("td",[r("span",{staticClass:"font-weight-bold"},[t._v("\n                      "+t._s(t.getProp(t.usersGroupById[e.turn_came_from_user_id],"[0].user_name",""))+"\n                    ")])]),t._v(" "),r("td",[r("span",{staticClass:"font-weight-bold"},[0===e.turn_this_way_user_id?r("span",[t._v("\n                        Касса\n                      ")]):r("span",[t._v("\n                        "+t._s(t.getProp(t.usersGroupById[e.turn_this_way_user_id],"[0].user_name",""))+"\n                      ")])])]),t._v(" "),r("td",[r("span",{staticClass:"font-weight-bold"},[t._v("\n                      "+t._s(t.formatDateTimeBase(e.turn_created_at))+"\n                    ")])]),t._v(" "),r("td",[r("span",{staticClass:"font-weight-bold"},[t._v("\n                      "+t._s(t.formatDateTimeBase(e.turn_updated_at))+"\n                    ")])])])]}))],2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25"},[e("div",{staticClass:"row"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"font-weight-bold"},[r("tr",[r("td",[t._v("#")]),t._v(" "),r("td",[t._v("\n                  Номер талона\n                ")]),t._v(" "),r("td",[t._v("\n                  Статус\n                ")]),t._v(" "),r("td",[t._v("\n                  Обслужил\n                ")]),t._v(" "),r("td",[t._v("\n                  Должность/Отдел\n                ")]),t._v(" "),r("td",[t._v("\n                  Услуга\n                ")]),t._v(" "),r("td",[t._v("\n                  Перенаправил\n                ")]),t._v(" "),r("td",[t._v("\n                  К кому перенаправлен\n                ")]),t._v(" "),r("td",[t._v("\n                  Дата начала\n                ")]),t._v(" "),r("td",[t._v("\n                  Дата завершения\n                ")])])])}],!1,null,null,null);e.default=component.exports}}]);