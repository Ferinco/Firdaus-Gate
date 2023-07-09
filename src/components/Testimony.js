export default function Testimony(props) {
    return (
        <div className="testimony">
<div className="testimony-image">
    <img src={props.image}/>
</div>
<div className="testimony-text">
    <h5>{props.name}</h5>
    <h6>{props.about}</h6>
    <p>{props.texts}</p>
</div>
        </div>
    );
  }