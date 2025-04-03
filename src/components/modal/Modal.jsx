import styles from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.ldsHourglass}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
