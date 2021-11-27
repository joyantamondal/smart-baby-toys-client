import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ClientReviews from '../ClientReviews/ClientReviews';
import ContactUs from '../ContactUs/ContactUs';
import ImgSlider from '../ImgSlider/ImgSlider';
import OurCollections from '../OurCollections/OurCollections';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ImgSlider></ImgSlider>
            <OurCollections></OurCollections>
            <ClientReviews></ClientReviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;