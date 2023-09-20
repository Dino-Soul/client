import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCurrentLocation from "../../hooks/useCurrentPosition";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./Map.css";
import { gangwonLocation } from "../../utils/gangwonLocation";
import SelectBox from "./SelectBox";
import MapCategory from "./MapCategory";
import { useQuery } from "react-query";
import { gettravlespot } from "../../api/mapApi";

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

  // 처음 접속할때 내위치 받아와서 이동
  const { location, error } = useCurrentLocation(geolocationOptions);
  useEffect(() => {
    myPointMove();
  }, [location]);

  // 내 위치로 이동
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

  const {
    isLoading,
    isError,
    data: travlespotData,
  } = useQuery("travlespot", gettravlespot, {
    refetchOnWindowFocus: false,
  });
  const markerImageSrc =
    "https://github.com/project-team-six/FE/assets/130561236/bd4fbe9c-d618-4617-90b6-7508d9246310";

  const imageSize = { width: 22, height: 26 };
  const spriteSize = { width: 31, height: 192 };

  function extractDataByRange(data, start, end) {
    return (
      data?.data.slice(start, end).map((data) => ({
        spotName: data.spotName,
        location: data.location,
        subCategory: data.subCategory,
        lat: data.latitude,
        lng: data.longitude,
      })) || []
    );
  }

  const leisureData = extractDataByRange(travlespotData, 0, 25);
  const shoppingData = extractDataByRange(travlespotData, 26, 46);
  const lodgingData = extractDataByRange(travlespotData, 47, 66);
  const humanitiesData = extractDataByRange(travlespotData, 67, 166);
  const sightseeingData = extractDataByRange(travlespotData, 167, 266);
  const restaurantData = extractDataByRange(travlespotData, 267, 366);

  const leisureOrigin = { x: 10, y: 163 };
  const restaurantOrigin = { x: 9, y: 0 };
  const lodgingOrigin = { x: 10, y: 32 };
  const shoppingOrigin = { x: 10, y: 65 };
  const sightseeingOrigin = { x: 10, y: 100 };
  const humanitiesOrigin = { x: 10, y: 130 };

  const locationInformation = (Information) => {
    console.log("Information", Information);
    setIsOpen(Information);
  };

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
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>Error loading scrap data...</p>;
  // }

  const renderMarkers = (positions, imageOptions, subCategory) => {
    return positions.map((data) => (
      <MapMarker
        key={`${subCategory}-${data.lat},${data.lng}`}
        position={data}
        image={{
          src: markerImageSrc,
          size: imageSize,
          options: {
            spriteSize: spriteSize,
            spriteOrigin: imageOptions,
          },
        }}
        clickable={true}
        onClick={() => locationInformation(data)}
      />
    ));
  };
  return (
    <>
      <StMapContainer>
        <div id="mapwrap">
          <Map
            id={`map`}
            center={{
              lat: myLocation.lat,
              lng: myLocation.lng,
            }}
            isPanto={false}
            style={{
              width: "100%",
              height: "100%",
            }}
            level={myLocation.level}
            onDragEnd={(map) =>
              setMyLocation({
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              })
            }
          >
            {selectedCategory === "restaurant" &&
              renderMarkers(restaurantData, restaurantOrigin, "restaurant")}
            {selectedCategory === "lodging" &&
              renderMarkers(lodgingData, lodgingOrigin, "lodging")}
            {selectedCategory === "shopping" &&
              renderMarkers(shoppingData, shoppingOrigin, "shopping")}
            {selectedCategory === "sightseeing" &&
              renderMarkers(sightseeingData, sightseeingOrigin, "sightseeing")}
            {selectedCategory === "humanities" &&
              renderMarkers(humanitiesData, humanitiesOrigin, "humanities")}
            {selectedCategory === "leisure" &&
              renderMarkers(leisureData, leisureOrigin, "leisure")}

            {isOpen && (
              <StInfoContainer>
                <StDeleteButton
                  alt="close"
                  width="14"
                  height="13"
                  src="https://github.com/Dino-Soul/client/assets/132332533/0ce09bf3-fca2-423e-8327-7ee22cf0c295"
                  onClick={() => setIsOpen(false)}
                />
                <StInfoBox>
                  {isOpen.spotName}
                  <br />
                  {isOpen.location}
                  <br />
                  {isOpen.subCategory}
                </StInfoBox>
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
