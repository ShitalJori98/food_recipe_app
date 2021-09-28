import React, {useState} from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';



const useStyles = makeStyles((theme) =>({
    root:{
        maxWidth:300,
    },
    media:{
        height:0,
        paddingTop:56,
    },
    expand:{
        transform:'rotate(0deg)',
        marginLeft:'auto',
        transition: theme.transitions.create('transform',{
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen:{
        transform:'rotate(180deg)',

    },
}));
const RecipeList = ({title, calories, image, ingredients}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        
        title={title}
       // subheader={calories}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        title={title}
      />
      <CardActions disableSpacing>
        <div>Ingrediants</div>
        <IconButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {ingredients.map((ingredient)=>(
                   <Typography paragraph>{ingredient.text}</Typography>
               ))}
          
        </CardContent>
      </Collapse>
    </Card>





           {/*  <p><b>Recipe Name : </b>{title}</p>

            <p><b>Calories : </b>{calories}</p>

            <img src={image} alt="" />

           <ol>
               <b>Ingrediants : </b>
               {ingredients.map((ingredient)=>(
                   <li> {ingredient.text}</li>
               ))}
           </ol> */}

        </div>
    );
};

export default RecipeList;
