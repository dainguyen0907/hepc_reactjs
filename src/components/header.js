import React from 'react';
import backGroundImage from "../assets/image/bg-image.png";
import logo from "../assets/image/LogoEVNSPC.png";
import { faChalkboardUser, faEnvelope, faLock, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const image = backGroundImage;
const LogoEVNSPC=logo;
class header extends React.Component {
    render() {
        return (
            <div className="bg-cover h-full" style={{ backgroundImage: `url(${image})` }}>
                <div className='container mx-auto 2xl:px-40'>
                    <div className='w-full inline-block'>
                        <div className="border-solid border-white bg-white border-2 rounded-b-lg w-fit float-right pb-1">
                            <a href="/" className="no-underline text-sky-500 m-1"><FontAwesomeIcon icon={faPersonChalkboard} /> Giáo viên</a>
                            <a href="/" className="no-underline text-sky-500 m-1"><FontAwesomeIcon icon={faChalkboardUser} /> Sinh viên</a>
                            <a href="/" className="no-underline text-sky-500 m-1"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                            <a href="/" className="no-underline text-sky-500 m-1"><FontAwesomeIcon icon={faLock} /> Đăng nhập</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <div>
                            <a href='/'><img src={LogoEVNSPC} className='w-28 h-28' /></a>
                        </div>
                        <div className='col-span-3 text-center text-white font-bold pt-8'>
                            TRƯỜNG CAO ĐẲNG ĐIỆN LỰC THÀNH PHỐ HỒ CHÍ MINH <br/>
                            <span className='text-orange-600'>HO CHI MINH ELECTRIC POWER COLLEGE</span>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default header;