import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';

class SearchBox extends Component {
    render() {
        return (
            <Consumer>
                {context => (
                    <div className='search-params'>
                        <label htmlFor="location">
                            Location
                            <input
                                id='location'
                                type="Location"
                                //setting default location to Seattle, WA
                                value={context.location}
                                placeholder='Location'
                                onChange={context.handleLocationChange}
                            />
                        </label>
                        <label htmlFor="animal">
                            Animal
                            <select
                                id='animal'
                                type="Animal"
                                //setting default location to Seattle, WA
                                value={context.animal}
                                placeholder='Location'
                                onChange={context.handleAnimalChange}
                                onBlur={context.handleAnimalChange}
                            >
                                <option />
                                    {
                                        //dynamically creating animal from API for dropdown list
                                        ANIMALS.map(animal => (
                                            <option key={animal} value={animal}>
                                                {animal}
                                            </option>
                                        ))
                                    }
                            </select>
                        </label>
                        <label htmlFor="breed">
                            Breed
                            <select
                                name="breed"
                                id="breed"
                                value={context.breed}
                                onChange={context.handleBreedChange}
                                onBlur={context.handleBreedChange}
                                disabled={!context.breeds.length}
                            >
                                <option />
                                {
                                    context.breeds.map(breed => (
                                        <option key={breed} value={breed}>
                                            {breed}
                                        </option>
                                    ))
                                }
                            </select>
                        </label>
                        <button className='search' onSearch={context.getBreeds}>Submit</button>
                    </div>
                )}
            </Consumer>
        )
    }
}

export default SearchBox;