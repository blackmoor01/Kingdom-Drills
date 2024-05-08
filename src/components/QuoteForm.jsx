import React, {useState} from 'react';

const QuoteForm = () => {

    // Define state variables for input field values
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState('');

    // Handle input changes and update state variables
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleDetailsChange = (e) => setDetails(e.target.value);

    return (
        <div name="mc_embed_shell" className="bg-gray-200 py-8 px-4 md:py-12 md:px-24">
            <div id="mc_embed_signup" className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">

                <form
                    action="https://gmail.us22.list-manage.com/subscribe/post?u=1375579b6f81dc92d32bc22c3&amp;id=3a511ca9de&amp;f_id=004ecae1f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                    className="validate" target="_self" noValidate="">

                    <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>

                    <div className="indicates-required text-sm mb-4">
                        <span className="text-[#ff0000]">*</span>
                        indicates required
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-EMAIL" className="block text-sm font-medium mb-1">Email Address <span
                            className="text-[#ff0000]">*</span></label>
                        <input type="email" name="EMAIL"
                               className="required email w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4682B4]"
                               id="mce-EMAIL" required={true} placeholder={"Enter your email"} value={email} onChange={handleEmailChange}/>
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-FNAME" className="block text-sm font-medium mb-1">First Name <span
                            className="text-[#ff0000]">*</span></label>
                        <input type="text" name="FNAME"
                               className="required text w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4682B4]"
                               id="mce-FNAME" required={true} placeholder={"Enter your first name"} value={firstName} onChange={handleFirstNameChange}/>
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-LNAME" className="block text-sm mb-1 font-medium">Last Name <span
                            className="text-[#ff0000]">*</span></label>
                        <input type="text" name="LNAME"
                               className="required text w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4682B4]"
                               id="mce-LNAME" required={true} placeholder={"Enter your last name"} value={lastName} onChange={handleLastNameChange}/>
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-PHONE" className="block text-sm mb-1 font-medium">Phone Number</label>
                        <input type="text" name="PHONE"
                               className="text w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4682B4]"
                               id="mce-PHONE" placeholder={"Enter your phone number"} value={phone} onChange={handlePhoneChange}/>
                    </div>

                    <div className="mc-field-group mb-4">
                        <label htmlFor="mce-DETAILS" className="block text-sm mb-1 font-medium">Details</label>
                        <textarea name="DETAILS"
                                  className="text w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#4682B4] resize-none"
                                  id="mce-DETAILS" placeholder={"Enter your quote"} rows={10} value={details} onChange={handleDetailsChange}></textarea>
                    </div>


                    <div id="mce-responses" className="clear foot mb-4">
                        <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                        <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                    </div>

                    <div aria-hidden="true" className="hidden">
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                        <input type="text" name="b_1375579b6f81dc92d32bc22c3_3a511ca9de" tabIndex="-1" value=""/>
                    </div>

                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe"
                                   className="button bg-[#4682B4] text-white px-6 py-3 rounded-md hover:bg-gray-800 shadow-2xl"
                                   value="Submit Your Quote"/>
                            <p className="text-sm text-center mt-4">
                                <a href="http://eepurl.com/iPwbO6"
                                   title="Mailchimp - email marketing made easy and fun">
                                    <img className="refferal_badge"
                                         src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                         alt="Intuit Mailchimp"/>
                                </a>
                            </p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default QuoteForm;
