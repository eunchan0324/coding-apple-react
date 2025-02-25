# 25-02-24 TIL

#### [REACT] props : 자식이 부모의 state 가져다쓰고 싶을 때

---

자식 컴포넌트가 부모 컴포넌트에 있던 state를 쓰고 싶으면 

그냥 쓰면 안되고 **props로 전송해서** 써야한다.

예시와 함께 보자.

## <Modal>안에 글제목 state 가 필요하다면?

```
function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>{ 글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

이렇게 하면될까? --> **안된다!**

▲

왜냐면 글제목이라는 state 변수는 function App()에 있지 function Modal()에 없기 때문

자바스크립트에선 다른 함수에 있는 변수를 마음대로 가져다쓸 수 없다. 

## 그러면?

[##_Image|kage@XeSFt/btsMuf4C3cj/ZKZtK8pP0p3ouA1wRMpoS0/img.png|CDM|1.3|{"originWidth":274,"originHeight":189,"style":"alignLeft"}_##]

컴포넌트 2개가 부모/자식 관계인 경우엔 가능하다.

(다른 컴포넌트 안에 있는 컴포넌트를 자식컴포넌트라고 부름)

[##_Image|kage@bQ51Mg/btsMvxDcaUH/Q5Ptn4OafnaFTZoDL7yqq0/img.png|CDM|1.3|{"originWidth":276,"originHeight":193,"style":"alignLeft"}_##]

부모 컴포넌트의 state를 자식 컴포넌트로 전송해줄 수 있는데, 

그럼 자식도 사용가능하다. 

**전송시엔 props라는 문법을 사용한다.**

## ****props로 부모 -> 자식 state 전송하는 법****

1\. 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명={state이름} /> 

2\. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용

예시)

```
function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

(참고1.)

props는 **<Modal 이런거={이런거}  저런거={저런거}>** 이렇게 10개 100개 1000개 무한히 전송이 가능

(참고2.) 꼭 state만 전송할 수 있는건 아니다.

**<Modal 글제목={변수명}>** 일반 변수, 함수 전송도 가능하고 

**<Modal 글제목="강남우동맛집">** 일반 문자전송은 중괄호 없이 이렇게 해도 된다.

[##_Image|kage@59zXc/btsMvew38je/xAnRR5l92y8OkpWNKWAOD1/img.png|CDM|1.3|{"originWidth":278,"originHeight":192,"style":"alignLeft"}_##]

▲ 자식 → 부모 패륜방향 전송은 불가능

[##_Image|kage@cmTjPm/btsMv3O9imG/Y86kFDKn21L1cV3UNcKXO0/img.png|CDM|1.3|{"originWidth":339,"originHeight":190,"style":"alignLeft"}_##]

▲ 옆집 컴포넌트로의 불륜전송도 불가능

---

출처: 코딩애플 리액트 강의
