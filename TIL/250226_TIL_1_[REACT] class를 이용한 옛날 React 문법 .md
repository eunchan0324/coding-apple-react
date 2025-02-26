# 25-02-26 TIL

## [REACT] class를 이용한 옛날 React 문법

---
옛날 리액트에서는 컴포넌트 만들 때 class 문법을 사용했다고 한다.

공부용으로 알아보자.

## 1\. class 문법으로 컴포넌트 만드는 법

```
class Modal2 extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>안녕</div>
    )
  }

}
```

1\. class 어쩌고 작성하고 컴포넌트 이름 작명

2\. constructor, super, render 함수 3개 채워넣는다. 기본 템플릿 같은 것

3\. 컴포넌트는 길고 복잡한 html 축약할 때 쓴다고 했다. return 안에 축약할 html을 넣자

**\*class 와 extends ?**

class : 변수, 함수를 보관하는 통

extends : 기존 class안에 있던 변수, 함수를 복사해주는 문법

→ React.Component라는 class안에 있던 변수와 함수들을 복사해야 컴포넌트라고 인정해주기 때문에 

class 어쩌구 extends React.Component라고 쓰는 것

## 2\. class 컴포넌트에서 state 만드려면?

```
class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>안녕 { this.state.name }</div>
    )
  }

}
```

1\. this.state 라는 변수를 만들고 거기 안에다가 object 형식으로 state를 쭉 나열

2\. state를 사용하고 싶으면 this.state.state이름 을 쓰면 된다. 

## 3\. class 컴포넌트에서 state 변경은?

```
class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>안녕 { this.state.age }
        <button onClick={()=>{ this.setState({age : 21}) }}>버튼</button>
      </div>
    )
  }

}
```

state 변경하고싶으면, this.setState라는 기본함수를 가져다가 쓰면 된다

소괄호안에 새로운 state 넣으면 그걸로 기존 state를 업데이트해준다.

(갈아치우는건 아니고 차이점만 잘 변경해줌) 

## 4\. class 컴포넌트에서 props는?

```
class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>안녕 { this.props.프롭스이름 }</div>
    )
  }

}
```

부모가 보낸 props를 출력하고 싶으면

1\. constructor, super에 props 파라미터 등록하고

2\. this.props 쓰면 props 나온다.

## 5\. 결론

컴포넌트 만들 일이 있으면 class는 복잡하니까 function 를 쓰자. 

개발하다보면 예전 리액트프로젝트같은거 봐야하는 경우가 생기는데, 대비해서 공부해두자.