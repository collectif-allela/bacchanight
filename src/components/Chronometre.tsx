import React, { useState, useEffect } from 'react';


export default function Chronometer(props:any){


  return (
    <div className='text-primary'>
      <p>Elapsed Time: {props.elapsedTime} seconds</p>
      <button>Start Chronometer</button>
    </div>
  );
};
