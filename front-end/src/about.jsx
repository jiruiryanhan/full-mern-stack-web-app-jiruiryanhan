import { useEffect, useState} from 'react'
import axios from "axios"

const About = () => {
    const [title, setTitle] = useState("")
    const [paragraphs, setParagraph] = useState([])
    const [imageUrl, setImageUrl] = useState('')

    useEffect(()=> {
        axios.get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
        .then(response => {
            setTitle(response.data.title)
            setParagraph(response.data.paragraphs)
            setImageUrl(response.data.imageUrl)
        })
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <img src={imageUrl} width="100" />
            <p>{paragraphs[0]}</p>
            <br />
            <p>{paragraphs[1]}</p>
            <br />
            <p>{paragraphs[2]}</p>
            <br />
        </div>
    )
}

export default About