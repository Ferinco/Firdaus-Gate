import { useEffect } from "react";
import { api } from "../../api/axios";
import styled from "styled-components";

export default function Reports(){

    async function getData() {
        try {
          const { data } = await api.get("/reports", {
          });
          console.log(data.data);
        } catch (error) {
          throw new Error("Something went wrong, try again later");
        }
      }
      useEffect(() => {
        (async () => await getData())();
      }, []);
return (
<Container>

</Container>
)
}
const Container = styled.div`
`
