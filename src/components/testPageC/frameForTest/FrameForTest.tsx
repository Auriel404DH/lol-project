import React from 'react'
import styles from './FrameForTest.module.scss'
import questions from "../../../questions.json"
import ButtonMainPage from '../../sharedC/buttons/ButtonMainPage'
import { LanguageVariant } from 'typescript'

const FrameForTest = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame__content}>
          <h2 className={styles.question}>Вопрос...</h2>
          <div className={styles['frame__content-text']}>
            <ul className={styles.frame__list}>
              <li className={styles.answer}>
                <span>Вариант ответа...Вариант ответа...Вариант ответа...Вариант ответа...Вариант ответа...</span>
              </li>
              <li className={styles.answer}>
                <span>Вариант ответа...</span>
              </li>
              <li className={styles.answer}>
                <span>Вариант ответа...</span>
              </li>
            </ul>
            <div className={styles['btn-back']}>
                Предыдущий вопрос
            </div>
          </div>
      </div>
    </div>
  )
}

export default FrameForTest