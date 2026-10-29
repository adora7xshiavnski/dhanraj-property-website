import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { CheckIcon, CloseIcon } from './Icons.jsx';

const ToastContext = createContext(() => {});

const DURATION = 4500;

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M12 7v6M12 17h.01" />
  </svg>
);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(0);

  const dismiss = useCallback((id) => {
    setToasts((list) => list.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
    setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 250);
  }, []);

  const show = useCallback(
    ({ type = 'success', title, message }) => {
      const id = nextId.current++;
      setToasts((list) => [...list.slice(-2), { id, type, title, message }]);
      setTimeout(() => dismiss(id), DURATION);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="toasts" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`toast toast--${t.type} ${t.leaving ? 'toast--leaving' : ''}`}
            role={t.type === 'error' ? 'alert' : 'status'}
          >
            <span className="toast__icon">
              {t.type === 'error' ? <ErrorIcon /> : <CheckIcon width={18} height={18} />}
            </span>
            <div className="toast__text">
              <strong>{t.title}</strong>
              {t.message && <p>{t.message}</p>}
            </div>
            <button className="toast__close" onClick={() => dismiss(t.id)} aria-label="Dismiss notification">
              <CloseIcon width={16} height={16} />
            </button>
            <span className="toast__progress" style={{ animationDuration: `${DURATION}ms` }} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
