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
var sum = 0;
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
console.log(sum);
