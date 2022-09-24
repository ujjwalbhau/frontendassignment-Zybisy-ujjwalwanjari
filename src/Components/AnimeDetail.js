import React from 'react'

export const AnimeDetail = (props) => {
    const{title,rank,score,polularity}=props.animeDetail;

  return (
    <div>
        <div className='anime-content'>
            
            <img src={props.animeDetail.images.jpg.large_image_url} alt="" /><br/>
            <h3>{title}</h3><br />
            <div className='info'>
                <h3>#Rank:{rank}</h3>
                <h3>#Score:{score}</h3>
                <h3>#Popularity:{polularity}</h3>
            </div>
        </div>
    </div>
  )
}
