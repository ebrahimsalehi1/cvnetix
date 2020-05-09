import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { makeStyles, withStyles  } from '@material-ui/core/styles'
import StyledToggleButtonGroup from '../Basic/StyledToggleButtonGroup'
import StyledToggleButton  from '../Basic/StyledToggleButton'

function ProductDetail(props){

    const {data} = props
    const {title,id,price,discount,unitMoney,size,qty,isSelected} = (data!==undefined ? data:null)

    return (
        <div>
        <Grid container spacing={1} direction={"row"}>
            <Grid item xs={12} xm={6}>
            {title}
            </Grid>

            <Grid item xs={12} xm={6}>
            In Stock SKU: {id}
            </Grid>

            <Grid container spacing={1} direction={"column"}>
                <Grid item xs={12} xm={6}>
                {unitMoney}{price}
                </Grid>

                <Grid item xs={12} xm={6}>
                {unitMoney}{price!==undefined && discount!==undefined ? price*discount:''}
                </Grid>
            </Grid>

            <Grid item xs={12} xm={6}>
                {/* <StyledToggleButtonGroup> */}
                    <StyledToggleButton value={"S"} selected={size==="S"}>S</StyledToggleButton>
                    <StyledToggleButton value={"M"} selected={size==="M"}>M</StyledToggleButton>
                    <StyledToggleButton value={"L"} selected={size==="L"}>L</StyledToggleButton>
                    <StyledToggleButton value={"XL"} selected={size==="XL"}>XL</StyledToggleButton>
                    <StyledToggleButton value={"XXL"} selected={size==="XXL"}>XXL</StyledToggleButton>
                {/* </StyledToggleButtonGroup> */}
            </Grid>

        </Grid>
        </div>
    )
}

export default ProductDetail
