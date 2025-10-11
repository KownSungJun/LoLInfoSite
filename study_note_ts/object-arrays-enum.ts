//ts는 들어간 값에 대한 타입을 추론할 수 있다
//ts는 객체의 값에 대한 타입을 지정할 수도 있다(js에는 없음) const person : {타입 지정} = {키:값}
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //튜플 타입
// }  = {
//     name: 'SungJun',
//     age: 22,
//     hobbies: ['Sports', 'Cooking'],
//     //union 타입
//     //타입 설정을 안하면 첫번째 인덱스와 두번째 인덱스의 값이 아무거나 들어가는데
//     //튜플로 설정하면 설정할 수 있음
//     role: [2, 'author']
// };
//push는 일종의 예외이다 'author' 대신 'admin'이 들어간다
// person.role.push('admin');
// person.role[1] = 10;


// person.role = [0, 'admin', 'user']; //애러


//any는 자주 사용하지 않는다
//js 백엔드에서 어떤 값이든 활용할 수 있게 해주면 ts의 장점을 활용할 수 없다
//유연함에는 항상 대가가 따른다
// let favoriteActivities: any[];
// favoriteActivities = ['Sports',1];

//권한과 숫자를 맵핑하여 사용하려고 할때 열거형 자료형을 쓰면 좋다
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//순서로 0,1,2 (js는 겁나 복잡함)
//첫 숫자 변경이나 임의의 숫자를 적용시킬 수도 있고
//문자열도 가능하고 섞어서도 사용가능하다
//매핑된 값을 사용할 때 enum을 사용하는 것이 효과적이다
enum Role { ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
    name: 'Sungjun',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};



let favoriteActivities: any[];
favoriteActivities = ['Sports',1];
//중첩 객체
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
    //console.log(hobby.map()) //배열에선 쓸 수 있지만 문자열에선 안됨
    //ts는 타입을 알아서 추론시켜줌
}

if(person.role == Role.ADMIN) {
    console.log('role is admin')
}