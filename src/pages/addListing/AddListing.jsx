import React, { useState } from "react";
import "./AddListingStyles.css";
import { useFetchData } from "../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const [agents] = useFetchData("agents");
  const [regions] = useFetchData("regions");
  const [cities] = useFetchData("cities");

  const [formData, setFormData] = useState({
    address: "",
    image: null,
    region_id: "",
    description: "",
    city_id: "",
    zip_code: "",
    price: "",
    area: "",
    bedrooms: "",
    is_rental: "0",
    agent_id: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.address.length < 2) {
      newErrors.address = "მისამართი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
    }
    if (!/^\d+$/.test(formData.zip_code)) {
      newErrors.zip_code = "საფოსტო ინდექსი უნდა შეიცავდეს მხოლოდ ციფრებს";
    }
    if (!/^\d+$/.test(formData.price)) {
      newErrors.price = "ფასი უნდა შეიცავდეს მხოლოდ ციფრებს";
    }
    if (!/^\d+$/.test(formData.area)) {
      newErrors.area = "ფართობი უნდა შეიცავდეს მხოლოდ ციფრებს";
    }
    if (!/^\d+$/.test(formData.bedrooms)) {
      newErrors.bedrooms = "საძინებლის რაოდენობა უნდა შეიცავდეს მხოლოდ ციფრებს";
    }
    if (formData.description.trim().split(/\s+/).length < 5) {
      newErrors.description = "აღწერა უნდა შეიცავდეს მინიმუმ 5 სიტყვას";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const url =
          "https://api.real-estate-manager.redberryinternship.ge/api/real-estates";

        const formDataToSend = new FormData();

        for (const [key, value] of Object.entries(formData)) {
          if (
            key === "region_id" ||
            key === "city_id" ||
            key === "bedrooms" ||
            key === "agent_id" ||
            key === "is_rental"
          ) {
            formDataToSend.append(key, parseInt(value));
          } else if (key === "area" || key === "price") {
            formDataToSend.append(key, parseFloat(value));
          } else {
            formDataToSend.append(key, value);
          }
        }


        const token = "9d0edd5e-8c31-46e9-8c85-552fab1a74bc";

        const response = await fetch(url, {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          console.log("მონაცემები წარმატებით გაიგზავნა!");
          navigate("/");
        } else {
          console.log("მონაცემების გაგზავნა ვერ მოხერხდა. გთხოვთ, სცადოთ ხელახლა.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("მოხდა შეცდომა. გთხოვთ, სცადოთ ხელახლა.");
      }
    }
  };

  return (
    <div className="app-addListing-container">
      <h2 className="app-addListing-container-header">ლისტინგის დამატება</h2>
      <form onSubmit={handleSubmit} className="app-addListing-form-container">
        <div className="app-addListing-form-section">
          <h2 className="app-addListing-form-section-title">გაყიდვების ტიპი</h2>
          <div className="app-addListing-form-section-radio-group">
            <label className="app-addListing-form-section-radio-label">
              <input
                type="radio"
                name="is_rental"
                value="0"
                checked={formData.is_rental === "0"}
                onChange={handleChange}
                className="app-addListing-form-section-radio-input"
              />
              იყიდება
            </label>
            <label className="app-addListing-form-section-radio-label">
              <input
                type="radio"
                name="is_rental"
                value="1"
                checked={formData.is_rental === "1"}
                onChange={handleChange}
                className="app-addListing-form-section-radio-input"
              />
              ქირავდება
            </label>
          </div>
        </div>

        <div className="app-addListing-form-section">
          <h2 className="app-addListing-form-section-title">მდებარეობა</h2>
          <div className="app-addListing-form-section-input-group">
            <div>
              <label htmlFor="address" className="app-addListing-form-label">
                მისამართი
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="app-addListing-form-input"
                onChange={handleChange}
              />
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </div>
            <div>
              <label htmlFor="zip_code" className="app-addListing-form-label">
                საფოსტო ინდექსი
              </label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                required
                className="app-addListing-form-input"
                onChange={handleChange}
              />
              {errors.zip_code && (
                <p className="error-message">{errors.zip_code}</p>
              )}
            </div>
          </div>
          <div className="app-addListing-form-section-input-group">
            <div>
              <label htmlFor="region_id" className="app-addListing-form-label">
                რეგიონი
              </label>
              <select
                id="region_id"
                name="region_id"
                className="form-select"
                onChange={handleChange}
              >
                <option value="">აირჩიეთ რეგიონი</option>
                {regions?.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="city_id" className="app-addListing-form-label">
                ქალაქი
              </label>
              <select
                id="city_id"
                name="city_id"
                className="form-select"
                onChange={handleChange}
                disabled={!formData.region_id}
              >
                <option value="">აირჩიეთ ქალაქი</option>
                {formData.region_id &&
                  cities
                    ?.filter(
                      (city) => city.region_id.toString() === formData.region_id
                    )
                    .map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
              </select>
            </div>
          </div>
        </div>

        <div className="app-addListing-form-section">
          <h2 className="app-addListing-form-section-title">ბინის დეტალები</h2>
          <div className="app-addListing-form-section-input-group">
            <div>
              <label htmlFor="price" className="app-addListing-form-label">
                ფასი
              </label>
              <input
                type="text"
                id="price"
                name="price"
                required
                className="app-addListing-form-input"
                onChange={handleChange}
              />
              {errors.price && <p className="error-message">{errors.price}</p>}
            </div>
            <div>
              <label htmlFor="area" className="app-addListing-form-label">
                ფართობი
              </label>
              <input
                type="text"
                id="area"
                name="area"
                required
                className="app-addListing-form-input"
                onChange={handleChange}
              />
              {errors.area && <p className="error-message">{errors.area}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="bedrooms" className="app-addListing-form-label">
              საძინებლის რაოდენობა
            </label>
            <input
              type="text"
              id="bedrooms"
              name="bedrooms"
              required
              className="app-addListing-form-input"
              onChange={handleChange}
            />
            {errors.bedrooms && (
              <p className="error-message">{errors.bedrooms}</p>
            )}
          </div>
          <div>
            <label htmlFor="description" className="app-addListing-form-label">
              აღწერა
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="form-textarea"
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <p className="error-message">{errors.description}</p>
            )}
          </div>
          <div>
            <label htmlFor="image" className="app-addListing-form-label">
              ატვირთეთ ფოტო
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="file-input"
            />
          </div>
        </div>

        <div className="app-addListing-form-section">
          <h2 className="app-addListing-form-section-title">აგენტი</h2>
          <select
            id="agent_id"
            name="agent_id"
            className="form-select"
            onChange={handleChange}
          >
            <option value="">აირჩიეთ აგენტი</option>
            {agents?.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {`${agent.name} ${agent.surname}`}
              </option>
            ))}
          </select>
        </div>

        <div className="app-addListing-form-section app-agent-form-actions">
            <button type="button" onClick={()=> navigate("/")} className="cancel-btn">
              გაუქმება
            </button>
            <button type="submit" className="submit-btn">
              დაამატე აგენტი
            </button>
          </div>
      </form>
    </div>
  );
};

export default AddListing;
