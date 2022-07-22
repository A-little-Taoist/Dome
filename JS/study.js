// //000. ({} + {}).length的长度
// console.log("({} + {}).length的长度：");
// console.log(({} + {}).length); //30
// console.log(({} + 1).length);
// console.log("----------------------------------------------------------------");

// // // 001. 3与5的倍数 multiples of 3 and 5
// console.log("3与5的倍数 multiples of 3 and 5:");
//   var a ;
//   for(i = 1;i<1000;i++){
//       if(i%3==0 || i%5==0)
//       console.log(i);
//   }

// //   console.log("----------------------------------------------------------------");
// // // 002. 偶数斐波那契数(even Fiibonacci numbers)
// console.log("偶数斐波那契数(even Fiibonacci numbers:")
// var a = 1;
// var b = 2;
// for (var i = 0 ; i < 10;i++){
//     if(a < b){
//      console.log(a=a+b);
//     //  console.log("a:"+a);
//     }
//      else {
//        console.log( b=a+b);
//       //  console.log("b:"+b);
//      }
// }

// // console.log("----------------------------------------------------------------");
// // 003. 最大质因数(largest prime factor)

// var n = 600851475143;
// var maxi = 0;
// for (var i = 3; i < n; i += 2) {
//   if (n % i == 0) {
//     console.log(i);
//     maxi = i;
//     n /= i;
//   }
// }
// console.log("最大质因数：" + maxi);

// // console.log("----------------------------------------------------------------");

// //004.最大回文数乘积(largest palindrome product)
// // 回文数即从正反两边读都是一样的数，两个二位数的乘积中最大的回文数为9009=91∗99，
// // 寻找两个三位数乘积中最大的回文数。

// var mix = 0;
// var n = 0;
// var m = 0;
// for (var i = 100; i < 1000; i++) {
//   for (var j = 100; j < 1000; j++) {
//     if (i * j > 100000) {
//       if (
//         (i * j) % 10 == (i * j) / 100000 &&
//         ((i * j) / 10000) % 10 == ((i * j) / 10) % 10 &&
//         ((i * j) / 1000) % 10 == ((i * j) / 100) % 10
//       ) {
//         if (mix < i * j) {
//           mix = i * j;
//           n = i;
//           m = j;
//         }
//       }
//     }
//   }
// }
// // console.log("004.最大回文数乘积:" + mix);

// // console.log("----------------------------------------------------------------");
// //  005. 最小公倍数(smallest multiple)
// // 2520是可以被从一到十所有自然数整除的最小的数，
// // 即为从一到十的自然数的最小公倍数，求从一到二十所有自然数的最小公倍数。

// for (var i = 21; ; i++) {
//   var j;
//   for (j = 2; j < 21; j++) {
//     if (i % j == 0) continue;
//     else break;
//   }

//   if (j == 21) {
//     console.log(i);
//     break;
//   }
// }

// // console.log("----------------------------------------------------------------");

// // 006. 和的平方与平方的和之间的差值(Sum square difference)

// var sum = 0;
// var aum = 0;
// for (var i = 1; i < 11; i++) {
//   sum += i;
//   aum += i ** 2;
// }
// console.log(Math.pow(sum, 2) - aum);

// // console.log("----------------------------------------------------------------");

// //  007. 第10001个质数(10001stprime)
// var n = 1;
// var m = 0;
// for (var i = 1; n < 10002; i++) {
//   for (var j = 2; j < i; j++) {
//     if (i % j == 0) break;
//   }
//   if (i == j) {
//     n++;
//     m = i;
//   }
// }
// console.log("第" + (n - 1) + "个质数:" + m);

// // console.log("----------------------------------------------------------------");

// //  008. 序列中的最大乘积(Largest product in a series)
// 在下1000位数中，连续四个数的最大乘积为9∗9∗8∗9=5832:
// 寻找连续十三数的最大乘积，这个乘积是多少
// 存入txt文件中用js FileReader()读取出来

/* document.write('<input type="file" />');
const input = document.querySelector("input");
var s;
input.addEventListener(
  "change",
  () => {
    var reader = new FileReader();
    reader.readAsText(input.files[0], "utf8");
    reader.onload = () => {
      s = reader.result;
      var sum = s.split("");
      var productmax = 1;
      var product;
      for (var i = 0; i < sum.length; i++) {
        product = 1;
        for (var j = 0; j < 13; j++) {
          product *= sum[i + j];
        }
        if (product > productmax) productmax = product;
      }
      console.log(productmax);
    };
  },
  false
); */

// //  009. 特殊的毕达哥拉斯三元数(Special Pythagorean triplet)
// // 毕达哥拉斯三元数是指一类三个自然数的集合，其中a<b<c且a^2+b^2=c^2，例如3^2+4^2=5^2。仅存在一组毕达哥拉斯三元数使得a+b+c=1000，求abc。

// var a, b, c;

// for (a = 1, b = 0; a < 500; a++) {
//   b = (1000 ** 2 - 2 * 1000 * a) / (2.0 * 1000 - 2 * a);
//   if (b % 1 === 0) {
//     if (a < b) {
//       c = 1000 - a - b;
//       console.log("a:" + a, "b:" + b, "c:" + c);
//       break;
//     }
//   }
// }

// // console.log("----------------------------------------------------------------");
//  010. 质数的和(Summation of primes)
//注意：百万级质数和超过了number的最大值9007199254740992，这个值是 16 位。【可能】
/* var sum = 0;
for (var i = 2; i < 200000; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      break;
    }
  }
  if (i == j) {
    sum += i;
  }
}
console.log(sum); */

//012. 高度可除的三角数(highly divisible triangular number)
// 三角数即由依次排列的自然数的和构成，所以第7个三角数是1+2+3+4+5+6+7=28，前十个三角数是：1,3,6,10,15,21,28,36,45,55,⋯
//我们可以我知到 28 是第一个有五个以上除数（因子）的三角数。
// 第一个有超过 500 个除数（因子）的三角数的值是多少？
/* var n = 0;
var num;
for (var i = 1; ; i++) {
  n += i;
  num = 0;
  for (var j = 1; j <= n; j++) {
    if (n % j == 0) {
      num++;
      // console.log(num);
    }
  }
  if (num > 5) break;
  //垃圾算法 最多到四百左右 500时间太长
  // if (num > 500) break;
}
console.log(n); */

//016. 指数各位数之和(power digit sum)
//2^15=32768且各位数之和为3+2+7+6+8=26，求2^1000各个位数之和。

/* var n = Math.pow(2, 1000);
var sum = 0;
for (var i = 0; n > 0; i++, n = Math.floor(n / 10)) {
  sum += n % 10;
}
console.log(sum); */

//019. 计算星期天的数量(counting Sundays)
//1900年1月1日至2000年12月31日每个月的首日是星期天的次数是多少?

var data1 = new Date(1990, 1, 1) * 1;
console.log(data1);
var data2 = new Date(2000, 12, 31) * 1;

function getLocalTime(nS) {
  return new Date(parseInt(nS) * 1000)
    .toLocaleString()
    .replace(/:\d{1,2}$/, " ");
}
// for (var i = data1; i < data2; i += 86400) {
//   console.log(getLocalTime(i));
// }
