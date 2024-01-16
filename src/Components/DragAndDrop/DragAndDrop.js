import React from 'react'
import styles from "./DragAndDrop.module.css"

const DragAndDrop = () => {
    return (
        <div className={styles.dropzone}>
            <h1><i className="ri-file-text-line"></i></h1>
            <h5><span>Click to Upload </span>or Drag and Drop</h5>
            <h6>&#40;Max. file Size 15 MB&#41;</h6>
        </div>
    )
}

export default DragAndDrop