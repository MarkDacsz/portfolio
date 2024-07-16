import { MailIcon,  MapPinIcon, PhoneIcon } from 'lucide-react'
import React from 'react'

const Information = () => {
  return (
<div className="bg-black flex justify-center items-center p-6">
  <div className=" text-white text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center">
        <MailIcon className="text-3xl mr-2 text-white" />
        <div className="text-2xl">dacsilm@gmail.com</div>
      </div>
      <div className="flex items-center">
        <PhoneIcon className="text-3xl mr-2 text-white" />
        <div className="text-2xl">(+63) 09602519377</div>
      </div>
      <div className="flex items-center">
        <MapPinIcon className="text-3xl mr-2 text-white" />
        <div className="text-2xl">Pakil, Laguna</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Information
