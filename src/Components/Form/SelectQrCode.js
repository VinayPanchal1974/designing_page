import React from 'react'
import styles from "./SelectQrCode.module.css"

const SelectQrCode = ({handleAdd}) => {
  return (
    <div className={styles.addQr}>
            <div>
                <p>QR Codes</p>
            </div>
            <div>
                <button onClick={()=>handleAdd()}>
                    <p>Add Another QR Code</p>
                </button>
            </div>
        </div>
  )
}

export default SelectQrCode