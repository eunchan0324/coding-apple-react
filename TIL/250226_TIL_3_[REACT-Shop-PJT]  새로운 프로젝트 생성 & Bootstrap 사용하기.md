# 25-02-26 TIL

## [REACT-Shop-PJT]  새로운 프로젝트 생성 & Bootstrap 사용하기

---
쇼핑몰 프로젝트를 새로 만들어보자.

\+ CSS를 react-bootstrap 라이브러리를 활용해보자.

## 새로운 프로젝트 생성

```
npm create vite@latest
```

[##_Image|kage@NY0ra/btsMyuNmYsk/5I04M3bt0H7hTsOk4sXwPK/img.png|CDM|1.3|{"originWidth":579,"originHeight":240,"style":"alignLeft"}_##]

## React-Bootstrap 라이브러리를 설치해서 이용하기

[https://react-bootstrap.netlify.app/docs/getting-started/introduction](https://react-bootstrap.netlify.app/docs/getting-started/introduction) 

 [Introduction | React Bootstrap

Learn how to include React Bootstrap in your project.

react-bootstrap.netlify.app](https://react-bootstrap.netlify.app/docs/getting-started/introduction)

리액트 bootstrap 홈페이지에서 installation을 찾아보자.

```
npm install react-bootstrap bootstrap
```

터미널에 설치 후,

## 어떤 스타일은 Bootstrap CSS 파일을 요구하는 경우가 있다.

그래서 사이트에 있는 css 파일을 index.html 파일의 <head> 태그 안에 복붙해주자.

```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>
```

App.js에 넣어도 된다. (아래코드) 

```
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
```

## React-Bootstrap 사용법

버튼이 필요하면  React-Bootstrap 사이트에서 검색해서 예제코드를 복붙하면 버튼 생성 끝

```
<Button variant="primary">Primary</Button>
```

import 도 해줘야한다.

```
import Button from 'react-bootstrap/Button';
```