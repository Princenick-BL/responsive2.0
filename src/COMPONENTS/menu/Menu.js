import React,{Fragment, useState,useEffect} from 'react'
import UsrImg from '../../MEDIAS/no-photo.png'
import FacebookLogo from '../../MEDIAS/Facebook.png'
import InstagrameLogo from '../../MEDIAS/Instagram.png'
import GmailLogo from '../../MEDIAS/Gmail.png'
import LinkedinLogo from '../../MEDIAS/Linkedin.png'
import WhatsappLogo from '../../MEDIAS/Whatsapp.png'
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

            <Fragment>
                <nav className="menuTop dark2">
                    <div className="toggleMenu flexV center" onClick={showMenu}>
                        
                        {/*Croix fermer menu*/}  
                        <Fragment>
                            
                            <div className={toggleMenu ?"change dark3": "dimiss " }></div>
                            <div className={toggleMenu ?"change dark3": "dimiss " }></div>
                            <div className={toggleMenu ?"change dark3": "dimiss " }></div>
    
                        </Fragment> 

                        {/* 9 points icon menu */} 
                        <Fragment>

                            <div className={toggleMenu ? "dimiss " :"flexH t"}>
                                <div className="nav-btn-span l dark3"></div>
                                <div className="nav-btn-span l dark3"></div>
                                <div className="nav-btn-span l dark3"></div>
                            </div>   
                            <div className={toggleMenu ? "dimiss " :"flexH t"}>

                                <div className="nav-btn-span l dark3"></div>
                                <div className="nav-btn-span l dark3"></div>
                                <div className="nav-btn-span l dark3"></div>
                            </div>
                            <div className={toggleMenu ? "dimiss " :"flexH t"}>
                                <div className="nav-btn-span l dark3"></div>
                                <div className="nav-btn-span l dark3"></div>
                                <div className="nav-btn-span l dark3"></div>
                            </div>


                        </Fragment>
                        
                        
                    </div>
                    <div className="LOGO">My App</div>
                </nav>
                
                <nav className="menu flexH" >
                    {(largeur>500 || toggleMenu)&&(
                    <div className="menuContainer dark1 flexV">
                        <Fragment></Fragment>

                        <div className="UsrImgContainer center">
                            <img className="UsrImg" src={UsrImg} alt="logo"></img>
                        </div>

                        <div className="user">
                                
                            <div className="userFirstname">BALLO</div>
                            <div className="userName">Prince Nick</div>

                        </div>

                        <ul className="menuOptions">
                            <li className="accueil">
                                <a id="test" href="/">Accueil</a>
                            </li>
                            <li className="ressources">
                                <a href="/">Ressources</a>
                            </li>
                            <li className="contact">
                                <a href="/">Contact</a>
                            </li>                         
                        </ul>
                        
                        <div className="media">
                            <img src={FacebookLogo} alt="facebooklogo"></img>
                            <img src={InstagrameLogo} alt="facebooklogo"></img>
                            <img src={WhatsappLogo} alt="facebooklogo"></img>
                            <img src={LinkedinLogo} alt="facebooklogo"></img>
                            <img src={GmailLogo} alt="facebooklogo"></img>     
                        </div>

                    </div>
                     )}
           
                </nav>
            </Fragment>
    )
}
