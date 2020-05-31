import expess from "express";

const PORT = 3000;

const app = expess();

/**
 *
 *
 *  Variable  :: 변수
 *      변하는 수 = 어떠한 값을 저장할 수 있는 공간
 *
 *          생성을 하고 사용을 한다
 *          한번 생성한 변수는 같은 이름으로 재생성 할 수 없고,
 *          변수 안에 변경된 값은 되돌릴 수 없다
 *
 *  - 변수 생성 (초기화)
 *      변수유형 변수이름 = 초기값;     => 기본값을 설정해주는 방법
 *      변수유형 변수이름;              => 기본 값 없이 생성하는 방법
 *
 *  - 변수 유형
 *      var     : 예전 문법 , 잘 사용하지 않음
 *      let     : 일반적인 변수 유형
 *      const   : 일반적인 상수 유형
 *
 *
 *  let number = 5;
 *  const number = 10;
 *
 *  값의 변경
 *      number = 10;
 *
 * 단점 : 하나의 변수(상수)에 하나의 데이터만 저장할 수 있다.
 *
 */

const variableHandler = () => {
  let num = 10;
  console.log("변수 num은 10이라는 값으로 초기화를 했다.");
  console.log(`현재 변수 num의 값은 ${num} 입니다`);

  num = 22;
  console.log("변수 num에 값을 22로 변경함");
  console.log(`현재 변수 num의 값은 ${num} 입니다`);

  const str = "어피치";
  console.log("상수 str을 어피치라는 값으로 초기화함");
  // str = "라이언";  !에러발생!  =>  상수는 값을 변경 할 수 없다.
};

/**
 *
 *  Array : 배열
 *      하나의 변수에 여려가지 값을 저장할 수 있다.
 *
 *      배열의 선언(초기화)
 *          let(const) 배열이름 = new Array();
 *          let 배열이름        =[];
 *
 *  Ex )  let students = ["오은하" , "박여원" , "김우진" ...];
 *                           0          1          2
 *            students = [2];
 *
 */

const arrayHandler = () => {
  let arr = ["사과", "귤", "배", "배고파"];
  console.log(arr);

  console.log("arr 이라는 배열에 딸기를 추가");

  arr.push("딸기");
  console.log(arr);
};

app.listen(PORT, () => {
  console.log(`${PORT} Server Start`);

  variableHandler();
  arrayHandler();
});
