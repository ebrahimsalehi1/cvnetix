import React from 'react'
import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { makeStyles, withStyles  } from '@material-ui/core/styles'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(1),
    //   border: 'none',
    //   padding: theme.spacing(0, 1),
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius,
      },
    borderColor:'#40e0d0',
    width: 36,
    height:36,                                 
},
  }))(ToggleButtonGroup);

const useStylesToggleButton = makeStyles({    
    root:{
        backgroundColor: props => props.selected ? '#40e0d0':'#ffffff',
        width: 36,
        height:36,                                 
    }    
  });

  function MyToggleButton(props){
    const {selected, ...other} = props
    const classes = useStylesToggleButton(props)

    return (
          <ToggleButton className={classes.root} {...other} />
      )
  }

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
                    <MyToggleButton value={"S"} selected={size==="S"}>S</MyToggleButton>
                    <MyToggleButton value={"M"} selected={size==="M"}>M</MyToggleButton>
                    <MyToggleButton value={"L"} selected={size==="L"}>L</MyToggleButton>
                    <MyToggleButton value={"XL"} selected={size==="XL"}>XL</MyToggleButton>
                    <MyToggleButton value={"XXL"} selected={size==="XXL"}>XXL</MyToggleButton>
                {/* </StyledToggleButtonGroup> */}
            </Grid>

        </Grid>
        </div>
    )
}

export default ProductDetail
