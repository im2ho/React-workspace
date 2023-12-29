import React,{useState} from 'react';
import axios from 'axios';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = '4edac2eabf494946a189e86050976521';

  const searchWeather = async() => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`
      );

      //get을 통해 api에서 데이터를 가져왔다면 > POST를 이용해서 바로 db에 넣어버리자
      await axios.post('http://localhost:5000/api/saveWeatherData', {
        //response.data : 필수로 데이터를 불러오기 위한 작업
        //.data[0] : 검색했을 때 제일 첫 번째로 나오는 데이터를 가져오기 위해 사용
        city_name : response.data.data[0].city_name,
        temp : response.data.data[0].temp,
        rh : response.data.data[0].rh,
        description : response.data.data[0].weather.description,
      })
      setWeather(response.data.data[0]);
    } catch(err) {
      console.log('데이터베이스 삽입 실패', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>날씨</h1>
      <input 
        temp="text"
        placeholder='도시를 입력하세요'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchWeather}>검색하기</button>
      {loading && <p>Loading...</p>}
      {weather.city_name && (
        <div>
          <h3>{weather.city_name}</h3>
          <p>온도 : {weather.temp}</p>
          <p>습도 : {weather.rh}</p>
          <p>날씨 : {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
