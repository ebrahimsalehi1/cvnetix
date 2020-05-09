import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        textDecoration:props=> props.expired ? 'line-through':'none',
        color: props=> props.expired ? 'gray':'black',
      },
})

function StyledLabel(props){
    const {variant,children} = props
    const classes = useStyles(props)

    return (
        <Typography className={classes.root} variant={variant}  gutterBottom>
       {children}
      </Typography>    
    )

}

export default StyledLabel
