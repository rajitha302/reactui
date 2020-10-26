import axios from 'axios'

const initialState = {
    cname1: '',
    cname2: '',
    dist: '0'
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ASSIGN_CNAME1':
            const oncha = (event) => {
                console.log(event.target.value)
            }

            oncha();

        case 'ASSIGN_CNAME2':
            const oncha2 = (event) => ({ cname2: event.target.value })

            oncha2();

        case 'FETCH_DATA':

            const fetchData = () => {
                console.log("pass")
                const cname1 = state.cname1
                const cname2 = state.cname2


                axios.all([
                    axios.get('https://restcountries.eu/rest/v2/name/' + cname1 + '?fullText=true'),
                    axios.get('https://restcountries.eu/rest/v2/name/' + cname2 + '?fullText=true')])
                    .then(axios.spread((firstResponse, secondResponse) => {

                        const latlng1 = firstResponse.data[0].latlng;
                        const latlng2 = secondResponse.data[0].latlng;

                        const lat1 = latlng1[0]
                        const lng1 = latlng1[1]
                        const lat2 = latlng2[0]
                        const lng2 = latlng2[1]
                        const unit = "K"


                        if ((lat1 === lat2) && (lng1 === lng2)) {
                            return 0;
                        }
                        else {
                            var radlat1 = Math.PI * lat1 / 180;
                            var radlat2 = Math.PI * lat2 / 180;
                            var theta = lng1 - lng2;
                            var radtheta = Math.PI * theta / 180;
                            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                            if (dist > 1) {
                                dist = 1;
                            }
                            dist = Math.acos(dist);
                            dist = dist * 180 / Math.PI;
                            dist = dist * 60 * 1.1515;
                            if (unit === "K") { dist = dist * 1.609344 }
                            if (unit === "N") { dist = dist * 0.8684 }
                            // return dist;
                            dist = dist + " Km"
                            console.log(dist)
                            return dist
                        }

                    }))
                    .catch(error => console.log(error));
            }


            fetchData();

            console.log("hello")

    }
    return state;
}


export default reducer;