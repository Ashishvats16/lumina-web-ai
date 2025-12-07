export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-20 h-20">
      <div className="relative w-16 h-16">
        <svg
          className="animate-spin"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="4" />
          <path
            d="M32 4C17.64 4 6 15.64 6 30"
            stroke="#3B82F6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
