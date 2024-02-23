import React from 'react'
import { MdDelete } from "react-icons/md";

const Contact = (props) => {
  if (!props.contact) {
    // Return null or some placeholder UI
    return null;
  }
  const {id, name , email, number} = props.contact
  return (
    <div  key={id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md mb-3">
                
                <div className="text-sm font-medium text-gray-900">
                   {name}
                </div>
                <div className="text-sm text-gray-500">
                    {email}    
                </div>
                <div className="text-sm text-gray-500">
                    {number}
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        className="text-blue-700 hover:text-red-700 transition-colors duration-150 ">
                        <MdDelete size="2.5em" 
                           onClick={()=>props.clickHandler(id)}
                        />
                       
                    </button>
                </div>
            </div>
  )
}

export default Contact