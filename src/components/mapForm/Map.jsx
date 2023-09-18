import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCurrentLocation from "../../hooks/useCurrentPosition";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./Map.css";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function KakaoMap() {
  const [map, setMap] = useState(null);
  const [myLocation, setMyLocation] = useState({
    latitude: 37.498004414546934,
    longitude: 127.02770621963765,
  });
  const { location, error } = useCurrentLocation(geolocationOptions);
  console.log("myLocation", myLocation);
  useEffect(() => {
    if (location) {
      setMyLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location]);
  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
  const markerImageSrc =
    "https://github.com/project-team-six/FE/assets/130561236/bd4fbe9c-d618-4617-90b6-7508d9246310";

  const imageSize = { width: 22, height: 26 };
  const spriteSize = { width: 31, height: 192 };

  // 맛집 마커가 표시될 좌표 배열입니다
  const restaurantPositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
  ];
  const restaurantOrigin = { x: 9, y: 0 };

  // 숙박 마커가 표시될 좌표 배열입니다
  const lodgingPositions = [
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
    { lat: 37.49640072567703, lng: 127.02726459882308 },
    { lat: 37.49640098874988, lng: 127.02609983175294 },
    { lat: 37.49932849491523, lng: 127.02935780247945 },
    { lat: 37.49996818951873, lng: 127.02943721562295 },
  ];
  const lodgingOrigin = { x: 10, y: 32 };

  // 쇼핑 마커가 표시될 좌표 배열입니다
  const shoppingPositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
    { lat: 37.49896834100913, lng: 127.02833986892401 },
    { lat: 37.49893267508434, lng: 127.02673400572665 },
    { lat: 37.49872543597439, lng: 127.02676785815386 },
    { lat: 37.49813096097184, lng: 127.02591949495914 },
    { lat: 37.497680616783086, lng: 127.02518427952202 },
  ];
  const shoppingOrigin = { x: 10, y: 65 };

  // 자연관광 마커가 표시될 좌표 배열입니다
  const sightseeingPositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
  ];
  const sightseeingOrigin = { x: 10, y: 100 };

  // 인문 마커가 표시될 좌표 배열입니다
  const humanitiesPositions = [
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
    { lat: 37.49640072567703, lng: 127.02726459882308 },
    { lat: 37.49640098874988, lng: 127.02609983175294 },
    { lat: 37.49932849491523, lng: 127.02935780247945 },
    { lat: 37.49996818951873, lng: 127.02943721562295 },
  ];
  const humanitiesOrigin = { x: 10, y: 130 };

  // 레포츠 마커가 표시될 좌표 배열입니다
  const leisurePositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
    { lat: 37.49896834100913, lng: 127.02833986892401 },
    { lat: 37.49893267508434, lng: 127.02673400572665 },
    { lat: 37.49872543597439, lng: 127.02676785815386 },
    { lat: 37.49813096097184, lng: 127.02591949495914 },
    { lat: 37.497680616783086, lng: 127.02518427952202 },
  ];
  const leisureOrigin = { x: 10, y: 163 };

  const [selectedCategory, setSelectedCategory] = useState("restaurant");
  const [isOpen, setIsOpen] = useState(false);

  console.log("selectedCategory", selectedCategory);
  useEffect(() => {
    const restaurantMenu = document.getElementById("restaurantMenu");
    const lodgingMenu = document.getElementById("lodgingMenu");
    const shoppingMenu = document.getElementById("shoppingMenu");
    const sightseeingMenu = document.getElementById("sightseeingMenu");
    const humanitiesMenu = document.getElementById("humanitiesMenu");
    const leisureMenu = document.getElementById("leisureMenu");

    if (selectedCategory === "restaurant") {
      restaurantMenu.className = "menu_selected";
      lodgingMenu.className = "";
      shoppingMenu.className = "";
      sightseeingMenu.className = "";
      humanitiesMenu.className = "";
      leisureMenu.className = "";
    } else if (selectedCategory === "lodging") {
      restaurantMenu.className = "";
      lodgingMenu.className = "menu_selected";
      shoppingMenu.className = "";
      sightseeingMenu.className = "";
      humanitiesMenu.className = "";
      leisureMenu.className = "";
    } else if (selectedCategory === "shopping") {
      restaurantMenu.className = "";
      lodgingMenu.className = "";
      shoppingMenu.className = "menu_selected";
      sightseeingMenu.className = "";
      humanitiesMenu.className = "";
      leisureMenu.className = "";
    } else if (selectedCategory === "sightseeing") {
      restaurantMenu.className = "";
      lodgingMenu.className = "";
      shoppingMenu.className = "";
      sightseeingMenu.className = "menu_selected";
      humanitiesMenu.className = "";
      leisureMenu.className = "";
    } else if (selectedCategory === "humanities") {
      restaurantMenu.className = "";
      lodgingMenu.className = "";
      shoppingMenu.className = "";
      sightseeingMenu.className = "";
      humanitiesMenu.className = "menu_selected";
      leisureMenu.className = "";
    } else if (selectedCategory === "leisure") {
      restaurantMenu.className = "";
      lodgingMenu.className = "";
      shoppingMenu.className = "";
      sightseeingMenu.className = "";
      humanitiesMenu.className = "";
      leisureMenu.className = "menu_selected";
    }
  }, [selectedCategory]);

  return (
    <>
      <StMapContainer>
        <CategoryMarkerStyle />
        <div id="mapwrap">
          <Map // 지도를 표시할 Container
            id={`map`}
            center={{
              // 지도의 중심좌표
              lat: 37.498004414546934,
              lng: 127.02770621963765,
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "100%",
            }}
            level={3} // 지도의 확대 레벨
          >
            {selectedCategory === "restaurant" &&
              restaurantPositions.map((position) => (
                <MapMarker
                  key={`restaurant-${position.lat},${position.lng}`}
                  position={position}
                  image={{
                    src: markerImageSrc,
                    size: imageSize,
                    options: {
                      spriteSize: spriteSize,
                      spriteOrigin: restaurantOrigin,
                    },
                  }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => setIsOpen(true)}
                />
              ))}
            {isOpen && (
              <StInfoContainer>
                <StDeleteButton
                  alt="close"
                  width="14"
                  height="13"
                  src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                  onClick={() => setIsOpen(false)}
                />
                <StInfoBox>Hello World!</StInfoBox>
              </StInfoContainer>
            )}
            {selectedCategory === "lodging" &&
              lodgingPositions.map((position) => (
                <MapMarker
                  key={`lodging-${position.lat},${position.lng}`}
                  position={position}
                  image={{
                    src: markerImageSrc,
                    size: imageSize,
                    options: {
                      spriteSize: spriteSize,
                      spriteOrigin: lodgingOrigin,
                    },
                  }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => setIsOpen(true)}
                />
              ))}
            {selectedCategory === "shopping" &&
              shoppingPositions.map((position) => (
                <MapMarker
                  key={`shopping-${position.lat},${position.lng}`}
                  position={position}
                  image={{
                    src: markerImageSrc,
                    size: imageSize,
                    options: {
                      spriteSize: spriteSize,
                      spriteOrigin: shoppingOrigin,
                    },
                  }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => setIsOpen(true)}
                />
              ))}
            {selectedCategory === "sightseeing" &&
              sightseeingPositions.map((position) => (
                <MapMarker
                  key={`sightseeing-${position.lat},${position.lng}`}
                  position={position}
                  image={{
                    src: markerImageSrc,
                    size: imageSize,
                    options: {
                      spriteSize: spriteSize,
                      spriteOrigin: sightseeingOrigin,
                    },
                  }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => setIsOpen(true)}
                />
              ))}
            {selectedCategory === "humanities" &&
              humanitiesPositions.map((position) => (
                <MapMarker
                  key={`humanities-${position.lat},${position.lng}`}
                  position={position}
                  image={{
                    src: markerImageSrc,
                    size: imageSize,
                    options: {
                      spriteSize: spriteSize,
                      spriteOrigin: humanitiesOrigin,
                    },
                  }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => setIsOpen(true)}
                />
              ))}
            {selectedCategory === "leisure" &&
              leisurePositions.map((position) => (
                <MapMarker
                  key={`leisure-${position.lat},${position.lng}`}
                  position={position}
                  image={{
                    src: markerImageSrc,
                    size: imageSize,
                    options: {
                      spriteSize: spriteSize,
                      spriteOrigin: leisureOrigin,
                    },
                  }}
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => setIsOpen(true)}
                />
              ))}
            <MapMarker // 마커를 생성합니다
              position={{
                // 마커가 표시될 위치입니다
                lat: 37.498004414546934,
                lng: 127.02770621963765,
              }}
              image={{
                src: "https://github.com/Dino-Soul/client/assets/130561236/9b720f8c-b12b-4572-86c1-eba6e48bed94", // 마커이미지의 주소입니다
                size: {
                  width: 64,
                  height: 69,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 27,
                    y: 69,
                  }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                },
              }}
            />
          </Map>
          {/* 지도 위에 표시될 마커 카테고리 */}
          <div className="category">
            <ul>
              <li
                id="restaurantMenu"
                onClick={() => setSelectedCategory("restaurant")}
              >
                <span className="ico_comm ico_restaurant"></span>
                맛집
              </li>
              <li
                id="lodgingMenu"
                onClick={() => setSelectedCategory("lodging")}
              >
                <span className="ico_comm ico_lodging"></span>
                숙박
              </li>
              <li
                id="shoppingMenu"
                onClick={() => setSelectedCategory("shopping")}
              >
                <span className="ico_comm ico_shopping"></span>
                쇼핑
              </li>
              <li
                id="sightseeingMenu"
                onClick={() => setSelectedCategory("sightseeing")}
              >
                <span className="ico_comm ico_sightseeing"></span>
                자연관광
              </li>
              <li
                id="humanitiesMenu"
                onClick={() => setSelectedCategory("humanities")}
              >
                <span className="ico_comm ico_humanities"></span>
                인문
              </li>
              <li
                id="leisureMenu"
                onClick={() => setSelectedCategory("leisure")}
              >
                <span className="ico_comm ico_leisure"></span>
                레포츠
              </li>
            </ul>
          </div>
        </div>
      </StMapContainer>
    </>
  );
}

export default KakaoMap;

const StMapContainer = styled.div`
  position: sticky;
  width: 40%;
  height: 100vh;
  background-color: rgba(155, 60, 168, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > #mapwrap {
    width: 100%;
    height: 100%;
  }
`;

const CategoryMarkerStyle = styled.div`
  position: absolute;
  overflow: hidden;
  top: 10px;
  left: 10px;
  width: 300px;
  height: 50px;
  z-index: 10;
  border: 1px solid black;
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
`;

const StInfoContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: 120px;
  min-width: 150px;
  z-index: 99;
  background-color: white;
  border-radius: 5px;
  width: 350px;
  height: 100px;
`;

const StDeleteButton = styled.img`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

const StInfoBox = styled.div`
  padding: 5px;
  color: black;
`;
