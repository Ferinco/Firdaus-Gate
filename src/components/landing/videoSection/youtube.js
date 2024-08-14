import YouTube from "react-youtube";
import styled from "styled-components";
export default function YoutubeDiv(){

    const videoId = 'zxf5UOdN0HA'
    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return(
        <Div>
    <YouTube videoId={videoId} opts={opts}/>
        </Div>
    )
}
const Div = styled.div`
border-radius: 10px;
overflow: hidden !important;
height: 600px;
`