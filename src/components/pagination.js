import {  faAngleLeft, faAngleRight, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

class pagination extends React.Component {
    state={
        quantity:0,
        pages:[],
        unactive:'p-2 w-10 h-10 border-r-gray-200 text-center',
        active:'p-2 w-10 h-10 border-r-gray-200 text-center text-white bg-blue-500',
    }
    componentDidUpdate(){
        if(this.state.pages.length!==this.props.length){
            this.setState({pages:Array.from({length: this.props.length}, (_, i) => i + 1)});
        }   
    }
    render() {
        return (
            <div className="mx-auto w-fit text-blue-500 pb-2">
                <ul className="rounded-md border inline-flex border-gray-200">
                    {this.props.currentPage===1?'':
                    <li className="p-2 w-10 h-10 border-r-gray-200 text-center"><Link to={"/"+this.props.param+"?page="+(this.props.currentPage-1)}><FontAwesomeIcon icon={faAngleLeft}/></Link></li>}
                    {this.props.currentPage>2?
                    <li className={this.state.unactive}><Link to={"/"+this.props.param}>1</Link></li>:""}
                    {this.props.currentPage>3?
                    <li className={this.state.unactive}><FontAwesomeIcon icon={faEllipsis}/></li>:""}
                    {this.state.pages.map((p)=>this.props.currentPage-p<=1&&this.props.currentPage-p>=-1?<li className={this.props.currentPage===p?this.state.active:this.state.unactive}><Link to={"/"+this.props.param+"?page="+p}>{p}</Link></li>:"")}
                    {this.state.pages.length-this.props.currentPage>2?
                    <li className={this.state.unactive}><FontAwesomeIcon icon={faEllipsis}/></li>:""}
                    {this.state.pages.length-this.props.currentPage>1?
                    <li className={this.state.unactive}><Link to={"/"+this.props.param+"?page="+(this.props.length)}>{this.props.length}</Link></li>:""}
                    {this.props.currentPage===this.props.length?'':<li className="p-2 w-10 h-10 text-center"><Link to={"/"+this.props.param+"?page="+(this.props.currentPage+1)}><FontAwesomeIcon icon={faAngleRight}/></Link></li>}
                </ul>
            </div>
        );
    }
}

export default pagination;