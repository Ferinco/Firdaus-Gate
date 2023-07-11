import styled from "styled-components";
import { Icon } from '@iconify/react';
export default function Sidebar() {
  return (
    <SIDEBAR>
      <div className="wrapper">
        <div className="profile">
          <div className="image"></div>
          <div
            className="details"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h6>Surname Firstname</h6>
            <p>class...</p>
          </div>
        </div>
        <div className="options">
          <label htmlFor="home-options"><h6>Home</h6></label>
          <ul id="home-options">
            <li><a href=""><Icon icon="iconamoon:profile-light" color="gray" />Profile</a></li>
            <li><a href=""><Icon icon="carbon:dashboard" color="gray" />Dashboard</a></li>
            <li><a href=""><Icon icon="carbon:result" color="gray" />Results</a></li>
          </ul>
        </div>
        <div className="options">
          <label htmlFor="courses-options"><h6>Courses</h6></label>
          <ul id="courses-options">
            <li><a href=""><Icon icon="ph:student-fill" color="gray" />Courses offereed</a></li>
            <li><a href=""><Icon icon="map:school" color="gray" />Assignments</a></li>
            <li><a href=""><Icon icon="carbon:ibm-cloud-projects" color="gray" />Projects</a></li>
          </ul>
        </div>
        <div className="options">
          <label htmlFor="extra-options"><h6>Extras</h6></label>
          <ul id="extras-options">
            <li><a href=""><Icon icon="solar:bill-list-outline" color="gray" />Bill</a></li>
            <li><a href=""><Icon icon="icomoon-free:lab" color="gray" />School club</a></li>
            <li><a href=""><Icon icon="icons8:news" color="gray" />Newsletters</a></li>
            <li><a href=""><Icon icon="streamline:travel-airport-earth-airplane-travel-plane-trip-airplane-international-adventure-globe-world" color="gray" />Excursions</a></li>
          </ul>
        </div>
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
width: 100%;
background-color: rgb(219, 219, 219);
height: 100%;
position: sticky !important;

.wrapper{
    padding: 20px;
    padding-top: 50px !important;
    /* padding-right: 0 !important; */
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: left;
    .profile{
        display:flex;
        flex-direction: row;
        /* align-items: center; */
        gap: 10px;
        .image{
            width: 30px;
            height: 30px;
            border-radius: 50%;border: 1px solid red;
        }
        .details{
            line-height: 5px;
        }
    }
    .options{
        display: flex;
        flex-direction: column;
        label{
            h6{
                font-weight: 600;
            }
            color: black;

        }
        ul{
            gap:15px;
            padding:0 !important;
            li{
                list-style: none;
             
               
                a{
                    text-decoration: none !important;
                    display: flex;
                    align-items: baseline;
                    gap: 10px;
                    color: grey;
                    &:hover{
                        color: blue !important;
                    }
                }
            }
        }
    }
}
/* @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;

} */
@media screen and (min-width: 601px)and (max-width: 1000px)  {
    width: 100%;
   .wrapper{
    width: 100%;
height: auto;
    flex-direction: row;
    justify-content: space-between;
    .profile{
flex-direction: column;
align-items: center;
    }
   }
}
`;
