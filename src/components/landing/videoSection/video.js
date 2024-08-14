import styled from "styled-components";
import { Header } from "../../custom/Header";
import { Button } from "../../custom/Button";
import YoutubeDiv from "./youtube";
import { Link } from "react-router-dom";

export default function WatchVideo() {
  return (
    <Div className="px-3 px-md-4 px-lg-5 py-5 d-flex flex-column gap-5 mt-5">
      <div className="header d-flex flex-row justify-content-between">
        <Header left className="w-25 left">
          <h3 className="">A quick Insight of who we are</h3>
        </Header>
        <div className="flex flex-col justify-content-start w-50 right">
          <p>
            At Firdaus-Gate Model Schools, our students and staff provide
            heartfelt insights into what makes our institution a distinguished
            citadel of learning. From the nurturing environment to the quality
            of education, catch the best of these enriching experiences shared
            by our community in this video.
          </p>
          <Button blue>
            <a
              className="react-router-link"
              href="https://www.youtube.com/watch?v=zxf5UOdN0HA&t=13s&pp=ygUkd2VsY29tIHRvIGZpcmRhdXMtZ2F0ZSBtb2RlbCBzY2hvb2xz"
              target="_blank"
            >
              Watch Full Video
            </a>
          </Button>
        </div>
      </div>
      <YoutubeDiv />
    </Div>
  );
}

const Div = styled.div`
  @media screen and (max-width: 1024px) {
    .header {
      flex-direction: column !important;
      .left,
      .right {
        width: 100% !important;
        text-align: center;
      }
    }
  }
  h3 {
    font-weight: 500 !important;
  }
`;
