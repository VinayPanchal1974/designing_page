import React from 'react'
import styles from "./NavSecond.module.css"

const NavSecond = () => {
    return (
        <div className={styles.secondMain}>
            <div className={styles.second}>
                <div>Campagins</div>
                <div>Invantory </div>
                <div>Companies</div>
                <div>Users</div>
                <div>Domains</div>
            </div>
            <div className={styles.menu_button}>
                <button>
                <i className="ri-menu-2-fill"></i>
                </button>
            </div>
        </div>

    )
}
    ;
export default NavSecond