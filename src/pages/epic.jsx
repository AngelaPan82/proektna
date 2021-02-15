import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
import DayPicker from 'react-day-picker';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const imageBaseUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
const dateFormat = 'YYYY-MM-DD';
const rpl = (dt) => dt.replaceAll('-', '/'); // replace '-' -> '/' 

export const Epic = () => {
  const { datePar = moment().format(dateFormat), ndx } = useParams();

  const [epicDayList, setEpicDayList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  const history = useHistory();
  const historyPush = (datePar, ii = 1) => {
    history.push("/epic/" + datePar + '/' + ii);
  };

  useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG`)
      .then(res => {
        setEpicDayList(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get('https://api.nasa.gov/EPIC/api/natural/date/' + datePar + '?api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG')
      .then(res => {
        setPhotoList(res.data);
      });
  }, [datePar]);

  const handleDayClick = (dd) => {
    const date = moment(dd);
    historyPush(date.format(dateFormat));
  };

  return (
    <div>

      <Container style={{ padding: '1em', }}>
        <Row>
          <h1>EPIC images on {datePar}</h1>
        </Row>
        <Row>
          <Col>
            <DayPicker
              selectedDays={epicDayList.map((dt) => (moment(dt).toDate()))}
              onDayClick={(dd) => handleDayClick(dd)}
              numberOfMonths={1}
            />
          </Col>
          <Col>
            {photoList.map((pd, key) => (
              <Button
                variant={key !== ndx ? 'light' : 'danger'}
                onClick={() => historyPush(datePar, key)}
                style={{ maxWidth: '60px', padding: 0, margin: '3px' }}
                key={key}
              >
                <Image
                  src={imageBaseUrl + rpl(datePar) + '/thumbs/' + pd.image + '.jpg'}
                  style={{ maxWidth: '60px', margin: '3px' }}
                  rounded
                />
              </Button>
            ))}
          </Col>
        </Row>
        <Row style={{ paddingTop: '1em' }}>
          <Col>
            {photoList[ndx] &&
              <Button onClick={() => window.open(imageBaseUrl + rpl(datePar) + '/png/' + photoList[ndx].image + '.png', '_blank')} variant="light" style={{ padding: '0.4em' }}>
                <Image src={imageBaseUrl + rpl(datePar) + '/jpg/' + photoList[ndx].image + '.jpg'} alt='Photo...' />
              </Button>
            }
          </Col>
        </Row>
      </Container>

    </div>
  );
}
