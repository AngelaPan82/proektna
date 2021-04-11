import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
import DayPicker from 'react-day-picker';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { TextModal } from "../elements/textModal";
import GitText from "../elements/GitTextLoader";

const imageBaseUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
const dateFormat = 'YYYY-MM-DD';
const rpl = (dt) => dt.replaceAll('-', '/'); // replace '-' -> '/' 
//
// Epic komponenta ova e funkcija za epic servisot
//
export const Epic = () => {
  const [show, setShow] = useState(false);
  const { datePar = moment().format(dateFormat), ndx } = useParams();

  const [epicDayList, setEpicDayList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  const history = useHistory();
  const historyPush = (datePar, ii = 1) => {
    history.push("/epic/" + datePar + '/' + ii);
  };

  useEffect(() => {
    // so ovoj rekvest se prezema lista na denovi za koi ima fotografii na zemjata
    axios.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG`)
      .then(res => {
        setEpicDayList(res.data);
      });
  }, []);

  useEffect(() => { 
    // ovdeka koga e izbran datumot od plavite se prevzemaat podatocite za toj datum, spisokot na linkovi za slikite
    // so sekoj rekvest se praka i api_key
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
          <Col>
            <h1>EPIC images on {datePar}</h1>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              About EPIC
            </Button>
            <TextModal id='epic' show={show} onClick={() => setShow(false)} />
          </Col>
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
        <Row>
          <GitText textFile={"AboutEPIC.md"} />
        </Row>
      </Container>

    </div>
  );
}
