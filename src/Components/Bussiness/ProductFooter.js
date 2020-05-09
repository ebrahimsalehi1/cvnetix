import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ProductDetail from './ProductDetail'
import StyledButton from '../Basic/StyledButton'
  
function ProductFooter(props){

    return (
        <Grid container spacing={1} direction={"column"}>

            <Grid container spacing={1} direction="row">
                <Grid item xs={6} md={6}>
                        <StyledButton color="notred" >ADD TO CART</StyledButton>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FavoriteBorderOutlinedIcon/>
                </Grid>
            </Grid>

            <Grid container spacing={1} direction="row">
                <Grid item xs={12} md={12} >
                    <StyledButton   color="red">BUY NOW</StyledButton>
                </Grid>
            </Grid>

            <Grid container spacing={1} direction="row">
                <Grid item xs={12} md={12} >
                    VIEW PRODUCT DETAILS
                </Grid>
            </Grid>

        </Grid>
    )
}

export default ProductFooter
