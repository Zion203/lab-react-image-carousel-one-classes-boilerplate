import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       index :2
    }
  }

  
  render(){

    let nexter = ()=>{
        if (this.state.index!=2){
            this.setState((prev)=>({
                index : prev.index+1
            })
        )}else{
            this.setState({
                index :0
            })
        }
      }

    let perver = () =>{
        if (this.state.index!=0){
            this.setState((prev)=>({
                index : prev.index-1
            })
        )}else{
            this.setState({
                index:2
            })
        }
    }
    return(
        <div id="main">
            <ArrowBackIosIcon onClick ={perver} />
            <div>
                <img src={images[this.state.index].img} alt="" />
                <div id="text-img">
                    <h1 id="title" className="texts">{images[this.state.index].title}</h1>
                    <p className="texts" id="subtitle">{images[this.state.index].subtitle}</p>
                </div>
            </div>
            <ArrowForwardIosIcon onClick={nexter} />


        </div>
    )
  }
}

export default Carousel;