import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for enrolling in STR Revenue Accelerator. Check your email for access details.
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="font-semibold mb-2">What's Next?</h2>
            <p className="text-gray-600 text-sm">
              1. Check your email for login credentials<br />
              2. Access your course materials<br />
              3. Join the private community
            </p>
          </div>

          <Link 
            href="/"
            className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 