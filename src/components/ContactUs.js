import React, { useState } from "react";
import * as yup from "yup";
const ContactUs = () => {
  const contactFormSchema = yup.object().shape({
    name: yup.string().min(5).max(15).required(),
    email: yup.string().email().required(),
    ResType: yup.string().required(),
    Phone: yup.number().min(10).max(10).required(),
    Descrption: yup.string().required(),
  });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    restype: "",
    phone: "",
    description: "",
  });
  const [contactDataError, setContactDataError] = useState({
    name: "",
    email: "",
    restype: "",
    phone: "",
    description: "",
  });

  const clearState = () => {
    setContactData({
      name: "",
      email: "",
      restype: "",
      phone: "",
      description: "",
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);
    clearState();
  };
  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setContactData({ ...contactData, [name]: value });

    let genratedErrors = {};
    try {
      contactFormSchema.validateSync(contactData, { abortEarly: false });
    } catch (e) {
      if (e.inner.length > 0) {
        e.inner.forEach((error) => {
          genratedErrors[error.path] = error.message;
        });
      }
    }
    let newContactErrors = {};

    Object.keys(contactDataError).forEach((name) => {
      if (genratedErrors[name]) {
        newContactErrors[name] = genratedErrors[name];
      } else {
        newContactErrors[name] = "";
      }
      setContactDataError({
        ...contactData,
        ...newContactErrors,
      });
    });
  };

  return (
    <form onSubmit={handelSubmit} className="p-7 bg-gray-200">
      <div className="mb-6">
        <label
          for="Name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          value={contactData.name}
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Name..."
          // required
          onChange={handleChange}
        />
        {contactDataError.name && (
          <p className="text-red-700">{contactDataError.name}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Email Id..."
          // required
          value={contactData.email}
          onChange={handleChange}
        />
        {contactDataError.email && (
          <p className="text-red-700">{contactDataError.email}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          for="restype"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select Request Type
        </label>
        <select
          // defaultValue={"Select Request Type"}
          name="restype"
          value={contactData.restype}
          onChange={handleChange}
          id="restype"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled>Select Request Type</option>
          <option>sale</option>
          <option>customer care</option>
          <option>general query</option>
        </select>
        {contactDataError.restype && (
          <p className="text-red-700">{contactDataError.restype}</p>
        )}
      </div>
      <div className="mb-6">
        <div className="relative z-0 w-full mb-6 group">
          <label
            for="floating_phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone number
          </label>
          <input
            type="tel"
            //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            onChange={handleChange}
            id="floating_phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Phone Number (123-456-7890) "
            // required
            value={contactData.phone}
          />
        </div>
        {contactDataError.phone && (
          <p className="text-red-700">{contactDataError.phone}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Description
        </label>
        <textarea
          name="description"
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add a Description"
          value={contactData.description}
          onChange={handleChange}
        ></textarea>
        {contactDataError.description && (
          <p className="text-red-700">{contactDataError.description}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUs;
