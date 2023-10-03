import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class footer extends React.Component {
    render() {
        return (
            <div className="bg-sky-600">
                <div className=" container mx-auto 2xl:px-40 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 pb-5">
                        <div className="p-5 col-span-2 md:col-span-1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7836.260359028337!2d106.678213!3d10.877702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7d5b1950175%3A0x6b1076fb52d4bf57!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIMSQaeG7h24gbOG7sWMgVHAuIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2sus!4v1695973571703!5m2!1svi!2sus" className="w-full h-80" allowfullscreen="" loading="lazy" title="google-map" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="p-5 col-span-2 md:col-span-1">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDaoTaoHEPC&amp;tabs=timeline&amp;width=500&amp;height=450&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" className="w-full overflow-hidden h-80" frameborder="0" allowfullscreen="true" title="facebook" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                        <div className="px-5 col-span-2 md:col-span-1">
                            <div className="text-center md:text-left text-white text-base">
                                Địa chỉ: 554 Hà Huy Giáp - Phường Thạnh Lộc - Quận 12 - Thành phố Hồ Chí Minh<br />
                                Tuyển sinh: +84.8.22155661 - Đào tạo: +84.8.38919462<br />
                                Fax: +84.8.38919049 - Email: hepc@hepc.edu.vn
                            </div>
                        </div>
                        <div className="px-5 col-span-2 md:col-span-1">
                            <div className="text-center md:text-right text-white text-base">
                                <p>Liên hệ với chúng tôi:</p>
                                <a className="border-blue-500 rounded-full bg-blue-500 aspect-square w-7 h-7 float-right text-center mx-1" href="/#"><FontAwesomeIcon className="hover:scale-150 ease-in-out duration-300" icon={faFacebook} /></a>
                                <a className="border-red-500 rounded-full bg-red-500 aspect-square w-7 h-7 float-right text-center" href="/#"><FontAwesomeIcon className="hover:scale-150 ease-in-out duration-300" icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center text-white p-5">
                        © HEPC 2023 - All right reserved - Designed by Administrator
                    </div>
                </div>

            </div>
        );
    }
}

export default footer;