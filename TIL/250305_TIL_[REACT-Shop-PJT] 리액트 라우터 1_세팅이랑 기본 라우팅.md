# 25-03-05 TIL

## [REACT-Shop-PJT] 리액트 라우터 1 : 세팅이랑 기본 라우팅

---
## 리액트는 하나의 html 파일만 사용한다.

페이지를 나누고싶으면 일반 html css js 사이트는 그냥 html 파일을 여러개 만들지만,

리액트는 html을 하나만 사용한다

그래서 리액트에서는 다른 페이지를 요청하면 내부에 있는 <div> 를 갈아치워서 보여주면 된다.

그런데 직접 코드짜기보다는 react-router-dom 이라는 외부 라이브러리를 설치해서 구현하는게 일반적이다.

## react-router-dom 설치하려면

[https://reactrouter.com/start/framework/installation](https://reactrouter.com/start/framework/installation)

 [Installation | React Router

reactrouter.com](https://reactrouter.com/start/framework/installation)

공식 문서 installation을 참고해보면,

```
npx create-react-router@latest my-react-router-app
```

명령어로 터미널에서 설치가 가능하다고 하는데, 그냥 npm 명령어로 설치했다

```
npm install react-router-dom
```

이후 세팅은 index.js 또는 main.jsx 파일로 가서

```
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

import 해오고

<BrowserRouter> 이걸로 <App/> 이걸 감싸면 끝이다.

## 라우터로 페이지 나누는 법

url 경로마다 다른 페이지를 보여주고 싶으면?

```
 (App.js)

import { Routes, Route, Link } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
  )
}
```

1\. 상단에서 컴포넌트를 import 해오고

2\. <Route> 만들고 그 안에 <Route> 를 작성한다.

3\. <Route path="/url경로" element={ <보여줄html> } /> 이렇게 작성하면 된다.

[##_Image|kage@lsrAV/btsMCttA9dD/bbfkH84snFytBrpHcS9Gzk/img.png|CDM|1.3|{"originWidth":963,"originHeight":649,"style":"alignCenter"}_##]

이제 url  뒤에 /detail 붙여주면 <div> 태그가 보인다. 

```
<Route path="/" element={ <div>메인페이지에서 보여줄거</div> } />
```

이 url 경로는 메인페이지이다. 

Q. 메인 페이지 접속시에만 상품 목록을 보여주고 싶다면, 

A. element={} 안에 상품목록 레이아웃을 다 넣으면 된다.

```
      <Routes>
        <Route path='/' element={
          <>

            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>

            <Container>
              <Row>
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i}></Card>
                    )
                  })
                }
              </Row>
            </Container>

          </>
        } />
        <Route path='/detail' element={<div>상세페이지임</div>} />
      </Routes>
```

(나중에는 따로 파일로 빼는게 보기 좋을 듯하다)

## 페이지 이동 버튼은

URL 경로로 이동하는 링크를 생성해보자.

```
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>
```

 이러면 각각 url 경로로 이동하는 링크를 생성할 수 있다.

[##_Image|kage@cBr7B4/btsMB2XnVtK/FAuaJOMsUVYXWwKSKGkaDk/img.png|CDM|1.3|{"originWidth":969,"originHeight":166,"style":"alignCenter"}_##]

각각 클릭하면 이동함.

## /detail로 접속하면 보여줄 상세페이지를 컴포넌트화 시켜보자

src/pages/detail.jsx 생성

```
function Detail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>

  )
}

export default Detail;
```

이후 App.jsx 에서 import 하고 

```
        <Route path='/detail' element={ <Detail /> } />
```

사용하면

[##_Image|kage@OFsUG/btsMBRBNXfb/hfebXHrfDIKk5mdfacvqJ0/img.png|CDM|1.3|{"originWidth":965,"originHeight":395,"style":"alignCenter"}_##]

잘 보여지는 모습을 볼 수 있다.

---

출처 : 코딩애플 react 강의