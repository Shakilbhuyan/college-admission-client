import { useEffect, useState } from "react"

export const useData = () =>{
    const [colleges, setColleges] = useState([])
    useEffect(()=>{
        fetch('https://college-admission-server-shakilbhuyan.vercel.app/allcollege')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])

    return [colleges]
}