import React from 'react'
import Grid from '@material-ui/core/Grid'

function ProductImage(props){
    const {id} = props

    const myimages = require(`../img/${id}.jpg`)
    function myImageList()
    {
        const arr = [];
        const path = myimages.split(".jpg")[0]
        for(let i=1;i<5;i++){            
            arr.push(path+"-"+i+".jpg")
            console.log(path+"-"+i+".jpg");
            
        }
        return arr;
    }

    myImageList();
    //console.log(myImageList());

    return (
        <div>
        <Grid container spacing={1} direction={"column"}>
        <Grid item xs={6} xm={3}>        
            <img src= {myimages}/>
        </Grid>
        <Grid item xs={6} xm={3}>
            {/* myImageList.map(item=><img src= {item}/>)     */}         
        </Grid>
        </Grid>
        </div>
    )
}

export default ProductImage
