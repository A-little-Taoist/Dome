// var arr = [5, 6, 1, 3, 0, 4, 7, 9];
// var index = [2, 0, 1, 4, 6, 2, 5, 0, 1, 7, 3];
// var tell;
// for (var i = 0; i < index.length; i++) {
//   tell += arr[i];
//   console.log(tell);
// }

for (var i = 1; i < 10; i++) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str += j + "*" + i + "=" + i * j + "\t";

    // document.write(j + "*" + i + "=" + i * j + "  ");
  }
  console.log(str);
  document.write("<pre>");
  document.write(str);
  document.write("</pre>");
}

document.write("<br>");

for (var i = 1; i < 10; i++) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str = j + "*" + i + "=" + i * j;
    document.write("<span>");
    document.write(str);
    document.write("</span>");
  }
  document.write("<br>");
}
document.querySelector("span").style.display = "block";
document.querySelector("span").style.width = "70px";

//创建元素
for (var i = 1; i < 10; i++) {
  document.querySelector("ul").innerHTML += "<li></li>";
  let odiv = document.createElement("div");
  let textNode = document.createTextNode("学习前端，我们是认真的");
  odiv.appendChild(textNode);
  odiv.style.color = "blue";
  document.body.appendChild(odiv);
}
