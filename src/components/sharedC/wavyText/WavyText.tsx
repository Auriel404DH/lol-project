import React from 'react';
import { text } from 'stream/consumers';
import styles from './WavyText.module.scss'




const WavyText = ({value}:{value:string}) => {
    const find = document.querySelectorAll('.'+value)
   find.forEach((el)=> {
    console.log('fff')
   })
  return (
    true
  );
};

export default WavyText;
