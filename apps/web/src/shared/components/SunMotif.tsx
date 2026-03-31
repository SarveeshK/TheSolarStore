const SunMotif = ({ className = '', size = 180 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="45" fill="#FF6A00" />
      <g stroke="#FF6A00" strokeWidth="10" strokeLinecap="round">
        <line x1="100" y1="15" x2="100" y2="35" />
        <line x1="100" y1="165" x2="100" y2="185" />
        <line x1="15" y1="100" x2="35" y2="100" />
        <line x1="165" y1="100" x2="185" y2="100" />
        <line x1="40" y1="40" x2="54" y2="54" />
        <line x1="146" y1="146" x2="160" y2="160" />
        <line x1="40" y1="160" x2="54" y2="146" />
        <line x1="146" y1="54" x2="160" y2="40" />
      </g>
    </svg>
  );
};

export default SunMotif;
