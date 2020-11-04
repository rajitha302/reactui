import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestClosestCountry } from "../redux/actions";

// material-ui
import { TextField, Paper, Grid, Box, Typography } from "@material-ui/core";
import Btn from "./common/Btn";
import PersistentDrawerLeft from "./common/Nav";

const ClosestCountry = () => {
  const [errormsg, setErrormsg] = useState(false);
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
      <Box my={2}>
        <Typography variant='h4'>Closest Country Finder</Typography>
      </Box>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Paper m={1}>
            <Box p={4}>
              <Box>
                <TextField
                  // error={errormsg}
                  // helperText='Incorrect username.'
                  required
                  label='ex: LKA'
                  onChange={(event) => handlecname(event.target.value)}
                />
              </Box>
              <Box mt={4}>
                <Btn
                  variant='contained'
                  color='primary'
                  onClick={getcountryhandler}
                >
                  Search
                </Btn>
              </Box>
            </Box>
          </Paper>
          <Box mt={2}>
            {/* {closestCountry
              ? () => {
                  return (
                    setErrormsg(false),
                    (
                      <div>
                        {" "}
                        <Typography variant='h5'> {closestCountry}</Typography>
                      </div>
                    )
                  );
                }
              : () => {
                  return (
                    <div>
                      <Typography variant='h5'>
                        {" "}
                        Please enter a value
                      </Typography>
                    </div>
                  );
                }} */}

            {closestCountry !== "" ? (
              <div>
                {" "}
                <Typography variant='h5'> {closestCountry}</Typography>
              </div>
            ) : (
              <div>
                <Typography variant='h5'> Please enter a value</Typography>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClosestCountry;
