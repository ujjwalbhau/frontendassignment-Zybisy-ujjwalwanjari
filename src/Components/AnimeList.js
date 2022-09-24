import React from "react";

const AnimeList = ({ list, setAnimeDetail,animeComponent, handleList }) => {
    const WatchList=animeComponent;
  return (
    <div>
      {list
        ? list.map((anime, index) => {
            return (
              <div className="profile-card" key={index} onClick={()=>setAnimeDetail(anime)} >
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="animeimage"
                />
                <div className="anime-info">
                  <h4>{anime.title}</h4><br/>
                  
                  <h3>Rating{anime.rating}</h3>
                  <button onClick={()=>handleList(anime)} >
                    <WatchList />
                </button>
                </div>
                
              </div>
            );
          })
        : "Error:403// NOT Found"}
    </div>
  );
};

export default AnimeList;
