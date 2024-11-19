import { useEffect, useState } from "react";
import { UserService } from "../../services/userService";
import styled from "styled-components";
import { CircularProgress } from "../../components/custom";

export default function DataByClasses() {
  const [isLoading, setIsLoading] = useState(true);
  const [kg1, setKg1] = useState("");
  const [kg1Male, setKg1Male] = useState("");
  const [kg1Female, setKg1Female] = useState("");
  const [kg2, setKg2] = useState("");
  const [kg2Male, setKg2Male] = useState("");
  const [kg2Female, setKg2Female] = useState("");
  const [nur1, setNur1] = useState("");
  const [nur1Male, setNur1Male] = useState("");
  const [nur1Female, setNur1Female] = useState("");
  const [nur2, setNur2] = useState("");
  const [nur2Male, setNur2Male] = useState("");
  const [nur2Female, setNur2Female] = useState("");
  const [basic1, setBasic1] = useState("");
  const [basic1Male, setBasic1Male] = useState("");
  const [basic1Female, setBasic1Female] = useState("");
  const [basic2, setBasic2] = useState("");
  const [basic2Male, setBasic2Male] = useState("");
  const [basic2Female, setBasic2Female] = useState("");
  const [basic3, setBasic3] = useState("");
  const [basic3Male, setBasic3Male] = useState("");
  const [basic3Female, setBasic3Female] = useState("");
  const [basic4, setBasic4] = useState("");
  const [basic4Male, setBasic4Male] = useState("");
  const [basic4Female, setBasic4Female] = useState("");
  const [basic5, setBasic5] = useState("");
  const [basic5Male, setBasic5Male] = useState("");
  const [basic5Female, setBasic5Female] = useState("");
  const [basic6, setBasic6] = useState("");
  const [basic6Male, setBasic6Male] = useState("");
  const [basic6Female, setBasic6Female] = useState("");
  const [js1, setJs1] = useState("");
  const [js1Male, setJs1Male] = useState("");
  const [js1Female, setJs1Female] = useState("");
  const [js2, setJs2] = useState("");
  const [js2Male, setJs2Male] = useState("");
  const [js2Female, setJs2Female] = useState("");
  const [js3, setJs3] = useState("");
  const [js3Male, setJs3Male] = useState("");
  const [js3Female, setJs3Female] = useState("");
  const [ss1, setSs1] = useState("");
  const [ss1Male, setSs1Male] = useState("");
  const [ss1Female, setSs1Female] = useState("");
  const [ss2, setSs2] = useState("");
  const [ss2Male, setSs2Male] = useState("");
  const [ss2Female, setSs2Female] = useState("");
  const [ss3, setSs3] = useState("");
  const [ss3Female, setSs3Female] = useState("");
  const [ss3Male, setSs3Male] = useState("");
  const [students, setStudents] = useState("");

  async function getAllStudents() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        status: "active"
      });
      const { list } = results.data;
      setStudents(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  async function getKg1Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGKGC_001",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setKg1Female(females?.length);
     setKg1Male(males?.length)
      setKg1(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  async function getKg2Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGKGC_002",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setKg2Female(females?.length);
      setKg2Male(males?.length)
      setKg2(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  async function getNur1Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGNSC_001",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setNur1Female(females?.length);
      setNur1Male(males?.length)
      setNur1(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }
  //nursery 2
  async function getNur2Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGNSC_002",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setNur2Female(females?.length);
      setNur2Male(males?.length)
      setNur2(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //basic 1
  async function getBasic1Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGBSC_001",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setBasic1Female(females?.length);
      setBasic1Male(males?.length)
      setBasic1(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //basic 2
  async function getBasic2Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGBSC_002",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setBasic2Female(females?.length);
      setBasic2Male(males?.length)
      setBasic2(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //basic 3
  async function getBasic3Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGBSC_003",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setBasic3Female(females?.length);
      setBasic3Male(males?.length)
      setBasic3(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //basic 4
  async function getBasic4Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGBSC_004",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setBasic4Female(females?.length);
      setBasic4Male(males?.length)
      setBasic4(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //basic 5
  async function getBasic5Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGBSC_005",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setBasic5Female(females?.length);
      setBasic5Male(males?.length)
      setBasic5(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //basic 6
  async function getBasic6Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGBSC_006",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setBasic6Female(females?.length);
      setBasic6Male(males?.length)
      setBasic6(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //js 1
  async function getJs1Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGJSC_001",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setJs1Female(females?.length);
      setJs1Male(males?.length)
      setJs1(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //js 2
  async function getJs2Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGJSC_002",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setJs2Female(females?.length);
      setJs2Male(males?.length)
      setJs2(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //js 3
  async function getJs3Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGJSC_003",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setJs3Female(females?.length);
     setJs3Male(males?.length)
      setJs3(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }
  //ss 1
  async function getSs1Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGSSC_001",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setSs1Female(females?.length);
      setSs1Male(males?.length)
      setSs1(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }
  //ss 2
  async function getSs2Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGSSC_002",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setSs2Female(females?.length);
      setSs2Male(males?.length)
      setSs2(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  //ss 3
  async function getSs3Details() {
    try {
      const results = await UserService.findUsers({
        role: "student",
        limit: 500,
        currentClass: "FGSSC_003",
        status: "active"
      });
      const { list } = results.data;
      const females = list.filter((female) => female.gender === "female");
      const males = list.filter((male) => male.gender === "male");
      setSs3Female(females?.length);
      setSs3Male(males?.length)
      setSs3(results.data.total);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllStudents()
    getBasic1Details();
    getBasic2Details();
    getBasic3Details();
    getBasic4Details();
    getBasic6Details();
    getBasic5Details();
    getJs1Details();
    getJs2Details();
    getJs3Details();
    getSs1Details();
    getSs2Details();
    getSs3Details();
    getKg1Details();
    getKg2Details();
    getNur1Details();
    getNur2Details();
    setIsLoading(false);
  }, []);

  //class details data to be mapped.
  const ClassData = [
    {
      name: "KG 1",
      code: "FGKGC_001",
      id: "001",
      total: kg1,
      female: kg1Female,
      male: kg1Male,
    },
    {
      name: "KG 2",
      code: "FGKGC_002",
      id: "002",
      total: kg2,
      female: kg2Female,
      male: kg2Male,
    },
    //nursery classes
    {
      name: "NUSERY 1",
      code: "FGNSC_001",
      id: "003",
      total: nur1,
      female: nur1Female,
      male: nur1Male,
    },
    {
      name: "NURSERY 2",
      code: "FGNSC_002",
      id: "004",
      total: nur2,
      female: nur2Female,
      male: nur2Male,
    },
    //basic classes
    {
      name: "BASIC 1",
      code: "FGBSC_001",
      id: "005",
      total: basic1,
      female: basic1Female,
      male: basic1Male,
    },
    {
      name: "BASIC 2",
      code: "FGBSC_002",
      id: "006",
      total: basic2,
      female: basic2Female,
      male: basic2Male,
    },
    {
      name: "BASIC 3",
      code: "FGBSC_003",
      id: "007",
      total: basic3,
      female: basic3Female,
      male: basic3Male,
    },
    {
      name: "BASIC 4",
      code: "FGBSC_004",
      id: "008",
      total: basic4,
      female: basic4Female,
      male: basic4Male,
    },
    {
      name: "BASIC 5",
      code: "FGBSC_005",
      id: "009",
      total: basic5,
      female: "",
      female: basic5Female,
      male: basic5Male,
    },
    {
      name: "BASIC 6",
      code: "FGBSC_006",
      id: "010",
      total: basic6,
      female: basic6Female,
      male: basic6Male,
    },
    {
      name: "JSS 1",
      code: "FGJSC_001",
      id: "011",
      total: js1,
      female: js1Female,
      male: js1Male,
    },
    {
      name: "JSS 2",
      code: "FGJSC_002",
      id: "012",
      total: js2,
      female: js2Female,
      male: js2Male,
    },
    {
      name: "JSS 3",
      code: "FGJSC_003",
      id: "013",
      total: js3,
      female: js3Female,
      male: js3Male,
    },
    {
      name: "SSS 1",
      code: "FGSSC_001",
      id: "014",
      total: ss1,
      female: ss1Female,
      male: ss1Male,
    },
    {
      name: "SSS 2",
      code: "FGSSC_002",
      id: "015",
      total: ss2,
      female: ss2Female,
      male: ss2Male,
    },
    {
      name: "SSS 3",
      code: "FGSSC_003",
      id: "016",
      total: ss3,
      female: ss3Female,
      male: ss3Male,
    },
  ];

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Container className="py-5">
          <div className="p-3">
            <h4>Class Data</h4>
            <p>students population by class.</p>
          </div>
          <div className="mt-5 d-flex flex-column bottom-div px-3 py-4">
            <div className="d-flex flex-column">
              {/* <p ><span>{applications?.length}</span> people have purchased the admission form.</p> */}
              <p className="text-muted">
                The school has a total of <span> {ClassData.length}</span>  classes and a total of <span>{students}</span> active students. Check population details in the table below.
              </p>
            </div>
            <div className="table-div mt-3">
              <table className="table table-bordered">
                <thead>
                  <th>No.</th>
                  <th>Class</th>
                  <th>Class Code</th>
                  <th>No. of Students </th>
                  <th>No. of Female Students </th>
                  <th>No. of Male Students </th>
                </thead>
                <tbody>
                  {ClassData.map((classDatum, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{classDatum?.name}</td>
                      <td>{classDatum?.code}</td>
                      <td>{classDatum?.total}</td>
                      <td>{classDatum?.female}</td>
                      <td>{classDatum?.male}</td>
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
  th {
    font-weight: 500;
    font-size: 15px;
    padding: 8px;
    text-align: center;
  }
  td {
    font-size: 14px;
    padding: 5px;
  }
  tbody,
  thead {
    background-color: #f1f1f1 !important;
  }
  .bottom-div {
    background-color: white;
    p {
      margin: 0;
      font-size: 14px;
    }
    span {
      color: blue;
      font-weight: 600;
    }
  }
  .table-div {
    overflow-x: auto;
  }
  .table {
    width: 1005px;
  }
`;
