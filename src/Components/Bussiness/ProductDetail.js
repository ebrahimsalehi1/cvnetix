import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { makeStyles, withStyles  } from '@material-ui/core/styles'
import StyledToggleButtonGroup from '../Basic/StyledToggleButtonGroup'
import StyledToggleButton  from '../Basic/StyledToggleButton'
import StyledLabel from '../Basic/StyledLabel'

function ProductDetail(props){

    const {data} = props
    const {title,id,price,discount,unitMoney,size,qty,shippingCost,shippingDays} = (data!==undefined ? data:null)

    return (
        <Grid container spacing={1} direction={"row"}>
            <Grid item xs={12} md={12}>
            {title}
            </Grid>

            <Grid item xs={12} md={12}>
            <StyledLabel>In Stock SKU: {id} </StyledLabel>
            </Grid>

            <Grid container spacing={1} direction={"column"}>
                <Grid item xs={12} md={12}>
                <StyledLabel>{unitMoney}{price!==undefined && discount!==undefined ? price*discount/100:''}</StyledLabel>
                </Grid>

                <Grid item xs={12} md={12}>
                <StyledLabel expired>{unitMoney}{price}</StyledLabel>
                </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
            <StyledLabel>Shipping cost: {unitMoney}{shippingCost} , in {shippingDays} business days </StyledLabel>
            </Grid>

            <Grid item xs={12} md={12}>
            <StyledLabel>Size Guide </StyledLabel>
            </Grid>

            <Grid item xs={12} md={12}>
                {/* <StyledToggleButtonGroup> */}
                    <StyledToggleButton value={"S"} selected={size==="S"}>S</StyledToggleButton>
                    <StyledToggleButton value={"M"} selected={size==="M"}>M</StyledToggleButton>
                    <StyledToggleButton value={"L"} selected={size==="L"}>L</StyledToggleButton>
                    <StyledToggleButton value={"XL"} selected={size==="XL"}>XL</StyledToggleButton>
                    <StyledToggleButton value={"XXL"} selected={size==="XXL"}>XXL</StyledToggleButton>
                {/* </StyledToggleButtonGroup> */}
            </Grid>

            <Grid item xs={12} md={12}>
                <Grid container spacing={1} direction={"row"}>
                    <Grid item xs={1} md={1}>
                    <StyledLabel>Qty</StyledLabel>
                    </Grid>
                    <Grid item xs={1} md={1}>                    
                    <StyledLabel color="#40e0d0">_</StyledLabel>            
                    </Grid>
                    <Grid item xs={1} md={1}>
                    <StyledLabel>{qty}</StyledLabel>
                    </Grid>
                    <Grid item xs={1} md={1}>
                    <StyledLabel color="#40e0d0">+</StyledLabel>
                    </Grid>
                    <Grid item xs={8} md={8}>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>

    )
}

export default ProductDetail
