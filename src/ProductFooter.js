import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const useStyles = makeStyles({
    root:{
        backgroundColor: (props) => props.color==='red' ? '#e03f3f':'#40e0d0'  ,
        color: 'white',
        width: 192,
        height: 48 ,
        padding: '0 30px',
        margin: 8,  
        border: 0,
        borderRadius: 3,   
    }
})

function MyButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
}
  
function ProductFooter(props){

    return (
        <div>
        <Grid container spacing={1} direction={"column"}>
            <Grid container spacing={1} direction="row">
                <Grid item xs={10} sm={4}>
                        <MyButton color="notred" >ADD TO CART</MyButton>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <FavoriteBorderOutlinedIcon/>
                </Grid>
            </Grid>

            <Grid container spacing={1} direction="row">
                <Grid item xs={12} sm={6} >
                    <MyButton   color="red">BUY NOW</MyButton>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}

export default ProductFooter
