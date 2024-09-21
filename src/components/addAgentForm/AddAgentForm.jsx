import React, { useState } from "react";
import "./AddAgentFormStyles.css";
import AddAgentModal from "../addAgentModal/AddAgentModal";
import { agentHandler } from "../../api/agent";

const AddAgentForm = ({ setToggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    avatar: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.name.length < 2)
      newErrors.name = "მინიმუმ 2 სიმბოლო";
    if (formData.surname.length < 2) newErrors.surname = "მინიმუმ 2 სიმბოლო";
    if (!formData.email.endsWith("@redberry.ge"))
      newErrors.email = "გამოიყენეთ @redberry.ge ფოსტა";
    if (!/^\d+$/.test(formData.phone)) newErrors.phone = "მხოლოდ ციფრები";
    if (!formData.avatar) newErrors.avatar = "აუცილებელია ფოტოს ატვირთვა";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")
    if (validateForm()) {
        setLoading(true);        
        agentHandler(formData)
          .then(() => {
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
    }
  };
  return (
    <AddAgentModal>
      <div className="app-agent-form">
        <h2 className="app-agent-form-header">აგენტის დამატება</h2>
        <form onSubmit={handleSubmit}>
          <div className="app-agent-form-row">
            <div className="app-agent-form-group">
              <label className="app-agent-form-group-label">სახელი *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="app-agent-form-group-input"
              />
              {errors.name ? (
                <span className="app-agent-form-group-input-hint app-agent-form-group-input-hint-error">
                  {errors.name}
                </span>
              ) : (
                <span className="app-agent-form-group-input-hint">
                  მინიმუმ 2 სიმბოლო
                </span>
              )}
            </div>
            <div className="app-agent-form-group">
              <label className="app-agent-form-group-label">გვარი *</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="app-agent-form-group-input"
              />
              {errors.surname ? (
                <span className="app-agent-form-group-input-hint app-agent-form-group-input-hint-error">
                  {errors.surname}
                </span>
              ) : (
                <span className="app-agent-form-group-input-hint">
                  მინიმუმ 2 სიმბოლო
                </span>
              )}
            </div>
          </div>
          <div className="app-agent-form-row">
            <div className="app-agent-form-group">
              <label className="app-agent-form-group-label">ელ-ფოსტა *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="app-agent-form-group-input"
              />
              {errors.email ? (
                <span className="app-agent-form-group-input-hint app-agent-form-group-input-hint-error">
                  {errors.email}
                </span>
              ) : (
                <span className="app-agent-form-group-input-hint">
                  გამოიყენეთ @redberry.ge ფოსტა
                </span>
              )}
            </div>
            <div className="app-agent-form-group">
              <label className="app-agent-form-group-label">
                ტელეფონის ნომერი
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="app-agent-form-group-input"
              />
              {errors.phone ? (
                <span className="app-agent-form-group-input-hint app-agent-form-group-input-hint-error">
                  {errors.phone}
                </span>
              ) : (
                <span className="app-agent-form-group-input-hint">
                  მხოლოდ ციფრები
                </span>
              )}
            </div>
          </div>
          <div className="app-agent-form-group">
            <label className="app-agent-form-group-label">
              ატვირთეთ ფოტო *
            </label>
            <div className="app-agent-form-group-input-file-container">
              <input
                className="app-agent-form-group-input-file"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
              <span className="app-agent-form-group-input-file-icon">+</span>
            </div>
            {errors.avatar && (
              <p className="app-agent-form-group-input-hint app-agent-form-group-input-hint-error">
                {errors.avatar}
              </p>
            )}
          </div>
          <div className="app-agent-form-actions">
            <button type="button" onClick={()=> setToggleModal((prev) => !prev)} className="cancel-btn">
              გაუქმება
            </button>
            <button type="submit" className="submit-btn">
              დაამატე აგენტი
            </button>
          </div>
        </form>
        <div className="app-form-loader">
            {loading && <h3>Loading...</h3>}
        </div>
        <div className="app-form-error">
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
        </div>
      </div>
    </AddAgentModal>
  );
};

export default AddAgentForm;
