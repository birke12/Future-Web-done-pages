import { useState } from "react";
import styles from "./newsletter.module.css";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setInputValue(value);
    } else if (name === "email") {
      setInputValue2(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Replace with a test API for debugging
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputValue2 }),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      const result = await response.json();
      console.log("API Response:", result);

      openModal();
      setInputValue("");
      setInputValue2("");
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
    } finally {
      setIsLoading(false); // Ensure loading stops in all cases
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.formContainer} id="news">
          <form onSubmit={handleSubmit} className={styles.form1}>
            <div className={styles.textContainer}>
              <h3 className={styles.textHeader}>
                Vil du med på rejsen ind i fremtiden?
              </h3>
              <div className={styles.newsText}>
                Tilmeld dig vores nyhedsbrev og få de nyeste opdateringer om
                webudvikling, trends, og innovation direkte i din inbox. Vær den
                første til at høre om, hvad der sker i fremtidens web!
              </div>
            </div>
            <input
              type="text"
              name="name"
              value={inputValue}
              onChange={handleInputChange}
              required
              placeholder="Skriv dit navn her"
            />
            <input
              type="email"
              name="email"
              value={inputValue2}
              onChange={handleInputChange}
              required
              placeholder="Skriv din email her"
            />

            {/* Custom Button with same style as .btn */}
            <button
              type="submit"
              className={`${styles.submitButton} ${styles.matrix}`}
            >
              <span className={styles.animatedTyping}>Tilmeld dig her</span>
              <span className={styles.rain}></span>
            </button>
          </form>
        </div>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal} className={styles.modal1}>
          <div>
            <h2 className={styles.modalText}>Tak for tilmeldingen!</h2>
            <p>
              Vi har sendt dig en mail til {inputValue2}. Tjek venligst din
              indbakke for de nyeste opdateringer om webudvikling.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;
