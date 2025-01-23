# 25-01-23 TIL

## REACT에서 레이아웃 만들 때 쓰는 JSX 문법 3개

---

## JSX란?

App.js / App.jsx 파일인데 html을 쓸 수 있는데..?

\>  사실은 html이 아니라 JSX이다. 

- .js 파일에서 쓰는 html 대용품이라고 생각하면 된다

기존 React 에서 <div>를 만드려면

```
React.createElement('div', null, 'Hello World')
```

위와 같은 코드를 작성해야 하니 

JSX를 통해서 

```
<div><.div>
```

로 쉽게 사용할 수 있다

---

## JSX 문법 3가지

**JSX 문법 1.** 

- class 넣을 땐 **className** 

**JSX 문법 2.**

- **데이터바인딩(변수 넣을 땐)  {중괄호}**

\*어디에 쓰일까?

서버에서 데이터 가져와서 <html> 사이에 넣어주세요~ 할 때 쓰인다

**JSX 문법 3.**

- style 넣을 땐 **style={ {스타일명 : '값' } }**
