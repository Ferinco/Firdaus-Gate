import styled from "styled-components";
export default function Menubar() {
  return (
    <MENUBAR>
      <div className="wrapper">
        <div className="menu">
            <div className="tab">
                <div className="number">
                    <h6>30</h6>
                    <p>Active Subjects</p>
                </div>
                <div className="image"></div>
            </div>
            <div className="tab">
                <div className="number">
                    <h6>30</h6>
                    <p>Active Subjects</p>
                </div>
                <div className="image"></div>
            </div>
            <div className="tab">
                <div className="number">
                    <h6>30</h6>
                    <p>Active Subjects</p>
                </div>
                <div className="image"></div>
            </div>
        </div>
        <div className="calendar">
<div className="sub">
    <h2>Check your current and upcoming activties</h2>
    <button>view calendar</button>
</div>
<div className="sub">
    <p>view school calendar to keep up with activities and planned terms/ sessions schedules.</p>
    <div className="image">
        {/* <img src="./images/calendar-image.png"></img> */}
    </div>
</div>
        </div>
      </div>
    </MENUBAR>
  );
}
const MENUBAR = styled.div`
width: 80%;
height: 100%;
.wrapper{
    padding: 50px;display: flex;
    padding-right: 70px !important;
    flex-direction: column;
    gap: 20px;
    .menu{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        gap: 20px;
        .tab{
            background-color: blue;
            border-radius: 10px;
            height: 100px;
            display: flex;
            flex-direction: row;
            .number{
                display: flex;
                flex-direction: column;
            }
        }

    }
    .calendar{
        height: 300px;
        width: 100%;
        display: flex;
        gap:20px;
        border-radius: 10px;
        /* background-color: blue; */
        padding: 50px;
        background-image: url(/images/backgrounds/calendar-background.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        justify-content: center;
        button{
            border: 0;
            background-color: blue;
            border-radius: 30px;
            color: white;padding:20px 0;
            width: 50%;

        }
        .sub{
            display: flex;
            flex-direction: column;
            gap: 10px;
            .image{
                justify-content: right;
                width: 200px;
                height: 200px;
                img{
                    object-fit: cover;
                    display: block;
                    width:100%;
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
    .wrapper{
        padding: 20px;
    padding-right: 20px !important;
    }
}
`;