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

        <button onClick={()=>{
          
          let copy = [...글제목]
          copy[0] = '여자코트 추천'
          글제목변경(copy) 
          }}>글제목 수정</button>

        <button onClick={()=> {
          
          let copy = [...글제목]
          copy.sort()
          글제목변경(copy)
        }}>가나다 정렬</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
    

    </div>
  )
}


function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App
