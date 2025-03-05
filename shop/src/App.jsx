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

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate()

  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} >Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>

            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>

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

          </>
        } />
        <Route path='/detail' element={ <Detail /> } />
        <Route path='/about' element={ <About /> }>
          <Route path='member' element={ <div>맴버임</div> } />
          <Route path='location' element={ <div>지역임</div> } />
        </Route>
        <Route path='/event' element={ <Event /> }>
          <Route path='one' element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path='two' element={ <div>생일기념 쿠폰받기</div> } />
        </Route>
        <Route path='*' element={ <div>없는 페이지입니다.</div> } />
      </Routes>

    </>
  )
}

function Event() {
  return(
    <>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </>
  )
}



function About() {
  return(
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
