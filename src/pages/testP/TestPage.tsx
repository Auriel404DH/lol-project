import React from 'react';
import ButtonMainPage from '../../components/sharedC/buttons/ButtonMainPage'
import DialogeWindow from '../../components/sharedC/dialogeWindow/DialogeWindow';

const TestPage = () => {

  const str:string = 'Далее'


  return (
    <div className='ml-12'>
      <div>TestPage</div>
      <ButtonMainPage value={str}/>
      <DialogeWindow/>
    </div>

  
  
  
  );
};

export default TestPage;
