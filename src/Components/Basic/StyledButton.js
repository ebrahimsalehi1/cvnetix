import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        backgroundColor: (props) => props.color==='red' ? '#e03f3f':'#40e0d0'  ,
        color: 'white',
        width: 192,
        height: 36 ,
        padding: '0 30px',
        margin: 8,  
        border: 0,
        borderRadius: 3,   
    }
})

function StyledButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
}

export default StyledButton

