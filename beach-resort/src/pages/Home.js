import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import Service from '../components/Service';
import FeaturedRooms from "../components/FeaturedRooms";
export default function Home() {
    return (
      <>
        <div>
            <Hero hero="defaultHero">


                <Banner title="Luxurious Rooms">

                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>

        </div>
        <Service/> 
        <FeaturedRooms/>
        </>
    )
}
