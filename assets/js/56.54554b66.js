(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{273:function(e,s,t){"use strict";t.r(s);var a=t(35),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"cors-通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors-通信"}},[e._v("#")]),e._v(" CORS 通信")]),e._v(" "),t("p",[t("strong",[e._v("CORS（跨域资源共享，Cross-origin resource sharing）")]),e._v("，它允许浏览器向"),t("strong",[e._v("跨域")]),e._v("服务器发出 "),t("code",[e._v("XMLHttpRequest")]),e._v(" 请求，从而克服 AJAX 只能"),t("strong",[e._v("同源")]),e._v("使用的限制。")]),e._v(" "),t("p",[e._v("CORS 需要浏览器和服务器同时支持。整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。")]),e._v(" "),t("p",[e._v("浏览器一旦发现 AJAX 请求跨源，就会"),t("strong",[e._v("自动")]),e._v("添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。")]),e._v(" "),t("p",[e._v("因此，实现 CORS 通信的关键是"),t("strong",[e._v("服务器")]),e._v("，服务器设置 "),t("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 就可以开启 CORS，该属性表示哪些域名可以访问资源，如果设置"),t("strong",[e._v("通配符")]),e._v("则表示所有网站都可以访问资源。")]),e._v(" "),t("h3",{attrs:{id:"两种请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种请求"}},[e._v("#")]),e._v(" 两种请求")]),e._v(" "),t("p",[e._v("CORS 请求分为两类："),t("strong",[e._v("简单请求 (simple request)")]),e._v(" 和 "),t("strong",[e._v("非简单请求 (not-so-simple request)")]),e._v("。")]),e._v(" "),t("p",[e._v("只要满足以下两大条件，就属于简单请求。")]),e._v(" "),t("ol",[t("li",[e._v("请求方法是以下三种方法之一：\n"),t("ul",[t("li",[t("code",[e._v("HEAD")])]),e._v(" "),t("li",[t("code",[e._v("GET")])]),e._v(" "),t("li",[t("code",[e._v("POST")])])])]),e._v(" "),t("li",[e._v("HTTP 的头信息不超过以下几种字段：\n"),t("ul",[t("li",[t("code",[e._v("Accept")])]),e._v(" "),t("li",[t("code",[e._v("Accept-Language")])]),e._v(" "),t("li",[t("code",[e._v("Content-Language")])]),e._v(" "),t("li",[t("code",[e._v("Last-Event-ID")])]),e._v(" "),t("li",[t("code",[e._v("Content-Type")]),e._v("：只限于三个值 "),t("code",[e._v("application/x-www-form-urlencoded")]),e._v("、"),t("code",[e._v("multipart/form-data")]),e._v("、"),t("code",[e._v("text/plain")])])])])]),e._v(" "),t("p",[e._v("凡是不能同时满足上面两个条件，就属于非简单请求。浏览器对这两种请求的处理是不一样的。")]),e._v(" "),t("h2",{attrs:{id:"简单请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[e._v("#")]),e._v(" 简单请求")]),e._v(" "),t("p",[e._v("对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中增加一个 "),t("code",[e._v("Origin")]),e._v(" 字段。")]),e._v(" "),t("p",[e._v("下面是一个例子，浏览器发现这次跨域 AJAX 请求是简单请求，就自动在头信息之中添加一个 "),t("code",[e._v("Origin")]),e._v(" 字段：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("GET")]),e._v(" /cors HTTP/1.1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://api.bob.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" api.alice.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-US\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" Mozilla/5.0...\n")])])]),t("p",[e._v("上面的头信息中，"),t("code",[e._v("Origin")]),e._v(" 字段用来说明，本次请求来自哪个"),t("strong",[e._v("源")]),e._v("。服务器根据这个值，决定是否同意这次请求。")]),e._v(" "),t("p",[e._v("如果 "),t("code",[e._v("Origin")]),e._v(" 指定的源不在许可范围内，服务器会返回一个"),t("strong",[e._v("正常")]),e._v("的 HTTP回应。")]),e._v(" "),t("p",[e._v("浏览器发现，这个回应的头信息没有包含 "),t("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 字段，因而抛出一个错误，被 "),t("code",[e._v("XMLHttpRequest")]),e._v(" 的 "),t("code",[e._v("onerror")]),e._v(" 回调函数捕获。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("这种错误无法通过错误码识别，因为 HTTP 回应的状态码可能是 "),t("code",[e._v("200")]),e._v("。")])]),e._v(" "),t("p",[e._v("如果 "),t("code",[e._v("Origin")]),e._v(" 指定的源在许可范围内，服务器返回的响应会多出几个头信息字段：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[e._v("...\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" http://api.bob.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Credentials:")]),e._v(" true\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Headers:")]),e._v(" FooBar\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html; charset=utf-8\n")])])]),t("h3",{attrs:{id:"access-control-allow-origin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-origin"}},[e._v("#")]),e._v(" Access-Control-Allow-Origin")]),e._v(" "),t("p",[e._v("该字段是"),t("strong",[e._v("必需")]),e._v("的。它的值要么是请求时的 "),t("code",[e._v("Origin")]),e._v(" 字段的值，要么是一个 "),t("code",[e._v("*")]),e._v("，表示接受任何域名的请求。")]),e._v(" "),t("h3",{attrs:{id:"access-control-allow-credentials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-credentials"}},[e._v("#")]),e._v(" Access-Control-Allow-Credentials")]),e._v(" "),t("p",[e._v("该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。默认情况下，Cookie 不包括在 CORS 请求之中。")]),e._v(" "),t("p",[e._v("设为 "),t("code",[e._v("true")]),e._v(" 即表示服务器明确许可，Cookie 可以包含在请求之中，一起发给服务器。")]),e._v(" "),t("p",[e._v("这个值也只能设为 "),t("code",[e._v("true")]),e._v("，如果服务器不要浏览器发送 Cookie，删除该字段即可。")]),e._v(" "),t("h3",{attrs:{id:"access-control-allow-headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-headers"}},[e._v("#")]),e._v(" Access-Control-Allow-Headers")]),e._v(" "),t("p",[e._v("该字段可选。CORS 请求时，"),t("code",[e._v("XMLHttpRequest")]),e._v(" 对象的 "),t("code",[e._v("getResponseHeader()")]),e._v(" 方法只能拿到 6 个基本字段："),t("code",[e._v("Cache-Control")]),e._v("、"),t("code",[e._v("Content-Language")]),e._v("、"),t("code",[e._v("Content-Type")]),e._v("、"),t("code",[e._v("Expires")]),e._v("、"),t("code",[e._v("Last-Modified")]),e._v("、"),t("code",[e._v("Pragma")]),e._v("。")]),e._v(" "),t("p",[e._v("如果想拿到其他字段，必须在 "),t("code",[e._v("Access-Control-Expose-Headers")]),e._v(" 里指定。")]),e._v(" "),t("h3",{attrs:{id:"withcredentials-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withcredentials-属性"}},[e._v("#")]),e._v(" withCredentials 属性")]),e._v(" "),t("p",[e._v("CORS 请求默认不发送 Cookie 和 HTTP 认证信息，这是为了降低 CSRF 攻击的风险。")]),e._v(" "),t("p",[e._v("但是某些场合，服务器可能需要拿到 Cookie，这时需要服务器显式指定 "),t("code",[e._v("Access-Control-Allow-Credentials")]),e._v(" 字段，告诉浏览器可以发送 Cookie。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("Access"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Origin"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Allow"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Credentials"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),t("p",[e._v("同时，开发者必须在 AJAX 请求中打开 "),t("code",[e._v("withCredentials")]),e._v(" 属性。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" xhr "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("XMLHttpRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nxhr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("withCredentials "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),t("p",[e._v("否则，即使服务器同意发送 Cookie，浏览器也不会发送。或者，服务器要求设置 Cookie，浏览器也不会处理。")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("如果需要发送 Cookie，"),t("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 字段就不能设为 "),t("code",[e._v("*")]),e._v("，必须指定明确的、与请求网页一致的域名。")]),e._v(" "),t("p",[e._v("同时，Cookie 依然遵循同源策略，只有用服务器域名设置的 Cookie 才会上传，其他域名的 Cookie 不会上传，且（跨源）原网页代码中的 "),t("code",[e._v("document.cookie")]),e._v(" 也无法读取服务器域名下的 Cookie。")])]),e._v(" "),t("h2",{attrs:{id:"非简单请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求"}},[e._v("#")]),e._v(" 非简单请求")]),e._v(" "),t("p",[e._v("非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 "),t("code",[e._v("PUT")]),e._v(" 或 "),t("code",[e._v("DELETE")]),e._v("，或者 "),t("code",[e._v("Content-Type")]),e._v(" 字段的类型是 "),t("code",[e._v("application/json")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"预检请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[e._v("#")]),e._v(" 预检请求")]),e._v(" "),t("p",[e._v("非简单请求的 CORS 请求会在正式通信之前，增加一次 HTTP 查询请求，称为**“预检”请求 (preflight)**。")]),e._v(" "),t("p",[e._v("浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单中，以及可以使用哪些 HTTP 动词和头信息字段。")]),e._v(" "),t("p",[e._v("只有得到肯定答复，浏览器才会发出正式的 "),t("code",[e._v("XMLHttpRequest")]),e._v(" 请求，否则就报错。")]),e._v(" "),t("p",[e._v("这是为了防止这些新增的请求，对传统的没有 CORS 支持的服务器形成压力，给服务器一个提前拒绝的机会。")]),e._v(" "),t("p",[e._v("这样可以防止服务器收到大量的 "),t("code",[e._v("DELETE")]),e._v(" 和 "),t("code",[e._v("PUT")]),e._v(" 请求，这些传统的表单不可能跨域发出的请求。")]),e._v(" "),t("p",[e._v("下面是一段浏览器的 JavaScript 脚本：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://api.alice.com/cors'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" xhr "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("XMLHttpRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nxhr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'PUT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nxhr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("setRequestHeader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'X-Custom-Header'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'value'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nxhr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("上面代码中，HTTP 请求的方法是 "),t("code",[e._v("PUT")]),e._v("，并且发出一个自定义头信息 "),t("code",[e._v("X-Custom-Header")]),e._v("。")]),e._v(" "),t("p",[e._v("浏览器发现，这是一个非简单请求，会自动发出一个“预检”请求要求服务器确认。下面是这个“预检”请求的 HTTP 头信息：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("OPTIONS")]),e._v(" /cors HTTP/1.1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://api.bob.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Request-Method:")]),e._v(" PUT\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Request-Headers:")]),e._v(" X-Custom-Header\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" api.alice.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-US\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" Mozilla/5.0...\n")])])]),t("p",[e._v("“预检”请求用的请求方法是 "),t("code",[e._v("OPTIONS")]),e._v("，表示这个请求是用来询问的。")]),e._v(" "),t("p",[e._v("头信息里，关键字段是 "),t("code",[e._v("Origin")]),e._v("，表示请求来自哪个源。除了 "),t("code",[e._v("Origin")]),e._v(" 字段，“预检”请求的头信息包括两个特殊字段：")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("Access-Control-Request-Method")])]),e._v(" "),t("p",[e._v("该字段是"),t("strong",[e._v("必须")]),e._v("的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是 "),t("code",[e._v("PUT")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("Access-Control-Request-Headers")])]),e._v(" "),t("p",[e._v("该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是 "),t("code",[e._v("X-Custom-Header")])])])]),e._v(" "),t("h3",{attrs:{id:"预检请求的回应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预检请求的回应"}},[e._v("#")]),e._v(" 预检请求的回应")]),e._v(" "),t("p",[e._v("服务器收到“预检”请求之后，检查了 "),t("code",[e._v("Origin")]),e._v("、"),t("code",[e._v("Access-Control-Request-Method")]),e._v("、"),t("code",[e._v("Access-Control-Request-Headers")]),e._v(" 字段以后，确认允许跨源请求，就可以做出响应。")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date:")]),e._v(" Mon, 01 Dec 2008 01:15:39 GMT\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Server:")]),e._v(" Apache/2.0.61 (Unix)\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" http://api.bob.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Methods:")]),e._v(" GET, POST, PUT\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Headers:")]),e._v(" X-Custom-Header\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html; charset=utf-8\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Encoding:")]),e._v(" gzip\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length:")]),e._v(" 0\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Keep-Alive:")]),e._v(" timeout=2, max=100\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" Keep-Alive\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/plain\n")])])]),t("p",[e._v("上面的 HTTP 回应中，关键是 "),t("code",[e._v("Access-Control-Allow-Orgin")]),e._v(" 字段，表示 "),t("code",[e._v("http://api.bob.com")]),e._v(" 可以请求数据。该字段也可以设为 "),t("code",[e._v("*")]),e._v("，表示同意任意跨源请求。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("Access"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Control"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Allow"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Origin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n")])])]),t("p",[e._v("如果服务器"),t("strong",[e._v("否定")]),e._v("了“预检”请求，会返回一个正常的 HTTP 回应，但是没有任何 CORS 相关的头信息字段，或者明确表示请求不符合条件。")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("OPTIONS")]),e._v(" http://api.bob.com HTTP/1.1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Status:")]),e._v(" 200\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" https://notyourdomain.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Method:")]),e._v(" POST\n")])])]),t("p",[e._v("上面的服务器回应，"),t("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 字段明确不包括发出请求的 "),t("code",[e._v("http://api.bob.com")]),e._v("。")]),e._v(" "),t("p",[e._v("这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被 "),t("code",[e._v("XMLHttpRequest")]),e._v(" 对象的 "),t("code",[e._v("onerror")]),e._v(" 回调函数捕获。")]),e._v(" "),t("p",[e._v("控制台会打印如下的报错信息：")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("XMLHttpRequest connot load http"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//api.alice.com.")]),e._v("\nOrigin http"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//api.bob.com is not allowed by Access-Control-Allow-Origin.")]),e._v("\n")])])]),t("p",[e._v("服务器回应的其他 CORS 相关字段如下：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[e._v("...\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Methods:")]),e._v(" GET, POST, PUT\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Headers:")]),e._v(" X-Custom-Header\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Credentials:")]),e._v(" true\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Max-Age:")]),e._v(" 1728000\n")])])]),t("h3",{attrs:{id:"access-control-allow-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-methods"}},[e._v("#")]),e._v(" Access-Control-Allow-Methods")]),e._v(" "),t("p",[e._v("该字符"),t("strong",[e._v("必需")]),e._v("。它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。")])]),e._v(" "),t("h3",{attrs:{id:"access-control-allow-headers-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-headers-2"}},[e._v("#")]),e._v(" Access-Control-Allow-Headers")]),e._v(" "),t("p",[e._v("如果浏览器请求包括 "),t("code",[e._v("Access-Control-Request-Headers")]),e._v(" 字段，则 "),t("code",[e._v("Access-Control-Allow-Headers")]),e._v(" 字段是必需的。")]),e._v(" "),t("p",[e._v("它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在“预检”中请求的字段。")]),e._v(" "),t("h3",{attrs:{id:"access-control-allow-credentials-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-credentials-2"}},[e._v("#")]),e._v(" Access-Control-Allow-Credentials")]),e._v(" "),t("p",[e._v("该字段与简单请求的含义相同。")]),e._v(" "),t("h3",{attrs:{id:"access-control-max-age"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-max-age"}},[e._v("#")]),e._v(" Access-Control-Max-Age")]),e._v(" "),t("p",[e._v("该字段可选，用来指定本次预检请求的有效期，单位为秒。")]),e._v(" "),t("p",[e._v("上面结果中，有效期是 20 天（172800 秒），即允许缓存该条回应 172800 秒。在此期间，不用发出另一条预检请求。")]),e._v(" "),t("h3",{attrs:{id:"浏览器的正常请求和回应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的正常请求和回应"}},[e._v("#")]),e._v(" 浏览器的正常请求和回应")]),e._v(" "),t("p",[e._v("一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就跟简单请求一样，会有一个 "),t("code",[e._v("Origin")]),e._v(" 头信息字段。")]),e._v(" "),t("p",[e._v("服务器的回应，也都会有一个 "),t("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 头信息字段。")]),e._v(" "),t("p",[e._v("下面是“预检”请求之后，浏览器的正常 CORS 请求：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token property"}},[e._v("PUT")]),e._v(" /cors HTTP/1.1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://api.bob.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" api.alice.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("X-Custom-Header:")]),e._v(" value\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-US\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" Mozilla/5.0...\n")])])]),t("p",[e._v("上面头信息的 "),t("code",[e._v("Origin")]),e._v(" 字段是浏览器自动添加的。")]),e._v(" "),t("p",[e._v("下面是服务器正常的回应：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[e._v("...\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Access-Control-Allow-Origin:")]),e._v(" http://api.bob.com\n"),t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html; charset=utf-8\n")])])]),t("p",[e._v("上面头信息中，"),t("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 字段是每次回应都必定包含的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);