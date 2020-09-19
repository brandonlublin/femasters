import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        photos: [],
        active: 0
    }
    static getDerivedStateFromProps({ media }) {
        let photos = []
        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
        }

        return { photos };
    }
    handleIndexClick = event => {
        this.setState({
            //+ turns a returned string to a number
            active: +event.target.dataset.index
        })
    }
    render () {
        const { photos, active } = this.state;

        return (
            <div className='carousel'>
                <img src={photos[active].value} alt="primary animal"/>
                <div className='carousel-smaller'>
                    {photos.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            key={photo.value}
                            src={photo.value}
                            alt="animal thumbnail"
                            className={index === active ? 'active' : ''}
                            data-index={index} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;