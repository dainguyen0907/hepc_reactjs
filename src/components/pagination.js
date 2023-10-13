import {  faAngleLeft, faAngleRight, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

class pagination extends React.Component {
    state={
        pages:[1,2,3,4,5,6,7,8,9],
        currentPage:3,
        unactive:'p-2 w-10 h-10 border-r-gray-200 text-center',
        active:'p-2 w-10 h-10 border-r-gray-200 text-center text-white bg-blue-500',
    }
    render() {
        return (
            <div className="mx-auto w-fit text-blue-500 pb-2">
                <ul className="rounded-md border inline-flex border-gray-200">
                    <li className="p-2 w-10 h-10 border-r-gray-200 text-center"><Link><FontAwesomeIcon icon={faAngleLeft}/></Link></li>
                    {this.state.currentPage>2?
                    <li className={this.state.unactive}>1</li>:""}
                    {this.state.currentPage>3?
                    <li className={this.state.unactive}><FontAwesomeIcon icon={faEllipsis}/></li>:""}
                    {this.state.pages.map((p)=>this.state.currentPage-p<=1&&this.state.currentPage-p>=-1?<li className={this.state.currentPage===p?this.state.active:this.state.unactive}><Link>{p}</Link></li>:"")}
                    {this.state.pages.length-this.state.currentPage>2?
                    <li className={this.state.unactive}><FontAwesomeIcon icon={faEllipsis}/></li>:""}
                    {this.state.pages.length-this.state.currentPage>1?
                    <li className={this.state.unactive}>{this.state.pages[this.state.pages.length-1]}</li>:""}
                    <li className="p-2 w-10 h-10 text-center"><Link><FontAwesomeIcon icon={faAngleRight}/></Link></li>
                </ul>
            </div>
        );
    }
}

export default pagination;