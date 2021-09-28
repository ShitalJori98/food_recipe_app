import React,{useState, useEffect} from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>({
    root:{
        padding:'2px 4px',
        display:'flex',
        margin:'10px auto',
        alignItems:'center',
        width:400,
    },
    input:{
        marginLeft:theme.spacing(1),
        flex:1,
    },
    iconButton:{
        padding:10,
    },


}));

const Recipe = () => {
     /*  const[count , setCount] = useState(0) */
const classes = useStyle();
const APP_ID = "c962007f";
const APP_KEY = "040e18440ed91b4e8c94f4dce18d20a1";

 const [recipes, setRecipes] = useState([])
 const [search, setSearch] = useState('')
 const [query, setQuery] = useState('chiken')

  useEffect(()=>{
    /* console.log('effect runs'); */
    getRecipes();
  }, [query])

  const getRecipes = async ()=>{
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
     console.log(response.data.hits);
  }

  const updateSearch = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const updateQuery = (e) =>{
    e.preventDefault();                
    setQuery(search); 
    setSearch("");
  }
    return (
    <div>

    <Paper
    onSubmit={updateQuery} 
    component="form" 
    className={classes.root}>
    
      <InputBase
      type="text"
       value={search} 
    onChange={updateSearch}
        className={classes.input}
        placeholder = "Search for Recipe"
        inputProps={{ 'aria-label': 'Search for Recipes' }}
      />
      <IconButton 
      type="submit"
      className ={classes.iconButton}
       aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
    {/* <form onSubmit={updateQuery}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form> */}
    {/*  {count} 
     <button onClick={()=>setCount(count + 1 )}> click</button> */}
<div style={{margin:'15px'}}>
    <Grid container>
        {recipes.map((recipe)=>(
            <Grid item xs={3}>
                <RecipeList 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories ={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients ={recipe.recipe.ingredients}/>
            </Grid>
        ))}
    </Grid> 
</div>    
    </div>
    )
}
export default Recipe;