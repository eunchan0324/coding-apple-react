# 250122 TIL

## REACT 설치와 개발환경 세팅

---

### 개발환경 세팅하기

#### 1\. Node.js (LTS)

- 내 컴퓨터 어디서나 JS 실행하는 걸 도와주는 매니징 같은 것

npm (node pakage namager)

- Node.js 에서 사용할 패키지를 관리하고 실행하는 도구
- Node.js 설치시 자동으로 설치된다

#### 2\. VS Code - 코드 에디터

- 코드 자동완성 및 플러그인이 잘 되어있는 특징이 있다

#### 3\. Chrome 웹 브라우저

---

## React  프로젝트 만들기

**개발환경**

- React + Vite

**프로젝트 생성 명령어**

```
npm create vite@latest
```

\- select a framework > React

\- select a variant > JS

(프로젝트 생성 완료)

\- cd project\_name

- 해당 프로젝트 폴더로 이동

\- npm install 

- React에 필요한 라이브러리를 알아서 설치해준다

\- npm run dev

- 미리보기

---

#### Vite 이란?

- 빌드 / 번들링 툴

1\. 소스코드 사이즈 압축 가능

2\. 자바스크립트로 컴파일 가능

3\. 빠른 미리보기

---

#### React 파일 / 폴더 설명

- node\_modules 폴더 : 설치한 라이브러리의 소스코드 보관 폴더
- **public 폴더** : 데이터파일 이미지파일 등 쓸데없는 파일 보관소 (여기 넣으면 나중에 사이트 발행시 원본 보존가능)
- **package.json** : 설치한 라이브러리 기록용 파일
- **eslint.config.js** : lint, vite 설정용 파일
- **index.html** : 메인페이지인데 App.js 내용을 main.js에 넣고 그걸 index.html에 넣는 식으로 짜여져있음
