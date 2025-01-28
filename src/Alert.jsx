import styles from "./Alert.module.css";
import { useEffect } from "react";

function Alert({ alert, onDismiss }) {
  const CapitalizeText = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        onDismiss(); // Call the dismiss function
      }, 2000);
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [alert, onDismiss]);

  return (
    <div className={styles.alertContainer}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show ${styles.customAlert}`}
          role="alert"
        >
          <strong>{CapitalizeText(alert.type)}</strong>: {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onDismiss}
          ></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
