(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{309:function(e,t,a){"use strict";a.r(t);var o=a(35),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),o("h2",{attrs:{id:"http-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-cookie"}},[e._v("#")]),e._v(" HTTP Cookie")]),e._v(" "),o("p",[o("strong",[e._v("HTTP Cookie")]),e._v("（也叫 "),o("strong",[e._v("Web Cookie")]),e._v(" 或"),o("strong",[e._v("浏览器 Cookie")]),e._v("）是服务器发送到用户浏览器并保存到本地的一小块数据，它会在浏览器下次向服务器再发起请求时被携带并发送到服务器上。通常，它用户告知服务器两个请求是否来自同一个浏览器，如保持用户的登录状态。"),o("code",[e._v("Cookie")]),e._v(" 使基于"),o("strong",[e._v("无状态")]),e._v("的 HTTP 协议记录稳定的状态信息成为了可能。")]),e._v(" "),o("p",[o("code",[e._v("Cookie")]),e._v(" 主要用于以下三个方面：")]),e._v(" "),o("ul",[o("li",[e._v("会话状态管理（如用户登录状态、购物车、游戏分数或其他需要记录的信息）")]),e._v(" "),o("li",[e._v("个性化设置（如用户自定义设置、主题等）")]),e._v(" "),o("li",[e._v("浏览器行为跟踪（如跟踪分析用户行为等）")])]),e._v(" "),o("p",[o("code",[e._v("Cookie")]),e._v(" 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，"),o("code",[e._v("Cookie")]),e._v(" 渐渐被淘汰。由于服务器指定 "),o("code",[e._v("Cookie")]),e._v(" 后，浏览器的每次请求都会携带 "),o("code",[e._v("Cookie")]),e._v(" 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 **Web storage API（本地存储和会话存储）**或 "),o("strong",[e._v("IndexedDB")]),e._v("。")]),e._v(" "),o("h2",{attrs:{id:"创建-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#创建-cookie"}},[e._v("#")]),e._v(" 创建 Cookie")]),e._v(" "),o("p",[e._v("当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 "),o("code",[e._v("Set-Cookie")]),e._v(" 选项。浏览器收到响应后通常会保存下 "),o("code",[e._v("Cookie")]),e._v("，之后对该服务器每一次请求中都通过 "),o("code",[e._v("Cookie")]),e._v(" 请求头部将 "),o("code",[e._v("Cookie")]),e._v(" 信息发送到服务器。另外，"),o("code",[e._v("Cookie")]),e._v(" 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。")]),e._v(" "),o("p",[o("img",{attrs:{src:a(535),alt:"Cookie"}})]),e._v(" "),o("h3",{attrs:{id:"set-cookie-响应头部"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-cookie-响应头部"}},[e._v("#")]),e._v(" Set-Cookie 响应头部")]),e._v(" "),o("p",[e._v("服务器使用 "),o("code",[e._v("Set-Cookie")]),e._v(" 响应头部向用户代理（一般是浏览器）发送 "),o("code",[e._v("Cookie")]),e._v(" 信息。一个简单的 "),o("code",[e._v("Cookie")]),e._v(" 可能像这样：")]),e._v(" "),o("div",{staticClass:"language-http extra-class"},[o("pre",{pre:!0,attrs:{class:"language-http"}},[o("code",[o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" <cookiename>=<cookievalue>\n")])])]),o("p",[e._v("服务器通过该头部告知客户端保存 "),o("code",[e._v("Cookie")]),e._v(" 信息。")]),e._v(" "),o("div",{staticClass:"language-http extra-class"},[o("pre",{pre:!0,attrs:{class:"language-http"}},[o("code",[o("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" text/html\n"),o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" yummy_cookie=choco\n"),o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" tasty_cookie=strawberry"),o("span",{pre:!0,attrs:{class:"token text/html"}},[e._v("\n\n[页面内容]\n")])])])]),o("h3",{attrs:{id:"cookie-请求头部"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-请求头部"}},[e._v("#")]),e._v(" Cookie 请求头部")]),e._v(" "),o("p",[e._v("现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的 "),o("code",[e._v("Cookie")]),e._v(" 信息通过 "),o("code",[e._v("Cookie")]),e._v(" 请求头再发送给服务器。")]),e._v(" "),o("div",{staticClass:"language-http extra-class"},[o("pre",{pre:!0,attrs:{class:"language-http"}},[o("code",[o("span",{pre:!0,attrs:{class:"token request-line"}},[o("span",{pre:!0,attrs:{class:"token property"}},[e._v("GET")]),e._v(" /sample_page.html HTTP/1.1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" www.example.org\n"),o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cookie:")]),e._v(" yummy_cookie=choco; tasty_cookie=strawberry\n")])])]),o("h2",{attrs:{id:"cookie-属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-属性"}},[e._v("#")]),e._v(" Cookie 属性")]),e._v(" "),o("p",[o("img",{attrs:{src:a(536),alt:"Cookie　属性"}})]),e._v(" "),o("h3",{attrs:{id:"生存周期"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#生存周期"}},[e._v("#")]),e._v(" 生存周期")]),e._v(" "),o("h4",{attrs:{id:"expires"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),o("p",[o("code",[e._v("Expires")]),e._v(" 过期时间，用的是绝对时间点，可以理解为截止日期 (dealine)。")]),e._v(" "),o("div",{staticClass:"language-http extra-class"},[o("pre",{pre:!0,attrs:{class:"language-http"}},[o("code",[o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("❕ 提示：当 "),o("code",[e._v("Cookie")]),e._v(" 的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。")])]),e._v(" "),o("h4",{attrs:{id:"max-age"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[e._v("#")]),e._v(" Max-Age")]),e._v(" "),o("p",[o("code",[e._v("Max-Age")]),e._v(" 过期时间，用的是相对时间点，单位是秒。浏览器收到报文的时间点再加上 "),o("code",[e._v("Max-Age")]),e._v("，就可以得到失效的绝对时间。")]),e._v(" "),o("p",[o("code",[e._v("Expires")]),e._v(" 和 "),o("code",[e._v("Max-Age")]),e._v(" 可以同时出现，两者的失效时间可以一致，也可以不一致，但浏览器会优先采用 "),o("code",[e._v("Max-Age")]),e._v(" 计算失效期。")]),e._v(" "),o("h3",{attrs:{id:"作用域"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[e._v("#")]),e._v(" 作用域")]),e._v(" "),o("h4",{attrs:{id:"domain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[e._v("#")]),e._v(" Domain")]),e._v(" "),o("p",[o("code",[e._v("Domain")]),e._v(" 标识指定了哪些主机可以接收 "),o("code",[e._v("Cookie")]),e._v("。如果不指定，默认为"),o("strong",[e._v("当前文档的主机")]),e._v("（"),o("strong",[e._v("不包含子域名")]),e._v("）。如果指定了 "),o("code",[e._v("Domain")]),e._v("，则一般包含子域名。")]),e._v(" "),o("p",[e._v("例如，如果设置 "),o("code",[e._v("Domain=mozilla.org")]),e._v("，则 "),o("code",[e._v("Cookie")]),e._v(" 也包含在子域名中（如 "),o("code",[e._v("developer.mozilla.org")]),e._v("）。")]),e._v(" "),o("h4",{attrs:{id:"path"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),o("p",[o("code",[e._v("Path")]),e._v(" 标识指定了主机下的哪些路径可以接收 "),o("code",[e._v("Cookie")]),e._v("（该 URL 路径必须存在于请求 URL 中）。以字符 "),o("code",[e._v("%x2F ('/')")]),e._v(" 作为路径分隔符，子路径也会被匹配。")]),e._v(" "),o("p",[e._v("例如，设置 "),o("code",[e._v("Path=/docs")]),e._v("，则以下地址都会匹配：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("/dosc")])]),e._v(" "),o("li",[o("code",[e._v("/docs/Web/")])]),e._v(" "),o("li",[o("code",[e._v("/docs/Web/HTTP")])])]),e._v(" "),o("h3",{attrs:{id:"安全性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[e._v("#")]),e._v(" 安全性")]),e._v(" "),o("h4",{attrs:{id:"httponly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[e._v("#")]),e._v(" HttpOnly")]),e._v(" "),o("p",[e._v("为避免"),o("strong",[e._v("跨域脚本 (XSS) 攻击")]),e._v("，通过 JavaScript 的 "),o("code",[e._v("Document.cookie")]),e._v(" API 无法访问带有 "),o("code",[e._v("HttpOnly")]),e._v(" 标记的 "),o("code",[e._v("Cookie")]),e._v("，它们只应该发送给服务端。如果包含服务端 "),o("code",[e._v("Session")]),e._v(" 信息的 "),o("code",[e._v("Cookie")]),e._v(" 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 "),o("code",[e._v("HttpOnly")]),e._v(" 标记。")]),e._v(" "),o("div",{staticClass:"language-http extra-class"},[o("pre",{pre:!0,attrs:{class:"language-http"}},[o("code",[o("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly\n")])])]),o("h4",{attrs:{id:"samesite"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[e._v("#")]),e._v(" SameSite")]),e._v(" "),o("p",[o("code",[e._v("SameSite")]),e._v(" 允许服务器要求某个 "),o("code",[e._v("Cookie")]),e._v(" 在跨站请求时不会被发送，从而可以阻止"),o("strong",[e._v("跨站请求伪造攻击 (CSRF)")]),e._v("。")]),e._v(" "),o("p",[e._v("设置成 "),o("code",[e._v("SameSite=Strict")]),e._v(" 可以严格限定 "),o("code",[e._v("Cookie")]),e._v(" 不能随着跳转链接跨站发送，而 "),o("code",[e._v("SameSite=Lax")]),e._v(" 则略宽松一点，允许 "),o("code",[e._v("GET / HEAD")]),e._v(" 等安全方法，但禁止 "),o("code",[e._v("POST")]),e._v(" 跨站发送。")])])}),[],!1,null,null,null);t.default=s.exports},535:function(e,t,a){e.exports=a.p+"assets/img/cookie.9f6cca61.png"},536:function(e,t,a){e.exports=a.p+"assets/img/cookie-attribute.9dbb8b49.png"}}]);