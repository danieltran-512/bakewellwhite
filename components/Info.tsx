import React from 'react'
import { AboutUs } from './AboutUs'
import styles from '../styles/Info.module.css'
import { SelectedWork } from './SelectedWork'

//Information section component, contains 2 smaller components
export const Info = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
      <SelectedWork />
    </div>
  )
}
