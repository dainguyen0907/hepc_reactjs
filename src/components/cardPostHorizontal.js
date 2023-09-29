import React from "react";
import image from "../assets/image/logo.png";
import { Link } from "react-router-dom";

class cardPostHorizontal extends React.Component {
    render() {
        return (
            <div className="w-full p-2 ">
                <div className="border rounded-md bg-white grid grid-cols-5 max-h-min">
                    <div className="h-fit col-span-2">
                        <img src={image} alt="" className="w-full aspect-[2/1] object-cover" />
                    </div>
                    <div className="col-span-3">
                        <Link to="/">
                            <div className="p-5 text-justify">
                                <small className="">(01/01/2023)</small>
                                <h4 className="uppercase font-medium text-center">Tiêu đề</h4>
                                <div className="overflow-hidden max-h-48">
                                    Sáng ngày 27/04/2023, Công đoàn Trường Cao đẳng Điện lực Thành phố Hồ Chí Minh tổ chức Đại hội Công đoàn cơ sở lần thứ VIII, nhiệm kỳ 2023-2028. Dự và chỉ đạo hội nghị có Phó Chủ tịch Công đoàn Tổng Công ty Điện lực miền Nam ông Phạm Nguyễn Minh Châu.
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>


            </div>
        );
    }
}

export default cardPostHorizontal;