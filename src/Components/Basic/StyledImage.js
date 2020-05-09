import React from 'react'
import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles({
    image:{
        width: 30,
        height: 30, 
    },
    selectedImage:{
        width: props=>30*props.numOfItems,
        height: props=>30*props.numOfItems,
    },
})

function StyledImage(props){
    const {selectedImage,src} = props
    const classes = useStyles(props)
    return (
        <img className={selectedImage ? classes.selectedImage : classes.image} src={src}/>
    )
}

export default StyledImage
