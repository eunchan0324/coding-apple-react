# 25-02-11 TIL

#### [REACT] state가 array, object 일 때, 변경하는 법

---

## 리액트에서 array / object - state 를 수정하고 싶으면

독립적인 카피본을 만들어야 한다.

**\[결론\]**

```
[... 기존 state]
```

**\[... 기존 state\]**

---

\* \[...\] 이 뭘까? ==> spread operator

# React에서 Spread Operator 사용 이유

리액트에서 `array`나 `object` 형태의 state를 수정할 때는 **독립적인 복사본(immutable state)**을 만들어야 한다.  
왜냐하면 리액트는 state가 변경되었을 때만 컴포넌트를 다시 렌더링하기 때문.

기존 state를 직접 수정하면 변경을 감지하지 못해 UI가 업데이트되지 않을 수 있다.

---

## **Spread Operator란?**

`...` 문법으로, 다음 두 가지 주요 기능이 있다.

### 1\. **배열이나 객체의 괄호를 벗겨서 요소나 속성만 남김**

```
console.log(...[1, 2, 3]); // 1 2 3
```

---

## 실습해보기

글제목이라는 state를 하나 만들고, 글제목과 내용을 3가지 작성해보자

```
let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );

return (
<div className="App">
  <div className="black-nav">
    <div>React blog</div>
  </div>

  <div className="list">
    <h4>{ 글제목[0] }</h4>
    <p>2월 17일 발행</p>
  </div>

  <div className="list">
    <h4>{ 글제목[1] }</h4>
    <p>2월 17일 발행</p>
  </div>

  <div className="list">
    <h4>{ 글제목[2] }</h4>
    <p>2월 17일 발행</p>
  </div>
</div>
```

```
실행해보면, 사진과 같은 결과가 나온다
```

[##_Image|kage@buh4Xd/btsMdM94pPt/NRFG6Z225DuPEO42CDgm8k/img.png|CDM|1.3|{"originWidth":128,"originHeight":390,"style":"alignLeft"}_##]

```
버튼을 하나 만들어서, 클릭하면

'남자코트 추천' 글제목 1번을 '여자코트 추천'으로 바꾸게 하고 싶다면?

(확장성을 위해서 하드 코딩 x)
```

```
    <button onClick={()=>{

      let copy = [...글제목]
      copy[0] = '여자코트 추천'
      글제목변경(copy) 
      }}>글수정</button>
```

```
copy라는 독립적인 state를 하나 만들어서 수정하면 된다. 

최종코드
```

import { useState } from 'react'  
import './App.css'

function App(){

let \[글제목, 글제목변경\] = useState( \['남자코트 추천', '강남 우동맛집', '파이썬 독학'\] );  
let \[따봉, 따봉변경\] = useState(0)

return (

React blog

```
    <button onClick={()=>{

      let copy = [...글제목]
      copy[0] = '여자코트 추천'
      글제목변경(copy) 
      }}>글수정</button>

  <div className="list">
    <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
    <p>2월 17일 발행</p>
  </div>

  <div className="list">
    <h4>{ 글제목[1] }</h4>
    <p>2월 17일 발행</p>
  </div>

  <div className="list">
    <h4>{ 글제목[2] }</h4>
    <p>2월 17일 발행</p>
  </div>
</div>
```

)  
}

export default App

\`\`\`

실행 결과

[##_Image|kage@cHhFxF/btsMf4AOpRF/7ckxh3YApnkigVkvVMjKh0/img.png|CDM|1.3|{"originWidth":931,"originHeight":410,"style":"alignCenter"}_##]

---

출처 : 코딩애플 react 강의
