import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ProductDetail from './ProductDetail'
import StyledButton from '../Basic/StyledButton'
import StyledLabel from '../Basic/StyledLabel'
import IconButton from '@material-ui/core/IconButton'

function ProductFooter(props){

    return (
        <Grid container spacing={1} direction={"column"}>

            <Grid container spacing={1} direction="row">
                <Grid item xs={12} md={6}>
                        <StyledButton color="notred" >ADD TO CART</StyledButton>
                </Grid>
                <Grid item xs={12} md={6}>
                    <IconButton><FavoriteBorderOutlinedIcon/></IconButton>
                </Grid>
            </Grid>

            <Grid container spacing={1} direction="row">
                <Grid item xs={12} md={12} >
                    <StyledButton   color="red">BUY NOW</StyledButton>
                </Grid>
            </Grid>

            <Grid container spacing={1} direction="row">
                <Grid item xs={12} md={12} >
                    <StyledLabel variant={"button"}>VIEW PRODUCT DETAILS</StyledLabel>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default ProductFooter
