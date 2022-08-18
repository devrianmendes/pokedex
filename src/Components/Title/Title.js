import React from 'react'
import styles from './Title.module.css'

const Title = ({index, text}) => {
  return (
    <h1 className={styles.title}>Região de {text[index].charAt(0).toUpperCase() + text[index].slice(1)}</h1>
  )
}

export default Title