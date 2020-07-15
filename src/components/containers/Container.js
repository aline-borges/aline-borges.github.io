import React from 'react';
import { Column } from './style';

const Container = (props) => {
  return(
    <Column>
      {props.children}
    </Column>
  );
}

export default Container 
