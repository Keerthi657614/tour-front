// // // import React from 'react'; 
// // // import TourCard from '../../shared/TourCard';
// // // import tour from '../../assets/data/tours'; 
// // // import {Col} from 'reactstrap';
// // // const FeaturedTourList=()=>{
// // //     return <>
// // //     {
// // //       tour?.map(tour=>(
// // //         <Col lg='3' className='mb-4' key={tour.id}>
// // //             <TourCard tour={tour}/>
// // //             </Col>
// // //       ))
// // //     }
// // //     </>
// // // }
// // // export default FeaturedTourList;
// // import React from 'react'; 
// // import TourCard from '../../shared/TourCard';
// // import tourData from '../../assets/data/tours'
// // import { Col } from 'reactstrap';
// // const FeaturedTourList=()=>{
// //     return (
// //     <>
// //     {
// //         tourData?.map(tour=>(
// //             <Col lg='3' className='mb-4' key={tour.id}>
// //                 <TourCard tour={tour} />
// //             </Col>
// //         ))
// //     }
// //     </>
// //     );
// // };
// // export default FeaturedTourList;
// import React from 'react'; 
// import TourCard from '../../shared/TourCard';
// import tourData from '../../assets/data/tours'
// import { Col } from 'reactstrap';
// const FeaturedTourList=()=>{
//     return (
//     <>
//     {
//         tourData?.map(tour=>(
//             <Col lg='3' className='mb-4' key={tour.id}>
//                 <TourCard tour={tour} />
//             </Col>
//         ))
//     }
//     </>
//     );
// };
// export default FeaturedTourList;
import React from 'react'; 
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap';
const FeaturedTourList=()=>{
    return (
    <>
    {
        tourData?.map(tour=>(
            <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour} />
            </Col>
        ))
    }
    </>
    );
};
export default FeaturedTourList;