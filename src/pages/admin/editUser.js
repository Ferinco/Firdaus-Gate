import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/slices/users";
import { CircularProgress } from "../../components/custom";
import { useEffect, useState } from "react";
export const EditStudent = ()=>{
    const {identity} = useParams()
    const dispatch = useDispatch()
    const {user, isLoading} = useSelector((state) => state.users || {})
    console.log(user)
    useEffect(()=>{
        dispatch(editUser({id : identity}))
    }, [identity, dispatch])
return(
    <div>
        {isLoading ? <CircularProgress/> : ""}
hey
    </div>
)
}

export const EditTeacher = ()=>{
    return(
        <div>
hey
        </div>
    )
    }