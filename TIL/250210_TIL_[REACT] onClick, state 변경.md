# 25-02-10 TIL

## [REACT] onClick, state 변경

---

## onClick 사용법 (JSX)

```
<div onClick = { 실행할 함수 } >
```

1\. Click이 대문자

2\. {} 중괄호 사용

3\. 그냥 코드가 아닌 함수를 넣어야 잘 동작

**함수 넣는 방법 (기본)** 

```
function App(){

  function 함수임(){
    console.log(1)
  }
  return (
     <div onClick={함수임}> 안녕하세요 </div>
  )
}
```

**함수 넣는 방법 (축약)** 

```
<div onClick={ function(){ 실행할코드 } }> 
<div onClick={ () => { 실행할코드 } }>
```

---

## state 변경하는 법

**state가 하나 있다면** 

```
  let [따봉, 따봉변경] = useState(0)
```

**state 변경을 도와주는 함수는 2번째 작명을 사용해서 바꾼다**

```
따봉변경(새로운state)
```

사용 예시 :

**\- 좋아요를 눌렀을 때 따봉이라는 state를 1 증가하려면**

```
<h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
```

---

## 오늘 배운 내용 정리

1\. 클릭시 뭔가 실행하고 싶다면 **onClick={함수}** - 이벤트 핸들러 달기

2\. state를 변경하려면 **state 변경 함수** 이용
