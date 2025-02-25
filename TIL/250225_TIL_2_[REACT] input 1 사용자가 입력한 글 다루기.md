# 25-02-25 TIL

## [REACT] input 1 : 사용자가 입력한 글 다루기

---

## <input> 태그 사용하기

유저의 입력을 받을 수 있는 박스 - input

html에서는 다음과 같은 태그들을 이용가능하다

다양한 종류의 인풋박스는 구글링하여 검색할 수 있다.

```
<input type="text"/>
<input type="range"/>
<input type="date"/>
<input type="number"/>
<textarea></textarea>
<select></select>
```

## <input>에 뭔가 입력시 코드를 실행하려면

유저가 <input>에 뭔가 입력시 코드를 실행해주고 싶을 때가 있는데,

onChange 아니면 onInput 이벤트핸들러를 부착하면 된다.

(onChange, onInput은 <input>에 유저가 뭔가 입력할 때마다 안에 있는 코드를 실행해준다)

```
<input onChange={()=>{ 실행할코드 }}/>
```

## <input>에 입력한 값 가져오는 법

e라는 파라미터를 추가해주고 e.target.value 라고 적으면 현재 <input>에 입력된 값을 가져올 수 있다

e는 이벤트 객체 이런식으로 부르는데,

현재 발생하는 이벤트와 관련한 유용한 기능들을 제공하는 일종의 변수이다. (작명은 e 말고 자유롭게 가능)

```
<input onChange={(e)=>{ console.log(e.target.value) }}/>
```

e.target : 현재 이벤트가 발생한 곳

e.preventDefault() : 이벤트 기본 동작을 막아줌

e.stopPropagation() : 이벤트 버블링을 막아줌 

## 사용자가 input에 입력한 데이터 저장하기

사용자가 input에 입력한 데이터는 state아니면 변수에 저장해서 쓰는게 일반적 (편리하기 때문)

```
function App (){

  let [입력값, 입력값변경] = useState('');
  return (
    <input onChange={(e)=>{ 
      입력값변경(e.target.value) 
      console.log(입력값)
    }} />
  )
}
```

state를 하나 만들고, onChange 될 때마다 state에 e.target.value 넣으라는 코드이다.

이제 입력값이라는 state를 필요한 곳에서 마음대로 사용 가능

## (참고) state 변경함수는 약간 늦게 처리된다

근데 위 코드 실행해보면 a를 입력하면 콘솔창에 아무것도 뜨지 않는다.

aa를 입력하면 a만 콘솔창에 뜨는 걸 볼 수 있다.

왜냐면 state 변경함수 특징 때문인데 state 변경함수는 약간 늦게 처리된다. 

전문용어로 async하게 (비동기적으로) 처리된다고 한다.

그리고 자바스크립트에선 늦게 처리되는 코드들은 잠깐 제쳐두고 바로 다음줄을 실행해준다. 

그래서 console.log(입력값) 이게 먼저 실행되어서 저렇게 나오는 것일 뿐. 

그냥 실행 순서만 좀 다를 뿐 state변경은 어쨌든 잘 된다.
