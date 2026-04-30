// Line-art icon set in gold style
const Icon = ({ name, className = '' }) => {
  const icons = {
    hand: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M9 11V5a1.5 1.5 0 1 1 3 0v6M12 11V4a1.5 1.5 0 1 1 3 0v7M15 11V6a1.5 1.5 0 1 1 3 0v9c0 3.5-2 6-5.5 6-3 0-4.5-1.5-6-4l-2.5-4.5C3.5 11 4.8 9.5 6 10c.8.3 1.5 1 2 2"/>
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M5 19c0-9 6-15 15-15 0 9-6 15-15 15zM5 19c2-5 5-8 10-10"/>
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M4 20h16M6 16l4-5 3 3 5-7"/>
        <circle cx="6" cy="16" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="10" cy="11" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="13" cy="14" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="18" cy="7" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    coin: (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v10M9 9h4.5a1.5 1.5 0 1 1 0 3H10a1.5 1.5 0 1 0 0 3h5"/>
      </svg>
    ),
    refresh: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 12a9 9 0 0 1-15 6.7L3 16M21 4v4h-4M3 20v-4h4"/>
      </svg>
    ),
    wallet: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M3 7h15a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM3 7a2 2 0 0 1 2-2h11M17 13h2"/>
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 2"/>
      </svg>
    ),
    handshake: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M3 13l4-4 3 1 3-3 4 1 4 4M7 17l3-3M21 11v5a2 2 0 0 1-2 2h-2l-3-3"/>
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2"/>
      </svg>
    ),
    gift: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M3 10h18v3H3zM5 13v8h14v-8M12 10v11M9 10c-2 0-3-1-3-2.5S7 5 9 5c1.5 0 3 2 3 5M15 10c2 0 3-1 3-2.5S17 5 15 5c-1.5 0-3 2-3 5"/>
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM6 17h13"/>
      </svg>
    ),
    list: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M4 6h16M4 12h16M4 18h10"/>
        <circle cx="20" cy="18" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M14 4c4 0 6 2 6 6 0 4-7 11-7 11l-3-3s-3 1-4 0-1-3-1-3l-3-3s7-7 11-7zM10 14l-3 3M16 8a1 1 0 1 0 .01 0"/>
      </svg>
    ),
    cross: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 4v16M4 12h16"/>
      </svg>
    ),
    bag: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M5 8h14l-1 12H6L5 8zM9 8V6a3 3 0 0 1 6 0v2"/>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 3l2.6 5.7 6.4.6-4.8 4.4 1.4 6.3L12 17l-5.6 3 1.4-6.3L3 9.3l6.4-.6L12 3z"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4"/>
      </svg>
    ),
    badge: (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="9" r="6"/>
        <path d="M9 14l-2 7 5-3 5 3-2-7M10 9l1.5 1.5L15 7"/>
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M4 5h16v12H8l-4 4V5z"/>
        <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/>
        <circle cx="13" cy="11" r="1" fill="currentColor" stroke="none"/>
        <circle cx="17" cy="11" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" className={className}>
        <rect x="3" y="5" width="18" height="16" rx="1"/>
        <path d="M3 10h18M8 3v4M16 3v4"/>
      </svg>
    ),
    bed: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M3 18v-7h18v7M3 18h18M3 11V7M21 11V9a2 2 0 0 0-2-2h-9v4"/>
      </svg>
    ),
    hospital: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M3 21h18M10 8h4M12 6v4M9 14h6M9 17h6"/>
      </svg>
    ),
    play: (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
      </svg>
    ),
  };
  return icons[name] || null;
};

// Floating petal decorations with parallax scroll
const Petal = ({ style, variant = 'float', speed = 0.15, rotate = 0 }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          const offset = -center * speed;
          ref.current.style.setProperty('--scroll-y', offset + 'px');
        }
        raf = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [speed]);
  return (
    <div
      ref={ref}
      className={`petal ${variant}`}
      style={{ ...style, '--rot': rotate + 'deg', transform: `translateY(var(--scroll-y, 0px)) rotate(${rotate}deg)` }}
    >
      <img src="assets/petala.webp" alt="" />
    </div>
  );
};

window.Petal = Petal;
