import "./Videotrans.css"
import ReactPlayer  from "react-player";

function Videotrans () {
    const source = "https://videos.pexels.com/video-files/15623347/15623347-uhd_3840_2160_25fps.mp4"

    return(
        <div className="Contenairtransvideo">
        
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

export default Videotrans;