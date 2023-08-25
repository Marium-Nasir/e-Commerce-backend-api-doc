import React,{useState} from 'react';

const NavList = ({btnVal,sectionId}) => {
  // eslint-disable-next-line
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
