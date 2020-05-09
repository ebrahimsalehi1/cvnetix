import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { makeStyles  } from '@material-ui/core/styles'

const useStylesToggleButton = makeStyles({    
    root:{
        backgroundColor: props => props.selected ? '#40e0d0':'#ffffff',
        width: 36,
        height:36,                                 
    }    
  });

function StyledToggleButton(props){
    const {selected, ...other} = props
    const classes = useStylesToggleButton(props)

    return (
          <ToggleButton className={classes.root} {...other} />
      )
  }

  export default StyledToggleButton
