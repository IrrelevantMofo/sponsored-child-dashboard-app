import { useEffect, useState } from "react";


// core components
function Card({data}) {
    const [imgSrc, setImgSrc] = useState(data.imageUrl);

  return (<>
            <div className="custom-card text-gray mr-1 ml-1 mt-1 pt-2 pb-2">
                <div className="picture">
                    <img 
                        className="img-fluid"
                        width='130px'
                        height='auto'
                        onError={()=>{
                            setImgSrc('https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg')
                        }}
                        src={imgSrc.toString()} 
                        alt="Avatar"
                        layout='fill'
                    />
                </div>
                <div className="team-content mt-1">
                    <h3 className="name text-secondary">{data.firstName} {data.lastName} | {data.gender.toLowerCase()==='male'?<i className="fas fa-mars fa-lg text-primary" ></i>:<i className="fas fa-venus fa-lg text-pink"></i>}</h3>
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