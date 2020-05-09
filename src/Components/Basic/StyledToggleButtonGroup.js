import react from 'react'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { withStyles  } from '@material-ui/core/styles'

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(1),
    //   border: 'none',
    //   padding: theme.spacing(0, 1),
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius,
      },
    borderColor:'#40e0d0',
    width: 36,
    height:36,                                 
},
  }))(ToggleButtonGroup);

  export default StyledToggleButtonGroup