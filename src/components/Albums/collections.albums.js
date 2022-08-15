import React, { useEffect, useState } from "react"
import Axios from 'axios'
import { Carousel, ButtonGroup } from "react-bootstrap"
import Loaders from "../Utilities/loaders"

const Collection = () => {

    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isCanceled = false
        if(isCanceled === false) {
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        // cleanup render
        return () => { isCanceled = true }
    }, [limit])

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
    }

    if (loading) return <Loaders />

    return (
        <React.Fragment>
            <p>currently showing {limit} {limit > 1 && 'photos'} {limit === 1 && 'photo'}</p>
            <Carousel>
                {/* Carousel Items Start */}
                {datas.map((data, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                            className="d-block w-100"
                            src={data.url}
                            alt="First slide" height={400} width={300}
                            />
                            <Carousel.Caption>
                            <h3>{ data.title }</h3>
                            <p>{ data.url }</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
                {/* Carousel Items End */}
            </Carousel>
            <ButtonGroup className="d-flex justify-content-center align-content-center mt-2">
                <button className="btn btn-outline-primary" onClick={() => handleLimit('+')}>+</button>
                {limit >1 &&
                <button className="btn btn-outline-primary" onClick={() => handleLimit('-')}>-</button>
                }
            </ButtonGroup>
        </React.Fragment>
    )
}

export default Collection