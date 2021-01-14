import { Modal, Button, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Navbar'
import "./style.css"
import axios from 'axios'
import axiosInstance from '../../../helpers/axios'
const AdminSkills = () => {
    const [show, setShow] = useState(false);
    const [name, setname] = useState("")
    const [URL, setURL] = useState("")
    const [image, setimage] = useState("")
    const [skill, setskill] = useState(false)
    useEffect(async () => {
        if (URL) {
            const postdata = {
                name,
                image: URL,
                skill
            }
            console.log("postdat ", postdata);
            const resdata = await axiosInstance.post("/skill", postdata)
            setname("")
            setimage("")
        }
    }, [URL])
    const AddSkill = async (e) => {
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
        const res = await axios
            .post("https://api.cloudinary.com/v1_1/haseebasif/image/upload", formdata).then(res => {
                setURL(res.data.url)
                console.log(res);
            })
        console.log({ name, image });
    }
    return (
        <div>
            <AdminNavbar>
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
                                label="Tech Image"
                                required
                                custom
                            />
                            <Form.Check className="my-4"
                            checked={skill}
                            onChange={(e)=>setskill(e.target.checked)}
                                type="switch"
                                id="custom-switch"
                                label="Skill"
                            />
                            <div className="text-center ">

                                <Button
                                    onClick={(e) => AddSkill(e)}
                                    variant="dark" className="btn-block" type="submit">
                                    Add SKill
                            </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
                <div className="btnModal">

                    <button className="btn btn-outline-dark" onClick={(e) => setShow(true)}>
                        Add Skill
                    </button>
                </div>
            </AdminNavbar>
        </div>
    )
}

export default AdminSkills
