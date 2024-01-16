import React, { useState } from 'react'
import styles from "./QrCodeForm.module.css"
import Form from 'react-bootstrap/Form';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import { MdDelete } from "react-icons/md";
import SelectQrCode from './SelectQrCode';

const QrCodeForm = () => {
    const [val,setVal] = useState([])
    const handleAdd = ()=>{
        const abc = [...val,[]]
        setVal(abc)
    }
    const handleDelete = (i)=>{
        const deleteVal = [...val]
        deleteVal.splice(i,1)
        setVal(deleteVal)
    }
    return (
        <>
        <SelectQrCode handleAdd={handleAdd}/>
        {val.map((data,i)=>{
            return(
                <div className={styles.fullDiv} key={i}>
                <div className={styles.mainForm1}>
                    <div className={styles.left}>
                        <div className={styles.name1}>
                            <label htmlFor="Name">Name</label>
                            <br />
                            <input type="text" id="Name" name="Name" placeholder='Courier Bag 1' />
                        </div>
                        <div className={styles.name1}>
                            <label htmlFor="url">Campaign URL</label>
                            <br />
                            <input type="text" id="url" name="url" placeholder='Enter URL' />
                        </div>
                        <div className={styles.primary}>
                            <div>
                                <p>Primary</p>
                            </div>
                            <div>
                                <p> <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                /></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.packageImage}>package Image</p>
                        <DragAndDrop />
                        <div className={styles.deleteBtn}>
                            <button onClick={()=>handleDelete(i)}>
                                <MdDelete /> <p>Delete</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
            {/* <div className={styles.fullDiv}>
                <div className={styles.mainForm1}>
                    <div className={styles.left}>
                        <div className={styles.name1}>
                            <label htmlFor="Name">Name</label>
                            <br />
                            <input type="text" id="Name" name="Name" placeholder='Courier Bag 1' />
                        </div>
                        <div className={styles.name1}>
                            <label htmlFor="url">Campaign URL</label>
                            <br />
                            <input type="text" id="url" name="url" placeholder='Enter URL' />
                        </div>
                        <div className={styles.primary}>
                            <div>
                                <p>Primary</p>
                            </div>
                            <div>
                                <p> <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                /></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.packageImage}>package Image</p>
                        <DragAndDrop />
                        <div className={styles.deleteBtn}>
                            <button>
                                <MdDelete /> <p>Delete</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default QrCodeForm