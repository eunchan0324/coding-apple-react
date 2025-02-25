# 25-02-25 TIL

## [REACT] props를 응용한 상세페이지 만들기

---

현재, 글 제목을 누르면 모달이 나타나게 되는데,

어떤 모달을 눌러도 0번 글제목인 '남자코드 추천' 만 모달 제목에 보여지고 있다.

**→  글제목에 맞게 모달창의 제목이 각각 달라지게 하려면?**

[##_Image|kage@mXfEh/btsMuthy1pz/nCEN05oYq2NlMIV4xK2k4k/img.png|CDM|1.3|{"originWidth":745,"originHeight":520,"style":"widthContent"}_##]

## 모달창 안의 제목도 일종의 동적인 UI이다.

**\[ 동적인 UI 만드는법 3 STEP \]** -- 을 기억 

1\. html css로 미리 디자인해놓고 

2\. 현재 UI의 상태를 state로 만들어두고

3\. state 종류에 따라서 UI가 어떻게 보일지 작성

## 1\. html css로 미리 디자인

\- 완료 (현재는 디자인 필요 x)

## 2\. 현재 UI의 상태를 state로 만들어주고

funcion App(){} 안에 state를 만들어주자.

\- 모달창 안의 제목은 0번글이 보이거나 1번글이 보이거나.. 를 위해 0으로 작성

```
  let [title, setTitle] = useState(0)
```

## 3\. state에 따라서 UI가 어떻게 보일지 작성

```
function App (){
  let [title, setTitle] = useState(0);
  (생략)
  {
    modal == true ? <Modal title={title} 글제목={글제목} /> : null
  }
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

이제 글제목에 onClick 집어넣으면 끝

```
<h4 onClick={()=>{ setModal(true); setTitle(i); }}>{ 글제목[i] }</h4>
```

---

## 오늘의 요약

1\. UI만드는 3-step 외워주면 알아서 뭐든 만들 수 있다.

2\. state는 state를 사용하는 컴포넌트 중 최고 부모에 만들어놓아야한다.

3\. 내가 직접 생각해서 만들어봐야 공부라고 할 수 있다.

출처 : 코딩애플 react 강의
