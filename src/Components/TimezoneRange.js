import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestTimezoneCountries } from "../redux/actions";

// material-ui
import { TextField, Paper, Grid, Box, Typography } from "@material-ui/core";
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
      <Box my={2}>
        <Typography variant='h4'>TimeZone Finder</Typography>
      </Box>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={4}>
          <Paper m={1}>
            <Box p={4}>
              <Box>
                <TextField
                  required
                  label='Ex: UTC+7:00'
                  onChange={(event) => handlefirstOnChange(event.target.value)}
                  style={{ marginRight: "20px" }}
                  fullWidth={true}
                />
                <TextField
                  required
                  label='Ex: UTC+8:00'
                  onChange={(event) => handlesecondOnChange(event.target.value)}
                  fullWidth={true}
                />
              </Box>
              <Box mt={4}>
                <Btn
                  variant='contained'
                  color='primary'
                  onClick={getCountryListHandler}
                >
                  Search
                </Btn>
              </Box>
            </Box>
          </Paper>
          <br />
          <Box>
            {countryRange ? (
              countryRange.map((country, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <Typography variant='h4'>{country.name}</Typography>
                    </li>
                  </ul>
                );
              })
            ) : (
              <Typography paragraph>Please enter your inputs</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimezoneRange;
