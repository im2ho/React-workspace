import React, {useEffect} from 'react';

const KakaoMap=() => {

  useEffect(() => {
    //카카오맵 api를 가져오는 script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?"
                    + "appkey=065d7cc570734a5e78235a382cc14183&autoload=false";
    document.head.appendChild(script);

    //스트립트 추가했으면 실행
    script.onload = () => {
      window.kakao.maps.load(()=>{
        const container = document.getElementById('map');
        const options = {
          //초기에 지도 중심 좌표
          center : new window.kakao.maps.LatLng(37.5665,126.978),
          level : 3,
        };

        //지도 생성
        const map = new window.kakao.maps.Map(container, options);

        //마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.5665,126.978);
        const marker = new window.kakao.maps.Marker({
          position : markerPosition,
        });
        marker.setMap(map);
      });
    }
  },[]);

  return <div id="map" style={{ width: '50%', height: '400px' }}></div>;
};

export default KakaoMap;