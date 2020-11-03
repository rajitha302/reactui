import { requestCharacterRC } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

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

const Characters = (props) => {
  let countries = [];
  let onChangeState;
  countries = useSelector((state) => state.charRCcountryList.countryList);

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    onChangeState = {
      letters: event,
    };
  };

  const getCountryListHandler = () => {
    dispatch(requestCharacterRC(onChangeState));
  };

  return (
    <div>
      <PersistentDrawerLeft />
      <Typography variant='h4'>Character Based Finder</Typography>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Paper m={1}>
            <Box>
              <TextField
                required
                label='Ex: ma'
                onChange={(event) => onChangeHandler(event.target.value)}
                style={{ marginRight: "20px" }}
              />
            </Box>
            <Box>
              <Btn
                variant='contained'
                color='primary'
                onClick={getCountryListHandler}
              >
                search
              </Btn>
              {countries ? (
                countries.map((country, index) => {
                  return <li key={index}>{country}</li>;
                })
              ) : (
                <p>Please enter your inputs</p>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Characters;
