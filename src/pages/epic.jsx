import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
import DayPicker from 'react-day-picker';

import { Button,Col, Container, Image, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import ReactJson from "react-json-view";

const imageBaseUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
export const Epic = () => {
  const { year = moment().format('YYYY'), month = moment().format('MM'), day=moment().format('DD'), ndx=0 } = useParams();
  
  const [epicDayList, setEpicDayList] = useState([]);
  const [photoList, setPhotoList] = useState([]);
  
  const history = useHistory();
  const historyPush = (yy, mm, dd, ii=1) => {
    history.push("/epic/" + yy + "/" + mm + "/" + dd + '/' + ii);
  };

  const handleDayClick = (dd) => {
    const date = moment(dd);
    historyPush(date.format('YYYY'), date.format('MM'), date.format('DD'));
  };

  const photoUri = (pd,type,ndx) => {
    const ext = type==='png' ? '.png' : '.jpg'; 
    if(photoList[ndx]) 
      return imageBaseUrl + year + '/' + month + '/' + day + '/'+type+'/' + pd.image + ext;
    return '';  
  };

  useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG`)
      .then(res => {
        setEpicDayList(res.data);
      }); 
  }, []);

  useEffect(() => {
    axios.get('https://api.nasa.gov/EPIC/api/natural/date/' + year + '-' + month + '-' + day + '?api_key=zLcj2YQqAcjw4XMvcJPgZUtlbReqV1MonlwC8iqG')
      .then(res => {
        setPhotoList(res.data);
      });
  }, [year, month, day]);

  return (
    <div>

      <Container style={{ padding: '1em',  }}>
        <Row>
          <h1>EPIC images on {year + '-' + month + '-' + day}</h1>
        </Row>
        <Row>
         <Col>
            <DayPicker 
              selectedDays={ epicDayList.map( (dt) => ( moment(dt).toDate() ) ) }
              onDayClick={(dd) => handleDayClick(dd)}
              numberOfMonths={1}
            />
          </Col>
          <Col>
          {photoList.map((pd, key) => (
          <Button 
            variant={ key!==ndx ? 'light' : 'danger'} 
            onClick={() => historyPush(year,month,day,key)} 
            style={{ maxWidth: '60px', padding: 0, margin: '3px' }} 
            key={key}
          >
              <Image 
                src={ imageBaseUrl+year+'/'+month+'/'+day+'/thumbs/'+pd.image+'.jpg'} 
                style={{ maxWidth: '60px', margin:'3px' }} 
                rounded 
              />
              {/* <ReactJson src={pd} /> */}
          </Button>
          ))}
        </Col>
        </Row>
        <Row style={{ paddingTop: '1em' }}>
          <Col>
          { photoList[ndx] &&
            <Button onClick={() => window.open(imageBaseUrl+year+'/'+month+'/'+day+'/png/'+photoList[ndx].image+'.png', '_blank')} variant="light" style={{ padding: '0.4em' }}>
              <Image src={imageBaseUrl+year+'/'+month+'/'+day+'/jpg/'+photoList[ndx].image+'.jpg'} alt='Photo...' />
            </Button>
          }  
          </Col>
        </Row>
      </Container> 

    </div>
  );
}
