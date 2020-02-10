(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{331:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),n("h2",{attrs:{id:"词法作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),n("p",[n("strong",[t._v("作用域")]),t._v("是指程序源代码中定义变量的区域，它用来管理引擎如何在当前作用域以及嵌套的子作用域中，根据标识符名称进行变量查找。")]),t._v(" "),n("p",[t._v("作用域共有两种主要的工作模型。第一种是JavaScript 采用的"),n("strong",[t._v("词法作用域")]),t._v("，另一种是"),n("strong",[t._v("动态作用域")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("词法作用域 (lexical scoping)")]),t._v(" 就是定义在词法阶段的作用域。换句话说，词法作用域是由在写代码时将变量和块作用域写在哪里来决定的。")]),t._v(" "),n("p",[t._v("与词法作用域相对的是动态作用域，它并不关心函数和作用域是如何声明以及在何处声明的，只关心它们"),n("strong",[t._v("从何处调用")]),t._v("。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套。")]),t._v(" "),n("p",[t._v("以下面的例子区分两者：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("因为 JavaScript 采用词法作用域，上面代码中的 "),n("code",[t._v("foo()")]),t._v(" 在执行时通过作用域向上查找到值为 "),n("code",[t._v("2")]),t._v(" 的变量 "),n("code",[t._v("a")]),t._v("。")]),t._v(" "),n("p",[t._v("如果 JavaScript 具有动态作用域，理论上，上面代码中的 "),n("code",[t._v("foo()")]),t._v(" 在执行时将会输出 "),n("code",[t._v("3")]),t._v("。")]),t._v(" "),n("p",[t._v("这是因为当 "),n("code",[t._v("foo()")]),t._v(" 无法找到变量 "),n("code",[t._v("a")]),t._v(" 引用时，会顺着调用栈在调用 "),n("code",[t._v("foo()")]),t._v(" 的地方查找 "),n("code",[t._v("a")]),t._v("，而不是在嵌套的词法作用域中向上查找。")]),t._v(" "),n("p",[t._v("由于 "),n("code",[t._v("foo()")]),t._v(" 是在 "),n("code",[t._v("bar()")]),t._v(" 中调用的，引擎会检查 "),n("code",[t._v("bar()")]),t._v(" 的作用域，并在其中找到值为 "),n("code",[t._v("3")]),t._v(" 的变量 "),n("code",[t._v("a")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"函数作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[t._v("#")]),t._v(" 函数作用域")]),t._v(" "),n("p",[t._v("对于顶层函数来说，函数外部声明的变量就是"),n("strong",[t._v("全局变量 (global variable)")]),t._v("，它可以在函数内部读取。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 1")]),t._v("\n")])])]),n("p",[t._v("在函数内部定义的变量，外部无法读取，称为"),n("strong",[t._v("局部变量 (local variable)")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nv  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: v is not defined")]),t._v("\n")])])]),n("p",[t._v("函数内部定义的变量，会在该作用域内覆盖同名全局变量。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 2")]),t._v("\n")])])]),n("p",[t._v("很容易犯错的一点是，如果函数 "),n("code",[t._v("A")]),t._v(" 调用函数 "),n("code",[t._v("B")]),t._v("，却没考虑到函数 "),n("code",[t._v("B")]),t._v(" 不会引用函数 "),n("code",[t._v("A")]),t._v(" 的内部变量。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("x")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: a is not defined")]),t._v("\n")])])]),n("p",[t._v("上面代码将函数 "),n("code",[t._v("x")]),t._v(" 作为参数传入函数 "),n("code",[t._v("y")]),t._v("，但函数 "),n("code",[t._v("x")]),t._v(" 是在函数 "),n("code",[t._v("y")]),t._v(" 体外声明的，作用域绑定外层，因此找不到函数 "),n("code",[t._v("y")]),t._v(" 的内部变量 "),n("code",[t._v("a")]),t._v("，导致报错。")]),t._v(" "),n("p",[t._v("同样的，函数体内部声明的函数，作用域绑定函数体内部。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bar\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 1")]),t._v("\n")])])]),n("p",[t._v("上面代码中函数 "),n("code",[t._v("foo")]),t._v(" 内部声明了一个函数 "),n("code",[t._v("bar")]),t._v("，"),n("code",[t._v("bar")]),t._v(" 的作用域绑定 "),n("code",[t._v("foo")]),t._v("。")]),t._v(" "),n("p",[t._v("当在 "),n("code",[t._v("foo")]),t._v(" 外部取出 "),n("code",[t._v("bar")]),t._v(" 执行时，变量 "),n("code",[t._v("x")]),t._v(" 指向的是 "),n("code",[t._v("foo")]),t._v(" 内部的 "),n("code",[t._v("x")]),t._v("，而不是 "),n("code",[t._v("foo")]),t._v(" 外部的 "),n("code",[t._v("x")]),t._v("。")]),t._v(" "),n("p",[t._v("正是这种机制，构成了"),n("strong",[t._v("闭包")]),t._v("现象。")]),t._v(" "),n("h2",{attrs:{id:"块级作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),n("p",[t._v("ES5 只有全局作用域和函数作用域，没有块级作用域，这带来了很多不合理的情景。")]),t._v(" "),n("h3",{attrs:{id:"变量提升带来的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量提升带来的问题"}},[t._v("#")]),t._v(" 变量提升带来的问题")]),t._v(" "),n("p",[n("strong",[t._v("1. 内层变量可能会覆盖外层变量")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tony'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> undefined")]),t._v("\n")])])]),n("p",[t._v("分析开始执行 "),n("code",[t._v("showName")]),t._v(" 函数时的调用栈：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(573),alt:"showName 函数调用栈"}})]),t._v(" "),n("p",[n("code",[t._v("showName")]),t._v(" 函数的执行上下文创建后，JavaScript 引擎便开始执行 "),n("code",[t._v("showName")]),t._v(" 函数内部的代码。首先执行的是：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("执行这段代码需要使用变量 "),n("code",[t._v("myname")]),t._v("，结合上面的调用栈状态图，可以看到这里有两个 "),n("code",[t._v("myname")]),t._v(" 变量：")]),t._v(" "),n("ul",[n("li",[t._v("一个在全局执行上下文中，其值为 "),n("code",[t._v("‘Tom’")])]),t._v(" "),n("li",[t._v("一个在 "),n("code",[t._v("showName")]),t._v(" 函数的执行上下文中，其值为 "),n("code",[t._v("undefined")])])]),t._v(" "),n("p",[t._v("在函数执行过程中，JavaScript 会优先从当前的执行上下文中查找变量。由于变量提升，当前的执行上下文中就包含了变量  "),n("code",[t._v("myname")]),t._v("，所以获取到的 "),n("code",[t._v("myname")]),t._v(" 值就是 "),n("code",[t._v("undefined")]),t._v("。")]),t._v(" "),n("p",[t._v("这样输出的结果和其他大部分支持块级作用域的语言都不一样，所以很容易造成误解。")]),t._v(" "),n("p",[n("strong",[t._v("2. 本应销毁的变量没有被销毁")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面代码中，变量 "),n("code",[t._v("i")]),t._v(" 用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。")]),t._v(" "),n("h3",{attrs:{id:"let、const"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let、const"}},[t._v("#")]),t._v(" let、const")]),t._v(" "),n("p",[t._v("ES6 引入了 "),n("code",[t._v("let")]),t._v(" 和 "),n("code",[t._v("const")]),t._v(" 关键字，从而使 JavaScript 也能像其他语言一样拥有了块级作用域。")]),t._v(" "),n("p",[n("code",[t._v("let")]),t._v(" 和 "),n("code",[t._v("const")]),t._v(" 两者之间的区别是：使用 "),n("code",[t._v("let")]),t._v(" 关键字声明的变量可以被修改，而使用 "),n("code",[t._v("const")]),t._v(" 关键字声明的变量其值不可以被改变。")]),t._v(" "),n("h3",{attrs:{id:"暂时性死区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#暂时性死区"}},[t._v("#")]),t._v(" 暂时性死区")]),t._v(" "),n("p",[t._v("只要块级作用域存在 "),n("code",[t._v("let")]),t._v(" 命令，它所声明的变量就"),n("strong",[t._v("绑定")]),t._v("这个区域，不再受外部的影响。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面代码中，存在全局变量 "),n("code",[t._v("tmp")]),t._v("，但是块级作用域内 "),n("code",[t._v("let")]),t._v(" 又声明了一个局部变量 "),n("code",[t._v("tmp")]),t._v("，导致后者绑定这个块级作用域，所以在 "),n("code",[t._v("let")]),t._v(" 声明变量前，对 "),n("code",[t._v("tmp")]),t._v(" 赋值会报错。")]),t._v(" "),n("p",[t._v("ES6 明确规定，如果区块中存在 "),n("code",[t._v("let")]),t._v(" 和 "),n("code",[t._v("const")]),t._v(" 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。")]),t._v(" "),n("p",[t._v("总之，在代码块内，使用 "),n("code",[t._v("let")]),t._v(" 命令声明变量之前，该变量都是不可用的。这在语法上称为"),n("strong",[t._v("暂时性死区 (temporal dead zone, TDZ)")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TDZ 开始")]),t._v("\n  tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TDZ 结束")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n  \n  tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 123")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"词法环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法环境"}},[t._v("#")]),t._v(" 词法环境")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("思考")]),t._v(" "),n("p",[t._v("在同一段代码中，ES6 如何做到既要支持变量提升的特性，又要支持块级作用域？")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("第一步，编译并创建执行上下文")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(574),alt:"刚执行时 foo 函数的执行上下文"}})]),t._v(" "),n("ul",[n("li",[t._v("通过 "),n("code",[t._v("var")]),t._v(" 声明的变量，在编译阶段全都被存放到"),n("strong",[t._v("变量环境")]),t._v("里")]),t._v(" "),n("li",[t._v("通过 "),n("code",[t._v("let")]),t._v(" 声明的变量，在编译阶段会被存放到"),n("strong",[t._v("词法环境 (Lexical Environment)")]),t._v(" 中")]),t._v(" "),n("li",[t._v("在函数的作用域内部，通过 "),n("code",[t._v("let")]),t._v(" 声明的变量没有被存放到词法环境中")])]),t._v(" "),n("p",[n("strong",[t._v("第二步，继续执行代码")])]),t._v(" "),n("p",[t._v("当执行到代码块时，变量环境中 "),n("code",[t._v("a")]),t._v(" 的值被设置成 "),n("code",[t._v("1")]),t._v("，词法环境中 "),n("code",[t._v("b")]),t._v(" 的值被设置成 "),n("code",[t._v("2")]),t._v("，此时函数的执行上下文如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(575),alt:"执行 foo 函数内部作用域块时的执行上下文"}})]),t._v(" "),n("p",[t._v("从图中可以看出，当进入函数的作用域块时，作用域块中通过 "),n("code",[t._v("let")]),t._v(" 声明的变量，会被存放到词法环境的一个单独的区域中。")]),t._v(" "),n("p",[t._v("这个区域中的变量并不影响作用域块外面的变量，如在作用域外面声明的变量 "),n("code",[t._v("b")]),t._v("，在该作用域内部也同样声明，当执行到作用域内部时，它们都是独立的存在。")]),t._v(" "),n("p",[t._v("在词法环境内部，维护了一个小型栈结构，栈底是函数最外部的变量。")]),t._v(" "),n("p",[t._v("进入一个作用域块后，就会把该作用域内部的变量压到栈顶；当作用域执行完成之后，该作用域的信息就会从栈顶弹出，这就是词法环境的结构。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("这里所讲的变量是指通过 "),n("code",[t._v("let")]),t._v(" 或 "),n("code",[t._v("const")]),t._v(" 声明的变量。")])]),t._v(" "),n("p",[t._v("当执行到作用域块中的 "),n("code",[t._v("console.log(a)")]),t._v(" 时，就需要在词法环境和变量环境中查找变量 "),n("code",[t._v("a")]),t._v(" 。")]),t._v(" "),n("p",[t._v("具体查找方式是：沿着词法环境的栈顶向下查询，如果在词法环境中的某个块中查找到，直接返回给 JavaScript 引擎；如果没有查找到，那么就继续在变量环境中查找。")]),t._v(" "),n("p",[t._v("这样一个变量查找过程就完成了：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(576),alt:"变量查找过程"}})]),t._v(" "),n("p",[t._v("从上图可以清晰地看出变量查找过程。当作用域块执行结束之后，其内部定义的变量就会从词法环境的栈顶弹出：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(577),alt:"作用域执行完成"}})]),t._v(" "),n("p",[t._v("通过上面的分析，可知块级作用域通过"),n("strong",[t._v("词法环境")]),t._v("的栈结构来实现，而变量提升是通过"),n("strong",[t._v("变量环境")]),t._v("来实现。通过这两者的结合，JavaScript 引擎也就同时支持了变量提升和块级作用域。")])])}),[],!1,null,null,null);s.default=e.exports},573:function(t,s,a){t.exports=a.p+"assets/img/03-showName-stack.f9f1d6cd.png"},574:function(t,s,a){t.exports=a.p+"assets/img/03-foo-stack-1.6b8f7c9c.png"},575:function(t,s,a){t.exports=a.p+"assets/img/03-foo-stack-2.b2a83fd2.png"},576:function(t,s,a){t.exports=a.p+"assets/img/03-foo-stack-3.7da4d99d.png"},577:function(t,s,a){t.exports=a.p+"assets/img/03-foo-stack-4.fc367a03.png"}}]);