import React from 'react'
import styles from "./CreateCampaign.module.css"

const CreateCampaign = () => {
    return (
        <div className={styles.addCampagin1}>
            <div className={styles.div1}>
                <p>Create Campaign</p>
            </div>
            <div className={styles.div2}>
                <button>
                    <p>Save</p>
                </button>
            </div>
        </div>
    )
}

export default CreateCampaign