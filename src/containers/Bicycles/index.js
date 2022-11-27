// import { Button } from 'bootstrap'
import React, { useEffect } from 'react' 
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBicycles , bicycleRequested } from '../../actions';
import Layout from '../../components/Layout' 

export default function Bicycles() {
 
  const allTheBicycle = useSelector(state => state.allBicycle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBicycles());
  }, []);

  const renderBicycle = () => {

    let c = allTheBicycle.allBicycles.bicycles;

    console.log(c.length); // array of elements
  }


  return (
    
    !allTheBicycle.allBicycles.bicycles ?
      <h1>Add Bicycles !!</h1>
      :
      (
        
        <div>
      <Layout>
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>

              {/* {renderPost()} */}

              {allTheBicycle.allBicycles.bicycles.map((bicycle) => (
                    
                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> {bicycle.name} </Card.Title>
                      <Card.Text>
                        {bicycle.description}
                      </Card.Text>
                      <Card.Text>
                        {bicycle.pricePerHour}
                      </Card.Text>
                      <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const bicycleInfro = {
                            bicycleId : bicycle._id
                          }

                          dispatch(bicycleRequested(bicycleInfro));

                      }}
                       variant="primary">Btn</Button>
                    </Card.Body>
                  </Card>
                ))}

              <h1>GAP</h1>
              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


            </Col>
          </Row>

        </Container>
      </Layout>

    </div>
      )
  )
}
