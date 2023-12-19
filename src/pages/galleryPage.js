import { useEffect } from "react";
import styled from "styled-components";
import ContactUs from "../components/landing/contactSection";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Excursions = [
    {
      photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391872/Firdaus/IMG-20171129-WA0070_h3kkjj.jpg",
    },
    {
      photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391870/Firdaus/IMG_20211209_131046_763_glz47i.jpg",
    },
    {
      photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391869/Firdaus/IMG-20171129-WA0057_mulaaf.jpg",
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391868/Firdaus/IMG-20171129-WA0073_tcs8ye.jpg"
      },
      {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391867/Firdaus/IMG-20171130-WA0015_leadka.jpg"
      },
  ];
  const Sports = [
    {
        photo:"https://res.cloudinary.com/duvwweuhj/image/upload/v1700698090/Firdaus/Screenshot_20220823-083631_1_pqmhtr.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698717/Firdaus/IMG-20230901-WA0009_1_h32p6p.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698087/Firdaus/Screenshot_20220823-083433_2_poesu0.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698083/Firdaus/Screenshot_20220822-213202_2_cmq2wf.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698094/Firdaus/Screenshot_20220823-084328_1_rknjre.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698093/Firdaus/Screenshot_20220823-083706_1_we5dio.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391862/Firdaus/Screenshot_20220823-084349_1_xa7akx.jpg"
    },
];
  const Labs = [
      {
          photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698724/Firdaus/IMG-20230901-WA0014_jur3yh.jpg"
      },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1702391865/Firdaus/Screenshot_20220823-083504_1_v4bxau.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698086/Firdaus/Screenshot_20220823-083433_1_cne8do.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698096/Firdaus/Screenshot_20220823-084431_1_bv3z3s.jpg"
    },
];
  const Classes = [
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698723/Firdaus/IMG-20230901-WA0013_esps5y.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698720/Firdaus/IMG-20230901-WA0011_weays0.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0004_1_pc92lu.jpg"
    },
    {
        photo: "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698083/Firdaus/Screenshot_20220822-213202_1_jceeny.jpg"
    },
];

  return (
  <Container>
    <div className="container py-5 d-flex flex-column gap-5">
  <div>
    <div><h2>Excursions</h2></div>
    <div className="d-flex flex-row flex-wrap gap-3">
    {
        Excursions.map((excursion)=>(
            <div className="image">
                <img src={excursion.photo}/>
            </div>
        ))
    }
    </div>
  </div>
  <div>
    <div><h2>Laboratories</h2></div>
    <div className="d-flex flex-row flex-wrap gap-3">
    {
        Labs.map((lab)=>(
            <div className="image">
                <img src={lab.photo}/>
            </div>
        ))
    }
    </div>
  </div>
  <div>
    <div><h2>Sports and Recreation</h2></div>
    <div className="d-flex flex-row flex-wrap gap-3">
    {
        Sports.map((sport)=>(
            <div className="image">
                <img src={sport.photo}/>
            </div>
        ))
    }
    </div>
  </div>
  <div>
    <div><h2>Classrooms and Facilities</h2></div>
    <div className="d-flex flex-row flex-wrap gap-3">
    {
        Classes.map((classroom)=>(
            <div className="image">
                <img src={classroom.photo}/>
            </div>
        ))
    }
    </div>
  </div>
  </div>
  <ContactUs/>
  </Container>
  )
  
}
const Container = styled.div`
  width: 100vw;
  .image{
width: 300px;
height: 200px;
overflow: hidden;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
img{
width: 100%;
height: 100%;
display: block;
object-fit: cover;
}
  }
`;
