# 25-02-18 TIL

## [REACT]  Component 컴포넌트란?

---

## fragment 문법

\- html 코드를 짤 때, return () 내부에는 하나의 태그로 시작해서 하나의 태그로 끝나야 한다. 

```
return(
  <div>
    <div></div>
    <div></div>
  </div>
)
```

**\>> 의미없는 div를 쓰기 싫으면  <></> 로 감싸면 된다**

```
return(
  <>
    <div></div>
    <div></div>
  </>
)
```

---

## Component 문법?

: 긴 HTML을 한 단어로 치환해서 넣을 수 있는 문법

\- 함수나 변수를 만들듯 HTML을 깔끔하게 한 단어로 치환해서 원하는 곳에 작성할 수 있다. 

EX) Modal을 Component화 시켜서  App 안에 넣기

```
function App (){
  return (
    <div>
      (생략)
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

## 줄이는 방법

1\. function을 이용해서 함수를 하나 만들고 작명한다.

2\. 그 함수 안에 return() 안에 축약을 원하는 HTML을 담는다.

3\. 원하는 곳에서 <함수명></함수명> 을 사용하면 아까 축약한 HTML이 등장한다.

**\>> 이렇게 축약한 HTML  덩어리가 Component** 

## Component 만들 때 주의점

1\. 작명시 영어 대문자로 작명한다. (보통)

2\. return() 안에는 html 태그가 여러가지 들어갈 수 없다.

3\. funcion App(){} 내부에서 만들면 안된다.

\- why? -> funcion App(){} 이것도 컴포넌트이기 때문

4\. <컴포넌트></컴포넌트> 이렇게 써도 되고, <컴포넌트/> 이렇게 써도 된다. 

**\* arrow funcion 도 가능하다.**

```
function Modal(){
  return ( <div></div> )
}

let Modal = () => {
  return ( <div></div>) 
}
```

## 어떤 HTML 들을 Component 로 만드는게 좋을까?

\* 기준은 없지만 관습적으로는,

\- 반복해서 출현하는 HTML 덩어리

\-  내용이 자주 변경될 것 같은 HTML 부분을 잘라서 만들기

\-  다른 페이지를 만들고싶다면, 그 페이지의 HTML 내용을 하나의 컴포넌트로 만드는게 좋다

\-  다른 팀원과 협업할 때 웹페이지를 컴포넌트 단위로 나눠서 작업을 분배하기도 한다.

**1\. 긴 코드 축약할 때**

**2\. 다른 곳에서 코드 재사용할 때**

**3\. 복잡한 코드를 작은 기능으로 나눌 때**

## Component의 단점

**너무 많이 만들면 관리가 힘들다.** 

\*출처 : 코딩애플 react 강의
