(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],u=0,_=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&_.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(_.length)_.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r={app:0},n=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-04f9d3a8":"53f92991","chunk-988c452c":"14a3712a"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-04f9d3a8":1,"chunk-988c452c":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-04f9d3a8":"e76f485e","chunk-988c452c":"670c094f"}[t]+".css",r=o.p+s,n=document.getElementsByTagName("link"),c=0;c<n.length;c++){var l=n[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var _=document.getElementsByTagName("style");for(c=0;c<_.length;c++){l=_[c],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete i[t],d.parentNode.removeChild(d),a(n)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var _=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;_.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",_.name="ChunkLoadError",_.type=s,_.request=i,a[1](_)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/delta/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var _=0;_<l.length;_++)e(l[_]);var d=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"05d5":function(t,e,a){t.exports=a.p+"img/evro.fee78002.png"},"0aab":function(t,e,a){"use strict";var s=a("c1f3"),i=a.n(s);i.a},"0dbb":function(t,e,a){"use strict";var s=a("7c7b"),i=a.n(s);i.a},"1bf8":function(t,e,a){t.exports=a.p+"img/slash.347d777a.png"},"1c77":function(t,e,a){t.exports=a.p+"img/dock.3cf9b90b.svg"},2338:function(t,e,a){"use strict";var s=a("50bc"),i=a.n(s);i.a},"3dad":function(t,e,a){t.exports=a.p+"img/face.3ab9210b.svg"},"50bc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("Up"),a("router-view"),a("Services"),a("Faq"),a("Evro"),a("Contact"),a("FooterDelta")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header padding",attrs:{id:"header"}},[a("div",{staticClass:"menu__button phone",on:{click:t.showMenu}},[a("div",{staticClass:"menu__block"}),a("div",{staticClass:"menu__block"}),a("div",{staticClass:"menu__block"})]),a("transition",{attrs:{name:"show"}},[t.menu?a("Menu",{on:{showMenu:t.showMenu}}):t._e()],1),t._m(0),t._m(1)],1)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header__title"},[s("a",{staticClass:"header__href",attrs:{href:"https://vertenz.github.io/delta/"}},[s("img",{staticClass:"logo_header",attrs:{src:a("cf05"),alt:"Delta"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{attrs:{href:"tel:+74959371722"}},[s("img",{staticClass:"header__phone",attrs:{src:a("6d8f"),alt:"Звонок"}})])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"menu"},[a("div",{staticClass:"menu__button",on:{click:t.showMenu}},[a("div",{staticClass:"menu__close menu__close_1"}),a("div",{staticClass:"menu__close menu__close_2"})]),t._l(t.menulist,(function(e){return a("ul",{key:e,staticClass:"menu__ul"},[a("li",{staticClass:"menu__list"},[a("a",{attrs:{href:e.htef},on:{click:function(e){return t.showMenu()}}},[t._v(t._s(e.name))])])])})),t._m(0)],2)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:a("639b"),alt:"Instagram"}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:a("3dad"),alt:"FB"}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:a("b299"),alt:"VK"}})]),s("a",{attrs:{href:"https://wa.me/74959371722"}},[s("img",{attrs:{src:a("5fcf"),alt:"whatsapp"}})]),s("a",{attrs:{href:"https://yandex.ru/maps/org/delta/1066101311/?ll=37.655320%2C55.755251&z=18"}},[s("img",{attrs:{src:a("d84a"),alt:"yandex"}})])])}],u={name:"Menu",data:function(){return{menulist:[{name:"О нас",htef:"#about"},{name:"Вызвать эксперта",htef:"https://vertenz.github.io/delta/call"},{name:"Онлайн-расчет",htef:"#"},{name:"Независимая экспертиза",htef:"#"},{name:"Цены",htef:"#"},{name:"Контакты",htef:"#contact"}]}},methods:{showMenu:function(){this.$emit("showMenu")}}},_=u,d=(a("8172"),a("2877")),m=Object(d["a"])(_,o,l,!1,null,"72dfe808",null),p=m.exports,v={name:"Up",data:function(){return{menu:!1}},components:{Menu:p},methods:{showMenu:function(){return this.menu=!this.menu}}},f=v,h=(a("0aab"),Object(d["a"])(f,n,c,!1,null,"6c7725aa",null)),g=h.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"services"},[t._m(0),t._m(1),t._m(2),t._l(t.services,(function(e){return a("div",{key:e,staticClass:"services__area padding"},[a("div",{staticClass:"services__block padding"},[a("div",{staticClass:"services__left"},[a("img",{staticClass:"services__img",attrs:{src:t.hrefLogo(e.icon),alt:e.name}}),a("h4",{staticClass:"services__h4"},[t._v(t._s(e.name))])]),a("p",{staticClass:"services__description"},[t._v(t._s(e.description))])])])}))],2)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info padding",attrs:{id:"about"}},[a("div",{staticClass:"info__text"},[a("p",[t._v("- Помогаем водителям на месте ДТП с 1998 г.")]),a("p",[t._v("- 50 аттестованных экспертов")]),a("p",[t._v("- Нам доверяют VIP-клиентов Ингострах, СОГАЗ, Росгосстрах, Согласие, Ренессанс")]),a("p",[t._v("- Оформляем >200 аварий в день")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slash"},[s("img",{staticClass:"slash__img",attrs:{src:a("1bf8"),alt:"-"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service__title padding"},[a("h4",{staticClass:"service__title_h"},[t._v("Чем мы еще можем помочь?")])])}],x={name:"Services",data:function(){return{services:[{name:"Оформление Европротокола",icon:"dock",description:"Консультация эксперта по поводу способа оормления ДТП Корректное составление документов с места ДТП Помощь с определением виновности"},{name:"Подготовка документов для суда",icon:"court",description:"Независимая экспертиза по определению стоимости восстановления траспортного средства Подготовка искового заявления"},{name:"Рассчет стоимости ущерба",icon:"calc",description:"Определение стоимости восстановления ТС Расчет утери товарной стоимости Расчет стоимость годных остатков автомобиля (годные к эксплуатации детали, которые можно продать)"},{name:"Круглосуточная поддержка",icon:"help",description:"Круглосуточная помощь в оформлении ДТП. Возможность вызвать аварийного комиссара 24/7."},{name:"Сбор справок",icon:"help",description:"Забрать справки из отдела ГАИ"},{name:"Проверка полиса виновника",icon:"help",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto assumenda cumque ea eos excepturi fugit laboriosam molestias nostrum, tempore."}]}},methods:{hrefLogo:function(t){var e=a("daad")("./".concat(t.toLowerCase(),".svg"));return e}}},k=x,y=(a("2338"),Object(d["a"])(k,C,b,!1,null,"6d3b2d61",null)),w=y.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"faq"},[t._m(0),a("div",{staticClass:"faq__block padding"},[a("details",{staticClass:"dtp"},[t._m(1),t._m(2),a("h4",{staticClass:"dtp__attention"},[t._v(" Вы можете вызвать на мето ДТП эксперта "),a("router-link",{attrs:{to:"/call"}},[t._v("на нашем сайте.")]),t._v(" для получения профессиональной помощи")],1)]),a("details",{staticClass:"dtp"},[t._m(3),t._m(4),a("h4",{staticClass:"dtp__attention"},[t._v(" Вы можете вызвать на мето ДТП эксперта "),a("router-link",{attrs:{to:"/call"}},[t._v("на нашем сайте.")]),t._v(" для получения профессиональной помощи")],1)]),a("details",{staticClass:"dtp"},[t._m(5),a("div",{staticClass:"dtp__culprit"},[t._m(6),a("h4",{staticClass:"dtp__attention"},[t._v(" Вы можете вызвать на мето ДТП эксперта "),a("router-link",{attrs:{to:"/call"}},[t._v("на нашем сайте.")]),t._v(" для получения профессиональной помощи")],1)])]),a("details",{staticClass:"dtp"},[t._m(7),a("div",{staticClass:"dtp__culprit"},[a("h5",[t._v("Максимальная выплата по ОСАГО для аварии, оформленной без ГАИ, составляет 100.000 руб. Но она может быть увеличена до 400.000 руб. при выполнении следующих двух условий:")]),t._m(8),a("p",[t._v("Размер ущерба от конкретного ДТП определяется по результатам Независимой технической экспертизы.")]),a("p",[t._v("Если размер ущерба превысит лимит выплаты по европротоколу, страховая компания по ОСАГО заплатит максимальную сумму. Оставшуюся часть ущерба должен будет возместить виновник аварии.")]),a("h4",{staticClass:"dtp__attention"},[t._v("Оценить примерный размер ущерба о своей аварии Вы можете "),a("router-link",{attrs:{to:"/call"}},[t._v("на нашем сайте.")])],1)])]),a("details",{staticClass:"dtp"},[t._m(9),a("div",{staticClass:"dtp__culprit"},[a("p",[t._v("По правилам участники аварии не должны сдвигать автомобили с места до при")]),a("h4",{staticClass:"dtp__attention"},[t._v(" Вы можете вызвать на мето ДТП эксперта "),a("router-link",{attrs:{to:"/call"}},[t._v("на нашем сайте.")]),t._v(" для получения профессиональной помощи")],1)])]),t._m(10)])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"faq__title padding"},[a("h4",{staticClass:"faq__title_h4"},[t._v("Часто задаваемые вопросы")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("summary",{staticClass:"dtp__summary",attrs:{id:"evroRules"}},[a("h3",[t._v("Когда можно оформить ДТП без ГАИ, по европротоколу?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dtp__culprit"},[a("h5",[t._v("Без ГИБДД оформить аварию можно, если одновременно выполнены следующие 5 условий европротокола:")]),a("ul",{staticClass:"dtp__ul"},[a("li",{staticClass:"dtp__li"},[t._v("в ДТП повреждены только транспортные средства (это могут быть автомобили, мотоциклы, тягачи с прицепами и т.п.)")]),a("li",{staticClass:"dtp__li"},[t._v(" люди не пострадали")]),a("li",{staticClass:"dtp__li"},[t._v("не повреждены никакие грузы, имущество водителей/пассажиров, заборы, столбы, отбойники и т.п.")]),a("li",{staticClass:"dtp__li"},[t._v("столкнулись только два транспортных средства")]),a("li",{staticClass:"dtp__li"},[t._v("на каждое из двух транспортных средств есть действующие полисы ОСАГО")])]),a("p",[t._v("Максимальный размер выплаты по ДТП, оформленному без ГИБДД, зависит от ряда обстоятельств. Подробнее "),a("a",{attrs:{href:"https://autoins.ru/evropeyskiy-protokol/uproshchennoe-oformlenie-dtp/",target:"_blank"}},[t._v("тут")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("summary",{staticClass:"dtp__summary"},[a("h3",[t._v("Можно ли оформить без ГАИ аварию, если нет ОСАГО?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dtp__culprit"},[a("p",[t._v("Если на одно из транспортных средств, попавших в аварию, нет действующего полиса ОСАГО, то воспользоваться европротоколом нельзя. В этом случае придется вызывать на место ДТП сотрудников ГИБДД.")]),a("p",[t._v("Частенько бывает, что водитель забывает вовремя продлить страховку и попадает в ДТП. Поэтому при оформлении европротокола нужно внимательно проверить срок действия ОСАГО для обеих машин. Обнаружили, что полис не действует на дату ДТП? – вызывайте ГИБДД.")]),a("p",[t._v("Полис ОСАГО можно проверить на "),a("a",{attrs:{href:"https://dkbm-web.autoins.ru/dkbm-web-1.0/bsostate.htm"}},[t._v("сайте РСА.")])]),a("p",[t._v("Бывает так, что страховка ОСАГО есть, но попавший в аварию водитель не вписан в полис. В этом случае ДТП можно оформить без ГИБДД. Но виновник аварии, не вписанный в полис, рискует получить регрессное требование от страховой компании на сумму выплаченного ущерба.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("summary",{staticClass:"dtp__summary"},[a("h3",[t._v("Машина с иностранными номерами - можно ли оформить ДТП без ГИБДД?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("ДТП с участием машины с иностранными номерами можно оформить без ГАИ, – если соблюдаются все пять условий европротокола "),a("a",{attrs:{href:"#evroRules"}},[t._v("(см. тут)")]),t._v(". При этом на машину с иностранными номерами вместо ОСАГО может быть полис «Зеленая карта».")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("summary",{staticClass:"dtp__summary"},[a("h3",[t._v("Сколько денег выплатит страховая, если ДТП оформлено без ГИБДД?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"dtp__ul"},[a("li",{staticClass:"dtp__li"},[t._v("Авария оформлена с использованием специального мобильного приложения. Оно позволяет зафиксировать место ДТП и сделать его фотосъемку. Для регистрации в приложении нужно иметь профиль на портале гос. услуг. ")]),a("li",{staticClass:"dtp__li"},[t._v("У обоих участников ДТП нет разногласий, а также противоречий в описании обстоятельств аварии. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("summary",{staticClass:"dtp__summary"},[a("h3",[t._v("Договорились оформить ДТП без ГАИ. Можно ли съехать с места ДТП?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("details",{staticClass:"dtp"},[a("summary",{staticClass:"dtp__summary"},[a("h3",[t._v("Я попал в ДТП. Что делать?")])]),a("div",{staticClass:"dtp__culprit"},[t._v(" а) Я виновник Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 2. Когда оформлять европротокол, а когда справку ГАИ? ")]),a("div",{staticClass:"dtp__victim"},[t._v(" б) Я потерпевший Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ")])])}],$={name:"Faq"},D=$,O=(a("8974"),Object(d["a"])(D,E,q,!1,null,"3431e075",null)),j=O.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"evro"},[s("div",{staticClass:"evro__title padding"},[s("h4",{staticClass:"evro__title_h4"},[t._v("Бланк Европротокола")])]),s("div",{staticClass:"padding center flex"},[s("div",{staticClass:"evro__button"},[s("a",{attrs:{href:"https://autoins.ru/upload/%D0%98%D0%B7%D0%B2%20%D0%BE%20%D0%94%D0%A2%D0%9F%20%D1%81%20%D0%BD%D0%BE%D1%8F%202019.doc"}},[t._v("Скачать бланк европротокола")])]),s("div",{staticClass:"rule"},[s("h3",{staticClass:"rule__h"},[t._v("Правила оформления европротокла")]),s("p",[t._v(" в ДТП нет потерпевших; в ДТП участвуют только два ТС; повреждения получили только участвовавшие в ДТП автомобили; и вы, и второй водитель вписаны в действующие полисы ОСАГО или международный полис «Зеленая карта», выданные на участвующие в ДТП автомобили; по предварительной оценке нанесенный ТС ущерб не превышает максимальную сумму страховой выплаты; вы и второй водитель согласны оформить ДТП без вызова сотрудников ГИБДД и подписать европротокол. "),s("a",{attrs:{href:"https://www.mos.ru/dt/function/proekty/evroprotokol/?utm_source=search&utm_term=serp"}},[t._v("Вся информация по европротоколу")])]),s("div",{staticClass:"exm"},[s("h4",{staticClass:"exm__h"},[t._v("Образец заполненеия европротокола")]),s("img",{staticClass:"exm__img",attrs:{src:a("05d5"),alt:"Образец"}})])])])])}],P={name:"Evro"},M=P,B=(a("74c6"),Object(d["a"])(M,A,L,!1,null,"35c7d9c1",null)),F=B.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"contact center padding",attrs:{id:"contact"}},[s("div",{staticClass:"title"},[s("h4",{staticClass:"title__h"},[t._v("контакты")])]),s("div",{staticClass:"contact-block padding"},[s("div",{staticClass:"contact-block__logo"},[s("img",{attrs:{src:a("6d8f"),alt:"Звонок"}})]),s("div",{staticClass:"contact-block__text"},[s("a",{staticClass:"contact-block__link",attrs:{href:"tel:+74959371722"}},[s("p",{staticClass:"contact-block__p"},[t._v("Позвонить нам")]),s("p",{staticClass:"contact-block__p"},[t._v("Круглосуточная помощь")])])])]),s("div",{staticClass:"contact-block padding"},[s("div",{staticClass:"contact-block__logo"},[s("img",{attrs:{src:a("6d8f"),alt:"Звонок"}})]),s("div",{staticClass:"contact-block__text"},[s("a",{staticClass:"contact-block__link",attrs:{href:"mailto:ork@gsd24.ru"}},[s("p",{staticClass:"contact-block__p"},[t._v("Написать нам")]),s("p",{staticClass:"contact-block__p"},[t._v("Для более точного идентифицирования в теме укажите гос номе")])])])]),s("div",{staticClass:"contact-block contact-block_smedia padding"},[s("div",{staticClass:"contact-block__text"},[s("h4",{staticClass:"contact-block__h"},[t._v("Мы в соц. сетях")]),s("div",{staticClass:"media"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"media__img",attrs:{src:a("639b"),alt:"Instagram"}})]),s("a",{attrs:{href:"#"}},[s("img",{staticClass:"media__img",attrs:{src:a("3dad"),alt:"FB"}})]),s("a",{attrs:{href:"#"}},[s("img",{staticClass:"media__img",attrs:{src:a("b299"),alt:"VK"}})]),s("a",{attrs:{href:"https://wa.me/74959371722"}},[s("img",{staticClass:"media__img",attrs:{src:a("5fcf"),alt:"whatsapp"}})]),s("a",{attrs:{href:"https://yandex.ru/maps/org/delta/1066101311/?ll=37.655320%2C55.755251&z=18"}},[s("img",{staticClass:"media__img",attrs:{src:a("d84a"),alt:"yandex"}})])])])]),s("div",{staticClass:"address"},[s("div",{staticClass:"address-title"},[s("h3",{staticClass:"address-title__h"},[t._v("Наш адрес:")]),s("p",{staticClass:"address-title__p"},[t._v("г. Москва, ул. Земляной вал,")]),s("p",{staticClass:"address-title__p"},[t._v("дом 38/40, стр. 5")]),s("iframe",{staticClass:"address__map",attrs:{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A0e89918f68a809f094d596c2f071ced4edcb0539a6744528c5e8763c7ee494e5&source=constructor",width:"320",height:"300",frameborder:"0"}})])])])}],T={name:"contact"},U=T,I=(a("0dbb"),Object(d["a"])(U,S,N,!1,null,"049dc934",null)),H=I.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer center"},[a("a",{attrs:{href:"#header"}},[a("span",{staticClass:"footer__copy",on:{autocomplete:function(e){return t.getYear()}}},[t._v("© "+t._s(t.year)+' Группа содействия "Дельта"')])])])},K=[],V={name:"FooterDelta",data:function(){return{year:(new Date).getFullYear()}}},J=V,R=(a("8569"),Object(d["a"])(J,z,K,!1,null,"b42bdec8",null)),Y=R.exports,G={name:"App",data:function(){return{}},components:{FooterDelta:Y,Contact:H,Evro:F,Faq:j,Up:g,Services:w},methods:{}},Q=G,W=(a("034f"),Object(d["a"])(Q,i,r,!1,null,null,null)),X=W.exports,Z=(a("d3b7"),a("8c4f")),tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"main"},[s("img",{staticClass:"padding",staticStyle:{width:"88%"},attrs:{src:a("fa76"),alt:"Служба Европротокола"}}),s("h1",{staticClass:"main__h padding"},[t._v("- быстрое оформление ДТП")]),t._m(0),s("router-link",{staticClass:"main__link",attrs:{to:"/call"}},[s("div",{staticClass:"center center_main padding"},[s("div",{staticClass:"avarcom"},[s("div",{staticClass:"avarcom__top"},[s("img",{staticClass:"avarcom__ico",attrs:{src:a("d420"),alt:"Icon"}}),s("div",{staticClass:"avarcom__about center"},[s("p",[t._v("Подробнее")])])]),s("div",{staticClass:"avarcom__bottom"},[s("h2",{staticClass:"avarcom__h2"},[t._v("Помощь на месте")]),s("h3",{staticClass:"avarcom__h3"},[t._v("Вызвать эксперта")]),s("p",{staticClass:"avarcom__p"},[t._v("24 часа, Москва и область")])])])])]),s("router-link",{staticClass:"main__link",attrs:{to:"/call"}},[s("div",{staticClass:"center center_main padding"},[s("div",{staticClass:"avarcom"},[s("div",{staticClass:"avarcom__top"},[s("img",{staticClass:"avarcom__ico",attrs:{src:a("d420"),alt:"Icon"}}),s("div",{staticClass:"avarcom__about center"},[s("p",[t._v("Подробнее")])])]),s("div",{staticClass:"avarcom__bottom"},[s("h2",{staticClass:"avarcom__h2"},[t._v("Оценить Онлайн")]),s("h3",{staticClass:"avarcom__h3"},[t._v("Можно ли оформить без ГАИ")]),s("p",{staticClass:"avarcom__p"},[t._v("расчет за 15 минут")])])])])]),s("router-link",{staticClass:"main__link",attrs:{to:"/call"}},[s("div",{staticClass:"center center_main padding"},[s("div",{staticClass:"avarcom"},[s("div",{staticClass:"avarcom__top"},[s("img",{staticClass:"avarcom__ico",attrs:{src:a("d420"),alt:"Icon"}}),s("div",{staticClass:"avarcom__about center"},[s("p",[t._v("Подробнее")])])]),s("div",{staticClass:"avarcom__bottom"},[s("h2",{staticClass:"avarcom__h2"},[t._v("Посоветоваться")]),s("h3",{staticClass:"avarcom__h3"},[t._v("как все сделать правильно")]),s("p",{staticClass:"avarcom__p"},[t._v("звонок бесплатный")])])])])])],1)},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("img",{staticClass:"banner__img",attrs:{src:a("c4d4"),alt:"Окажем помощь!"}})])}],at={name:"First",data:function(){return{avarcomHelp:!1}},methods:{showHelp:function(t){console.log(t),this.nameBlock=!this.nameBlock}}},st=at,it=(a("c180"),Object(d["a"])(st,tt,et,!1,null,"1738c698",null)),rt=it.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"expert-call padding"},[t.show?a("div",[t._m(0),a("div",{staticClass:"personal-data"},[a("form",{staticClass:"expert__form",attrs:{id:"expert__form"}},[t._m(1),t._m(2),a("label",{staticClass:"expert__label",attrs:{for:"where"}},[t._v(" Адрес ДТП "),a("a",{attrs:{href:t.map}},[t._v("Карта")]),a("input",{staticClass:"expert__input",attrs:{type:"text",id:"where",value:" ",autocomplete:"nope"},on:{focus:t.getPosition}}),a("p",[t._v(t._s(t.message))])]),a("label",{staticClass:"expert__label"},[t._v(" Способ оплаты "),a("label",{staticClass:"expert__label_pay",attrs:{for:"cash"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cash,expression:"cash"}],attrs:{type:"radio",id:"cash",name:"pay"},domProps:{value:!0,checked:t._q(t.cash,!0)},on:{change:function(e){t.cash=!0}}}),t._v(" Наличными эксперту")]),a("label",{staticClass:"expert__label_pay",attrs:{for:"cart"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cash,expression:"cash"}],attrs:{type:"radio",id:"cart",name:"pay"},domProps:{value:!1,checked:t._q(t.cash,!1)},on:{change:function(e){t.cash=!1}}}),t._v(" Картой онлайн")])]),a("label",{attrs:{for:"agree"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],attrs:{type:"checkbox",id:"agree"},domProps:{value:!0,checked:Array.isArray(t.agree)?t._i(t.agree,!0)>-1:t.agree},on:{change:function(e){var a=t.agree,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=!0,n=t._i(a,r);s.checked?n<0&&(t.agree=a.concat([r])):n>-1&&(t.agree=a.slice(0,n).concat(a.slice(n+1)))}else t.agree=i}}}),t._v(" Я согласен с "),a("a",{staticClass:"attention",attrs:{href:"#description"}},[t._v("правилами")]),t._v(" оформления услуги ")])]),t.agree?a("div",{staticClass:"button-true"},[t.cash?a("router-link",{attrs:{to:"/call/done"}},[a("div",{class:{button:t.agree,none:!t.agree},on:{click:function(e){return t.showDone()}}},[t._v("ОФОРМИТЬ")])]):a("div",{class:{button:t.agree,none:!t.agree}},[a("a",{attrs:{href:"https://kassa.yandex.ru/payments/"}},[t._v("ОПЛАТИТЬ")])])],1):a("div",{staticClass:"button-false"},[a("p",{staticClass:"button-false__text"},[t._v("Пожалуйста, подтвердите согласие с правилами оказания услуги ")])])]),t._m(3)]):t._e(),a("router-view")],1)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"expert__h"},[t._v("Вызов автоэксперта на "),a("br"),t._v(" место ДТП")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"expert__label",attrs:{for:"name"}},[t._v(" ФИО "),a("input",{staticClass:"expert__input",attrs:{type:"text",id:"name",placeholder:"Иванов Иван Иваныч"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"expert__label",attrs:{for:"phone"}},[t._v(" Номер телефона "),a("input",{staticClass:"expert__input",attrs:{type:"tel",id:"phone",placeholder:"+79250123569"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description",attrs:{id:"description"}},[a("p",{staticClass:"description__text"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis cumque dicta dignissimos eum inventore ipsam maxime, nam natus non nostrum praesentium quae qui quo ratione recusandae repudiandae temporibus vel voluptatem voluptatibus. Debitis eligendi exercitationem id illum iste laboriosam, libero maxime neque perspiciatis quaerat soluta temporibus veritatis? Laborum nemo, vero? ")]),a("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolor eaque exercitationem fuga necessitatibus perspiciatis placeat quibusdam. Beatae commodi dolor harum nulla perferendis placeat quae rem, repellendus reprehenderit vero? ")]),a("div",[t._v("A ab animi, aperiam consequuntur culpa cumque, dolor eaque eos exercitationem fugiat fugit hic impedit iste libero magnam molestiae natus possimus praesentium quae quia quis soluta voluptatem? Aut, quasi quo? ")]),a("div",{staticClass:"button"},[a("a",{attrs:{href:"#expert__form"}},[t._v("ПЕРЕЙТИ К ОФОРМЛЕНИЮ")])])])}],ot=(a("99af"),a("d81d"),{name:"Expertcall",data:function(){return{map:"",message:"",show:!0,cash:!0,agree:!1}},methods:{getPosition:function(){var t=this,e=document.querySelector("#where");e.value="";var a={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation?(this.message="Поиск…",navigator.geolocation.getCurrentPosition((function(a){var s=a.coords.latitude,i=a.coords.longitude;t.message="",e.value="Latitude: ".concat(s," °, Longitude: ").concat(i," °"),t.map="https://www.openstreetmap.org/#map=18/".concat(s,"/").concat(i)}),(function(){t.message="Разрешите определение геолокации"}),a)):this.message="Поиск геолокации не поддерживается в вашем браузере."},showDone:function(){this.show=!this.show},setCash:function(){this.cash=!this.cash}}}),lt=ot,ut=(a("ee07"),Object(d["a"])(lt,nt,ct,!1,null,"ae157af2",null)),_t=ut.exports;s["a"].use(Z["a"]);var dt=[{path:"/",name:"Home",component:rt},{path:"/call",name:"Call",component:_t,children:[{path:"done",component:function(){return a.e("chunk-04f9d3a8").then(a.bind(null,"c48c"))}},{path:"ab"}]},{path:"*",name:"not-existing",component:function(){return a.e("chunk-988c452c").then(a.bind(null,"e7a5"))}}],mt=new Z["a"]({mode:"history",base:"/delta/",routes:dt,scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),pt=mt;s["a"].config.productionTip=!1,new s["a"]({router:pt,render:function(t){return t(X)}}).$mount("#app")},"5aa6":function(t,e,a){},"5fcf":function(t,e,a){t.exports=a.p+"img/whatapp.9d57a3e0.svg"},"639b":function(t,e,a){t.exports=a.p+"img/inst.4eb637a2.svg"},"6cd8":function(t,e,a){},"6d8f":function(t,e,a){t.exports=a.p+"img/phone.99e31e77.svg"},"74c6":function(t,e,a){"use strict";var s=a("c6ca"),i=a.n(s);i.a},"7c7b":function(t,e,a){},8172:function(t,e,a){"use strict";var s=a("efd7"),i=a.n(s);i.a},8569:function(t,e,a){"use strict";var s=a("6cd8"),i=a.n(s);i.a},"85ec":function(t,e,a){},8974:function(t,e,a){"use strict";var s=a("5aa6"),i=a.n(s);i.a},"9d2f":function(t,e,a){},"9e8f":function(t,e,a){},a41b:function(t,e,a){t.exports=a.p+"img/calc.7e9efae8.svg"},b299:function(t,e,a){t.exports=a.p+"img/vk.2a944bb4.svg"},b98d:function(t,e,a){t.exports=a.p+"img/help.ebf8f501.svg"},c180:function(t,e,a){"use strict";var s=a("9d2f"),i=a.n(s);i.a},c1f3:function(t,e,a){},c4d4:function(t,e,a){t.exports=a.p+"img/mainbackground.ee45783d.jpg"},c6ca:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.d45aaef0.png"},d420:function(t,e,a){t.exports=a.p+"img/ca.0361911d.svg"},d84a:function(t,e,a){t.exports=a.p+"img/ya.384cda18.svg"},daad:function(t,e,a){var s={"./calc.svg":"a41b","./court.svg":"e401","./dock.svg":"1c77","./help.svg":"b98d"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="daad"},e401:function(t,e,a){t.exports=a.p+"img/court.01c9007c.svg"},ee07:function(t,e,a){"use strict";var s=a("9e8f"),i=a.n(s);i.a},efd7:function(t,e,a){},fa76:function(t,e,a){t.exports=a.p+"img/logoevro.9bc4b47e.png"}});
//# sourceMappingURL=app.b9c68c02.js.map