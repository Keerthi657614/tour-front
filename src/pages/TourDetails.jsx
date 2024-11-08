import React, { useRef, useState, useEffect } from "react";
import axios from "axios"; // Import axios
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from './../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/Booking/Booking";
import Newsletter from '../shared/Newsletter';

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef('');
    const [tourRating, setTourRating] = useState(0);
    const [reviews, setReviews] = useState([]);  // Initial reviews are set to empty array
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tour, setTour] = useState(tourData.find(tour => tour.id === id));
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [avgRating, setAvgRating] = useState(0);
    const [totalRating, setTotalRating] = useState(0);

    const { photo, title, desc, price, address, city, distance, maxGroupSize, reviews: initialReviews } = tour;

    // Set initial reviews and calculate average rating
    useEffect(() => {
        const user = localStorage.getItem("username");
        if (user) {
            setLoggedInUser(user);
        } else {
            console.log("No user found in localStorage.");
        }

        setReviews(initialReviews);
        const { totalRating, avgRating } = calculateAvgRating(initialReviews);
        setTotalRating(totalRating);
        setAvgRating(avgRating);
    }, [id, initialReviews]);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // Submit review to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const reviewText = reviewMsgRef.current.value;

        const newReview = {
            username: loggedInUser || 'Guest',
            rating: tourRating,
            content: reviewText,
            date: new Date().toISOString(), // Use current date for review submission
        };

        // Add new review to the reviews state directly
        setReviews((prevReviews) => {
            const updatedReviews = [...prevReviews, newReview];

            // Recalculate the total and average rating after adding the new review
            const { totalRating, avgRating } = calculateAvgRating(updatedReviews);
            setTotalRating(totalRating);
            setAvgRating(avgRating);

            return updatedReviews;
        });

        // Reset input fields and state
        setTourRating(0);
        reviewMsgRef.current.value = '';
        setIsSubmitting(false);

        // Optionally, you can submit the review to the backend if needed
        // await axios.post(`http://localhost:5000/api/v1/review/${id}`, newReview);
    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt={title} />
                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className="tour__rating d-flex align-items-center gap-1">
                                            <i className="ri-star-s-fill" style={{ 'color': "var(--secondary-color)" }}></i>
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? (
                                                "Not rated"
                                            ) : (
                                                <span>({reviews?.length})</span>
                                            )}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-user-fill"></i>{address}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i className="ri-map-pin-2-line"></i>{city}</span>
                                        <span><i className="ri-money-dollar-circle-line"></i>${price}/per person</span>
                                        <span><i className="ri-map-pin-time-line"></i>{distance} km</span>
                                        <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                {/* Review Section */}
                                <div className="tour__reviews mt-4">
                                    <h4>Reviews({reviews?.length} reviews)</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <span key={rating} onClick={() => setTourRating(rating)}>
                                                    {rating} <i className="ri-star-s-fill"></i>
                                                </span>
                                            ))}
                                        </div>
                                        <div className="review__input">
                                            <input
                                                type="text"
                                                ref={reviewMsgRef}
                                                placeholder="Share your thoughts"
                                                required
                                            />
                                            <button
                                                className="btn primary__btn text-white"
                                                type="submit"
                                                disabled={tourRating === 0 || isSubmitting}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>
                                    </Form>

                                    <ListGroup className="user__reviews">
                                        {reviews?.map((review, index) => (
                                            <div key={index} className="review__item">
                                                <img src={avatar} alt="User" />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>{review.username}</h5>
                                                            <p>
                                                                {new Date(review.date).toLocaleDateString('en-US', options)}
                                                            </p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            {review.rating}<i className="ri-star-s-fill"></i>
                                                        </span>
                                                    </div>
                                                    <h6>{review.content}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>

                        <Col lg='4'>
                            <Booking tour={tour} avgRating={avgRating} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default TourDetails;
