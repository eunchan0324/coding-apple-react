# 25-02-23 TIL

##[REACT] 리액트에서 동적인 UI 만드는 step

---

**동적인 UI란?**

\- 유저가 조작시 형태가 바뀌는 UI   

\- 모달창, 탭, 서브메뉴, 툴팁, 경고문 등

## 리액트에서 동적인 UI 만드는 step

1\. html css로 미리 UI 디자인 완성

2\. UI의 현재 상태를 state로 저장

3\. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성

---

## 실습 : 모달창을 동적인 UI로 만들어보자

### 1\. html css로 미리 UI 디자인 완성

\[html\]

```
function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

\[css\]

```
.modal {
  margin-top: 20px;
  padding: 20px;
  background: #eee;
  text-align: left;
}
```

### 2\. UI의 현재 상태를 state로 저장

useState 안에는 아무 자료나 넣어도 된다. ( '닫힘' / 열림  , 0/1, false/true ..등등 )

```
  let [modal, setModal] = useState(false);
```

### 3\. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성

\[JSX에서 조건문 쓰는법\]

\- 조건문은 if / else 문법을 쓰면 되지만, JSX 안에서는 if else 문법을 바로 사용할 수 없다. 

**→ 삼항연사자를 사용**

```
조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
```

모달에 적용해보면?

```
      {
        modal == true ? <Modal/> : null
      }
```

### **요소를 클랙해서 모달창을 띄우고 싶다면?**

**onclick => setModal을 통해서 state를 변경하도록 만들면 된다.**

```
      <div className="list">
        <h4 onClick={()=> { setModal(true) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
```

## 정리하면..

[##_Image|kage@cbv3Xh/btsMsLwbpcF/2o3AHK05N0kgzl3zcaqkfk/img.jpg|CDM|1.3|{"originWidth":612,"originHeight":420,"style":"alignCenter"}_##]

그래서 리액트에서 UI만드는 과정을 비유하면

스위치와 전등만드는거랑 비슷하다고 보면 된다.

1\. 일단 전등이쁘게 달아놓고

2\. 스위치랑 연결하고

3\. 스위치를 on으로 놓으면 불이 켜지고 off로 놓으면 불이 꺼지도록

만들어놓는 것.

그리고 나중에 필요하면 스위치 조작만 하면 되는 것이다.

스위치는 state, 전등은 <Modal>

## 실전 2. 다시 클릭해서 닫아보기

```
      <div className="list">
        <h4 onClick={()=> { 
          modal == false ? setModal(true) : setModal(false) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
```
