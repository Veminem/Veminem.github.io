(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{308:function(v,e,t){"use strict";t.r(e);var s=t(35),o=Object(s.a)({},(function(){var v=this,e=v.$createElement,s=v._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[v._v("#")]),v._v(" "+v._s(v.$frontmatter.title))]),v._v(" "),s("h2",{attrs:{id:"连接管理模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接管理模型"}},[v._v("#")]),v._v(" 连接管理模型")]),v._v(" "),s("p",[v._v("HTTP 的传输协议主要依赖于 TCP 来提供从客户端到服务器端之间的连接。在早期，HTTP 使用一个简单的模型来处理这样的连接。这些连接的生命周期是短暂的：每发起一个请求时都会创建一个新的连接，并在收到应答时立即关闭。")]),v._v(" "),s("p",[v._v("这个简单的的模型对性能有先天的限制：打开每一个 TCP 连接都是相当耗费资源的操作。客户端和服务器端之间需要交换好些个消息。当消息发起时，网络延迟和带宽都会对性能造成影响。现代浏览器往往需要发起很多次请求（十几个或者更多）才能拿到所需的完整信息，证明了这个早期模型的效率低下。")]),v._v(" "),s("p",[v._v("有两个新的模型在 HTTP/1.1 诞生了。首先是"),s("strong",[v._v("长连接模型")]),v._v("，它会保持连接取完成多次连续的请求，减少了不断重新打开连接的时间。然后是 "),s("strong",[v._v("HTTP 流水线模型")]),v._v("，他还要更先进一些，多个连续的请求甚至都不用等待立即返回就可以被发送，这样就减少了耗费在网络延迟上的时间。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(527),alt:"连接管理模型"}})]),v._v(" "),s("h2",{attrs:{id:"短连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短连接"}},[v._v("#")]),v._v(" 短连接")]),v._v(" "),s("p",[v._v("HTTP 最早期的模型，也是 HTTP/1.0 的默认模型，是"),s("strong",[v._v("短连接")]),v._v("。每一个 HTTP 请求都由它自己独立的连接完成，这意味着发起每一个 HTTP 请求之前都会有一次 TCP 握手，而且是连续不断的。")]),v._v(" "),s("p",[v._v("TCP 协议握手本身就是耗费时间的，所以 TCP 可以保持更多的热连接来适应负载。短连接破坏了 TCP 具备的能力，新的冷连接降低了其性能。")]),v._v(" "),s("p",[v._v("这是 HTTP/1.0 的默认模型（如果没有指定 "),s("code",[v._v("Connection")]),v._v(" 协议头，或者是值被设置为 "),s("code",[v._v("close")]),v._v("）。而在 HTTP/1.1 中，只有当 "),s("code",[v._v("Connection")]),v._v(" 被设置为 "),s("code",[v._v("close")]),v._v(" 时才会用到这个模型。")]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[v._v("❕ 除非是要兼容一个非常古老的，不支持长连接的系统，没有一个令人信服的理由继续使用这个模型。")])]),v._v(" "),s("h3",{attrs:{id:"tcp-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议"}},[v._v("#")]),v._v(" TCP 协议")]),v._v(" "),s("p",[v._v("TCP 协议头部的格式：")]),v._v(" "),s("p",[s("img",{attrs:{src:t(528),alt:"TCP头部格式"}})]),v._v(" "),s("ul",[s("li",[s("code",[v._v("Source Port")]),v._v(" 和 "),s("code",[v._v("Destination Port")]),v._v("：分别占用 16 位，标识源端口号和目的端口号，用于区别主机中的"),s("strong",[v._v("不同进程")]),v._v("。")]),v._v(" "),s("li",[s("code",[v._v("Sequence Number")]),v._v("：序列号（"),s("code",[v._v("seq")]),v._v("，32 位）\n"),s("ul",[s("li",[v._v("如果含有同步化旗标（"),s("code",[v._v("SYN")]),v._v("），则此为 TCP 报文段最初的序列号 - 第一个数据字节的序列码为本序列号加 1")]),v._v(" "),s("li",[v._v("如果没有同步化旗标（"),s("code",[v._v("SYN")]),v._v("），则此为 TCP 报文段第一个数据字节的序列码")])])]),v._v(" "),s("li",[s("code",[v._v("Acknowledgment Number")]),v._v("：确认号（"),s("code",[v._v("ack")]),v._v("，32位），期望从发送确认的一端收到的下一个序列号，也即应当是上次已成功收到数据字节序号加 1")]),v._v(" "),s("li",[s("code",[v._v("Offset")]),v._v("：数据偏移（4 位），以 4 字节为单位计算出的数据段开始地址的偏移值")]),v._v(" "),s("li",[s("code",[v._v("Reserved")]),v._v("：保留（3 位），须置 0")]),v._v(" "),s("li",[s("code",[v._v("TCP Flags")]),v._v("：标志位（9 位）\n"),s("ul",[s("li",[s("code",[v._v("NS")]),v._v("：ECN-nonce")]),v._v(" "),s("li",[s("code",[v._v("CWR")]),v._v("：Congestion Window Reduced")]),v._v(" "),s("li",[s("code",[v._v("ECE")]),v._v("：ECN-Echo 有两种意思，取决于 "),s("code",[v._v("SYN")]),v._v(" 标志的值")]),v._v(" "),s("li",[s("code",[v._v("URG")]),v._v("：为 1 表示高优先级数据包，紧急指针字段有效。用来保证 TCP 连接不被终端，并且督促中间层设备要尽快处理这些数据")]),v._v(" "),s("li",[s("code",[v._v("ACK")]),v._v("：为 1 表示确认号字段有效")]),v._v(" "),s("li",[s("code",[v._v("PSH")]),v._v("：为 1 表示是带有 PUSH 标志的数据，指示接收方应该尽快将这个报文段交给应用层而不用等待缓冲区装满")]),v._v(" "),s("li",[s("code",[v._v("RST")]),v._v("：为 1 表示出现严重差错。可能需要重现创建 TCP 连接。还可以用于拒绝非法的报文段和拒绝连接请求")]),v._v(" "),s("li",[s("code",[v._v("SYN")]),v._v("：为 1 表示这是连接请求或是连接接受请求，用于创建连接和使顺序号同步")]),v._v(" "),s("li",[s("code",[v._v("FIN")]),v._v("：为 1 表示发送方没有数据要传输，要求释放连接")])])]),v._v(" "),s("li",[s("code",[v._v("Window")]),v._v("：窗口大小（"),s("code",[v._v("WIN")]),v._v("，16 位），表示从确认好开始，本报文的发送方可以接收的字节数，即接收窗口的大小。用于流量控制。")])]),v._v(" "),s("h3",{attrs:{id:"三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),s("p",[s("img",{attrs:{src:t(529),alt:"三次握手"}})]),v._v(" "),s("ol",[s("li",[v._v("第一次握手：建立连接，客户端发送"),s("em",[v._v("连接请求")]),v._v("报文段，设置 "),s("code",[v._v("SYN = 1, seq = x")]),v._v("。客户端进入 "),s("code",[v._v("SYN_SENT")]),v._v(" 状态，等待服务器的确认")]),v._v(" "),s("li",[v._v("第二次握手：服务器收到客户端的"),s("em",[v._v("连接请求")]),v._v("报文段并进行确认，若同意连接，则服务器发送"),s("em",[v._v("连接应答")]),v._v("报文段，设置 "),s("code",[v._v("SYN = 1, ACK = 1, seq = y, ack = x + 1")]),v._v("。此时服务器进入 "),s("code",[v._v("SYN_RCVD")]),v._v(" 状态")]),v._v(" "),s("li",[v._v("第三次握手：客户端收到服务器的"),s("em",[v._v("连接应答")]),v._v("报文段后，还要向服务器发送一个"),s("em",[v._v("确认")]),v._v("报文段 "),s("code",[v._v("ACK = 1, seq = x + 1, ack = y + 1")]),v._v("，表示服务器发来的连接同意应答已经成功收到。客户端发送完这个报文段后便进入 "),s("code",[v._v("ESTABLISHED")]),v._v(" 状态，服务器收到这个应答后也进入 "),s("code",[v._v("ESTABLISHED")]),v._v(" 状态，此时连接的建立完成。")])]),v._v(" "),s("h4",{attrs:{id:"思考：为什么需要三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考：为什么需要三次握手"}},[v._v("#")]),v._v(" 思考：为什么需要三次握手")]),v._v(" "),s("p",[v._v("在谢希仁著《计算机网络》书中的举例如下：")]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[v._v("“已失效的连接请求报文段”的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段，但 server 收到此失效的连接请求报文段后，就误以为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就被白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况， client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。")])]),v._v(" "),s("h4",{attrs:{id:"思考：为什么不能两次握手或者四次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考：为什么不能两次握手或者四次握手"}},[v._v("#")]),v._v(" 思考：为什么不能两次握手或者四次握手")]),v._v(" "),s("p",[v._v("两次握手演绎")]),v._v(" "),s("ol",[s("li",[v._v("客户端发送一个起始序列号 "),s("code",[v._v("seq = x")]),v._v(" 的报文段给服务器")]),v._v(" "),s("li",[v._v("服务器返回向客户端发送确认号 "),s("code",[v._v("ack = x + 1")]),v._v("，表示对客户端的起始序列号 "),s("code",[v._v("x")]),v._v(" 表示确认，并告诉客户端，它的起始序列号是 "),s("code",[v._v("seq = y")])])]),v._v(" "),s("p",[v._v("所以在这种情况下， 两次握手只有服务器对客户端的起始序列号做了确认，但客户端却没有对服务器的起始序列号做确认，"),s("strong",[v._v("不能保证传输的可靠性")]),v._v("。")]),v._v(" "),s("p",[v._v("四次握手演绎")]),v._v(" "),s("ol",[s("li",[v._v("客户端发送同步信号 "),s("code",[v._v("SYN")]),v._v(" 和起始序列号 "),s("code",[v._v("seq = x")])]),v._v(" "),s("li",[v._v("服务器端确认收到客户端的同步信号 "),s("code",[v._v("SYN")]),v._v("，并记录客户端的起始序列号，向客户端发送确认信息 "),s("code",[v._v("ack = x + 1")])]),v._v(" "),s("li",[v._v("服务器发送同步信号 "),s("code",[v._v("SYN")]),v._v(" 和起始序列号 "),s("code",[v._v("seq = y")]),v._v(" 给客户端")]),v._v(" "),s("li",[v._v("客户端收到服务器端的同步信号 "),s("code",[v._v("SYN")]),v._v("，并记录服务器端的起始序列号，向服务器端发送确认信息 "),s("code",[v._v("ack = y + 1")])])]),v._v(" "),s("p",[v._v("很明显，第 2、 3 步可以合并，只需要三次握手，可以提高连接的速度和效率。")]),v._v(" "),s("h3",{attrs:{id:"四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),s("p",[s("img",{attrs:{src:t(530),alt:"四次挥手"}})]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[v._v("TCP 连接是"),s("strong",[v._v("双向")]),v._v("的，因此在四次挥手中，前两次挥手用于断开一个方向的连接，后两次挥手用于断开另一方向的连接。")])]),v._v(" "),s("ol",[s("li",[s("p",[v._v("第一次挥手：若 A 认为数据发送完成，则它需要向 B 发送"),s("em",[v._v("连接释放请求")]),v._v("。该请求只有报文头，头中携带的主要参数为 "),s("code",[v._v("FIN = 1, seq = u")]),v._v("。此时，A 将进入 "),s("code",[v._v("FIN-WAIT-1")]),v._v(" 状态")])]),v._v(" "),s("li",[s("p",[v._v("第二次挥手：B 收到"),s("em",[v._v("连接释放请求")]),v._v("后，会通知相应的应用程序，告诉它 "),s("strong",[v._v("A -> B")]),v._v(" 这个方向的连接已经释放。此时 B 进入 "),s("code",[v._v("CLOSE-WAIT")]),v._v(" 状态，并向 A 发送"),s("em",[v._v("连接释放应答")]),v._v("，其报文头包含 "),s("code",[v._v("ACK = 1, seq = v, ack = u + 1")])]),v._v(" "),s("p",[v._v("A 收到该应答，进入 "),s("code",[v._v("FIN-WAIT-2")]),v._v(" 状态，"),s("strong",[v._v("等待 B 发送连"),s("em",[v._v("接释放请求")])])])]),v._v(" "),s("li",[s("p",[v._v("当 B 向 A 发完所有数据后，向 A 发送"),s("em",[v._v("连接释放请求")]),v._v("，其报文头包含 "),s("code",[v._v("FIN = 1, ACK = 1, seq = w, ack = u + 1")]),v._v("。B 进入 "),s("code",[v._v("LAST-ACK")]),v._v(" 状态")])]),v._v(" "),s("li",[s("p",[v._v("A 收到"),s("em",[v._v("连接释放请求")]),v._v("后，向 B 发送"),s("em",[v._v("释放确认应答")]),v._v("，其报文头包含 "),s("code",[v._v("ACK = 1, seq = u + 1, ack = w + 1")]),v._v("，此时 A 进入 "),s("code",[v._v("TIME-WAIT")]),v._v(" 状态。该状态会持续 "),s("code",[v._v("2MSL")]),v._v(" 时间，若该时间段内没有 B 的重发请求的话，就进入 "),s("code",[v._v("CLOSED")]),v._v(" 状态，断开 TCP。当 B 收到是"),s("em",[v._v("释放确认应答")]),v._v("后，也便进入 "),s("code",[v._v("CLOSED")]),v._v(" 状态，断开 TCP。")])])]),v._v(" "),s("h4",{attrs:{id:"思考：为什么-a-要先进入-time-wait-状态，等待-2msl-时间后才进入-closed-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考：为什么-a-要先进入-time-wait-状态，等待-2msl-时间后才进入-closed-状态"}},[v._v("#")]),v._v(" 思考：为什么 A 要先进入 TIME-WAIT 状态，等待 2MSL 时间后才进入 CLOSED 状态")]),v._v(" "),s("p",[v._v("为了保证 B 能收到 A 的确认应答。若 A 发完确认应答后直接进入 "),s("code",[v._v("CLOSED")]),v._v(" 状态，那么如果该应答丢失，B 等待超时后就会重新发送连接释放请求，此时 A 已经关闭，不会做出任何响应，B 永远无法正常关闭。")]),v._v(" "),s("h2",{attrs:{id:"长连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长连接"}},[v._v("#")]),v._v(" 长连接")]),v._v(" "),s("p",[v._v("短连接有两个比较大的问题： 创建新连接耗费的时间尤为明显，另外 TCP 连接的性能只有在该连接被使用一段时间后（热链接）才能得到改善。为了缓解这些问题，"),s("strong",[v._v("长连接")]),v._v("的概念便被设计出来，甚至在 HTTP/1.1 之前。或者这被称之为一个 "),s("code",[v._v("keep-alive")]),v._v(" 连接。")]),v._v(" "),s("p",[v._v("一个长连接会保持一段时间，重复用于发送一系列请求，节省了新建 TCP 连接握手的时间，还可以利用 TCP 的性能增强能力。当然这个连接也不会一直保留着：连接在空闲一段时间后会被关闭（服务器可以使用 "),s("code",[v._v("Keep-Alive")]),v._v(" 协议头来指定一个最小的连接保持时间）。")]),v._v(" "),s("p",[v._v("长连接也还是有缺点的：就算是在空闲状态，它还是会消耗服务器资源，而且在重负载时，还有可能遭受 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/DoS_attack",target:"_blank",rel:"noopener noreferrer"}},[v._v("Dos attacks"),s("OutboundLink")],1),v._v(" 攻击。这种场景下，可以使用非长连接，即尽快关闭那些空闲的连接，也能对性能有所提升。")]),v._v(" "),s("h3",{attrs:{id:"连接相关的头字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接相关的头字段"}},[v._v("#")]),v._v(" 连接相关的头字段")]),v._v(" "),s("p",[v._v("由于长连接对性能的改善效果非常显著，所以在 HTTP/1.1 中的连接都会"),s("strong",[v._v("默认")]),v._v("启用长连接。不需要用什么特殊的头字段指定，只要向服务器发送了第一次请求，后续的请求都会重复利用第一次打开的 TCP 连接，也就是长连接，在这个连接上收发数据。")]),v._v(" "),s("p",[v._v("使用长连接的 HTTP 协议，会在响应头加上：")]),v._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("Connection: keep-alive\n")])])]),s("p",[s("img",{attrs:{src:t(531),alt:"keep-alive"}})]),v._v(" "),s("p",[v._v("客户端可以通过在请求头里加上 "),s("code",[v._v("Connection: close")]),v._v(" 字段主动关闭连接，服务器在收到这个字段后，在响应报文里也加上这个字段，发送之后就关闭 TCP 连接。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(532),alt:"close"}})]),v._v(" "),s("h2",{attrs:{id:"队头阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队头阻塞"}},[v._v("#")]),v._v(" 队头阻塞")]),v._v(" "),s("p",[s("strong",[v._v("队头阻塞 (Head-of-line blocking)")]),v._v("，与短连接和长连接无关，而是由 HTTP 基本的“请求 - 响应”模型所导致的。")]),v._v(" "),s("p",[v._v("HTTP 规定报文必须是“一收一发”，这就形成了一个先进先出的“串行”队列。队列里的请求没有轻重缓急的优先级，只有入队的先后顺序，排在最前面的请求被最优先处理。如果队首的请求因为处理的太慢耽误了时间，那么队列里后面的所有请求也不得不跟着一起等待，结果就是其他的请求承担了不应有的时间成本。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(533),alt:"队头阻塞"}})]),v._v(" "),s("h3",{attrs:{id:"管道化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道化"}},[v._v("#")]),v._v(" 管道化")]),v._v(" "),s("p",[v._v("HTTP/1.1 允许在"),s("strong",[v._v("持久连接")]),v._v("上使用管道，HTTP 管道化是将多个 HTTP 请求整批提交的技术，而在发送过程中不需先等待服务器的回应。")]),v._v(" "),s("p",[v._v("HTTP/1.1 需要服务器也支持管道化，但这并不意味着服务器需要管道化响应，而是当客户端发出管道化请求时，服务器不会响应失败。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(534),alt:"管道化"}})])])}),[],!1,null,null,null);e.default=o.exports},527:function(v,e,t){v.exports=t.p+"assets/img/connection_model.e48ed44d.png"},528:function(v,e,t){v.exports=t.p+"assets/img/tcp.62ecb3e9.png"},529:function(v,e){v.exports="data:image/png;base64,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"},530:function(v,e,t){v.exports=t.p+"assets/img/four.bb39d3f7.jpg"},531:function(v,e,t){v.exports=t.p+"assets/img/keep-alive.27f13aac.png"},532:function(v,e,t){v.exports=t.p+"assets/img/close.ecfb04b7.png"},533:function(v,e,t){v.exports=t.p+"assets/img/front.6a6d30a8.png"},534:function(v,e,t){v.exports=t.p+"assets/img/pipeline.4755e97f.png"}}]);