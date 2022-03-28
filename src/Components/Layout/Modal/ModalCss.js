// libraries
import { makeStyles } from '@material-ui/core/styles'

const modalCss = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    padding: theme.spacing(2, 4, 3),
    // width: '32.375rem', //518px
    // height: '19.875rem', //318px
    border: '0',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: "center",
    transform: `matrix(1, 0, 0, -1, 0, 0)`,
    borderRadius: '20px',
    maxHeight: '40rem',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
      // width: '32.375rem', //518px
      // height: '19.875rem' //318px
      maxHeight: '35rem'
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "15.375rem", //518px
    //   height: "6.875rem", //318px
    // },
    [theme.breakpoints.down('xs')]: {
      // width: '15.375rem', //518px
      // height: '6.875rem' //318px
      maxHeight: '15rem'
    },
    [theme.breakpoints.down('300')]: {
      // width: '11.375rem', //518px
      // height: '6.875rem' //318px
    }
  }
}))
export default modalCss
