import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs';


function HeaderSocial() {
  return (
    <div className='header_social'>
        <a target="_blank" href={"https://linkdin.com"}><BsLinkedin /></a>
        <a target="_blank" href="https://github.com"><BsGithub /></a>
        <a target="_blank" href="https://dirbbble.com"> <BsDribbble /></a>
       
        
    </div>
  )
}

export default HeaderSocial