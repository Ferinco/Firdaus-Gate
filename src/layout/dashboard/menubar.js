import styled from "styled-components";
export default function Menubar() {
  return (
    <MENUBAR>
      <div className="wrapper">
        <div className="topMenu">
          <div className="tab">
            <div className="number">
              <h2>30</h2>
              <p>Active Subjects</p>
            </div>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
          <div className="tab">
            <div className="number">
              <h2>30</h2>
              <p>Subjects Offered</p>
            </div>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
          <div className="tab">
            <div className="number">
              <h2>30</h2>
              <p>Active Subjects</p>
            </div>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
        </div>
        <div className="calendar">
          <div className="sub">
            <h2>Check your current and upcoming activties</h2>
            <button>view calendar</button>
          </div>
          <div className="sub">
            <p>
              view school calendar to keep up with activities and planned terms/
              sessions schedules.
            </p>
            <div className="image">
              {/* <img src="./images/calendar-image.png"></img> */}
            </div>
          </div>
        </div>
        <div className="bottomMenu">
          <div className="tab">
            <h5>Parents</h5>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
          <div className="tab">
            <h5>Classmates</h5>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
          <div className="tab">
            <h5>Class teacher info</h5>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
          {/* <div className="tab">
            <h5>subject teachers' info</h5>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
          <div className="tab">
            <h5>projects</h5>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div> */}
          <div className="tab">
            <h5>report an occurence</h5>
            <div className="image">
              <img src="./images/calendar-image.png" />
            </div>
          </div>
        </div>
      </div>
    </MENUBAR>
  );
}
const MENUBAR = styled.div`
  width: 100%;
  height: 100%;
  .wrapper {
    padding: 50px;
    display: flex;
    padding-right: 70px !important;
    flex-direction: column;
    gap: 20px;
    .topMenu {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      gap: 20px;
      .tab {
        background-color: blue;
        border-radius: 10px;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;

        .number {
          display: flex;
          flex-direction: column;
          color: white;
        }
        .image {
          width: 70px;
          height: 70px;
          /* margin: auto; */
          img {
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .calendar {
      height: 300px;
      width: 100%;
      display: flex;
      gap: 20px;
      border-radius: 10px;
      /* background-color: blue; */
      padding: 50px;
      background-image: url(/images/backgrounds/calendar-background.jpg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: center;
      button {
        border: 0;
        background-color: blue;
        border-radius: 30px;
        color: white;
        padding: 10px 0;
        width: 50%;
        margin-top: 20px;
      }
      .sub {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .image {
          justify-content: right;
          width: 200px;
          height: 200px;
          img {
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .bottomMenu {
      display: flex;
      flex-direction: row;
    gap: 10px;
      width: 100%;
      /* overflow-x: scroll; */

      flex-wrap: nowrap;
      .tab {
        text-align: center;
        padding: 10px 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: white;
        height: 200px;
        width: 200px !important;
        background-color: blue;
        .image {
          width: 100px;
          height: 100px;
          img {
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    display: none !important;
    border: 1px solid red;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    .wrapper {
      padding: 20px;
      padding-right: 20px !important;
    }
  }
`;
