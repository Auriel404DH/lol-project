import React, { ReactPropTypes } from 'react';
import styles from './SlowAppearText.module.scss';
import WavyText from '../wavyText/WavyText';

const SlowAppearText = ({value,wavy = false,}:{value: string;wavy: boolean}) => {
    if (wavy) {
        const jsx = <WavyText value={value}/>

        return (
            <span></span>
        )
    } else{
        const v = value.split('')
        return (
            <>
                {v.map((el,idx) => {
                    return <span className={styles.span} style={{animationDelay: idx/25+"s"}} key={idx}>{el}</span> 
                })}
            </>
        );
    }
};

export default SlowAppearText;