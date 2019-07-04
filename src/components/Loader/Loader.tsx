import React, {FunctionComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const styles = require('./Loader.less')
// import styles from './Loader.less'

interface TypeOfPageFC {
    spinning? : boolean
    fullScreen? : any
}

const Loader:FunctionComponent<TypeOfPageFC> = ({ spinning = false, fullScreen }) => {
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  )
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loader
