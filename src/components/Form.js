import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    acc_name: "",
    acc_number: null,
    ifsc: null,
    bank_name: "",
    city: "",
    branch: "",
    relation: "",
    consent: false,
  });

  const [checked, setChecked] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isDisabled, setIsDisabled] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = () => {
    setIsDisabled(true);
    setIsSaved(true);
    if (formData.consent) {
      const currentDate = new Date();
      const options = { year: "numeric", month: "short", day: "2-digit" };
      const formattedDate = currentDate.toLocaleDateString("en-US", options);
      setSubmitMessage("Filled On " + formattedDate);
    }
    console.log("Saved");
  };

  return (
    <main className="w-full max-w-2xl mx-auto xl:ml-72 max-md:p-5 ">
      <div className="max-md:mt-5 xl:mt-24">
        <h1 className={`m-2 text-2xl font-poppins  font-semibold text-left`}>
          Update Bank Details
        </h1>
        <p className="text-sm text-left m-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi
          beatae magni tempora porro recusandae delectus, vero molestias. Magnam
          illum deleniti expedita ipsa facere temporibus ipsum dolores qui
          ratione provident?
        </p>
      </div>

      <form className=" text-sm border-2 border-gray-200 rounded p-5 md:m-5 xl:w-full">
        <div className="md:flex md:items-center mb-6">
          <div className=" md:w-2/3 ">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-name"
            >
              Account Holder Name
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className={` appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700`}
              id="inline-name"
              type="text"
              placeholder="Account Holder Name"
              value={formData.acc_name}
              onChange={(e) => setFormData({ acc_name: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className=" md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-number"
            >
              Account Number
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full 
              py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700"
              id="inline-number"
              type="number"
              placeholder="Account Number"
              value={formData.acc_number}
              onChange={(e) => setFormData({ acc_number: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-code"
            >
              IFSC Code
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700"
              id="inline-code"
              type="text"
              placeholder="IFSC Code"
              value={formData.ifsc}
              onChange={(e) => setFormData({ ifsc: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className=" md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-bank-name"
            >
              Bank Name
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full 
              py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700"
              id="inline-bank-name"
              type="text"
              placeholder="Bank Name"
              value={formData.bank_name}
              onChange={(e) => setFormData({ bank_name: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 ">
          <div className=" md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-name"
            >
              Bank City
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700"
              id="inline-city"
              type="text"
              placeholder="Bank City"
              value={formData.city}
              onChange={(e) => setFormData({ city: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className=" md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-brranch-name"
            >
              Branch Name
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full 
              py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700"
              id="inline-branch-name"
              type="text"
              placeholder="Branch Name"
              value={formData.branch}
              onChange={(e) => setFormData({ branch: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 ">
          <div className=" md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-name"
            >
              Relation with Account Holder
            </label>
          </div>
          <div className=" md:w-2/3">
            {/* md:w-2/3 */}
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-success-700"
              id="inline-name"
              type="text"
              placeholder="Relation with Account Holder"
              value={formData.relation}
              onChange={(e) => setFormData({ relation: e.target.value })}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className=" md:w-2/3">
            
            <label
              className="block text-gray-700 font-bold text-left mb-1 md:mb-0 pr-4 uppercase"
              htmlFor="inline-consent"
            >
              Consent
            </label>
          </div>
          <div
            className="flex  appearance-none border-2 border-gray-200 rounded w-full 
              py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-success-700 
              md:w-2/3"
          >
            {/* md:w-2/3 */}
            <input
              className="inline mx-2 -mt-12 max-md:-mt-20"
              id="inline-consent"
              type="checkbox"
              // value={formData.consent}
              onChange={(e) => setFormData({ consent: e.target.checked })}
              // disabled={isDisabled}
            />
            <p className=" text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero
              accusamus maiores dolorem totam autem voluptatem rem iure optio
              ut. Aut quaerat quae est reprehenderit animi sit alias ipsum.
              <p className="font-bold uppercase">{submitMessage}</p>
            </p>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3 text-right">
            {!isSaved && (
              <button
                className="text-md  shadow bg-[#3AA078] hover:bg-green-800 focus:shadow-outline 
              focus:outline-none text-white font-bold py-3 px-5 rounded"
                type="button"
                onClick={handleSubmit}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </form>
      <p className="text-gray-700 text-sm mx-auto border-gray-200 border-b-2 my-2 py-2 uppercase">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quasi
        inventore. Qui, ratione! Excepturi quas ratione a vero adipisci magnam
        saepe quis odit autem, molestiae nemo recusandae fugiat ut.
      </p>
    </main>
  );
};

export default Form;
