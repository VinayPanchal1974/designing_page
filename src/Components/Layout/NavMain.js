import React from 'react'
import styles from "./NavMain.module.css"
import { CgProfile } from "react-icons/cg";

const NavMain = () => {
    const name = "Vinay"
    
    return (
        <div className={styles.main_div}>
            <div>LOGO</div>
            <div className={styles.left}>
                <div className={styles.leftRight}>
                    <div>👋</div>
                    <div>Hi,{name}</div>
                </div>
                <div className={styles.leftLeft}>
                    <div><i className="ri-mail-unread-line"></i></div>
                    <div><CgProfile style={{marginBottom:"4px"}}/></div>
                </div>

            </div>
        </div>
    )
}

export default NavMain