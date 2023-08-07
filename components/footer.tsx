import { format } from 'date-fns'
import React from 'react'
import WatsonChatIntegration from './watson-chat-integration'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
        <div className="mx-auto py-10">
            <p className="text-center text-sm text-black">
                &copy; {format(new Date(), "yyyy")} Rhombus, Inc. All right reserved.
            </p>
        </div>
        <WatsonChatIntegration />
    </footer>
  )
}

export default Footer