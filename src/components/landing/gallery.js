import styled from "styled-components"
import Marquee from "react-fast-marquee";
export default function Gallery (){
    const marqueImages = ["image1", "image2", "image3", "image4", "image5", "image6","image1", "image2", "image3", "image4", "image5", "image6"];
    return (
        <Container className="py-5">
<div className="header d-flex flex-column justify-content-center align-items-center">
    {/* <h6>Gallery</h6> */}
    <h2>
        View multiple photos that say alot about us and our top notch services
    </h2>
</div>
<div className="d-flex flex-column gap-4 body py-5">

<Marquee direction="left" speed={30}>
    <div className="d-flex flex-row gap-4">
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    </div>
</Marquee>
<Marquee direction="left" speed={60}>
    <div className="d-flex flex-row gap-3">
    <div className="text">sports</div>
    <div className="text">science</div>
    <div className="text">art</div>
    <div className="text">commercial</div>
    <div className="text">debate</div>
    <div className="text">culture</div>
    <div className="text">excursions</div>
    <div className="text">tech</div>
    <div className="text">sports</div>
    <div className="text">science</div>
    <div className="text">art</div>
    <div className="text">commercial</div>
    <div className="text">debate</div>
    <div className="text">culture</div>
    <div className="text">excursions</div>
    <div className="text">tech</div>
    </div>
</Marquee>
<Marquee direction="right" speed={30}>
    <div className="d-flex flex-row gap-4">
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    <div className="image"></div>
    </div>
</Marquee>
</div>

        </Container>
    )
}

const Container = styled.div`
overflow: hidden !important;
background-image: linear-gradient(to right, #00008b, #000000) !important;
color: white;
.image{
    width: 200px;
    height: 200px;
    background-color: purple;
    border-radius: 30px;
}
.text{
    padding: 10px;
    background-color: #ffff;
    color: black;
    font-weight: 700;
}
.body{
    transform: rotate(-3deg);
}
.header{
    h2{
        font-size: 50px;
        font-weight: 900;
        text-align: center;
        max-width: 700px;
    }
}
@media screen and (max-width: 768px){
    .header{
        h2{
            font-size: 36px;
        }
    }
    .image{
    width: 150px;
    height: 150px;
    background-color: purple;
}
}
`