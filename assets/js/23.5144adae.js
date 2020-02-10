(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{304:function(t,a,e){"use strict";e.r(a);var s=e(35),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("h2",{attrs:{id:"http-缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" HTTP 缓存")]),t._v(" "),s("p",[t._v("缓存是一种保存资源副本并在下次请求时直接使用该副本的技术。当 web 缓存发现请求的资源已经被缓存，它会拦截请求，返回该资源的拷贝，而不会去源服务器重新下载。这样带来的好处有：缓解服务器端压力，提升性能（获取资源的耗时更短）。")]),t._v(" "),s("p",[t._v("对于网站来说，缓存是达到高性能的重要组成部分。缓存需要合理配置，因为并不是所有资源都是永久不变的：重要的是对一个资源的缓存应截止到其下一次发生改变（即不能缓存过期的资源）。")]),t._v(" "),s("p",[t._v("缓存的种类有很多，其大致可归为两类："),s("strong",[t._v("私有与共享缓存")]),t._v("。共享缓存存储的响应能够被多个用户使用；私有缓存只能用于单个用户。")]),t._v(" "),s("h2",{attrs:{id:"缓存控制-cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存控制-cache-control"}},[t._v("#")]),t._v(" 缓存控制 Cache-Control")]),t._v(" "),s("p",[s("img",{attrs:{src:e(511),alt:"服务器缓存"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(512),alt:"Cache-Control"}})]),t._v(" "),s("p",[t._v("HTTP/1.1 定义的 "),s("code",[t._v("Cache-Control")]),t._v(" 头用来区分对缓存机制的支持情况，请求头和响应头都支持这个属性。通过它提供的不同的值来定义缓存策略。")]),t._v(" "),s("h3",{attrs:{id:"no-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-store"}},[t._v("#")]),t._v(" no-store")]),t._v(" "),s("p",[s("code",[t._v("no-store")]),t._v(" "),s("strong",[t._v("禁止进行缓存")]),t._v("，缓存中不得存储任何关于客户端请求和服务器响应的内容。每次由客户端发起的请求都会下载完整的响应内容。")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" no-store\n")])])]),s("h3",{attrs:{id:"no-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-cache"}},[t._v("#")]),t._v(" no-cache")]),t._v(" "),s("p",[s("code",[t._v("no-cache")]),t._v(" "),s("strong",[t._v("强制确认缓存")]),t._v("，它的字面含义容易与 "),s("code",[t._v("no-store")]),t._v(" 混淆，实际的意思并不是禁止进行缓存，而是"),s("strong",[t._v("可以缓存")]),t._v("，但在使用之前必须要去服务器验证是否过期，是否有最新的版本。")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" no-cache\n")])])]),s("h3",{attrs:{id:"must-revalidate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#must-revalidate"}},[t._v("#")]),t._v(" must-revalidate")]),t._v(" "),s("p",[s("code",[t._v("must-revalidate")]),t._v(" "),s("strong",[t._v("缓存验证确认")]),t._v("，缓存在考虑使用一个陈旧的资源时，必须先验证它的状态，已过期的缓存将不被使用。")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" must-revalidate\n")])])]),s("h3",{attrs:{id:"max-age"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[t._v("#")]),t._v(" max-age")]),t._v(" "),s("p",[s("code",[t._v("max-age")]),t._v(" 是"),s("strong",[t._v("生存时间")]),t._v("（又叫"),s("strong",[t._v("新鲜度")]),t._v("），时间的计算起点是响应报文的创建时刻（即 "),s("code",[t._v("Date")]),t._v(" 字段），而不是客户端收到报文的时刻，也就说包含了在链路传输过程中所有节点所停留的时间。")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" max-age=3153600\n")])])]),s("p",[s("img",{attrs:{src:e(513),alt:"缓存属性"}})]),t._v(" "),s("h2",{attrs:{id:"条件请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件请求"}},[t._v("#")]),t._v(" 条件请求")]),t._v(" "),s("p",[t._v("浏览器用 "),s("code",[t._v("Cache-Control")]),t._v(" 做缓存控制只能是刷新数据，不能很好地利用缓存数据，又因为缓存会失效，使用前还必须去服务器验证是否是最新版。")]),t._v(" "),s("p",[t._v("浏览器可以用两个连续的请求组成“验证动作”：先是一个 "),s("code",[t._v("HEAD")]),t._v("，获取资源的修改时间等元信息，然后与缓存数据比较，如果没有改动就使用缓存，节省网络流量，否则就再发一个 "),s("code",[t._v("GET")]),t._v(" 请求，获取最新的版本。")]),t._v(" "),s("p",[t._v("但这样的两个请求网络成本太高，所以 HTTP 协议就定义了一系列 "),s("code",[t._v("If")]),t._v(" 开头的"),s("strong",[t._v("条件请求")]),t._v("字段，专门用来检查验证资源是否过期，把两个请求才能完成的工作合并在一个请求里做。而且，验证的责任也交给服务器。")]),t._v(" "),s("p",[t._v("条件请求一共有 5 个头字段，最常用的是 "),s("code",[t._v("If-Modified-Since")]),t._v(" 和 "),s("code",[t._v("If-None-Match")]),t._v(" 这两个。需要第一次的响应报文预先提供 "),s("code",[t._v("Last-modified")]),t._v(" 和 "),s("code",[t._v("ETag")]),t._v("，然后第二次请求时就可以带上缓存里的原值，验证资源是否是最新的。")]),t._v(" "),s("p",[t._v("如果资源没有变，服务器就回应一个 "),s("code",[t._v("304 Not Modified")]),t._v("，表示缓存依然有效，浏览器就可以更新一下有效期，使用其缓存。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(514),alt:"条件请求"}})]),t._v(" "),s("h3",{attrs:{id:"etags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etags"}},[t._v("#")]),t._v(" ETags")]),t._v(" "),s("p",[t._v("作为缓存的一种"),s("strong",[t._v("强校验器")]),t._v("，"),s("code",[t._v("ETag")]),t._v(" 响应头是一个对用户代理不透明的值。对于像浏览器这样的 HTTP 用户代理，不知道 "),s("code",[t._v("ETag")]),t._v(" 代表什么，不能预测它的值是多少。如果资源请求的响应头里含有 "),s("code",[t._v("ETag")]),t._v("，客户端可以在后续的请求的头中带上 "),s("code",[t._v("If-None-Match")]),t._v(" 头来验证缓存。")]),t._v(" "),s("p",[s("code",[t._v("Last-Modified")]),t._v(" 响应头可以作为一种"),s("strong",[t._v("弱校验器")]),t._v("。说它若是因为它只能精确到一秒。如果响应头里含有这个信息，客户端可以在后续的请求中带上 "),s("code",[t._v("If-Modified-Since")]),t._v(" 来验证缓存。")]),t._v(" "),s("p",[t._v("当向服务器发起缓存校验的请求时，服务端会返回 "),s("code",[t._v("200 ok")]),t._v(" 表示返回正常的结果或者 "),s("code",[t._v("304 Not Modified")]),t._v("（不返回 "),s("code",[t._v("body")]),t._v("）表示浏览器可以使用本地缓存文件。"),s("code",[t._v("304")]),t._v(" 的响应头也可以同时更新缓存文档的过期时间。")])])}),[],!1,null,null,null);a.default=v.exports},511:function(t,a,e){t.exports=e.p+"assets/img/server_cache.a1968821.png"},512:function(t,a,e){t.exports=e.p+"assets/img/cache_control.dfd2d206.png"},513:function(t,a,e){t.exports=e.p+"assets/img/cache_attribute.8a675356.png"},514:function(t,a,e){t.exports=e.p+"assets/img/condition_request.b239d080.png"}}]);