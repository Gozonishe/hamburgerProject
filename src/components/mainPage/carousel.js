import React from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import "./mainPage.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,


    };
    return (
        <div className = 'root'>
            <Slider {...settings}>
                <div className = 'pic1'>
                    <img id= 'pic1' src="https://snowbrains.com/wp-content/uploads/2014/01/url-2.jpeg" alt='pic1'/>
                </div>
                <div>
                    <img id= 'pic2' src="https://www.wagrain-kleinarl.at/website/var/tmp/image-thumbnails/0/744/thumb__lightbox/AP_Shoot2_Flachauwinkl_Rohrbacher16_53.jpeg" alt='pic2'/>
                </div>
                <div>
                    <img id= 'pic3' src="https://www.nonstopsnow.com/media/223455/b1-fs-sb_1920x1080.jpg" alt='pic3'/>
                </div>
                <div>
                    <img id= 'pic4' src="https://avatars.mds.yandex.net/get-pdb/214107/4f58e511-782b-4164-929a-8b8af24adde5/orig" alt='pic4'/>
                </div>
                <div>
                    <img id= 'pic4' src="https://learnex.com.mx/home/wp-content/uploads/2017/12/snowb.jpg" alt='pic5'/>
                </div>
            </Slider>
        </div>
    );
  }
}

ReactDOM.render(<SimpleSlider />, document.getElementById("root"));
 