export const gangwonLocation = (location) => {
  let point = {
    lat: 0,
    lng: 0,
  };
  switch (location) {
    case "강릉시":
      point = {
        lat: 37.751853,
        lng: 128.8760574,
        level: 9,
      };
      break;
    case "고성군":
      point = {
        lat: 38.3801292,
        lng: 128.4674385,
        level: 9,
      };
      break;
    case "동해시":
      point = {
        lat: 37.5247192,
        lng: 129.1142915,
        level: 7,
      };
      break;
    case "삼척시":
      point = {
        lat: 37.40821422316559,
        lng: 129.19389613044632,
        level: 7,
      };
      break;
    case "속초시":
      point = {
        lat: 38.2070148,
        lng: 128.5918488,
        level: 7,
      };
      break;
    case "양구군":
      point = {
        lat: 38.10729167,
        lng: 127.9922444,
        level: 8,
      };
      break;
    case "양양군":
      point = {
        lat: 38.0753925,
        lng: 128.6188503,
        level: 8,
      };
      break;
    case "영월군":
      point = {
        lat: 37.183637,
        lng: 128.4617535,
        level: 9,
      };
      break;
    case "원주시":
      point = {
        lat: 37.3422186,
        lng: 127.9201621,
        level: 8,
      };
      break;
    case "인제군":
      point = {
        lat: 38.0694675,
        lng: 128.1706991,
        level: 9,
      };
      break;
    case "정선군":
      point = {
        lat: 37.3807549,
        lng: 128.6609505,
        level: 9,
      };
      break;
    case "철원군":
      point = {
        lat: 38.146609,
        lng: 127.3132256,
        level: 9,
      };
      break;
    case "춘천시":
      point = {
        lat: 37.8813153,
        lng: 127.7299707,
        level: 8,
      };
      break;
    case "태백시":
      point = {
        lat: 37.1640654,
        lng: 128.9855649,
        level: 8,
      };
      break;
    case "평창군":
      point = {
        lat: 37.51451873651499,
        lng: 128.5856576653229,
        level: 9,
      };
      break;
    case "홍천군":
      point = {
        lat: 37.6969518,
        lng: 127.8886827,
        level: 9,
      };
      break;
    case "화천군":
      point = {
        lat: 38.10340833,
        lng: 127.7103556,
        level: 9,
      };
      break;
    case "횡성군":
      point = {
        lat: 37.4917566,
        lng: 127.9849295,
        level: 9,
      };
      break;
  }
  return point;
};
