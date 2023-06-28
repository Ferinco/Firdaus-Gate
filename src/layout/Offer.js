import Card from "./card";
export default function Offer() {
  return (
    <div className="cover">
        <div className="offers">
      <div className="offers-left">
        <div className="header">
          <h5>WHAT WE OFFER</h5>
          <h3>
            read through to know about some of our world class facilities and
            ammenities
          </h3>
        </div>
      </div>
      <div className="offers-right">
        
        <Card
          image=""
          header="SPACIOUS HOSTELS"
          body="We have spacious and condusive ofr learning hostels to accomodate all kind of pupils and students"
        />
        <Card
          header="STANDBY SCHOOL BUS"
          body="here in Firdaus-gates schools, location is not a problem as we have a standby means of transportation"
          image=""
        />
        <Card
          header="WORLD CLASS LABORATORIES"
          body="We have in structures, top-class laboratories that helps to advance knowledege of art, science and economics"
          image=""
        />
        <Card
          header="SERANE PRAYER MOSQUE"
          image=""
          body="In Firdaus-Gates, knowledge and faith are our top priorities, and we offer a condusive means for prayer practice of faith"
        />
      </div>
    </div>
    </div>
  );
}
