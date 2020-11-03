import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestTimezoneCountries } from "../redux/actions";

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

const TimezoneRange = () => {
  let countryRange = [];
  countryRange = useSelector((state) => state.timezoneRange.timezonerange);

  const dispatch = useDispatch();

  // const rangeValue = useSelector((state) => state.timezonerange.timezonerange)

  let setFirstInput;
  let setSecondInput;

  const handlefirstOnChange = (event) => {
    setFirstInput = event;
  };

  const handlesecondOnChange = (event) => {
    setSecondInput = event;
  };

  const getCountryListHandler = () => {
    const onChangeState = {
      firstInput: setFirstInput,
      secondInput: setSecondInput,
    };
    dispatch(requestTimezoneCountries(onChangeState));
  };

  return (
    <div>
      <PersistentDrawerLeft />
      <Typography variant='h4'>TimeZone Finder</Typography>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Paper m={1}>
            <Box>
              <TextField
                required
                label='Ex: UTC+7:00'
                onChange={(event) => handlefirstOnChange(event.target.value)}
                style={{ marginRight: "20px" }}
              />
              <TextField
                required
                label='Ex: UTC+8:00'
                onChange={(event) => handlesecondOnChange(event.target.value)}
              />
            </Box>

            <Btn
              variant='contained'
              color='primary'
              onClick={getCountryListHandler}
            >
              Search
            </Btn>

            {countryRange ? (
              countryRange.map((country, index) => {
                return <li key={index}>{country.name}</li>;
              })
            ) : (
              <p>Please enter your inputs</p>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimezoneRange;
