import React, { Component } from 'react'
import defaultbcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'
export default class singleRoom extends Component {

    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultbcg
        }
    }
    static contextType = RoomContext;
    componentDidMount(){

    }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
              <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
          } = room;
        return (
        
        <StyledHero img={images[0]}> <Banner title={`${name} room`}>
            <Link></Link>
            </Banner>
            
            </StyledHero>
        )
    }
}
