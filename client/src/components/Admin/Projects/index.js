import { Modal, Button, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Navbar'
import "./style.css"
import axios from 'axios'
import axiosInstance from '../../../helpers/axios'
import Skills from '../../Skills'
import Tools from '../../Tools'
import { useSelector } from 'react-redux'
const Projects = () => {
    const [show, setShow] = useState(false);
    const [name, setname] = useState("")
    const [URL, setURL] = useState("")
    const [image, setimage] = useState("")
    const [videoLink, setvideoLink] = useState("")
    const [description, setdescription] = useState("")
    const [tech, settech] = useState([])
    const [live, setlive] = useState("")
    const [github, setgithub] = useState("")
    const skills = useSelector(state => state.skills.skills)
    useEffect(async () => {
        if (URL) {
            const postdata = {
                name,
                image,
                videoLink,
                description,
                live,
                tech,
                github
    
            }
            console.log("postdat ", postdata);
            const resdata = await axiosInstance.post("/project", postdata)
            setname("")
            setimage("")
        }
    }, [URL])
    const AddProject = async (e) => {
        e.preventDefault()
        setShow(false)
        const formdata = new FormData();
        formdata.append("file", image)
        formdata.append("upload_preset", "insta-clone")
        formdata.append("cloud_name", "haseebasif")
        const data = {
            "file": image,
            "upload_preset": "insta-clone",
            "cloud_name": "haseebasif"
        }
        const postdata = {
            name,
            image,
            videoLink,
            description,
            live,
            tech,
            github

        }
        // const res = await axios
        //     .post("https://api.cloudinary.com/v1_1/haseebasif/image/upload", formdata).then(res => {
        //         setURL(res.data.url)
        //         console.log(res);
        //     })
        console.log({ postdata });
    }
    const handleChange = (e) => {
        let valuesss = Array.from(e.target.selectedOptions, option => option.value);
        settech(valuesss)
        console.log({ valuesss });
    }
    return (
        <div>
            <AdminNavbar>
                <Skills />
                <Tools />
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Add New Skill
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <Form.Group>
                                <Form.Control
                                    className="my-2"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    size="sm" type="text" placeholder="Tech Name" />
                            </Form.Group>


                            <Form.File
                                onChange={(e) => setimage(e.target.files[0])}
                                size="sm"
                                id="custom-file"
                                label="Project Image"
                                required
                                custom
                            />
                            <Form.Group>
                                <Form.Control
                                    className="my-2"
                                    value={videoLink}
                                    onChange={(e) => setvideoLink(e.target.value)}
                                    size="sm" type="text" placeholder="Video Link" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className="my-2"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                    size="sm" type="text" placeholder="Description" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={tech}
                                    className="selectpicker" as="select" multiple>
                                    {
                                        skills.map(s => <option value={s._id}>{s.name}</option>)
                                    }
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className="my-2"
                                    value={live}
                                    onChange={(e) => setlive(e.target.value)}
                                    size="sm" type="text" placeholder="Live" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className="my-2"
                                    value={github}
                                    onChange={(e) => setgithub(e.target.value)}
                                    size="sm" type="text" placeholder="Github" />
                            </Form.Group>
                          
                            <div className="text-center ">

                                <Button
                                    onClick={(e) => AddProject(e)}
                                    variant="dark" className="btn-block" type="submit">
                                    Add Project
                            </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
                <div className="btnModal">

                    <button className="btn btn-outline-dark" onClick={(e) => setShow(true)}>
                        Add new Project
                    </button>
                </div>
            </AdminNavbar>
        </div>
    )
}

export default Projects
