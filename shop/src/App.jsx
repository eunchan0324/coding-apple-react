import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './bg.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data'
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './pages/detail'

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <>
      <Link to="/">홈</Link> | 
      <Link to="/detail"> 상세페이지</Link>


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
      </Routes>

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
