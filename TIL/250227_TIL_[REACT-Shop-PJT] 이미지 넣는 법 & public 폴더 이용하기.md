# 25-02-27 TIL

## [REACT-Shop-PJT] 이미지 넣는 법 & public 폴더 이용하기

---
## 대문 사진 만들기 **(CSS 파일에서 src 폴더안에 있는 이미지 사용)**

메인페이지에 큰 사진을 하나 넣어보자.

bg.png를 다운받고, src 폴더에 넣어준 후,

<div className="main-bg"></div> 하나 넣고 css 파일에서 디자인하면?

[##_Image|kage@UrLIK/btsMxo8L2zw/0POIFK7IoQlw11hvkFT221/img.png|CDM|1.3|{"originWidth":1271,"originHeight":350,"style":"alignCenter"}_##]

이런 대문 사진을 얻을 수 있다

(css는 아래 코드 참고)

```
(App.css)

.main-bg {
  height : 300px;
  background-image : url('./bg.png');
  background-size : cover;
  background-position : center;
}
```

css 파일에서 src 폴더안에 있는 사진을 사용하고 싶으면 

**./이미지경로 --** 사용하면 된다. 

## **html 안에서 src 폴더의 이미지를 넣고 싶으면?**

**이미지를 import 해서 사용해야한다.**

```
import bg from './bg.png'

function App(){
  return (
    <div>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
    </div>
  )
}
```

1\. import 작명 from './이미지경로' 

2\. 이미지 경로가 필요한 곳에서 작명한 걸 사용

<img> 태그 쓰고싶으면 <img src={bg}/> 이렇게 써도 보인다.

귀찮으면 css 파일을 활용하기

## 화면을 가로로 3등분하고 싶으면?

Bootstrap을 써서 레이아웃을 짜보자 

Bootstrap을 써도 되지만, React-Bootstrap을 활용해보았다.

```
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
```

공식문서에 나와있는 것 중, 3개의 col만 사용해보자.

이후, 호스팅되어있는 외부 이미지를 절대경로로 가져와서 적용해보면

```
import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './bg.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage : 'url('+ bg + ')' }}></div>

      <Container>
      <Row>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default App
```

[##_Image|kage@dMQlBm/btsMxEKoqo5/VBf74ZowMQjEPZF4IKtRG1/img.png|CDM|1.3|{"originWidth":1429,"originHeight":824,"style":"alignCenter"}_##]

잘 나오는 것을 확인할 수 있다.

## public 폴더의 용더

여려가지 소스코드는 src 폴더에 보관하면 되는데

이미지같은 static 파일의 경우 public 폴더에 보관해도 된다.

리액트로 개발을 끝내면 build 작업을 하는데

지금까지 짰던 코드를 한 파일로 압축해주는 작업이다.

**src 폴더에 있던 코드와 파일은 다 압축이 되는데 public 폴더에 있는 것들은 그대로 보존해준다.**

그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴일이 거의 없고

**이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔 public 폴더에 보관해도 상관없다.**

## public 폴더에 있는 이미지를 사용할 땐

```
<img src="/logo192.png" />
```

그냥 /이미지경로 사용하면 된다. (편리)

css 파일에서도 /이미지경로를 사용하면 된다.

## 하지만 권장되는 방식은?

```
<img src={process.env.PUBLIC_URL + '/logo192.png'} />
```

이렇게 인데,

왜냐하면 리액트로 만든 html 페이지를 배포할 때

**example.com** 경로에 배포하면 아무 문제가 없지만

**example.com/어쩌고/** 경로에 배포하면

/logo192.png 이렇게 쓰면 파일을 찾을 수 없다고 나올 수가 있다.

그래서 /어쩌고/ 를 뜻하면 process.env.PUBLIC\_URL 이걸 더해주면 된다.

(example.com/어쩌구/ 경로에 리액트로 만든 페이지를 배포할 일이 아예 없으면 굳이 안해도 된다)

---

출처 : 코딩애플 리액트 강의