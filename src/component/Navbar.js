import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faBars, faMagnifyingGlass, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const authenticate = useSelector((state)=>state.auth.authenticate)
    const menuList = ['CANDLE','ACCESSORIES','DIFFUSER','PERFUME','FABRIC',]
    const [sideDisplay,setSideDisplay] = useState("none");

    const navigate = useNavigate();
    const getLogin = () => {
        if(authenticate===true){
            dispatch({type:"AUTH_FALSE"})
        }
        navigate('/login')
    }
    const goToHome = () => {navigate('/')}
    const searchItem = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }
    const getCategory = (event) => {
        setSideDisplay("none")
        let category = event.target.textContent.toLowerCase();
        navigate(`/?category=${category}`)
    }
    

    return (
        <div>
            <div className='side-menu-item' style={{display:sideDisplay}}>
                <div className='text-minus' onClick={()=>setSideDisplay("none")}>
                    <FontAwesomeIcon icon={faMinus} />
                </div>
                <div className='side-menu-list'>
                    <ul>
                        {menuList.map((item)=>item===menuList[menuList.length-1]?(<li onClick={(event)=>getCategory(event)}>{item}</li>):(<li onClick={(event)=>getCategory(event)} className='menu-border'>{item}</li>))}
                    </ul>    
                </div>
            </div>
            <div className='login-area main-border'>
                <div className='menu-burger' onClick={()=>setSideDisplay("block")}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='input-box'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input 
                        type='text' 
                        placeholder='검색어를 입력하세요' 
                        onKeyPress={(event)=>searchItem(event)}    
                    />
                </div>
                <div className='login-box'>
                    <FontAwesomeIcon icon={faFaceSmile} />
                    {authenticate?(
                    <div onClick={getLogin}>LOGOUT</div>)
                    :(<div onClick={getLogin}>LOGIN</div>)}
                </div>  
            </div>
            <div className='logo-area main-border'>
                <img
                src='https://cdn.imweb.me/thumbnail/20201212/9ff64542142a4.png'
                width={180}
                onClick={goToHome}
                />
            </div>
            <div className='menu-area main-border'>
                <ul className='menu-item'>
                    {menuList.map((item)=>item===menuList[menuList.length-1]?(<li onClick={(event)=>getCategory(event)}>{item}</li>):(<li onClick={(event)=>getCategory(event)} className='menu-border'>{item}</li>))}
                </ul>
            </div>
        </div>
  )
}

export default Navbar
