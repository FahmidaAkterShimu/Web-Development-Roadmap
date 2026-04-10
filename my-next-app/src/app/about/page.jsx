import Image from 'next/image';
import React from 'react';
import cover from '../../assets/images/cover.jpg'

const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            
            <Image width="500" height="500" src='https://i.ibb.co.com/76Yt4VX/Babar-Azam.png' alt=''>

            </Image>

            <Image width="500" height="500" src="https://plus.unsplash.com/premium_photo-1774271492663-a7d50adbed56" alt=""></Image>

            <Image width="500" height="500" src='/cover.jpg' alt="cover pic"></Image>

            <Image wisth="300" height="500" src={cover} alt="same img"></Image>
        </div>
    );
};

export default AboutPage;