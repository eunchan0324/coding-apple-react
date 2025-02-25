# 25-02-24 TIL

## [REACT] JSX에서 반복문 쓰는 법 : map

---

for 반복문은 JSX 중괄호 안에서 사용할 수 없다.

**→ map() 을 사용**

## 자바스크립트 map 함수 쓰는 법

\- 모든 array 자료 우측에는 map() 함수를 붙일 수 있다.

### 기능 1.

\- array에 들어있는 자료 개수만큼 그 안에 있는 코드를 반복실행시킨다.

```
var 어레이 = [2,3,4];
어레이.map(function(){
  console.log(1)
});
```

[##_Image|kage@2UlAE/btsMsWROvhO/YwbgxQaeXDiO83L2poNYv0/img.png|CDM|1.3|{"originWidth":611,"originHeight":22,"style":"widthContent","caption":"결과"}_##]

### 기능 2.

\- 콜백함수에 따라 파라미터 아무렇게나 작명하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력한다. 

\*콜백함수 : 소괄호 안에 있는 함수)

```
  어레이.map(function(a){
    console.log(a)
  })
```

[##_Image|kage@pAFFh/btsMuKChGUK/akxCm7L8kxsIkakt3l0sT0/img.png|CDM|1.3|{"originWidth":598,"originHeight":63,"style":"widthContent","caption":"결과"}_##]

### 기능 3.

\- return 오른쪽에 뭐 적으면 array로 담아주고 +  map() 쓴 자리에 남겨준다.

```
var 어레이 = [2,3,4];
var newArray = 어레이.map(function(a){
  return a * 10
});
console.log(newArray)
```

[##_Image|kage@bzfDqz/btsMshWlpxv/Awo32Q4eIxUNkNiPc90K1K/img.png|CDM|1.3|{"originWidth":597,"originHeight":106,"style":"widthContent","caption":"결과"}_##]

## JSX 안에서 html을 반복생성하고 싶으면?

\- 리액트 중괄호안에서 html을 반복생성하고 싶으면 map을 이용해도 된다.

```
function App (){
  return (
    <div>
      { 
        [1,2,3].map(function(){
          return ( <div>안녕</div> )
        }) 
      }
    </div>
  )
}
```

## 실습 때 사용했던 글제목 3개도 반복문으로 축약해보기

```
      {
        글제목.map(function(a){
          return(
            <div className="list">
            <h4>{ a }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
```

[##_Image|kage@dUyU8b/btsMt6yZ9jd/w0TqJdn2XaUGHBIgPEaKj1/img.png|CDM|1.3|{"originWidth":801,"originHeight":309,"style":"alignCenter"}_##]

## 파라미터 2개까지도 작명이 가능하다

```
      {
        글제목.map(function(a, i){
          return(
            <div className="list">
            <h4>{ 글제목[i] }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
```

첫째 파라미터 a는 array안에 있던 자료

둘째 파라미터 i는 0부터 1씩 증가하는 정수

가 되어서 그렇다.

## (참고) key prop 에러가 뜬다면?

[##_Image|kage@mdeOd/btsMsW5dJgz/m26JIn0CdXpVNEgoyluVh0/img.png|CDM|1.3|{"originWidth":601,"originHeight":96,"style":"alignCenter"}_##]

```
<div className="list" key={i}>
```

map 반복문으로 반복생성한 html엔 key={i} 이런 속성을 추가해야한다.

그래야 리액트가 <div>들을 각각 구분할 수 있어서 그렇다.
