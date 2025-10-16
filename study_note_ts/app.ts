let hello: string = "helloworld"
let tripleSeven : number = 23
let arr1 : number[] = [1,2,3]
let arr2 : Array<number> = [1,2,3]
let arr3 : Array<string> = ["hello", "world"]
let arr4 : [string, number] = ["jinyoung", 24]
let ob1 : object = {num : 1}
let ob2 : {
    name: string,
    age : number
} = { name: "sungjun", age: 24}
let isTrue : boolean = true

function add(num1 : number, num2 : number): number {
    let result : number = num1 + num2
    return result
}

function min(num1 : number, num2? : number ) : number {
    if(typeof(num2) === "number") {
        let result : number = num1 - num2
        return result
    }
    return 0
}

interface User {
    age: number
    name: string
}

const user1: User = {name: "sungjun", age: 22}

function getUser(user: User) {
    console.log(user)
}

getUser(user1)
//함수 구조 활용
interface Add {
    (x:number, y:number):number
}

let addFunc: Add = (a,b) => a + b

console.log(addFunc(14, 7))

interface StringArr {
    [index: number]: string
}

let arr: StringArr = ["a", "b", "c"]

interface Obj {
    [key : string]: string
}

const obj: Obj = {
    person1: "sungjun",
    persib2: "kanye"
}

interface Person {
    name: string
    age: number
}

interface Developer extends Person {
    position: string
}

const jun: Developer = {
    name: "sungjun",
    age: 23,
    position: "developer"
}

class PersonClass {
  // 1️⃣ 필드(멤버 변수) 선언
  private name: string;   // 클래스 내부에서만 접근 가능
  public age: number;     // 어디서나 접근 가능
  readonly log: string;   // 읽기만 가능 (한 번만 할당 가능)
  
  // 2️⃣ 생성자 (객체가 생성될 때 실행)
  constructor(name: string, age: number) {
    this.name = name;     // private이라 클래스 내부에서는 접근 가능
    this.age = age;       // public이라 외부에서도 접근 가능
    this.log = "Person created"; // readonly이므로 생성자에서 한 번만 초기화 가능
  }
}

// ES6 템플릿 문자열 : ``, ${}
let red : string = 'Red'
let myColor : string = `My color is ${red}.`

//