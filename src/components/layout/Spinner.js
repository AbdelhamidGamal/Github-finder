import React, { Component } from 'react';
import Spin from '../../loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='container'>
        <img className='centerthisimaeg' src={Spin} alt='' />
      </div>
    );
  }
}

export default Spinner;
