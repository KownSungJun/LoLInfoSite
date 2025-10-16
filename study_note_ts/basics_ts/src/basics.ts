function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    //js에서 정적 타입 제제를 구현하는 방법
    //ts에선 할 필요 없음
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!!');
    // }
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }

}

let number1:number = 5; // 5.0

const number2 = 2.8;
const printResult = true;
let resultPhrase:string = 'Result is: ';
// resultPhrase = 0; //애러
add(number1, number2, printResult, resultPhrase);

//js의 문제점
//이런걸 type error나 exception 않일으킴

//그러나 ts의 등장으로 따로 타입을 지정해서 애러를 일으킴
//이때 js 파일이랑 ts 파일이랑 같이 켜두면 중복 정의 되니까 같이 키지 않기
//동적 정의 -> 정적 정의

//ts는 컴파일 시점에 타입을 검사해 오류를 미리 발견할 수 있게 하지만
//js는 런타임 중에 타입을 확인하므로 오류가 코드 이미 실행 중에 난다
//js와 ts의 타입 시스템이 근본적으로 다르다
