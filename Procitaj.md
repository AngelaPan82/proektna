# React демо апликација за користење НАСА АПИ

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

#### Со помош на useEffect hook:

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
#### Во овој дел од кодот, ние примаме необработени мета-податоци од АПО-то и ги трансформираме (прикажуваме) на страницата.

![APOD screen](https://github.com/AngelaPan82/proektna/blob/master/screens/apod.jpg)

## EPIC

EPIC API обезбедува информации за дневните слики собрани од инструментот Earth Polychromatic Imaging Camera (EPIC) на DSCOVR. Единствено поставена на точката Земја-Сонце Лагранџ, EPIC обезбедува целосна слика на дисковите на Земјата и снима уникатни перспективи на одредени астрономски настани, како што се месечински транзити со помош на детектор 2048x2048 пиксели CCD (уред со полнење на полнење), споен со телескоп Касегреин со отвор од 30 см .

Метаподатоците за слика и клучните информации се обезбедени од JSON API и може да се побараат според датумот и за најновиот достапен датум. Список на сите достапни датуми, исто така, може да се добие преку API за повеќе грануларна контрола.

Развојот на EPIC API започна во 2015 година и е поддржан од тимот за развој на веб-страници за [Лабораторија за атмосфери] (http://atmospheres.gsfc.nasa.gov/) во одделот за науки за земјата на Центарот за вселенски летови на Годард. Повеќе информации во врска со API и преземањето на сликите за преземање може да најдете на [веб-страницата EPIC] (http://epic.gsfc.nasa.gov/).

### Метаподатоци за обновување

Следниве информации се достапни за секоја слика во колекцијата:

- Image [name]
- Date
- Caption
- centroid_coordinates
- dscovr_j2000_position
- lunar_j2000_position
- sun_j2000_position
- attitude_quaternions

#### Во нашата апликација се користи ова барање за преземање на списокот со датуми со ЕПС-слика:

```js
useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=<apy_key>`)
      .then(res => {
        setEpicDayList(res.data);
      });
  }, []);
```

#### И со овој код список на адреси на слики се преземени:

```jsx
useEffect(() => {
    axios.get('https://api.nasa.gov/EPIC/api/natural/date/'+datePar+'?api_key=<apy-key>')
      .then(res => {
        setPhotoList(res.data);
      });
  }, [datePar]);
```

#### И, конечно, претстави во вакво нешто:

![EPIC screen](https://github.com/AngelaPan82/proektna/blob/master/screens/epic.jpg)


## Овој последен дел од rocitaj.md автоматски се генерира со create-react-app:

### Достапни скрипти, генерирани од create-react-app

Во директориумот на проектот, можете да извршите:

### `yarn start`

Ја извршува апликацијата во режим на развој.\
Отвори [http://localhost:3000](http://localhost:3000) во прелистувач.

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

