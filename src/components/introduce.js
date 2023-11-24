import React from "react";
import sight from "../assets/image/unnamed.png";
import img1 from "../assets/image/school1.png";
import img2 from "../assets/image/school2.png";
import img3 from "../assets/image/school3.png";
import tuyensinh from "../assets/image/hdd.gif";
import tuyendung from "../assets/image/homthu.png";
import daotao from "../assets/image/dt.png";
import thuvienso from "../assets/image/trungtam.png";
import hoatdongdoan from "../assets/image/hdd.png";
import congdoan from "../assets/image/cd.png";

const menu = [
    { image: tuyensinh, menuName: 'Tuyển sinh', link:"/tuyen-sinh" },
    { image: tuyendung, menuName: 'Tuyển dụng', link:"/tuyen-dung"  },
    { image: daotao, menuName: 'Đào tạo', link:"/Gioi-thieu-phong-Dao-tao"  },
    { image: thuvienso, menuName: 'Thư viện số', link:"https://thuvienso.hepc.edu.vn"  },
    { image: hoatdongdoan, menuName: 'Hoạt động đoàn', link:"/Gioi-thieu-doan-thanh-nien"  },
    { image: congdoan, menuName: 'Công đoàn', link:"/Gioi-thieu-cong-doan"  },

]
class introduce extends React.Component {
    render() {
        return (
            <div className="container mx-auto 2xl:px-40 text-center">
                <strong className="text-2xl">Giới thiệu</strong>
                <div className="border grid grid-cols-12 border-black ">
                    <div className="w-full p-5 col-span-12 lg:col-span-7">
                        <img src={sight} className="w-full" alt="" />
                    </div>
                    <div className="w-full p-5 col-span-12 lg:col-span-5">
                        <img src={img1} className="w-full my-2" alt="" />
                        <img src={img2} className="w-full my-2" alt="" />
                        <img src={img3} className="w-full my-2" alt="" />
                    </div>
                </div>
                <div className="my-2 grid grid-cols-12">
                    {
                        menu.map(m =>
                            <a href={m.link} className="col-span-12 m-2 lg:col-span-2 md:col-span-4">
                                <img src={m.image} alt="" className="w-full aspect-[4/1] md:aspect-[2/1] hover:scale-105 transition duration-300 ease-in-out"/>
                                <span className="font-bold">{m.menuName}</span>
                            </a>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default introduce;