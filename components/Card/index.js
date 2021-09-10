import { useEffect, useState } from "react";


// core components
function Card({data}) {
  return (<>
            <div className="custom-card mr-1 ml-1 mt-1 pt-2 pb-2">
                <div className="picture">
                    <img 
                        className="img-fluid"
                        onError={e => { e.currentTarget.src = 'https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg'; }}
                        src={data.imageUrl} 
                        alt="Avatar"
                    />
                </div>
                <div className="team-content">
                    <h3 className="name">{data.firstName} {data.lastName} | {data.gender.toLowerCase()==='male'?<i className="fas fa-mars fa-lg" style={{color:'cyan', }}></i>:<i className="fas fa-venus fa-lg" style={{color:'pink'}}></i>}</h3>
                    <span>
                        {data.country}
                    </span>
                    <br/>
                    <br/>
                    <small style={{fontStyle: 'italic'}}>
                        <b> Favorite Subject: </b>
                    </small>
                    <br/>
                    <span >
                        {data.favoriteSubject===null?'--':data.favoriteSubject}
                    </span>
                </div>
            </div>
      </>
  );
}

export default Card;