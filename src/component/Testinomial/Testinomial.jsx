import React from 'react'
import './Testinomial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import profilePic5 from '../../img/profile5.jpg'
import profilePic6 from '../../img/profile6.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
const Testinomial = () => {
    const clients = [
        {
        img: profilePic1,
        review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque libero dolorum labore soluta, autem sunt atque quidem id aliquid unde porro quod omnis, repellat fuga consequuntur perspiciatis ex excepturi pariatur officia ea provident eius aspernatur deserunt. Iure quia odit reiciendis!"
    },
    {
        img: profilePic2,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque libero dolorum labore soluta, autem sunt atque quidem id aliquid unde porro quod omnis, repellat fuga consequuntur perspiciatis ex excepturi pariatur officia ea provident eius aspernatur deserunt. Iure quia odit reiciendis!"
    },
    {
        img: profilePic3,
        review: "Lorem ipsum dolor sit amet consectetur a hjew2hegkiebjenwb3e hwhebwndevwke wh2wsej2we2wvweq2 vyuhe2bwe 2e sw 1qv we2hwe2 e21jwe 12w bwe12hwhg12bwm12dipisicing elit. Deleniti sint pla"
    },
    {
        img: profilePic4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint pl whehq2wo2iwswv2 e2hwwe12vwei12jw2b weh2h2wb  w2hgqjwnq2wv    q2 gwe2ywh21jwv2w 2g1w1gh   w "
    },
    {
        img: profilePic5,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint placeat w2hnbwh12jw12cw12iw gwq2wi21juwg12owkhvcwk1wwsytjws qbvgwe be2wyywe2hvgfe2e 2wgtu2btg2w2j2eg wge2yhg2ebghwebbgwehnwbe g2e2hbwe2ytwjwweqbhqweg veli"
    },
    {
        img: profilePic6,
        review: "Lorem ipsum dolor sit amet consectetur a nbw2hvbwhqo2iw2qhjw2 bgw2wuh2hgwg2kjwv2hwh w2gtwfuiw  wgfwvwhgwe2uj1qhj hge2ywg2iwh2wvj2 wh2bg2whbvwnh2wj hg2whwhjwhqwhih2q hgw29iw2cwje2hwgi2eju h2ehgh2eg2vi2wvcw2i2qwg hg2whwh2g2wdipisicing elit. Deleniti sint placeat velit autem dolor perspiciatis "
    },
]
  return (
   <div className="t-wrapper" id='Testinomial'>
    <div className="t-heading">
        <span style={{color:'var(--orange)'}}>Clients always get Exceptional Work From me...</span>
        <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background:'skyblue'}}></div>
    </div>
    {/* slider */}
   <Swiper 
   modules={[Pagination]}
   slidesPerView={1}
   pagination={{clickable:true}}>
        {
    clients.map((client, index) => {
     return <SwiperSlide key={index}>
        <div className="testinomial">
        <img src={client.img} alt="" />
          <span>{client.review}</span>
        </div>
        
           </SwiperSlide>
    })}
 
   </Swiper>
   </div>
  )
}

export default Testinomial
