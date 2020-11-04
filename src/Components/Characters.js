import { requestCharacterRC } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

// material-ui
import { TextField, Paper, Grid, Box, Typography } from "@material-ui/core";
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
      <Box my={2}>
        <Typography variant='h4'>Character Based Finder</Typography>
      </Box>

      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Paper m={1}>
            <Box p={4}>
              <Box>
                <TextField
                  required
                  label='Ex: ma'
                  onChange={(event) => onChangeHandler(event.target.value)}
                  style={{ marginRight: "20px" }}
                />
              </Box>
              <Box mt={4}>
                <Btn
                  variant='contained'
                  color='primary'
                  onClick={getCountryListHandler}
                >
                  search
                </Btn>
              </Box>
            </Box>
          </Paper>
          <Box mt={2}>
            {countries ? (
              countries.map((country, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <Typography variant='h5'>{country}</Typography>
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

export default Characters;
