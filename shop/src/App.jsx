import './App.css'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './bg.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail'
import axios from 'axios'


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate()

  let [resNum, setResNum] = useState(2);

  let [itemEnd, setItemEnd] = useState(false);

  let [loading, setLoading] = useState(false)


  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }} >Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>

            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>

            {
              loading === true ? <div>로딩중!!</div> : null
            }

            <Container>
              <Row>
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i}></Card>
                    )
                  })
                }
              </Row>
            </Container>

            <button onClick={() => {

              setLoading(true)


              if (resNum === 4) {
                setItemEnd(true)
              }

              axios.get(`https://codingapple1.github.io/shop/data${resNum}.json`)
                .then((response) => {
                  console.log(response.data)
                  console.log(shoes)
                  let copy = [...shoes, ...response.data]
                  setShoes(copy)

                  setResNum(resNum + 1)
                  console.log(resNum)

                  setLoading(false)
                })
                .catch((error) => {
                  console.error('실패함', error)
                  setLoading(false)
                })
            }}>더보기</button>


            {
              itemEnd === true ? <div>상품이 더 없습니다.</div> : null
            }

          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>맴버임</div>} />
          <Route path='location' element={<div>지역임</div>} />
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='*' element={<div>없는 페이지입니다.</div>} />
      </Routes>

    </>
  )
}

function Event() {
  return (
    <>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </>
  )
}



function About() {
  return (
    <>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </>
  )
}


function Card(props) {
  return (
    <Col md={4} key={props.i + 1}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}


export default App
