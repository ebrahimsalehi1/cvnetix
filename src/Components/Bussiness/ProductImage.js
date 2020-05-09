import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Paths from '../../config'
import StyledImage from '../Basic/StyledImage'

function ProductImage(props){

    const {id} = props
    
    const myimages = require(`${Paths.images.url}/${id}.jpg`)
    function myImageList()
    {
        const arr = [];
        const path = `${Paths.images.url}/${id}.jpg`.split(".jpg")[0]
        for(let i=1;i<=5;i++){            
            arr.push({fileName:path+"-"+i+".jpg",url:require(path+"-"+i+".jpg")})
        }
        return arr;
    }

    const data = myImageList()
    
    return (
 
        <Grid container direction="row" spacing={1} alignItems="center" >

            <Grid item xs={12} md={2}  >
                <Grid container spacing={1} direction="column">
                    {data!==undefined && data.map(item=><Grid item xs key={item.fileName}><StyledImage src={item.url}/></Grid>)}
                </Grid>
            </Grid>

            <Grid item xs={12} md={10}><StyledImage selectedImage src={myimages}/></Grid>

        </Grid>    
        
    )
}

export default ProductImage
