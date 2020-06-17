import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paths from '../../config'

const useStyles = makeStyles({
    images:{
        width: 30,
        height: 30,
    },
    bigImages:{
        width: props=>30*props.numOfItems,
        height: props=>30*props.numOfItems,
    },
})

function Comp1(props){
    return (
        <Grid container spacing={1} direction="column">

            <Grid container spacing={1} direction="row" style={{diplay:"flex",justifyContent:"center"}} >
                <Grid item xs={6} md={6} >
                    item 1
                </Grid>
                <Grid item xs={6} md={6} >
                    <TextField value={"item 1"} />
                </Grid>
            </Grid>

            <Grid item xs={6} md={6}>۲</Grid>
            <Grid item xs={6} md={6}>۳</Grid>
            <Grid item xs={6} md={6}>۴</Grid>
            <Grid item xs={6} md={6}>۵</Grid>
            <Grid item xs={6} md={6}>۶</Grid>
        </Grid>
    )
}

function MyComp(props){
    const classes = useStyles(props)

    function myImageList()
    {
        const arr = [];
        const path = "${Paths.images.url}/117699813"
        for(let i=1;i<=5;i++){            
            arr.push(require(path+"-"+i+".jpg"))
        }
        return arr;
    }

    const data = undefined
    const idPath = undefined
    //const data = myImageList()
    //const idPath = require("${Paths.images.url}/117699813.jpg")
    return (

        <Grid container direction="row" spacing={1} alignItems="center" >

            <Grid item xs={6} md={1}  >
                <Grid container spacing={1} direction="column" xs="auto">
                    {data!==undefined && data.map(item=><Grid item xs key={item}><img className={classes.images} src={item}/></Grid>)}
                </Grid>
            </Grid>

            <Grid item xs={6} md={5}>{idPath!==undefined && <img className={classes.bigImages} src={idPath}/>}</Grid>

            <Grid item xs={12} md={6}>
                <Comp1 />
            </Grid>

        </Grid>    

    )
}

function Test2(props){
    return (
    <div className="ebrahim" data-testid="ebrahim">
        <div className="foo qoo" style={{"backgroundColor":"red"}}  >
              <input type='TEXT' />
              <input type='TEXT' />
              <button>ok</button>
        </div>
        <div className="foo boo" />
        <div className="foo hoo" />
    </div>
    )
}

function Test(props){
    //const p = require(`${Paths.images.url}/117699813.jpg`)
    return (       
        // <MyComp numOfItems={5}/>
       // <img src={p} />
       <Test2 />
    )
}

export default Test
