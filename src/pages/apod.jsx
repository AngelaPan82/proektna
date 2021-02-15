import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import DayPicker from 'react-day-picker';
import  Video  from "../elements/youtube";

export const Apod = () => {
  const { year = moment().format('YYYY'), month = moment().format('MM'), day = moment().format('DD') } = useParams();
  const [apodData, setApodData] = useState({});
  const [selectedDay, setSelectedDay] = useState(moment(year + '-' + month + '-' + day).toDate());

  const history = useHistory();

  const handleDayClick = (dd) => {
    const date = moment(dd);
    history.push("/apod/" + date.format('YYYY') + "/" + date.format('MM') + "/" + date.format('DD'));
    setSelectedDay(date.toDate());
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=` + year + `-` + month + `-` + day + `&api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG`
      )
      .then((res) => {
        setApodData(res.data);
      });
  }, [year, month, day]);

  return (
    <Container>
      <h2>Astronomy Photo of the Day {apodData.date}</h2>

      <DayPicker
        selectedDays={selectedDay}
        onDayClick={(dd) => handleDayClick(dd)}
      />

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
            <Video url={apodData.url} />
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
