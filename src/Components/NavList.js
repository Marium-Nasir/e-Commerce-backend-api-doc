import React,{useState} from 'react';

const NavList = ({btnVal,sectionId}) => {
  const [activeSection, setActiveSection] = useState();

const scrollToSection = (sectionId) => {
  setActiveSection(sectionId);

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <>
      <li onClick={()=>{scrollToSection(sectionId)}} style={{fontSize:'1rem',color:"whitesmoke"}}>{btnVal}</li>
    </>
  )
}

export default NavList
