// Libraries
import React, {Fragment} from "react";

// Icons
import {BsFillBellFill} from 'react-icons/bs';
import {BsFillBellSlashFill} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillGooglePlusCircle} from 'react-icons/ai';
import {TiUserAdd} from 'react-icons/ti';
import {RiLoginCircleFill} from 'react-icons/ri';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';

// Style
import classes from './Header.module.css';

// UI
import logo from './UI/kolagenbalogo.png';

// Components



function Header() {
    return(
        <Fragment>
            <div className={classes.all}>
                <div className={classes.header}>
                    <div className={classes.headerl}>
                        <h3>5 Jun 2021 |</h3>
                        <h3>18:00 </h3>
                        <BsFillBellSlashFill className={classes.headerlbell}/>
                    </div>

                    <div className={classes.headerm}>
                        <BsFacebook className={classes.headermicon}/>
                        <AiFillInstagram className={classes.headermicon}/>
                        <AiFillLinkedin className={classes.headermicon}/>
                        <AiOutlineTwitter className={classes.headermicon}/>
                        <AiFillGooglePlusCircle className={classes.headermicon}/>
                    </div>

                    <div className={classes.headerr}>
                        <TiUserAdd className={classes.headerricon}/>
                        <h3 className={classes.headerrt}> Registracija</h3>

                        <RiLoginCircleFill className={classes.headerricon}/>
                        <h3 className={classes.headerrt}> Prijava</h3>
                    </div>
                </div>

                <div className={classes.navbar}>
                    <div>
                        <img src={logo} height={100} width={100}/>
                    </div>
                        <div className={classes.navsearch}>
                            <input
                                type="text"
                                placeholder="Pretraži artikle" 
                                className={classes.navsearchbar}
                                /> 

                            <AiOutlineSearch className={classes.navsearchbartool}/>
                        </div>
                    <div>
                        <div className={classes.navfavcart}>
                            <h3>0 </h3>
                            <AiFillHeart className={classes.navfavcarticon}/>

                            <h3>100.00 KM </h3>
                            <BsFillCartFill className={classes.navfavcarticon}/>
                        </div>

                    </div>
                </div>

                <div className={classes.navlinks}>
                    <h3>naslovna</h3>
                    <h3>proizvodi</h3>
                    <h3>o nama</h3>
                    <h3>kontaktiraj nas</h3>
                </div>
            </div>

        </Fragment>
    )
}

export default Header;