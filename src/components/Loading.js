function Loading() {
  return (
    <div className="fixed top-0 z-10 flex justify-center items-center w-full h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="animate-spin"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#e15b64"
          strokeWidth="23"
          r="31"
          strokeDasharray="146.08405839192537 50.69468613064179"
          transform="matrix(1,0,0,1,0,0)"
        />
      </svg>
    </div>
  );
}

export default Loading;
