# React demo application for using NASA API

## Цел на апликацијата

Целта на оваа апликација е да демонстрира и едуцира како да се земат податоци од јавeн сервис (API). Во овој случај, ние користиме отворен API на НАСА. За страната и рендерирањето на преземените податоци се користат ReactJS и некои дополнителни алатки на Node.js како Bootstrap за дизајнот.

### Алатки за развој:

- [VSCode](https://code.visualstudio.com/) главен текст едитор, интегрирана развојна околина (IDE).
- [Node.js](https://nodejs.org/en/) развојна околина со [Babel]() и [webpack](https://webpack.js.org).
- Почетната околона е креиран со [create-react-app](https://github.com/facebook/create-react-app) .
- [Axios](https://www.npmjs.com/package/axios) се употребува за превземање на податоците од NASA сервисите во JSON формат.
- [react](https://reactjs.org/) Реакт е јава скрипт фрејмворк за развој на web апликации.
- [react-hooks](https://reactjs.org/docs/hooks-intro.html) Нов дел на реакт за извршување на асинхрони акции.
- [react-bootstrap](https://react-bootstrap.github.io/) За дизајнот на некои компоненти, дугмиња менија и сл.
  
  

Како функционира може да се види на оваа локација: https://apan.sman.cloud



## [NASA open API](https://api.nasa.gov/)

Целта на овој отворен API е да ги направи податоците на НАСА, вклучително и слики, еминентно достапни за развивачите на апликации.
Ние користиме само неколку, засега, отворени API на НАСА: APOD и EPIC.

## APOD: Astronomy Picture of the Day (Астрономска Слика на денот)

  Една од најпопуларните веб-страници на НАСА е Астрономската слика на денот. Оваа веб-страница е една од најпопуларните веб-страници во сите федерални агенции. Оваа крајна точка ги структурира сликите на APOD и придружните метаподатоци за да може да бидат пренаменети за други апликации. Исто така, ако параметарот concept_tags е поставен на True, тогаш клучните зборови добиени од објаснувањето на сликата се враќаат. Овие клучни зборови може да се користат како автоматско генерирани хаштагови за извори на Твитер или Инстаграм, но генерално помагаат при откривање на релевантни слики

  Целосната документација за овие API може да се најде во [APOD API Github repository](https://github.com/nasa/apod-api).

#### HTTP Request

```sh
GET https://api.nasa.gov/planetary/apod
```

#### In our code with useEffect hook:

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
#### In this piece of code, we fetch raw meta data from the service and transform (render) on the page.

![APOD screen](https://github.com/AngelaPan82/proektna/blob/master/screens/apod.jpg)

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

#### In our application is used this request for fetching the list of dates whith EPIC image:

```js
useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=<apy_key>`)
      .then(res => {
        setEpicDayList(res.data);
      });
  }, []);
```

#### And with this code list of image urls are fetched:

```jsx
useEffect(() => {
    axios.get('https://api.nasa.gov/EPIC/api/natural/date/'+datePar+'?api_key=<apy-key>')
      .then(res => {
        setPhotoList(res.data);
      });
  }, [datePar]);
```

#### And finaly render in to something like this:

![EPIC screen](https://github.com/AngelaPan82/proektna/blob/master/screens/epic.jpg)


## This last part of readme.md is automatically generated with create-react-app

### Available Scripts, generated from create-react-app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

