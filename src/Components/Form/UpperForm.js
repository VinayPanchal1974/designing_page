import React from 'react'
import styles from "./UpperForm.module.css"
import DragAndDrop from '../DragAndDrop/DragAndDrop'
import { Form } from 'react-bootstrap'
import CreateCampaign from '../Campagins/CreateCampaign'

const UpperForm = () => {
    return (
        <>
        <CreateCampaign />
            <div className={styles.fullDiv}>
                <div className={styles.mainForm1}>
                    <div className={styles.left}>
                        <div className={styles.name}>
                            <label htmlFor="Name">Name</label>
                            <br />
                            <input
                                type="text"
                                id="Name"
                                name="Name"
                                placeholder='Name'
                            />
                        </div>
                        <div className={styles.type}>
                            <label htmlFor="type">Type</label>
                            <br />
                            <select id="type" name="type">
                                <option value="">******</option>
                                <option value="Rs">Rupee</option>
                                <option value="$$">Dollar</option>
                            </select>
                        </div>
                        <div className={styles.date}>
                            <div>
                                <label htmlFor="startDate">Start Date</label>
                                <br />
                                <input type="date" id="startDate" name="startDate" />
                            </div>
                            <div>
                                <label htmlFor="endDate">End Date</label>
                                <br />
                                <input type="date" id="endDate" name="endDate" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>Upload Logo</p>
                        <DragAndDrop />
                        <div className={styles.primary}>
                            <div>
                                <p>Share Ip Address</p>
                            </div>
                            <div>
                                <p> <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                /></p>

                            </div>
                            <hr className={styles.horizon}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperForm