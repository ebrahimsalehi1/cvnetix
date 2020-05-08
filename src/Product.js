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

    return (
        <div className={classes.root}>
        <GridList cellHeight={500} className={classes.gridList} cols={3}>
            <GridListTile cols={1}>
                <ProductImages id={data.id} />
            </GridListTile>
            <GridListTile cols={1} rows={2}>
                <ProductDetails data={data}/>
                <ProductFooter />
            </GridListTile>
        </GridList>
        </div>
    )
}

export default Product
