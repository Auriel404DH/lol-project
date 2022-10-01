import React from 'react';
import ButtonMainPage from '../../components/sharedC/buttons/ButtonMainPage'

const TestPage = () => {

  const str:string = 'Далее'


  return (
    <div className='ml-12'>
      <div>TestPage</div>
      <ButtonMainPage value={str}/>
    </div>

  
  
  
  );
};

export default TestPage;
