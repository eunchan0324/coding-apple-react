# 25-03-16 TIL

## [REACT-Shop-PJT] Lifecycle과 useEffect 1

---
## 컴포넌트의 인생

컴포넌트는 Lifecycle이라는 개념이 있다. 컴포넌트도 인생이 있는 것

**컴포넌트는  
**

1\. 생성이 될 수도 있고 (페이지에 장착)  (mount)

2\. 재렌더링이 될 수도 있고 (update)

3\. 삭제가 될 수도 있다. (unmount)

컴포넌트의 인생을 배우는 이유는 **컴포넌트 인생 중간중간에 간섭할 수 있기 때문**이다.

간섭이란? 그냥 코드실행인데

컴포넌트가 **장착이 될 때 특정 코드를 실행**할 수도 있고

컴포넌트가 **업데이트될 때 코드를 실행**할 수도 있다는 것이다. 

그럼 재밌는 기능들을 개발할 수 있다.

## 인생에 간섭하는 방법

"Detail 컴포넌트 등장 전에 이것좀 해줘"

"Detail 컴포넌트 사라지기 전에 이것좀 해줘"

"Detail 컴포넌트 업데이트 되고나서 이것좀 해줘"

이렇게 코드좀 실행해달라고 간섭할 수 있는데

간섭은 갈고리를 달아서 한다.

\=> hook 이라고 함

그래서 이걸 Lifecycle hook 이라고 한다

## 요즘 React에서 Lifecycle hook 쓰는 법

```
import {useState, useEffect} from 'react';

function Detail(){

  useEffect(()=>{
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log('안녕')
  });
  
  return (생략)
}
```

상단에서 useEffect ipmort 해오고

콜백함수 추가해서 안에 코드 적으면 이제 그 코드는 컴포넌트가 mount & update시 실행된다.

그래서 이게 Lifecycle hook 이다.

현 코드에서는 Detail 페이지 로드시 콘솔창에 '안녕' 이 된다.

```
import {useState, useEffect} from 'react';

function Detail(){

  useEffect(()=>{
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log('안녕')
  });

  let [count, setCount] = useState(0)
  
  return (
    <button onClick={()=>{ setCount(count+1) }}>버튼</button>
  )
}
```

재렌더링시에도 진짜 '안녕' 출력되나 테스트해보려고 

버튼 누르면 재렌더링되게 코드를 짜봤다.

이렇게 해서 버튼을 클릭해도 '안녕'이 출력된다.

**Q. '안녕' 이 2번 출력되는 이유?**

index.js에 <React.StrictMode>라는 태그가 있으면 2번 출력해준다.

디버깅용으로 편하라고 2번 출력해주는데 싫으면 저 태그를 제거하자.

## useEffect 밖에 적어도 똑같은데?

사실 useEffect 바깥에 적어도 똑같이 컴포넌트 mount & update시 실행된다.

컴포넌트가 mount & update 시 function 안에 있는 코드도 다시 읽고 지나가서 그렇다.

그럼 useEffect는 왜 만들어놓은 것일까?

문법을 배우는게 중요한게 아니라 배웠으면 어떤 상황에, 언제 사용할지를 함께 배워야한다.

그래야 나중에 '여기서 useEffect 써도 되나요' 이런 초보질문을 안한다

**useEffect안에 적은 코드는 html 렌더링 이후에 동작한다.**

그럼 이제 useEffect가 뭔가 유용할 것 같은데

예를 들어 굉장히 시간이 오래걸리는 쓸데없는 코드가 필요하다고 가정해보자.

```
function Detail(){

  (반복문 10억번 돌리는 코드)
  return (생략)
}
```

여기에 대충 적으면 반복분 돌리고 나서 하단의 html을 보여준다.

```
function Detail(){

  useEffect(()=>{
    (반복문 10억번 돌리는 코드)
  });
  
  return (생략)
}
```

useEffect 안에 반복문을 넣으면? html 보여주고 나서 반복문을 돌린다.

이런 식으로 **코드의 실행 시점을 조절할 수 있기 때문**에

조금이라도 html 렌더링이 빠른 사이트를 원하면 쓸데없는 것들은 useEffect안에 넣어보자.

그래서 이걸 알면 리액트 만든 사람이 이 함수를 useEffect라고 작명한 이유를 알 수 있는데

함수안에 이것저것 코드잘 때 

함수의 핵심기능 외에 쓸데없는 기능들을 프로그래밍 용어로 side effect라고 부른다.

그래서 useEffect도 거기서 따온건데

컴포넌트의 핵심 기능은 html 렌더링이라

**그거 외의 쓸데없는 기능들은 useEffect안에 적으라는 소리**이다.

오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거

이런건 useEffect안에 많이 적는다. 

---

출처 : 코딩애플 react 강의