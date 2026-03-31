const CornerFrames = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      {/* Top-left bracket */}
      <svg
        className="absolute top-[10vh] left-[6vw] w-16 h-16 md:w-24 md:h-24"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M0 10 H80 M10 0 V80" stroke="#0B1F4A" strokeWidth="10" fill="none" />
      </svg>
      
      {/* Bottom-right bracket */}
      <svg
        className="absolute bottom-[10vh] right-[6vw] w-16 h-16 md:w-24 md:h-24"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M100 90 H20 M90 100 V20" stroke="#0B1F4A" strokeWidth="10" fill="none" />
      </svg>
    </div>
  );
};

export default CornerFrames;
