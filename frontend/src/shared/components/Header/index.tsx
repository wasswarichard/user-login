import { AppBar, makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  appBar: {
    height: '70px',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 200px',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Grid container className={classes.headerContainer}>
        <Grid item xs={12}>
          <Typography variant="h4" data-testid="company-logo">
            UserManager
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
