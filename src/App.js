import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container style={{ backgroundColor: '#f1468d' }}>
          <Navbar.Brand href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfCi1cH6RuAhO5rjr61F8aJRoFSU_sqb6XQ&s"
              width="100"
              height="40"
              className="d-inline-block align-top"
             alt ="abc"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container className="mt-4">
        <Row>
          <Col md={12} className="text-center">
            <h1>Team TrendPioneers</h1>
            <p>Swastika Pradhan, Bhanu Sri Kowru, Manya Rai</p>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*ud2gT8avDkWl5lJSkjkhKA.png" alt="Team" className="team-image mx-auto d-block"/>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <h2>Solutions</h2>
          </Col>
        </Row>
        
        <Row className="mt-4 w-100 d-flex justify-content-center">
        <Col md={4} className="d-flex align-items-stretch mb-4">
            <Card>
              <Card.Img variant="top" src="https://www.slideteam.net/media/catalog/product/cache/1280x720/s/a/sales_trend_analysis_dashboard_of_forecasting_slide01.jpg" />
              <Card.Body>
                <Card.Title>Trend Analysis Dashboard</Card.Title>
                <Card.Text>
                Conduct a detailed analysis of trends and customer preferences using historical data, and visualize fashion data to forecast upcoming trends and patterns. Trend analysis can assist you in tracking sales analytics without the need for constant monitoring. The Trend Dashboards allow you to view your sales trends and assess your team's performance. Based on historical and current data, the Trend Dashboard showcases key sales metrics as patterns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          
          
          <Col md={4} className="d-flex align-items-stretch mb-4">
            <Card>
              <Card.Img variant="top" src="https://www.no-refresh.com/blog/wp-content/uploads/2014/02/Sportswear-Design-Tool.jpg" />
              <Card.Body>
                <Card.Title>Custom Design Tool</Card.Title>
                <Card.Text>
                A self-design feature lets customers create unique styles, providing valuable insights for producers. Users can customize colors, add text, and place orders, or give a description that AI turns into a design. Integrated fashion designers can be contacted to bring these designs to life. Popular designs can be produced in bulk for public sale. This feature integrates fashion designers into Myntra, allowing users to customize dresses and shirts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-4 w-100 d-flex justify-content-center">
        <Col md={4} className="d-flex align-items-stretch mb-4">
            <Card>
              <Card.Img variant="top" src="https://appinventiv.com/wp-content/uploads/2018/05/Amazing-Chatbot-Design-Strategy-2018.jpg" />
              <Card.Body>
                <Card.Title>ChatBot Interaction</Card.Title>
                <Card.Text>
                Enhance the shopping experience with an intelligent ChatBot that offers personalized suggestions and support, and enable customers to express unique design preferences through voice or text search, with AI converting descriptions into visual designs for customization. Our intuitive ChatBot improves the shopping experience by facilitating seamless interaction and personalized assistance. Customers can effortlessly navigate the platform, explore products, and receive instant recommendations, making shopping both enjoyable and efficient.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex align-items-stretch mb-4">
            <Card>
              <Card.Img variant="top" src="https://cdn.activestate.com/wp-content/uploads/2019/12/RecommendationEngine.png" />
              <Card.Body>
                <Card.Title>Recommendation Engine</Card.Title>
                <Card.Text>
                Implement advanced algorithms to adjust prices based on real-time demand forecasts, and promote sustainable practices by recommending second-hand, upcycled, or rental options to eco-conscious customers. We serve eco-conscious customers by providing sustainable fashion choices, including second-hand, upcycled, or rental options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
