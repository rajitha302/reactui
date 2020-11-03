import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestClosestCountry } from "../redux/actions";

// material-ui
import {
  TextField,
  Paper,
  Grid,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";
import Btn from "./common/Btn";
import PersistentDrawerLeft from "./common/Nav";

const ClosestCountry = () => {
  const dispatch = useDispatch();
  const closestCountry = useSelector(
    (state) => state.closestCountry.closestCountry
  );
  // Local State
  // const [countryName, setCountryName] = useState('');

  let setCountryName = "";

  const handlecname = (event) => {
    setCountryName = event;
  };

  const getcountryhandler = () => {
    const onChangeState = {
      countryName: setCountryName,
    };

    // Dispatch Local state to Action
    dispatch(requestClosestCountry(onChangeState));
  };

  // --------------------------------------------------------------- //

  return (
    <div>
      <PersistentDrawerLeft />
      <Typography variant='h4'>Closest Country Finder</Typography>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Paper m={1}>
            <Box>
              <TextField
                required
                label='ex: LKA'
                onChange={(event) => handlecname(event.target.value)}
              />
            </Box>
            <Btn
              variant='contained'
              color='primary'
              onClick={getcountryhandler}
            >
              Search
            </Btn>
            <Typography paragraph>Result: {closestCountry}</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* 
      <button onClick={() => getcountryhandler()}>
        Find the closest country
      </button> */}
    </div>
  );
};

export default ClosestCountry;
