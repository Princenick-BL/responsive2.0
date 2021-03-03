import React,{Fragment, useState,useEffect} from 'react'
import logo from '../../MEDIAS/eilco.png'
import './Menu.css'

export default function Menu() {

    //verifier la largeur de la vue
    const [largeur,setLargeur]=useState(window.innerWidth);
    const [toggleMenu,setToggleMenu]=useState(false);

    const showMenu =() =>{
        setToggleMenu(!toggleMenu);
    };

    useEffect(()=>{

        const changeWidth =()=>{

            setLargeur(window.innerWidth);

            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize',changeWidth);
        return()=>{
            window.removeEventListner('resize',changeWidth);
        }
    },[])

    return (
        <div>
          
          
                <Fragment>
                    <nav className="menu flexH" >
                    {(largeur>500 || toggleMenu)&&(
                        <div className={!toggleMenu ?"menuContainer closed flexV": "menuContainer opened flexV" }>
                            <img className="logo" src={logo} alt='Logo'></img>
                            <div className="user">
                                
                                <div className="userFirstname">BALLO</div>
                                <div className="userName">Prince Nick</div>

                            </div>
                            <ul className="menuOptions">
                                <li className="MenuOption">Option 1</li>
                                <li className="MenuOption">Option 2</li>
                                <li className="MenuOption">Option 3</li>
                                <li className="MenuOption">Option 4</li>
                            </ul>
                        </div>
                         )}
                        <div className="toggleMenu flexV" onClick={showMenu}>
                            <div className={toggleMenu ?"change": "dimiss " }></div>
                            <div className={toggleMenu ?"change": "dimiss " }></div>
                            <div className={toggleMenu ?"change": "dimiss " }></div>

                            <div className={toggleMenu ? "dimiss " :"flexH t"}>
                                <div className="nav-btn-span l "></div>
                                <div className="nav-btn-span l "></div>
                                <div className="nav-btn-span l"></div>
                            </div>   
                            <div className={toggleMenu ? "dimiss " :"flexH t"}>
                                <div className="nav-btn-span l"></div>
                                <div className="nav-btn-span l "></div>
                                <div className="nav-btn-span l"></div>
                            </div>
                            <div className={toggleMenu ? "dimiss " :"flexH t"}>
                                <div className="nav-btn-span l"></div>
                                <div className="nav-btn-span l "></div>
                                <div className="nav-btn-span l"></div>
                            </div>

                        </div>
                      
                    </nav>
                </Fragment>
    
        </div>
    )
}
