import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const NasaTwitt = () => {
  const { tlName = "NASA" } = useParams();
  const history = useHistory();

  const handleClick = (ur) => { history.push("/twitter/" + ur) };
 
  const Twitko = () => (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={tlName}
      options={{ height: window.innerHeight-100 }}
      theme="dark"
    />
  );

  return (

    <Container style={{ paddingTop: 6 }}>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Card style={{ padding: 6 }}>
            <Button block variant="dark" onClick={() => handleClick('NASA')}>NASA</Button>
            <Button block variant="dark" onClick={() => handleClick('NASAPersevere')}>NASAPersevere</Button>
            <Button block variant="dark" onClick={() => handleClick('NASAJPL')}>NASAJPL</Button>
          </Card>
        </Col>
        <Col lg="10">
              <Twitko />
        </Col>
        <Col xs lg="2">

        </Col>
      </Row>
    </Container>

  )
};
