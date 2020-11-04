import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDistance } from "../redux/actions";

// Material-UI
import { TextField, Paper, Grid, Box, Typography } from "@material-ui/core";
import Btn from "./common/Btn";
import PersistentDrawerLeft from "./common/Nav";

const Distance = (props) => {
  const distance = useSelector((state) => state.distance.distance);
  const dispatch = useDispatch();

  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');

  let data = {
    from: "",
    to: "",
  };

  const handleFrom = (fromEvent) => {
    console.log(fromEvent);
    data.from = fromEvent;
  };

  const handleTo = (toEvent) => {
    data.to = toEvent;
  };

  const getdistancehandler = () => {
    const onchangestate = {
      from: data.from,
      to: data.to,
    };
    dispatch(requestDistance(onchangestate));
  };

  return (
    <div>
      <PersistentDrawerLeft />
      <Box my={2}>
        <Typography variant='h4'>Distance Finder</Typography>
      </Box>

      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} md={4}>
          <Paper>
            <Box p={4}>
              <Box px={4}>
                <TextField
                  required
                  label='From'
                  fullWidth={true}
                  margin='normal'
                  onChange={(event) => handleFrom(event.target.value)}
                />
              </Box>

              <Box px={4}>
                <TextField
                  required
                  label='To'
                  margin='normal'
                  fullWidth={true}
                  onChange={(event) => handleTo(event.target.value)}
                />
              </Box>
              <Box m={4}>
                <Btn
                  variant='contained'
                  color='primary'
                  onClick={getdistancehandler}
                >
                  Search
                </Btn>
              </Box>
            </Box>
          </Paper>
          <br />
          <Typography variant='h4'>Result: {distance} Km</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Distance;
