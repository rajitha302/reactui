import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDistance } from "../redux/actions";

// Material-UI
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
      <Typography variant='h4'>Distance Finder</Typography>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Paper m={1}>
            <Box>
              <TextField
                required
                label='From'
                onChange={(event) => handleFrom(event.target.value)}
              />
            </Box>

            <Box>
              <TextField
                required
                label='To'
                onChange={(event) => handleTo(event.target.value)}
              />
            </Box>
            <Btn
              variant='contained'
              color='primary'
              onClick={getdistancehandler}
            >
              Search
            </Btn>
            <Typography paragraph>Result: {distance}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Distance;
