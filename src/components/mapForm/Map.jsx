import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCurrentLocation from "../../hooks/useCurrentPosition";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./Map.css";
import { gangwonLocation } from "../../utils/gangwonLocation";
import SelectBox from "./SelectBox";
import MapCategory from "./MapCategory";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function KakaoMap() {
  const [map, setMap] = useState(null);
  const [myLocation, setMyLocation] = useState({
    lat: 37.498004414546934,
    lng: 127.02770621963765,
    level: 3,
  });

  const { location, error } = useCurrentLocation(geolocationOptions);
  useEffect(() => {
    myPointMove();
  }, [location]);

  const myPointMove = () => {
    if (location) {
      setMyLocation({
        lat: location.latitude,
        lng: location.longitude,
        level: 3,
      });
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("restaurant");
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (selectedValue) => {
    // setSelectedOption(selectedValue); // 선택된 값을 상태에 업데이트
    setMyLocation(gangwonLocation(selectedValue));
  };

  // console.log("selectedCategory", selectedCategory);
  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
  const markerImageSrc =
    "https://github.com/project-team-six/FE/assets/130561236/bd4fbe9c-d618-4617-90b6-7508d9246310";

  const imageSize = { width: 22, height: 26 };
  const spriteSize = { width: 31, height: 192 };

  // 맛집 마커가 표시될 좌표 배열입니다
  const restaurantPositions = [
    { lat: 38.1983886, lng: 128.5358105 },
    { lat: 37.8223621, lng: 128.8850211 },
    { lat: 38.1980428, lng: 128.5323393 },
    { lat: 38.1821785, lng: 128.6015652 },
    { lat: 37.7013453, lng: 127.8527475 },
    { lat: 37.8376208, lng: 128.875359 },
    { lat: 37.8846101, lng: 127.712109 },
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

  useEffect(() => {
    const menuIds = [
      "restaurantMenu",
      "lodgingMenu",
      "shoppingMenu",
      "sightseeingMenu",
      "humanitiesMenu",
      "leisureMenu",
    ];

    menuIds.forEach((menuId) => {
      const menu = document.getElementById(menuId);
      menu.className =
        selectedCategory === menuId.replace("Menu", "") ? "menu_selected" : "";
    });
  }, [selectedCategory]);

  return (
    <>
      <StMapContainer>
        <div id="mapwrap">
          <Map // 지도를 표시할 Container
            id={`map`}
            center={{
              // 지도의 중심좌표
              lat: myLocation.lat,
              lng: myLocation.lng,
            }}
            isPanto={false}
            style={{
              // 지도의 크기
              width: "100%",
              height: "100%",
            }}
            level={myLocation.level} // 지도의 확대 레벨
            onDragEnd={(map) =>
              setMyLocation({
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              })
            }
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
            {isOpen && (
              <StInfoContainer>
                <StDeleteButton
                  alt="close"
                  width="14"
                  height="13"
                  src="https://github.com/Dino-Soul/client/assets/132332533/0ce09bf3-fca2-423e-8327-7ee22cf0c295"
                  onClick={() => setIsOpen(false)}
                />
                <StInfoBox>Hello World!</StInfoBox>
              </StInfoContainer>
            )}
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
          <MapCategory setSelectedCategory={setSelectedCategory} />
          <SelectBox onOptionChange={handleOptionChange} />
          <StMyPoint onClick={myPointMove}>
            <StTargetImg src="https://github.com/Dino-Soul/client/assets/132332533/2134f2d3-c904-40ea-8224-0b0fff9e0968"></StTargetImg>
          </StMyPoint>
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

const StInfoContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: 120px;
  min-width: 150px;
  z-index: 99;
  background-color: white;
  border: 1px solid grey;
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
const StMyPoint = styled.button`
  position: absolute;
  overflow: hidden;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 52px;
  z-index: 10;
  border: 1px solid grey;
  border-radius: 5px;

  background-color: white;
  cursor: pointer;
`;

const StTargetImg = styled.img``;
