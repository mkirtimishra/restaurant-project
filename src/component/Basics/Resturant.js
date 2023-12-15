import React, {useState} from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './menucard';
import Navbar from './navbar';


const uniqueNavItem= [ 
  ...new Set(
  Menu.map((curr)=>{
    return curr.category;
  })
),
"All",
];



const Resturant = () => {
  
  const [menuData, setMenuData]= useState(Menu);
  // const [menuList, setMenuList]= useState(uniqueNavItem);

    const filterItem=(category)=>{
     if(category==="All"){
      setMenuData(Menu);
      return;
     }
     const updateitems= Menu.filter((curElem)=>{
        return curElem.category===category;
      }); 
      setMenuData(updateitems);
    };

  return (
    <>
     <Navbar filterItem= {filterItem} uniqueNavItem= {uniqueNavItem}/> 
    <MenuCard menuData={menuData} />
    </>
    
  )
}

export default Resturant;