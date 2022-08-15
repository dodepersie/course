import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import Loaders from "../Utilities/loaders"
import Modalinternal from "../Utilities/Modalinternal"
import Axios from 'axios'

const PostsAPI = () => {

    const [postsDatas, setPostsDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        let isCanceled = false
        if(isCanceled === false) {
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
            }).then((result) => setPostsDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        //cleanup render
        return () => { isCanceled = true }
    }, [limit])

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
    }

    if (loading) return <Loaders />

    return (
        <React.Fragment>
            <div class='d-flex flex-column justify-content-start align-items-start'>
                {postsDatas.map((data, i) => {
                return (
                    <React.Fragment key={i}>
                        <Card style={{ width: '22rem', border: 'none' }}>
                            <Card.Body>
                                <Modalinternal activator={({ setShow }) => (
                                    <button className="btn btn-outline-primary text-truncate w-100" type="button" onClick={() => setShow(true)}>
                                    {data.title}
                                    </button>
                                    )}>
                                <h1>
                                Post ID: {data.id}
                                </h1>
                                <hr />
                                <p>
                                    <strong>Title</strong>: {data.title}<br /><br />
                                    <strong>Description</strong>: {data.body}
                                    {/* <strong>Posted by</strong>: {data.userId} */}
                                </p>
                                </Modalinternal>
                            </Card.Body>

                        </Card>
                    </React.Fragment>
                    )
                })}
                <div className="mt-2 mx-3">
                    <button className="btn btn-primary me-2" onClick={() => handleLimit('+')}>Tambah Post</button>
                    {limit >1 &&
                    <button className="btn btn-danger" onClick={() => handleLimit('-')}>Hapus Post</button>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostsAPI