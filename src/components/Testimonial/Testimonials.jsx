import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials=()=>{
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
    }
    return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        The website was super easy to use! I loved how simple it was to compare flights and hotels. I found a great deal on a beach resort, and the booking process was smooth. Definitely going to use it for my next trip!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        I was able to book a last-minute vacation thanks to this site. It helped me find available flights and accommodations within minutes. The price alerts are a game-changer – I managed to save over $100
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        It was my first time traveling internationally, and the website made it so much easier. The itinerary suggestions were spot-on, and I loved how they listed all the necessary travel documents I needed. The entire process was stress-free.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">Doe Roy</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I’ve tried a few travel websites, but this one had the best customer support. I had an issue with a hotel booking, and they resolved it quickly and professionally. Really impressed with their service!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I’ve never been one for planning, but the site’s user-friendly interface guided me through the whole process. I found some off-the-beaten-path destinations that I wouldn’t have considered. It felt like I had a personal travel assistant.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        The website helped me organize a group trip for eight people. Coordinating flights, hotel rooms, and activities was a breeze. Everyone was happy with the options we found, and we even got some group discounts
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">Doe Roy</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
    );
  
};
export default Testimonials;