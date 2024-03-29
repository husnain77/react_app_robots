import React from 'react';

const Card = ({email, id, name}) => {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>                     
        <img alt='robots' src={`https://robohash.org/${id}?200x200.png`}/>
        <div>
            <h2>{name}</h2> 
            <p>{email}</p>
        </div>
      </div>
    );
    }

    export default Card;