

export default function EmailVerification() {
    return (
        <div className="flex items-center justify-center mt-28 mb-2 p-5 bg-blue-100 min-w-screen">
            <div className="max-w-xl p-8 text-center text-gray-800 bg-white lg:max-w-3xl lg:p-12">
                <h3 className="text-4xl font-medium">Thank you for signing up at Turnkey!</h3>
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 m-3" fill="blue"
                        viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                </div>

                <p className="text-lg">We're happy you're here. Let's get your email address verified:</p>
                <div className="mt-4">
                    <button className="px-4 py-2 m-3 bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end text-TextOnDark font-bold bg-BtnPrimary-start rounded">Click to Verify Email</button>  
                </div>
            </div>
        </div>

 );
}
    