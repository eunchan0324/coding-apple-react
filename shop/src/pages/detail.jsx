import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { useEffect, useState } from 'react'

let Box = styled.div`
  padding : 20px;
  color : grey
`;

let YellowBtn = styled.button` 
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
`; 

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  let [count, setCount] = useState(0)
  let [alert1, setAlert] = useState(true)
  let [num, setNum] = useState('')

  useEffect(()=> {
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    console.log('렌더링 완료')
    return ()=> {
      clearTimeout(a)
    }
  })

  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])  
  
  return (
    <div className="container">
      {
        alert1 == true? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
      }
      <button onClick={()=>{setCount(count+1)}}>증가</button>
      <button onClick={()=>{setCount(count-1)}}>감소</button>
      <p>{count}</p>
      
      <input onChange={(e)=>{setNum(e.target.value)}}/>

      <Box>
      <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
      <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail 