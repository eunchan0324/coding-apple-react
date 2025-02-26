import { useState } from 'react'
import './App.css'

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [modal, setModal] = useState(false);
  let [따봉, 따봉변경] = useState([0,0,0])
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('')
  let [날짜, 날짜변경] = useState(['2024-02-17', '2025-02-17', '2025-02-23'])
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>
            <h4 onClick={()=> { setModal(!modal); setTitle(i) }}> 
              { 글제목[i] } 
              <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)  
              }}>👍</span> {따봉[i]} 
            </h4> 
            <p>{ 날짜[i] } 발행</p>

            <button onClick={()=> {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);

              let 따봉copy = [...따봉];
              따봉copy.splice(i, 1);
              따봉변경(따봉copy);

              let 날짜copy = [...날짜];
              날짜copy.splice(i, 1);
              날짜변경(날짜copy);


            }}>삭제</button>
          </div>
          )
        })
      }

      <input
        value={입력값} 
        onChange={(e)=> { 입력값변경(e.target.value)}}
      />

      <button onClick={()=> { 
        if (입력값.trim() === '') {
          alert('내용을 입력해주세요!');
          return;
        }

        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        입력값변경('');
        
        let 따봉copy = [...따봉];
        따봉copy.unshift(0);
        따봉변경(따봉copy)

        let 날짜copy = [...날짜];
        let today = new Date().toISOString().split('T')[0];
        날짜copy.unshift(today);
        날짜변경(날짜copy)
        
      }}>글발행</button>

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
