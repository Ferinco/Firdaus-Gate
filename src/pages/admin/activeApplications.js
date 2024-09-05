import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { OverlayLoading } from "../../components/OverlayLoading";
import { CircularProgress } from "../../components/custom";
import { PaymentService } from "../../services/paymentService";
import axios from "axios";

//the whole component...
export default function ActiveApplications() {
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState("");

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const results = await axios.get(
          "https://ferrum-sever.onrender.com/api/allpayments"
        );
        setApplications(results.data);
      } catch (error) {
        
      } finally {
        setIsLoading(false);
      }
    };
    checkPayment();
  }, []);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Container className="py-5">
          <div className="p-3">
            <h4>Active Applications</h4>
            <p>view successful applications from outsiders.</p>
          </div>
          <div className="mt-5 d-flex flex-column bottom-div px-3 py-4">
            <div className="d-flex flex-column">
              <p ><span>{applications?.length}</span> people have purchased the admission form.</p>
              <p className="text-muted">A mail has been sent to them upon successful application, you can also mail them to schedule a meeting with them</p>
            </div>
            <div className="table-div mt-3">
              <table className="table table-bordered">
                <thead>
                  <th>No.</th>
                  <th>First Name</th>
                  <th>Surname</th>
                  <th>Gender</th>

                  <th>Phone</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Application</th>
                  <th>Transaction ID</th>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                  <tr>
                        <td>{index + 1}</td>
                        <td>{application?.firstName}</td>
                        <td>{application?.surname}</td>
                        <td>{application?.gender}</td>
                        <td>{application?.parentPhoneNumber}</td>
                        <td>{application?.parentEmailAddress}</td>
                        <td>{application?.presentClass}</td>
                        <td>{application?.classOfInterest}</td>
                        <td>{application?.transaction}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
th{
  font-weight: 500;
  font-size: 15px;
  padding: 8px;
  text-align: center;
}
td{
  font-size: 14px;
  padding: 5px;
}
tbody, thead{
  background-color: #f1f1f1 !important;
}
.bottom-div{
  background-color: white;
  p{
    margin: 0;
    font-size: 14px;
  }
  span{
    color: blue;
    font-weight: 600;
  }
}
.table-div{
  overflow-x: auto;
}
.table{
  width: 1005px;
}

`;
