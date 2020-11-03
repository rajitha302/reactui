// import getDistanceFromLatLonInKm from "./distancefunc";

// 	export default function getClosestCountry(allCountries, countryName) {
// 	  let closestCountry = "";
// 	  let closestDistance = "";
// 	  let countryBorder = "";
// 	  let selectedCountryLatLng = "";

// 	  allCountries.map(async (country) => {
// 	    const { alpha3Code, borders, latlng } = country;

// 	    if (countryName === alpha3Code) {
// 	      countryBorder = borders;
// 	      selectedCountryLatLng = latlng;
// 	    }
// 	  });

// 	  allCountries.map(async (country) => {
//       const { alpha3Code, latlng, name } = country;

// 	    if (
// 	      countryBorder &&
// 	      !countryBorder.includes(alpha3Code) &&
// 	      alpha3Code !== countryName
// 	    ) {
// 	      const distance = getDistanceFromLatLonInKm(
// 	        selectedCountryLatLng[0],
// 	        selectedCountryLatLng[1],
// 	        latlng[0],
// 	        latlng[1],
// 	        "K"
// 	      );
// 	      if (closestDistance === "" || distance < Number(closestDistance)) {
// 	        closestDistance = distance;
// 	        closestCountry = name;
// 	      }
// 	    }
// 	  });
// 	  return closestCountry;
// 	}

import calculateDistance from "./distancefunc";

export default function closestCountryfunc(allcountries, selectedCountry) {
  let selectedCBorder = "";
  let selectedCLatLng = "";
  let closestDistance = "";
  let closestCountry = "";

  const mapdata = async (country) => {
    // const name = country.name;
    // const borders = country.borders;
    // const latlng = country.latlng;

    const { alpha3Code, borders, latlng } = country;

    // if selectedcountry is inside the names object (true)
    if (selectedCountry === alpha3Code) {
      selectedCBorder = borders; //returns data only for above selected country
      selectedCLatLng = latlng;
    }
  };

  allcountries.map(mapdata);

  const findClosest = async (countries) => {
    const { name, alpha3Code, latlng } = countries;

    if (
      selectedCBorder &&
      !selectedCBorder.includes(alpha3Code) &&
      alpha3Code !== selectedCountry
    ) {
      const getdistance = calculateDistance(
        selectedCLatLng[0],
        selectedCLatLng[1],
        latlng[0],
        latlng[1],
        "K"
      );

      if (closestDistance === "" || getdistance < Number(closestDistance)) {
        closestDistance = getdistance;
        closestCountry = name;
      }
    }
  };

  allcountries.map(findClosest);

  return closestCountry;
}
