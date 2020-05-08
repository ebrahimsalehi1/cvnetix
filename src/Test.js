import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    images:{
        width: 30,
        height: 30,
    }
})

function MyComp(props){
    const classes = useStyles(props)

    function myImageList()
    {
        const arr = [];
        const path = "./img/117699813"
        for(let i=1;i<5;i++){            
            arr.push(require(path+"-"+i+".jpg"))
        }
        return arr;
    }

    const data = myImageList()
    console.log(data);
    return (
        <div>
        <Grid container spacing={1} direction="column">
            {data.map(item=><Grid item ><img className={classes.images} src={item}/></Grid>)}
        </Grid>
        </div>
    )
}


function Test(props){
    return (
        <div>
            <MyComp />
        </div>
    )
}

export default Test