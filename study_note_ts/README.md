# TS 문법 정리
## 시작하기
tsc app.ts <br>
npm start
## Core Types
1. number ex) 1,5.3,-10
2. string ex) 'Hi', "Hi"
3. boolean ex) true, false
4. object ex) {age: 30}
5. Array ex) [1,2,3]
6. Tuple ex) [1,2] 고정된 크기의 Array (js에 없음)
7. Enum ex) enum{NEW, OLD} 열거형 데이터
8. Any 모든 타입이 가능함 (가능하면 사용안하는게 ts 강점을 살림)

## 타입은 꼭 소문자!

타입 스크립트에서는 주요 원시 타입은 모두 소문자이다!

## 콜백 함수(Callback)

Callback 함수는 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것을 말한다

![alt text](/study_note_ts/readme_image/image.png) 

![alt text](/study_note_ts/readme_image/image-1.png)

## TypeScript 컴파일러 및 구성
tsc --init -> tsconfig.json 생성함 : typescript의 파일 세팅을 담당함 <br>
### tsconfig.json
"exclude" : ["ex.ts", "*.ts", "node_modules" -> 이건 디폴트로 설정되어있음] :  컴파일에 포함되지 않아야 하는 파일(폴더 지정 가능) <br>
"include" : tsc 했을때 컴파일 할 ts 파일을 넣음 <br>
tsc --watch(-w) : 모든 ts 파일을 컴파일하는데 감시 모드로 ts 파일에 변경점이 생기면 바로 재컴파일 하라(폴더 지정 가능) <br>
"compilerOptions" : 컴파일 하는 방법 제어
"lib" : 특정 라이브러리를 다운받아라
"allowJs" : 이중 컴파일 제어
"sourceMap" : 

