# [NASA open API](https://api.nasa.gov/)

The objective of this open API is to make NASA data, including imagery, eminently accessible to application developers.
We use just a couple, for now, NASA open APIs: APOD and EPIC.

## APOD: Astronomy Picture of the Day

One of the most popular websites at NASA is the Astronomy Picture of the Day. This website is one of the most popular websites across all federal agencies. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. Also, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for Twitter or Instagram feeds, but generally help with the discoverability of relevant imagery.

The full documentation for this API can be found in the [APOD API Github repository](https://github.com/nasa/apod-api).

#### HTTP Request

```sh
GET https://api.nasa.gov/planetary/apod
```

In our code with useEffect hook:

```jsx
useEffect(() => {
    if(datePar===undefined)
        history.push( "/apod/"+moment().format('YYYY-MM-DD') );
    else        
        axios.get(`https://api.nasa.gov/planetary/apod?date=`+datePar+`&api_key=<apy-key>`)
        .then((res) => {
            setApodData(res.data);
        });
  }, [datePar,history]);
```

In this piece of code, we fetch raw meta data from the service and transform (render) on the page.

##

## EPIC

The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.

Image metadata and key information are provided by the JSON API and can be requested by date and for the most recent available date. A listing of all available dates can also be retrieved via the API for more granular control.

Development of the EPIC API began in 2015, and is supported by the web development team for the [Laboratory for Atmospheres](http://atmospheres.gsfc.nasa.gov/) in the Earth Sciences Division of the Goddard Space Flight Center. More information regarding the API and retrieval of the imagery for download can be found on the [EPIC website](http://epic.gsfc.nasa.gov/).

### Retrievable Metadata

The following information is available for every image in the collection:

- Image [name]
- Date
- Caption
- centroid_coordinates
- dscovr_j2000_position
- lunar_j2000_position
- sun_j2000_position
- attitude_quaternions

###### In our application is used this request for fetching the list of dates whith EPIC image:

```js
useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=<apy_key>`)
      .then(res => {
        setEpicDayList(res.data);
      });
  }, []);
```

###### And with this code list of image urls are fetched:

```jsx
useEffect(() => {
    axios.get('https://api.nasa.gov/EPIC/api/natural/date/'+datePar+'?api_key=<apy-key>')
      .then(res => {
        setPhotoList(res.data);
      });
  }, [datePar]);
```

###### And finaly render in to something like this:
