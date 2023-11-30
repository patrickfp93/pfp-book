export default {
  baseContent: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  container: {
    width: 'auto',
    position: 'fixed',
    display: 'flexbox',
    left: '50%',
    top: '50%',
    x: '-50%',
    y: '-50%'
  },
  containerCollapse: {
    width: 'auto',
    position: 'fixed',
    display: 'flexbox',
    left: '0%',
    top: '0%',
    x: '0%',
    y: '0%'
  },
  top: { display: 'inline-flex', width: '10vw' },
  topCollapse: { display: 'inline-flex', width: '100vw' },
  down: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    height: 100,
    overflow: 'hidden'
  },
  downCollapse: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 0,
    overflow: 'hidden',
    translate: '0% 0%'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    height: 100,
    flexGrow: '0'
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginLeft: 0,
    minWidth: 100,
    minHeight: 100,
    overflow: 'hidden',
    flexGrow: '1'
  },
  initials: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    minWidth: 150,
    minHeight: 100,
    width: 150,
    flexGrow: '0',
    textShadow: 2,
    marginRight: 5
  },
  hider: { width: 0, minWidth: 0 }
}