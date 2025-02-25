import { useState } from 'react'
import './App.css'

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [modal, setModal] = useState(false);
  let [따봉, 따봉변경] = useState([0,0,0])
  let [title, setTitle] = useState(0)
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

        {/* <button onClick={()=>{
          
          let copy = [...글제목]
          copy[0] = '여자코트 추천'
          글제목변경(copy) 
          }}>글제목 수정</button>

        <button onClick={()=> {
          
          let copy = [...글제목]
          copy.sort()
          글제목변경(copy)
        }}>가나다 정렬</button> */}

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={()=> { setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>
            <h4 onClick={()=> { setModal(true); setTitle(i) }}> 
              { 글제목[i] } 
              <span onClick={()=>{ 
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)  
              }}>👍</span> {따봉[i]} 
            </h4> 
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }
    

    </div>
  )
}


function Modal(props){
  return(
    <div className='modal'>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        let copy = [...props.글제목]
        copy = ['여자코트추천', '강남 우동맛집', '파이썬독학']
        props.글제목변경(copy)
      }}>글수정</button>
    </div>
  )
}


export default App
