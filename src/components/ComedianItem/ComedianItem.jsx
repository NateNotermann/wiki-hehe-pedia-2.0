
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, } from 'react-router-dom';

import './ComedianItem.css';
// --- item to render a single comedian's 
// id, first name, last name, icon and a favorite or unfavorite button.
// will be used any time we are .map()ing 

// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Link, Paper, TextField, Typography, Tooltip } from '@mui/material';
import { positions } from '@mui/system';
import '../MUIElements/MUIElements.css';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SearchIcon from '@mui/icons-material/Search';

function ComedianItem({ comedianProp }) {
    const user_id = useSelector(store => store.user.id);
    const history = useHistory();
    const dispatch = useDispatch();
    const space = ' ';
    const google = 'https://www.google.com/maps/search/';
    const clickIcon = (comedianId) => {
        dispatch({
            // this is TELLING
            type: 'GET_CURRENT_COMEDIAN', // DON`T CHANGE - 
            //Goes to -> CurrentComediansReducer
            payload: comedianId,
        })
        // history.push(`/ComedianDetails/${comedianId.first_name}${comedianId.last_name}`)
        history.push(`/ComedianDetails/${comedianProp.first_name}-${comedianProp.last_name}-${comedianId}`)
        // must match route with 'exact path="/ComedianDetails"' in App.jsx - 
    }


    // ------ ComedianProp Test ------ // 
    // function comedianPropTest({comedianProp}) {
    //   if (comedianProp && comedianProp.name.first_name)
    //     console.log('comedianProp & name.first_name WORKING:', comedianProp, comedianProp.name.first_name);
    //   else if (comedianProp)
    //     console.log('comedianProp WORKING', comedianProp);
    //   else 
    //     console.log('comedianProp & name.first_name BROKEN');
    // }
    // comedianPropTest(comedianProp);


    // ------ FAVORITE BUTTONS ------ // 

    // function to add a favorite 
    const addFavorite = (comedian_id) => {

        console.log('Add Favorite:', comedian_id, 'user.id:', user_id, 'comedianProp.name:', comedianProp.name);
        // console.log('id!', id);
        dispatch({
            type: 'ADD_FAVORITE',
            payload: {
                user_id,    // shows as user_id: #
                comedian_id // shows as comedian_id: #
            }
        })
    };


    // function to remove a favorite 
    // const deleteFavorite = (comedian_id) => {
    //   console.log('Delete Favorite:', comedian_id, 'user.id:', user_id);
    //   dispatch({
    //     type: 'DELETE_FAVORITE',
    //     payload: {
    //       user_id,    // shows as user_id: #
    //       comedian_id // shows as comedian_id: #
    //     } 
    //   })
    // };



    // console.log('comedianProp', comedianProp);
    return (
      <>
        <Grid
          item
          className="comedianItem"
          // item align="center"
        >
          {/* <Grid item className="nameAndPic" onClick={() => clickIcon(comedianProp.id)}
            >
                <h3>{comedianProp.first_name} {comedianProp.last_name} </h3>
                <Typography>{comedianProp.first_name} {comedianProp.last_name}</Typography>
                <img className='icon'
                    src={comedianProp.icon}
                    alt={comedianProp.first_name} />
                    
            </Grid>
            <Button variant="contained" onClick={() => addFavorite(comedianProp.id)}>Favorite</Button> */}
          {/* <button onClick={() => deleteFavorite(comedianProp.id)}>deleteFavorite</button> */}

          <Card className="card">
            <CardMedia
              key={comedianProp.id}
              onClick={() => clickIcon(comedianProp.id)}
              component="img"
              height="194"
              image={comedianProp.icon}
              alt={comedianProp.first_name+'-'+comedianProp.last_name}
              // -- comedianProp.name, comedianProp.last_name & comedianProp.first_name are all on the SAME object level. 
            />

            {/* <CardHeader align="center" className="name"
                    // titleTypographyProps={{
                    //     fontSize: "2vh",
                    // }}
                    // action={
                    //     <Tooltip title="Favorite">
                    //         <IconButton aria-label="add to favorites">
                    //             <FavoriteIcon color="secondary" onClick={() => addFavorite(comedianProp.id)} />
                    //         </IconButton>
                    //     </Tooltip>
                    // }
                    // title={comedianProp.first_name + space + comedianProp.last_name}
                    location={comedianProp.city}
                /> */}

            <Typography
              margin=".5rem"
              className={"MuiTypography--heading"}
              // variant={"h6"}
              // gutterBottom
              color="text.secondary"
            >
              <Grid
                container className="name"
                //  justifyContent="center"
                xs={12}
                // justifyContent="space-around"
                // alignItems="stretch"
                alignItems="center" >
                <Grid item></Grid>

                <Grid item>
                  <Grid item></Grid>
                  <Typography
                    className="typo"
                    xs={{ fontSize: "2vh" }}
                    color="text.primary"
                    variant={"label1"} 
                    >
                    {comedianProp.first_name}
                  </Typography>
                </Grid>
                <div style={{ width: "8px" /* Adjust as needed for spacing */ }}>
                    <Grid item></Grid>
                </div>

                <Grid item>
                <Grid item></Grid>
                  <Typography
                    className="typo"
                    xs={{ fontSize: "2vh" }}
                    color="text.primary"
                    variant={"label1"} >
                    {comedianProp.last_name}
                  </Typography>
                </Grid>
              </Grid>
              {/* 

                    <Tooltip title="Favorite">
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon color="secondary" onClick={() => addFavorite(comedianProp.id)} />
                            </IconButton>
                        </Tooltip> */}
              {/* <Button aria-label="settings"
                        color='fifthBlack'>
                        {comedianProp.first_name} {comedianProp.last_name}
                    </Button> */}

              <Grid container justifyContent="space-evenly" alignItems="center">
                      <Tooltip title="Comedian Details">
                        <IconButton
                          aria-label="Comedian Details"
                          onClick={() => clickIcon(comedianProp.id)}
                        >
                          <InfoIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                

                <Tooltip title={comedianProp.city}>
                  <Link a href={google + comedianProp.city} color="inherit" aria-label="Comedian location">
                    {/* <Button component={Link} to={google + favoriteProp.city}
                            variant="inherit"> */}

                    <IconButton aria-label="Comedian Details">
                      <a
                        href={google + comedianProp.city}
                        className="link"
                        target="_blank"
                      >
                        <LocationOnIcon color="forth"></LocationOnIcon>
                      </a>
                    </IconButton>
                    {/* </Button> */}
                  </Link>
                </Tooltip>

                <Tooltip title="Favorite">
                    <IconButton aria-label="add to favorites"
                    onClick={() => addFavorite(comedianProp.id)}
                    >
                    <FavoriteIcon
                        color="secondary"
                        // onClick={() => addFavorite(comedianProp.id)}
                    />
                    </IconButton>
                </Tooltip>

                {/* <Tooltip title="Favorite">
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon color="secondary" onClick={() => addFavorite(comedianProp.id)} />
                            </IconButton>
                        </Tooltip> */}
                {/* <Tooltip title="Favorite">
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon onClick={() => addFavorite(comedianProp.id)} />
                            </IconButton>
                        </Tooltip> */}
              </Grid>
            </Typography>

            <CardActions disableSpacing>
              {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
            </CardActions>
          </Card>
        </Grid>
      </>
    );
}


export default ComedianItem;