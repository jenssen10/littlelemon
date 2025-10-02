import "./alert-context.scss";
import { useContext, createContext, useState, useRef } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);
    const counter = useRef(0);

    const showAlert = (message, type) => {
        const id = counter.current++;
        setAlerts((prev) => [...prev, { id, message, type, removing: false }]);
        setTimeout(() => {
            setAlerts((prev) => prev.map((alerts) => (alerts.id === id ? {...alerts, removing: true} : alerts)));
        }, 2700);
        setTimeout(() => {
            setAlerts((prev) => prev.filter((alerts) => alerts.id != id));
        }, 3000);
    }

    // Specific methods for clarity.
    const showSuccess = (message) => showAlert(message, 'success');
    const showError = (message) => showAlert(message, 'error');

    // Manual dismissal for specific alerts.
    const hideAlert = (id) => {
        setAlerts((prev) => prev.map((alerts) => (alerts.id === id ? {...alerts, removing: true} : alerts)));
        setTimeout(() => {
            setAlerts((prev) => prev.filter((alerts) => alerts.id != id));
        }, 300);
    }

    return (
        <AlertContext.Provider value={{ showSuccess, showError, hideAlert }} >
            {children}
            {alerts.length > 0 &&
                <div className="alert-overlay">
                    <div className="alert-container">
                        {alerts.map((alerts) => (
                            <Alert 
                                key={alerts.id}
                                id={alerts.id}
                                message={alerts.message}
                                type={alerts.type}
                                removing={alerts.removing}
                            />
                        ))}
                    </div>
                </div>
            }
        </AlertContext.Provider>
    );
}

export const useAlert = () =>  useContext(AlertContext);

const Alert = ({id, message, type, removing}) => {
    const { hideAlert } = useAlert();
    return (
        <div className={`alert ${type === "success" ? "alert-success" : "alert-error"} ${removing ? "removing" : ""}`}>
            <p>{message}</p>
            <button onClick={() => hideAlert(id)} className="alert-close">
                OK
            </button>
        </div>
    );
}