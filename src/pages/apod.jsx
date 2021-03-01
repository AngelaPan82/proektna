import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import DayPicker from 'react-day-picker';
import  Video  from "../elements/youtube";
import { TextModal } from "../elements/textModal";

export const Apod = () => {
  const [show, setShow] = useState(false);
  const { datePar } = useParams();
  const [apodData, setApodData] = useState({});
  const [selectedDay, setSelectedDay] = useState(moment(datePar).toDate());

  const history = useHistory();
  
  const handleDayClick = (dd) => {
    const dateStr = moment(dd).format('YYYY-MM-DD');
    history.push("/apod/" + dateStr );
    setSelectedDay(dateStr);
  };

  useEffect(() => {
    if(datePar===undefined)
        history.push("/apod/" + moment().format('YYYY-MM-DD'));
    else        
        axios
        .get(
            `https://api.nasa.gov/planetary/apod?date=` + datePar + `&api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG`
        )
        .then((res) => {
            setApodData(res.data);
        });
  }, [datePar,history]);

  return (
    <Container>
      <h2>Astronomy Photo of the Day {apodData.date}</h2>

      <DayPicker
        selectedDays={selectedDay}
        onDayClick={(dd) => handleDayClick(dd)}
      />

      <Button variant="primary" onClick={() => setShow(true)}>
        About APOD
        </Button>
      <TextModal id='apod' show={show} onClick={() => setShow(false)} />

      { apodData.media_type === "image" ?
        <Card className="bg-dark text-white">
          <Card.Img src={apodData.url} alt="Image loading .." />
          <Card.ImgOverlay>
            <Card.Title>{apodData.title}</Card.Title>
            <Card.Text>
              {apodData.explanation}
            </Card.Text>
            <Card.Text>Date: {apodData.date}</Card.Text>
          </Card.ImgOverlay>
        </Card>
        :
        <Card className="bg-dark text-white">
          <Card.Body style={{padding:"0"}}>
            <Video url={apodData.url} title={apodData.title}/>
          </Card.Body>
          <Card.Footer>
            <h5>Date: {apodData.date}</h5>
            {apodData.explanation}
          </Card.Footer>
        </Card>
      }

    </Container>
  );
};
