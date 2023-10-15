import { useEffect, useRef, useState } from "react"

const UseRefComponent = () => {
    const titleRef = useRef()
    const [title, setTitle] = useState(null)
    useEffect(() => {
        setTitle(titleRef.current.offsetHeight)
    })
    return (
        <div>
            <h1 ref={titleRef}>Hello useRef</h1>
            <p>{title}</p>
        </div>
    )
}
export default UseRefComponent