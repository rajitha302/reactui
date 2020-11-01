const timezonerangefunc = (allCountriesData, selectedInputs) => {

const firstinput = Number(selectedInputs.firstInput.substring(3).replace(/:/g,""));
const secondinput = Number(selectedInputs.secondInput.substring(3).replace(/:/g,""));

//------commentstart           (/:/g,"")   ----> convert 7:00 into 700         end comment ---

const alltimezones = allCountriesData.map((alldata) => {

    const alltzdata = alldata.timezones[0].substring(3).replace(/:/g, "");

    return {
        name: alldata.name,
        timezone: alldata.timezones[0],
        alltzdatatoInt: Number(alltzdata)
    }
});

const result = alltimezones.filter((alldata) => {
    if(alldata.alltzdatatoInt > firstinput && alldata.alltzdatatoInt < secondinput){

        return {
            name: alldata.name,
            timezones: alldata.timezone
        };
    }
});

// const filterdata = (data) => {
//     const {name, timezone} = data

//    return {name, timezone};
// }

return result;

// console.log(result);
// return result.map(filterdata);
}
export default timezonerangefunc;