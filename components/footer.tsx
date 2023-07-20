import { format } from 'date-fns'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white border-t min-h-[40vh] absolute bottom-0'>
        <div className="mx-auto py-10">
            <p className="text-center text-sm text-black">
                &copy; {format(new Date(), "yyyy")} Rhombus, Inc. All right reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer