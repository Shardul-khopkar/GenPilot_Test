'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-400 mb-8">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold rounded-lg hover:shadow-lg transition-shadow"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
