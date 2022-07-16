//与原生js区别
//原生js 的入口函数，页面所有内容加载完毕，才执行  （文本、图片...）
//jquery 文档加载完毕，图片不加载就可以执行

//写法1 jquery 文档加载完毕，图片不加载就可以执行
$(document).ready(function () {
  alert(1);
});

//写法2 简洁版  jquery 文档加载完毕，图片不加载就可以执行
$(function () {
  alert(1);
});

//写法3  jquery 文档加载完毕，图片加载完毕 后可以执行
$(window).ready(function () {
  alert(1);
});

// 区别一：书写个数不同：

// Js 的入口函数只能出现一次，出现多次会存在事件覆盖的问题。

// jQuery 的入口函数，可以出现任意多次，并不存在事件覆盖问题。

// 区别二：执行时机不同：

// Js的入口函数是在所有的文件资源加载完成后，才执行。这些文件资源包括：页面文档、外部的js文件、外部的css文件、图片等。

// jQuery的入口函数，是在文档加载完成后，就执行。文档加载完成指的是：DOM树加载完成后，就可以操作DOM了，不用等到所有的外部资源都加载完成。

// 文档加载的顺序：从上往下，边解析边执行。

//获取js中的DOM对象
var dom = $("#box");
var dom = $(".box");
var dom = $("div");

//jQuery 带有css()方法
dom.css({ width: "100%", height: "100" });

//原生js 与 jQuery 相互转换
//1、 DOM对象 转换为 jQuery对象
// $(js对象);
dom = $(divArr);

// DOM 对象转换成了 jquery 对象之后，上面的功能可以直接调用。

//2、 jQuery对象转换为DOM对象

/* jquery对象[index];
jquery对象.get(index);*/

// jQuery对象转换成了 DOM 对象之后，可以直接调用 DOM 提供的一些功能。如：

dom[0].style.backgroundColor = "red";
dom.get(3).style.backgroundColor = "pink";

// 总结：如果想要用哪种方式设置属性或方法，必须转换成该类型。

// jQuery 选择器 css一致

// jQuery 基本过滤选择器
//:eq(index) index从0开始的数字 选择序号为index的元素 第一个匹配的元素
// 用法：
$("li:eq(1)").css("background", "red");

//:gt(index) index从0开始的数字 选择序号为大于index的元素
// 用法：
$("li:gt(1)").css("background", "red");

//:lt(index) index从0开始的数字 选择序号为小于index的元素
// 用法：
$("li:lt(1)").css("background", "red");

//:odd  选择d=所有序号为奇数的元素
// 用法：
$("li:odd").css("background", "red");

//:even  选择所有序号为偶数的元素
// 用法：
$("li:even").css("background", "red");

//:first  选择第一个匹配的元素
// 用法：
$("li:first").css("background", "red");

//:last 选择最后一个匹配的元素
// 用法：
$("li:last").css("background", "red");

// jQuery属性选择器
// $("[href]") 选择所有包含href属性的元素
// 用法
$("a[href]").css("background", "red");

// $("[href='itcast']") 选择href属性为itcast的所有a标签
// 用法
$("a[href='itcast']").css("background", "red");

// $("[href!='itcast']") 选择href属性不等于itcast的所有元素,包括没有href属性的元素
// 用法
$("a[href!='itcast']").css("background", "red");

// $("[href^='web']") 选择所有以web开关的元素
// 用法
$("a[href^='web']").css("background", "red");

// $("[href$='web']") 选择所有以web结尾的元素
// 用法
$("a[href$='web']").css("background", "red");

// $("[href*='i']") 选择所有以包含i这个字符的元素， 可中英文
// 用法
$("a[href*='web']").css("background", "red");

// $("[href][title='我']") 选择所有符合指定属性规则的元素,都符合才会选中
// 用法
$("a[href][title='我']").css("background", "red");

//筛选选择器

// not("类名 id 标签") 排除

// find(selector)  查找指定元素的所有后代元素
// 用法
$("#dom").find("li").css("background", "red"); //选择id为dom的所有后代元素li

// children()  查找指定元素的直接子元素（亲儿子）
// 用法
$("#dom").children("li").css("background", "red");

// siblings()  查找指定元素的所有兄弟元素 不包括自己
// 用法
$("#dom").siblings("li").css("background", "red");

// parent()  查找指定元素的直接父元素（亲的）
// 用法
$("#dom").parent("li").css("background", "red");

// eq(index)  查找指定元素的第index个元素 index从0开始
// 用法
$("li").eq(2).css("background", "red"); //选择所有li元素中的第3个

//jQuery 动画
