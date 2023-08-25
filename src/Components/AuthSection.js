import React,{useState} from "react";

const AuthSection = ({ divId,title,description,urlval,method,headersText,Request_Body,Response_Body,key}) => {
  const [activeResponseIndex, setActiveResponseIndex] = useState(-1);
  const [showBtn,setShowBtn] = useState("Show Response")


  const toggleResponse = (index) => {
    if (activeResponseIndex === index) {
      setActiveResponseIndex(-1); // Close the active response
      setShowBtn("Show Response")
    } else {
      setActiveResponseIndex(index); // Show the selected response
      setShowBtn("Hide Response")
    }
  };
  return (
    <>
      <div id={divId}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <h4>URL</h4>
          <div className="urlspan">{urlval}</div>
          <h4>Method : {method}</h4>
          <h4>Headers</h4>
          <p>{headersText}</p>
          <h4>Request Body</h4>
          <div className="codeSnippet"> {Request_Body} </div>
          <button type="button" onClick={()=>{toggleResponse(key)}}>{showBtn}</button>
          {activeResponseIndex === key && (
            <div className="codeSnippet">{ Response_Body }</div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default AuthSection;
