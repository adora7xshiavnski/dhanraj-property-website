import { useEffect, useRef, useState } from 'react';

// Fades and lifts its content into view the first time it scrolls on screen.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  // Once the entrance has played, drop the stagger delay so hover effects respond instantly.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setDone(true), delay + 750);
    return () => clearTimeout(t);
  }, [visible, delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${done ? 'is-done' : ''} ${className}`}
      style={done ? style : { ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
