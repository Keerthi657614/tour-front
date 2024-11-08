import React from 'react'; 
import galleryImages from './galleryImages'; 
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter="1rem">
                {galleryImages.map((item, index) => (
                    <img 
                        src={item} 
                        key={index} 
                        alt={`Gallery image ${index + 1}`}  // Corrected syntax here
                        className="masonry_img"
                        style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '10px',
                            minHeight: '200px',
                            objectFit: 'cover'
                        }} 
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery;
