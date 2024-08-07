"use client"
import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        window.location.href = "/";
    }, [])

    return (
        <></>
    )
}
export default NotFound