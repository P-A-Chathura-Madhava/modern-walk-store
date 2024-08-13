import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {
  return (
    <div className='border-t-foreground border-t-2'>
    <div className='flex container px-44 justify-between h-64 pt-10'>
        <div>
            <h4>Customer Care</h4>
            <ul className='list-none text-xs flex flex-col gap-1 mt-2'>
                <li className='cursor-pointer hover:text-blue-700'>Help Center</li>
                <li className='cursor-pointer hover:text-blue-700'>How to Buy</li>
                <li className='cursor-pointer hover:text-blue-700'>Returns & Refunds</li>
            </ul>
        </div>
        <div>
            <h4>Features</h4>
            <ul className='list-none text-xs flex flex-col gap-1 mt-2'>
                <li className='cursor-pointer hover:text-blue-700'>About Us</li>
                <li className='cursor-pointer hover:text-blue-700'>Careers</li>
                <li className='cursor-pointer hover:text-blue-700'>Blog</li>
                <li className='cursor-pointer hover:text-blue-700'>Stores</li>
                <li className='cursor-pointer hover:text-blue-700'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-blue-700'>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h4>Get In Touch</h4>
            <ul className='list-none text-xs flex flex-col gap-1 mt-2'>
                <li className='cursor-pointer hover:text-blue-700'>011-1234546</li>
                <li className='cursor-pointer hover:text-blue-700'>No: 100, Colombo Road, Piliyandala</li>
                <li className='cursor-pointer hover:text-blue-700'>info@modenwalk.com</li>
            </ul>
        </div>
        <div>
            <h4>Social Media</h4>
            <ul className='list-none text-2xl flex flex-col gap-1 mt-2'>
                <li className='cursor-pointer hover:text-blue-700'><IoLogoFacebook /></li>
                <li className='cursor-pointer hover:text-blue-700'><FaInstagramSquare /></li>
                <li className='cursor-pointer hover:text-blue-700'><FaTwitter /></li>
                <li className='cursor-pointer hover:text-blue-700'><TiSocialYoutube /></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer