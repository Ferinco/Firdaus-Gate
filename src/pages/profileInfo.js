import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "../components/custom";
import { useEffect, useState } from "react";
import { fetchUser } from "../redux/slices/users";
export default function ProfileInfo(){
    const { identity } = useParams();
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUser({role: "student", id: identity}));
      }, []);
    console.log(user)
    return(
<div>
{isLoading ? <CircularProgress /> : ""}
<>
{/* {user.firstName} */}
</>
</div>
    )
}