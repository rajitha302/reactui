const characterfunc = (allCountries, selectedChar) => {
  // let countryL = {
  //   names: []
  // };

  let countryArr = [];

    const filteredResult = allCountries.map((country) => {

        const { name } = country;
        if (name.includes(selectedChar)) {
           return {
            countryArr: countryArr.push(name)
           }

          }
        })

        return countryArr;
}

export default characterfunc;