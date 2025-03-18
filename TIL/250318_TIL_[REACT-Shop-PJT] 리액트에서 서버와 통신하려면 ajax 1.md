# 25-03-18 TIL

## [REACT-Shop-PJT] 리액트에서 서버와 통신하려면 ajax 1

---
## 서버란?

유저가 데이터달라고 요청을 하면 데이터를 보내주는 간단한 프로그램.

EX) 

\- 네이버웹툰 서버 : 유저가 웹툰 달라고 하면 웹툰 보내주는 프로그램

\- 유튜브 서버 : 유저가 영상 달라고 하면 영상 보내주는 프로그램

"누가 A를 요청하면 A를 보내주세요" 라고 코드짜는게 서버개발 끝이다.

[##_Image|kage@beUWcO/btsMOwkrW1E/pw05ZguRXIg4c9bQEfG3z1/img.png|CDM|1.3|{"originWidth":719,"originHeight":253,"style":"alignCenter"}_##]

서버에 데이터를 요청할 때는 정확한 규격에 맞춰서 요청해야하는데 

1\. 어떤 데이터인지 (URL 형식으로)

2\. 어떤 방법으로 요청할지 (GET or POST)

잘 기재해야 데이터를 보내준다.

예를 들어서 독립일기라는 네이버웹툰을 보고싶으면

[https://comic.naver.com/webtoon/list?titleId=748105](https://comic.naver.com/webtoon/list?titleId=748105) 여기 URL로 GET요청하면 보내준다.

URL을 어떻게 알았냐면,

네이버 웹툰 서버개발자에게 물어보거나 URL이 기재된 html 페이지를 찾아보면 된다.

## GET/POST 요청하는 법?

GET요청을 날리고 싶으면 가장 쉬운 방법은 브라우저 주소창이다.

거기에 URL 아무거나 적으면 그 곳으로 GET요청을 날려준다.

POST요청을 날리고 싶으면

<form action="요청할url" method="post"> 태그 이용하면 된다.

그럼 폼이 전송되었을 때 POST요청을 날려준다.

근데 GET, POST 요청을 저렇게 날리면 단점이 뭐냐면 **브라우저가 새로고침**된다.

## AJAX란?

서버에 GET, POST 요청을 할 때 **새로고침 없이** 데이터를 주고받을 수 있게 도와주는

간단한 브라우저 기능을 AJAX라고 한다.

이걸 쓰면 새로고침 없이도 쇼핑몰 상품을 더 가져올 수도 있고

새로고침 없이도 댓글을 서버로 전송할 수도 있고 그런 기능을 만들 수 있다.

AJAX로 GET/POST요청하려면 방법 3개 중 택1 하면 됩니다.

1\. XMLHttpRequest라는 옛날 문법 쓰기

2\. fetch() 라는 최신 문법 쓰기

3\. axios 같은 외부 라이브러리 쓰기 

3번이 가장 편하니 3번을 써보자.

\[axios 설치 방법\]

```
npm install axios
```

## AJAX 요청하는 법

버튼누르면 코딩애플님이 만든 서버로 ajax 요청을 해보자.

[https://codingapple1.github.io/shop/data2.json](https://codingapple1.github.io/shop/data2.json) 이 URL로 GET요청을 하면 상품 3개를 가져와준다.

```
import axios from 'axios'

function App(){
  return (
    <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
        console.log(결과.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button>
  )
}
```

1\. axios를 쓰려면 상단에서 import해오고

2\. axios.get(URL) 이러면 그 URL로 GET요청이 된다.

3\. 데이터 가져온 결과는 결과.data 안에 들어있다. 

그래서 위의 버튼 누르면 서버에서 가져온 데이터가 콘솔창에 출력됨.

4\. 인터넷이 안되거나 URL이 이상하면 실패하는데

실패했을 때 실행할 코드는 .catch() 안에 적으면 된다.

---

출처 : 코딩애플 react 강의