# 25-03-19 TIL

## [REACT-Shop-PJT] 리액트에서 서버와 통신하려면 ajax 2 : post, fetch

---
## POST 요청하는 법

```
axios.post('URL', {name : 'kim'})
```

이렇게 실행하면 서버로 { name : 'kim' } 자료가 전송된다.

완료시 특정 코드를 실행하고 싶으면 이것도 역시 .then() 뒤에 붙이면 된다.

## 동시에 AJAX 요청 여러개 날리려면

```
Promise.all( [axios.get('URL1'), axios.get('URL2')] )
```

이러면 URL1, URL2로 GET요청을 동시에 해준다.

둘 다 완료시 특정 코드를 실행하고 싶으면 .then() 뒤에 붙이면 된다.

## 원래는 서버와 문자 자료만 주고받을 수 있다

object / array 이런거 못주고받는다.

근데 전에 array를 받아온 것 같은데, 어떻게 한거냐면

**object/array 자료에 따옴표를 쳐놓으면 된다.**

**"{ "name" : "kim" }"**

이걸 **JSON** 이라고 부른다.

JSON은 문자 취급을 받기 때문에 서버와 자유롭게 주고받을 수 있다.

그래서 실제로 결과.data 출력해보면 따옴표쳐진 JSON이 나와야하는데

axios 라이브러리는 JSON -> object/array 변환작업을 자동으로 해줘서 

출력해보면 object/array가 나온다.

```
fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } )
```

쌩자바스크립트 문법인 fetch() 를 이용해도 GET/POST 요청이 가능한데

그건 JSON -> object/array 이렇게 자동으로 안바꿔줘서 직접 바꾸는 작업이 필요하다.

마음에 들면 쓰자.

## 자주묻는 질문 : ajax로 가져온 데이터를 html에 꽃을 때 왜 에러남?

1\. ajax 요청으로 데이터를 가져와서

2\. state에 저장하라고 코드를 짜놨고

3\. state를 html에 넣어서 보내달라고 <div>{state.어쩌고}<div> 이렇게 코드를 짰다.

잘 될 것 같은데 이 상황에서 state가 텅 비어있다고 에러가 나는 경우가 많다.

이유는 ajax 요청보다 html 렌더링이 더 빨라서 그럴 수 있다.

state안에 뭐가 들어있으면 보여달라고 if문 같은걸 추가하거나 그러면 된다.

---

출처 : 코딩애플 react 강의