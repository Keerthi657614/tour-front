const calculateAvgRating = (reviews) => {
  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const avgRating = totalReviews === 0 ? 0 : (totalRating / totalReviews).toFixed(1);

  return { totalRating, avgRating };
};

export default calculateAvgRating;
