import { useState } from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";


function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telnum, setTelnum] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [contactType, setContactType] = useState('Tel.');
    const [message, setMassage] = useState('');
    const [touched, setTouched] = useState({
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
    })

    const getState = () => {
        return {
            firstname,
            lastname,
            telnum,
            agree,
            contactType,
            message,
            touched
        }
    }

    const validate = (firstname, lastname, telnum, email) => {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }
        if (touched.firstname && firstname.length < 3) {
            errors.firstname = 'First Name should >=3 characters';
        } else if (touched.firstname && firstname.length > 10) {
            errors.firstname = 'First Name should <=10 characters';
        }
        if (touched.lastname && lastname.length < 3) {
            errors.lastname = 'Last Name should >=3 characters';
        } else if (touched.lastname && lastname.length > 10) {
            errors.lastname = 'Last Name should <=10 characters';
        }
        const reg = /^\d+$/;
        console.log('telnum : ', telnum)
        console.log('reg : ', !reg.test(telnum))
        if (touched.telnum && !reg.test(telnum)) {
            errors.telnum = 'Tel. Number should contain only numbers';
        }
        if (touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email should contain a @';
        }
        return errors;
    }

    const handleBlur = (filed) => (evt) => {
        console.log(filed)
        setTouched({
            ...touched,
            [filed]: true
        })
    }

    const handleSubmit = (event) => {
        alert('Crrent State is : ' + JSON.stringify(getState()));
        event.preventDefault();

    }
    const getChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        return value;
    }
    const errors = validate(firstname, lastname, telnum, email);
    return (
        <div className="row row-content">
            <div className="col-12">
                <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9">
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label htmlFor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                            <Input type="text" id="firstname" name="firstname"
                                placeholder="First Name"
                                value={firstname}
                                valid={errors.firstname === ''}
                                invalid={errors.firstname !== ''}
                                onBlur={handleBlur('firstname')}
                                onChange={(event) => setFirstname(getChange(event))} />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Input type="text" id="lastname" name="lastname"
                                placeholder="Last Name"
                                value={lastname}
                                valid={errors.lastname === ''}
                                invalid={errors.lastname !== ''}
                                onBlur={handleBlur('lastname')}
                                onChange={(event) => setLastname(getChange(event))} />
                            <FormFeedback>{errors.lastname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"
                                value={telnum}
                                valid={errors.telnum === ''}
                                invalid={errors.telnum !== ''}
                                onBlur={handleBlur('telnum')}
                                onChange={(event) => setTelnum(getChange(event))} />
                            <FormFeedback>{errors.telnum}</FormFeedback>
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={email}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onBlur={handleBlur('email')}
                                onChange={(event) => setEmail(getChange(event))} />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 6, offset: 2 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={agree}
                                        onChange={(event) => setAgree(getChange(event))} /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{ size: 3, offset: 1 }}>
                            <Input type="select" name="contactType"
                                value={contactType}
                                onChange={(event) => setContactType(getChange(event))}>
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                value={message}
                                onChange={(event) => setMassage(getChange(event))}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>

    )
}

export default Contact;