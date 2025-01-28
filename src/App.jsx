import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Alert from './Alert';
import TextArea from './TextArea';
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
  };

  const dismissAlert = () => {
    setAlert(null);
  };

  const switchToggleHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      document.body.style.backgroundColor = "#fafafc";
      document.body.style.color = "#2d2b42";
      showAlert("Light Mode Enabled", "success");
    } else {
      document.body.style.backgroundColor = "#2d2b42";
      document.body.style.color = "#fafafc";
      showAlert("Dark Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Text Utilities" tabName="About" darkMode={isChecked} switchHandler={switchToggleHandler} />

      {/* Fixed height for the alert */}
      <div style={{ height: "80px" }}>
        <Alert alert={alert} onDismiss={dismissAlert} />
      </div>

      <TextArea alertMethod={showAlert} />
    </>
  );
}

export default App;
