import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


function SocietyCard({ place,checked }) {
    // const classes = useStyles();

    return (

        <Card style={
            {
                maxWidth: "250px",
                minWidth: "245px",
                backgroundColor: '(1,1,1,0.5)rgba',
                margin: '20px',
                height: "250px"
            }
        }>
            <CardActionArea>
                <CardMedia style={
                        {height: "200px"}
                    }

                    image={
                        place.url
                    }
                    title="Contemplative Reptile"/>
                <CardContent>
                    <Typography style={
                            {
                                fontSize: '1rem',
                                fontFamily: 'Nunito',
                                fontSize: '2rem',
                                color: 'black',
                                fontWeight: 'bold'
                            }
                        }
                        gutterBottom
                        variant="h5"
                        component="h3">
                        {
                        place.location
                    } </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"
                        style={
                            {
                                fontFamily: 'Nunito',
                                fontSize: '1.0rem',
                                color: '#fff'
                            }
                    }>
                        {
                        place.desc
                    } </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
        </Card>
    );
}

export default SocietyCard
