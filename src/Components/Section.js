import React, { useState } from 'react';
import AuthSection from './AuthSection';
import data from './Data';

const Section = () => {
  // eslint-disable-next-line
  const [dataVal,setDataVal] = useState(data)
  console.log(dataVal);
  return (
    <div className='Section'>
      <h1 style={{textAlign:"center",color:"rgb(10, 27, 32)"}}>e-Commerce Backend API's Document</h1>
      <div id='register'>
        <h2>Register User</h2>
      </div>
      {dataVal?.map((elem,index)=>{
        return(
          <AuthSection 
           key={index}
           divId={elem.divID}
           title={elem.title}
           description={elem.description}
           urlval={elem.urlval}
           method={elem.method}
           headersText={elem.headerVal}
           Request_Body={elem.reqBody}
           Response_Body={elem.resBody}
          />
        )
      })}
    </div>
  )
}

export default Section
