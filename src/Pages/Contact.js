import "./Contact.css"
import axios from "axios"
import {useState} from 'react'
export const Contact = () => {

    const formId = "tGnc1WQr"

    const formSparkUrl = `https://submit-form.com/${formId}`

    const initialFormState = {
        email: '',
        name: '',
        message: ''
    }

    const [formState, setFormState] = useState(initialFormState);

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();



    const updateFormControl = (event) => {
        const {id, value} = event.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    }

    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);

    }

    const postSubmission = async () => {

        try{
            const result = await axios.post(formSparkUrl, formState)
            console.log(result)
            setMessage({
                fail: "success",
                text: 'Thank you for your message'
            })
        } catch (error) {
            console.log(error);
            setMessage({
                fail: "fail",
                text: 'Sorry there was a problem, please try again'
            })
        }
    }
    return(
        <section className="contact">
            <a id="contact">Contact</a>
            <form className="form" onSubmit={submitForm}>
                <div className="row-1">
                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={updateFormControl}/>
                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={updateFormControl}/>
                </div>
                <div className="row-2">
                    <textarea className="form-control" id="message" placeholder="Message" onChange={updateFormControl}/>
                    <button className="submit-button" disabled={submitting}><span>Submit </span></button>
                    {message && (
                    <div className="message-container" id={message.fail}>
                        {message.text}
                    </div>
                    )}
                </div>
            </form>
        </section>
    );
}