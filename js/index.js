"use strict";
// let str:string = "你好 ts"
// // 数字类型 number
// var a:number = 123
// console.log(a)
// // 字符串类型 string
// var str1:string = "this is ts"
// console.log(str1)
// // 1.第一种定义数组的方式
// var arr:number[]=[1,2,5]
// // 2.第二种定义数组的方式 泛型数组
// let arr2:Array<number>=[11,23,3535,35]
// console.log(arr2)
// //元组类型 属于数组的一种
// let arr3:[string,number,boolean] = ["ts",3.8,false]
// // 枚举类型 主要用来标识状态
// enum Flag {success=1,error=-1}
// // 当做变量去使用
// var f:Flag = Flag.success
// enum Color {red,blue,orange}
// var c:Color = Color.blue
// // 没有给枚举变量赋值 默认打印索引值 否则打印枚举值
// console.log(c)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// var oBox:any = document.getElementById("box");
// oBox.style.color = "red"
// // null 和undefined是其它数据类型的子类型
// // var num:number;
// // console.log(num) //输出undefined 报错
// var num:undefined
// console.log(num) //输出undefined 正确
// //定义未赋值 就是undefined
// var num1:number | undefined | null;
// num1 = 123
// console.log(num1)
// var num2:null
// num2 = null
// // es5的定义方法
// // function run(){
// //   console.log('run')
// // }
// // run()
// //正确写法
// function run():void{
//   console.log('run')
// }
// run()
// function run1():number{
//   return 123
// }
// run1();
// var b:never;
// b  = ( () => {
//   throw new Error("错误")
// })()
// // 3.第三种
//  var arr4:any[] = ['123456',22,true]
//  console.log(arr4)
//  //匿名函数
//  var fun2 = function():number{
//    return 123
//  }
//  alert( fun2());//调用方法
//  // ts中定义方法传参 
//  function getInfo(name:string ,age:number):string{
//    return `${name} --- ${age}`;
//  }
//  alert(getInfo('zhangsan',20))
//  //没有返回值的方法
//  function run4():void{
//   console.log("eee")
// }
// run4()
// //3.2 方法可选参数
//     function getInfo1(name:string,age?:number):string{
//       if(age){
//         return `${name} --- ${age}`;
//       }else{
//         return `${name} ---- 年龄保密`
//       }
//     }
//     alert(getInfo1( `zhangsan`,123))
//  // 3.3默认参数
//  // 注意：可选参数必须配置到参数的最后面
//     function getInfo2(name:string,age:number=20):string{
//       if(age){
//         return `${name} --- ${age}`;
//       }else{
//         return `${name} ---- 年龄保密`
//       }
//     }
// // 3.4 剩余参数
// function sum(a:number,...result:number[]):number{
//   var sum = 0;
//   for(var i = 0 ; i < result.length; i++){
//      sum = sum +  result[i]
//   }
//   return sum;
// } 
// alert( sum(1,2,3,4) )
// //三点运算符 接收形参传过来的值
// //3.5 ts函数重载
// // java中方法的重载 重载指的是两个或者两个以上同名函数 但它们
// // 参数不一样 这时会出现函数重载的情况
// // typeScript中的重载 通过为同一个函数提供多个函数类型定义来试下多种功能的目的
// // ts为了兼容es5 以及es6 重载的写法和java中有区别
// function getInFo(name:string):string;
// function getInFo(age:number):number;
// function getInFo(str:any):any{
//  return str;
// }
// alert(getInFo(true));
// // 3.6 箭头函数 es6 
//   setTimeout(function(){
//     alert('run')
//   },1000)
//   // 1. ts中继承的探讨 父类的方法和子类的方法一致
//   class Person{
//      public name:string;
//      constructor(name:string){
//        this.name = name;
//      }
//      run():string{
//        return `${this.name}在运动`
//      }
//   }
//   var p = new Person('王五')
//   alert(p.run()) 
//   class Web extends Person{
//     constructor(name:string){
//        super(name); /*初始化父类的构造函数 */
//     }
//   }
//   var w = new Web('李四');
//   alert(w.run())
//   // 3. 类里面的修饰符 typeScript里面定义属性的时候给我们提供给了三种修饰符
//   /**
//    * public 公有 在类里面、子类、类外面都可以访问
//    * protected:保护类型 在类里面、子类里面可以访问 在类外部没法访问
//    * private：私有 在类里面可以访问 子类、类外部都没法访问
//    * 属性如果不加修饰符默认是公有public 
//    */
//   //类外部访问公有属性
//   var p = new Person('哈哈哈')
//   alert(p.name)
//   //就是传入对象的约束 属性接口
//   interface FullName{
//     firstName:string; //注意;结束
//     secondName:string; 
//   }
//   function printName(name:FullName){
//     console.log(name.firstName + '---' +name.secondName)
//   }
//   var obj= {
//     age:20,
//     firstName:'张',
//     secondName:'三'
//   }
//   printName(obj);
//   // printName({
//   //   age:5,
//   //   firstName:'张',
//   //   secondName:'三'
//   // })
//   // TypeScript中的属性类型接口 ts封装
//   interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string;
//   }
//   function ajax(config:Config){
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type,config.url,true);
//     xhr.send(config.data)
//     xhr.onreadystatechange = function(){
//       if(xhr.readyState == 4 && xhr.status == 200){
//         console.log('成功')
//         if(config.dataType =='json'){
//           JSON.parse(xhr.responseText)
//         }else{
//           console.log(xhr.responseText)
//         }
//       }
//     }
//   }
//   ajax({
//     type:'get',
//     url:'http://www.baidu.com',
//     dataType:'json'
//   })
//   //函数类型接口:对方法传入的参数以及返回值进行约束 批量约束
//   //加密的函数类型接口
//   interface encrypt{
//     (key:string , value:string):string;
//   }
//   var md5:encrypt = function(key:string,value:string):string{
//     return key + '====' +  value
//   }
//   //ts定义数组的方式
//   //可索引接口 数组、对象的约束
//   // var arr:number[] = [2345 ,24656]
//   // var arr1:Array<string> = ['111','2222']
//   interface UserArr{
//     [index:number]:string
//   }
//   var arr5:UserArr = ['56465','456465']
/**
 * 装饰器：装饰器是一种特殊类型的声明，它能被附加到类声明，方法，属性或参数上，可以修改类的行为
 * 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
 *
 */
// 1.装饰器：类装饰器在类声明之前被声明(紧靠着类声明)。类修饰器应用于类
// 构造函数，可以用来监视，修改或替换类定义。传入一个参数
// 1.1类装饰器：普通装饰器（无法传参）
function logClass(params) {
    console.log(params);
    //params就是当前类
    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log("我是一个run方法");
    };
}
let HttpClient = class HttpClient {
    constructor() {
    }
    getData() {
    }
};
HttpClient = __decorate([
    logClass
], HttpClient);
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
// 1.2 类装饰器：装饰器工厂（可传参）
function logClass1(params) {
    return function (target) {
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = params;
    };
}
let HttpClient1 = class HttpClient1 {
    constructor() {
    }
    getData() {
    }
};
HttpClient1 = __decorate([
    logClass1("http://www.itying.com/api")
], HttpClient1);
var http1 = new HttpClient1();
console.log(http1.apiUrl);
/**
 *  1.类装饰器
 *    下面是一个重载构造函数的例子
 *    类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数
 *    如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
 */
function logClass2(target) {
    console.log(target);
    return class extends target {
        constructor() {
            super(...arguments);
            this.apiUrl = "我是修改后的数据";
        }
        getData() {
            this.apiUrl = this.apiUrl + '----';
            console.log(this.apiUrl);
        }
    };
}
let HttpClient2 = class HttpClient2 {
    constructor() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    getData() {
        console.log(this.apiUrl);
    }
};
HttpClient2 = __decorate([
    logClass2
], HttpClient2);
var http2 = new HttpClient2();
http2.getData();
// 属性修饰器表达式会在运行时当作函数被调用，传入下列两个参数
//   1.对于静态成员来说类的构造函数，对于实例成员是类的原型对象
//   2.成员的名字
//类装饰器
function logClass3(params) {
    return function (target) {
        console.log("target", target);
        console.log("params", params);
    };
}
//属性装饰器
function logProperty(params) {
    return function (target, attr) {
        console.log(target);
        console.log(attr);
        target[attr] = params;
    };
}
let HttpClient3 = class HttpClient3 {
    constructor() {
    }
    getData() {
        console.log(this.apiUrl);
    }
};
__decorate([
    logProperty('http://itying.com')
], HttpClient3.prototype, "apiUrl", void 0);
HttpClient3 = __decorate([
    logClass3("xxxx")
], HttpClient3);
var http3 = new HttpClient3();
http3.getData();
//3. 方法装饰器一
// 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义
// 方法修饰会在运行时传入下列三个参数：
//  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//  2.成员的名字
//  3.成员的属性描述符
function logMethod(params) {
    // (构造器,方法名,描述)
    return function (target, methodName, desc) {
        console.log("logMethod --- target", target);
        console.log("logMethod --- methodName", methodName);
        console.log("logMethod --- desc", desc);
        target.apiUrl = 'xxx';
        target.run = function () {
            console.log('run');
        };
    };
}
class HttpClient4 {
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
}
__decorate([
    logMethod('http://www.itying.com')
], HttpClient4.prototype, "getData", null);
var http4 = new HttpClient4();
console.log(http4.apiUrl);
http4.run();
function get(params) {
    return function (target, methodName, desc) {
        console.log("target", target);
        console.log("methodName", methodName);
        console.log("desc", desc.value);
        //修改装饰器的方法 把装饰器方法里面传入改为string类型
        // 1. 保存当前的方法
        var oMethod = desc.value;
        desc.value = function (...args) {
            args = args.map((value) => {
                return String(value);
            });
            console.log(args);
            oMethod.apply(this, args);
        };
    };
}
class HttpClient5 {
    constructor() {
    }
    getData(...args) {
        console.log(args);
        console.log("我是getData里面的方法");
    }
}
__decorate([
    get("http://www.itying.com")
], HttpClient5.prototype, "getData", null);
var http5 = new HttpClient5();
http5.getData(123, 'xxx');
// 4. 方法参数装饰器
//  参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据
//   1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
//   2.参数的名字
//   3.参数的函数参数列表中的索引
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log("params", params);
        console.log("logParams", target);
        console.log("logParams", methodName);
        console.log("paramsIndex", paramsIndex);
        target.apiUrl = params;
    };
}
class HttpClient6 {
    constructor() {
    }
    getData(uuid) {
        console.log("我是getData里面的方法");
    }
}
__decorate([
    __param(0, logParams('uuid'))
], HttpClient6.prototype, "getData", null);
var http6 = new HttpClient6();
http6.getData(123456);
console.log("http6.apiUrl", http6.apiUrl);
