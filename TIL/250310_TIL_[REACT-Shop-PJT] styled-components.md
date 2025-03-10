# 25-03-10 TIL

## [REACT-Shop-PJT] styled-components

---
## styled-components 라는 라이브러리는 언제 쓸까?

컴포넌트가 많은 경우  스타일링을 하다보면 불편함이 생기는데

1\. class 만들어놓은걸 까먹고 중복해서 또 만들거나

2\. 갑자기 다른 이상한 컴포넌트에 원하지않는 스타일이 적용되거나

3\. CSS 파일이 너무 길어져서 수정이 어렵거나

이런 경우들이 있다.

그래서 styled-components 라는 라이브러리를 설치해서 스타일을 바로 입히는 방법이 있다.

## 설치하는법

npm install styled-components 명령어로 설치가능

```
import styled from 'styled-components'
```

그리고 사용하고 싶은 컴포넌트 위에 import

## styled-components 기본적인 사용법 

이 라이브러리를 이용하면 **컴포넌트를 만들 때 스타일을 미리 주입해서** 만들 수 있다.

예시로 padding : 20px 인 div 박스를 styled-components를 이용해서 만들어보자

```
import styled from 'styled-components';

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`;

function Detail(){
  return (
    <div>
      <Box>
        <YellowBtn>버튼임</YellowBtn>
      </Box>
    </div>
  )
}
```

1\. <div>를 하나 만들고 싶으면 저렇게 styled.div 라는걸 사용하면 된다.

<p> 만들려면 styled.p 이런 식

2\. 오른쪽에 \`\` backtick 기호를 이용해서 CSS 스타일을 넣을 수 있다. 

3\. 그럼 그 자리에 컴포넌트를 남겨주는데 변수에 저장해서 쓰면 된다. 

**장점1.** CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일넣을 수 있다.

**장점2.** 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염된다.

**장점3.** 페이지 로딩시간이 단축된다.

왜냐면 저기 적은 스타일은 html 페이지의 <style>태그에 넣어줘서 그렇다. 

## 사실은 일반 CSS 파일도 오염방지가 가능하다.

예를들어, App.css 파일을 만들어서 App.js에서 import해서 쓴다고 해도 

거기 적은 클래스명들은 Detail.js까지 사용가능하다. (오염됨)

프로젝트 사이즈가 작을 땐 편리하겠지만 사이즈가 커지면 관리하기 힘들어진다. 

그럴 땐 styled-components 써도 되지만 그냥 CSS파일에서도 다른 JS 파일에 간섭하지 않는 '모듈화' 기능을 제공하는데

**컴포넌트명.module.css** 

이렇게 CSS 파일을 작명하면 된다..

그리고 컴포넌트명.js 파일에서 import 해서 쓰면 그 스타일들은 컴포넌트명.js 파일에만 적용이 된다.

## 추가 문법 : props로 재활용가능

여러가지 비슷한 UI가 필요한 경우 어떻게 할까?

예를 들어 지금 노란 버튼말고 오렌지색 버튼이 필요해지면?

물론 예전 강의를 잘 되살려보면 props 이용하면 기존 컴포넌트를 살짝씩 다르게 이용할 수 있다고 했다.

그래서 여기도 props 문법 지원을 한다. 

```
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : black;
  padding : 10px;
`;

function Detail(){
  return (
    <div>
        <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
        <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
    </div>
  )
}
```

**${ props => props.bg }** 이게 styled-components 에서의 props 뚫는 문법이다.

bg부분에 자유롭게 작명하면되고

이제 컴포넌트 쓸 때 bg라는 props를 입력가능하다.

물론 CSS 쓴다고 이게 불가능한건 아니다. class 더 만들면 되긴 하다.

**Q. 저거 ${ } 이거 무슨 문법?**

A. 자바스크립트 \`\` 백틱 따옴표 안에 적어도 문자를 만들 수 있는데

백틱으로 만든 문자 중간에 변수같은걸 넣고 싶을 때 ${ 변수명 } 이렇게 쓸 수 있다. 

**Q. props 전송시 작명={ } 이렇게 전송안하고 따옴표써도 되나요?**

A. 네

```
let YellowBtn = styled.button` 
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
`;
```

자바스크립트 적는 공간이다보니, 이렇게 삼항연산자를 활용가능하다.

배경색에 따라서 글씨 색깔을 변화시켜서 가독성을 좋게 만들 수 있다.

## 단점이 있다면 

**단점1.** JS 파일이 매우 복잡해진다.

그리고 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분도 어렵다.

**단점2.** JS 파일 간 중복 디자인이 많이 필요하면 어쩌죠?

다른 파일에서 스타일 넣은 것들 import 해와서 쓰면 된다.

근데 그럼 CSS파일 쓰는거랑 차이가 없을 수도 있다.

**단점3.** CSS 담당하는 디자이너가 있다면 협업시 불편할텐데 

그 사람이 styled-components 문법을 모른다면 

그 사람이 CSS로 짠걸 styled-components 문법으로 다시 바꾸거나 그런 작업이 필요할 것 같다.

그래서 신기술같은거 도입시엔 언제나 미래를 생각해보아야한다.

---

출처 : 코딩애플 react 강의