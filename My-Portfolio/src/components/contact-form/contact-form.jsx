import "./contact-form.scss";
import { useState, useEffect } from "react";
import { AlertProvider, useAlert } from "../../context/alert-context";

function ContactForm() {
    const { showSuccess } = useAlert();
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem("contactFormData");
        return savedData
            ? JSON.parse(savedData)
            : {
                  firstname: "",
                  email: "",
                  enquiryTypes: [],
                  comment: "",
              };
    });

    useEffect(() => {
        localStorage.setItem("contactFormData", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "enquiryTypes") {
            const updatedFields = checked
                ? [...formData.enquiryTypes, value]
                : formData.enquiryTypes.filter((f) => f !== value);
            setFormData({ ...formData, enquiryTypes: updatedFields });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        showSuccess(`${formData.firstname}! your response has been submitted, check out the console.`);
        setFormData({ firstname: "", email: "", enquiryTypes: [], comment: "" });
    };

    const enquiryTypes = [
        "UI/UX design",
        "Website",
        "Consultancy",
    ];

    return (
        <section className="contact-form-wrapper" id="contact">
            <div className="contactme-container">
                <div className="contactme-head">
                    <h2>
                        <span>CONTACT</span> ME
                    </h2>
                    <p>Every project starts with an idea</p>
                </div>
                <a href="mailto:main.gulshan2003@gmail.com">main.gulshan2003@gmail.com</a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-group enquiry-for">
                        <label htmlFor="enquiry">Enquiry for</label>
                        <div id="enquiry" className="checkbox-container">
                            {enquiryTypes.map((type) => (
                                <label key={type} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="enquiryTypes"
                                        value={type}
                                        checked={formData.enquiryTypes.includes(type)}
                                        onChange={handleChange}
                                        aria-checked={formData.enquiryTypes.includes(type)}
                                    />
                                    <span
                                        className={`option-spans ${
                                            formData.enquiryTypes.includes(type)
                                                ? "selected"
                                                : "deselected"
                                        }`}
                                    >
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Name</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                            placeholder="Name"
                            aria-required="true"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                            aria-required="true"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Message</label>
                        <textarea
                            name="comment"
                            id="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            placeholder="Your message"
                            aria-required="false"
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </section>
    );
}

export default ContactForm;