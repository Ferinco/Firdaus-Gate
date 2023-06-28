import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./card";
import { useEffect } from "react";
export default function News() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="news">
        <div className="wrapper">

       
      <div className="news-header">
        <h5>NEWS</h5>
        <h3>News and Events</h3>
      </div>
      <div className="news-body">
      
    
        <Card
        image="./images/calender.png"
          header="20th March, 2024"
          body="An upcoming event or anything related"
        />
        <Card
        image="./images/calender.png"
          header="20th March, 2024"
          body="An upcoming event or anything related"
        />
        <Card
        image="./images/calender.png"

          header="20th March, 2024"
          body="An upcoming event or anything related"
        />
        <Card
        image="./images/calender.png"

          header="20th March, 2024"
          body="An upcoming event or anything related"
        />
        <Card
        image="./images/calender.png"
          header="20th March, 2024"
          body="An upcoming event or anything related"
        />
      </div>
      <div className="news-button">
        <button>Read More News</button>
      </div>
      </div>
    </div>
  );
}
