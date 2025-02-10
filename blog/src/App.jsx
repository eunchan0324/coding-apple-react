import { useState } from 'react'
import './App.css'

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>{ 글제목변경(글제목[0]='여자코트 추천') }}>글제목 변경</button>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App
