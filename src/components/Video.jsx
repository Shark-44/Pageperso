import "./Video.css"
import ReactPlayer  from "react-player";



function Video() {
 const source = "https://www.youtube.com/watch?v=yqra9ptsUhU"
    
    return(
        <div className="Contenairvideo">
        
        <ReactPlayer
          className='react-player'
          url={source}
          width='100%'
          height= '100%'
          playing= 'true'
          muted= 'true'
          loop= 'true'
        />
        
      </div>
    );
  }
export  default Video