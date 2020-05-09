import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import GridList from'@material-ui/core/GridList'
import GridListTile from'@material-ui/core/GridListTile'
import ProductImages from './ProductImage'
import ProductDetails from './ProductDetail'
import ProductFooter from './ProductFooter'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    // gridList: {
    //   width: 500,
    //   height: 450,
    // },
  }));
  

function Product(props){
    const {data} = props
    const classes = useStyles();

    if(data===undefined)
       return

    return (
        <Grid container direction="row" spacing={1}>

            <Grid item xs={12} md={6}  >
                <ProductImages numOfItems={5} id={data.id} />
            </Grid>

            <Grid item xs={12} md={6}>
                <Grid container spacing={1} direction={"column"}>
                    <Grid item xs={12} md={12}  >
                        <ProductDetails data={data}/>
                    </Grid>
                    
                    <br />
                    <br />
                    <br />

                    <Grid item xs={12} md={12}  >
                        <ProductFooter />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>    

    )
}

export default Product
