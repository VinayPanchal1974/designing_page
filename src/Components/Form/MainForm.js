import React from 'react'
import CreateCampaign from '../Campagins/CreateCampaign'
import UpperForm from './UpperForm'
import SelectQrCode from './SelectQrCode'
import QrCodeForm from './QrCodeForm'

const MainForm = () => {
  return (
    <div>
        
        <UpperForm />
        <QrCodeForm />
    </div>
  )
}

export default MainForm