"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-900 to-red-800 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-md">
            <h1 className="text-6xl font-bold text-red-400 mb-4">Oops!</h1>
            <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
            <p className="text-red-200 mb-8">
              An unexpected error occurred. Our team has been notified and is working to fix this issue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Try Again
              </button>

              <a
                href="/"
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Go Home
              </a>
            </div>

            {process.env.NODE_ENV === "development" && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-red-300 mb-2">Error Details (Dev Only)</summary>
                <pre className="bg-red-950/50 p-4 rounded text-xs overflow-auto">{error.message}</pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
