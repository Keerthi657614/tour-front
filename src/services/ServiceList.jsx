import React from 'react'; 
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const servicesData=[
    {
        imgUrl:weatherImg,
        title:"calculate weather",
        desc:"Plan your trip with accurate weather forecasts",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"provide best guiders to guide and also to make the trip more memorable",
        
    },
    {
        imgUrl:customizationImg,
        title:"customization",
        desc:"to make the trip peaceful experience is important",
    },
]

const ServiceList=()=>{
    return( 
    <>
    {servicesData.map((item,index)=>(
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
   )) }
    </>
);
};
export default ServiceList;