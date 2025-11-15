"use client";
import { SignIn } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d1f] px-3 sm:px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome to <span className="text-cyan-300 font-extrabold">Portfolio</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base font-medium">
              <span className="font-bold">Portfolio</span> By Sami <span className="text-cyan-400 font-bold">Ullah</span>
            </p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base px-2">
            Sign in to explore my work
          </p>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-full">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "mx-auto w-full",
                  card: "bg-gray-800/50 border border-gray-700 shadow-lg w-full max-w-full hover:border-cyan-400/50 transition-all duration-300",
                  headerTitle: "text-white text-lg sm:text-xl font-bold",
                  headerSubtitle: "text-gray-400 text-xs sm:text-sm",
                  socialButtonsBlockButton: "bg-gray-700 hover:bg-gray-600 text-white border-gray-600 text-xs sm:text-sm py-2.5 sm:py-3 hover:scale-105 transition-all duration-300",
                  socialButtonsBlockButtonText: "text-white text-xs sm:text-sm",
                  formButtonPrimary: "bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm py-2.5 sm:py-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50",
                  formFieldInput: "bg-gray-700 border-gray-600 text-white placeholder-gray-500 text-xs sm:text-sm py-2.5 sm:py-3 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300",
                  formFieldLabel: "text-gray-300 text-xs sm:text-sm font-medium",
                  footerActionLink: "text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors duration-300",
                  identityPreviewText: "text-white text-xs sm:text-sm",
                  identityPreviewEditButton: "text-cyan-400 text-xs sm:text-sm hover:text-cyan-300 transition-colors",
                  formResendCodeLink: "text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors duration-300 font-medium",
                  dividerLine: "bg-gray-700",
                  dividerText: "text-gray-400 text-xs sm:text-sm",
                  formFieldSuccessText: "text-green-400 text-xs sm:text-sm font-medium",
                  formFieldErrorText: "text-red-400 text-xs sm:text-sm font-medium",
                  phoneInputBox: "hidden",
                  phoneInputRow: "hidden",
                  alternativeMethodsBlockButton: "hidden",
                  alternativeMethodsBlockButtonText: "hidden",
                  alternativeMethodsBlockButton__phone: "hidden",
                  alternativeMethodsBlockButton__phoneText: "hidden",
                  otpCodeFieldInput: "bg-gray-700 border-2 border-gray-600 text-white text-center text-base sm:text-lg font-bold w-12 h-12 sm:w-14 sm:h-14 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:bg-gray-600 transition-all duration-300 hover:border-cyan-500/50 hover:scale-105",
                  otpCodeFieldBox: "gap-3 sm:gap-4 justify-center",
                  formHeaderTitle: "text-white text-lg sm:text-xl font-bold",
                  formHeaderSubtitle: "text-gray-400 text-xs sm:text-sm",
                  verificationCodeField: "bg-gray-700 border-gray-600 text-white",
                  verificationCodeFieldInput: "bg-gray-700 border-2 border-gray-600 text-white text-center text-base sm:text-lg font-bold w-12 h-12 sm:w-14 sm:h-14 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:bg-gray-600 transition-all duration-300 hover:border-cyan-500/50 hover:scale-105",
                  verificationCodeFieldInputs: "gap-3 sm:gap-4 justify-center",
                  formButtonReset: "text-xs sm:text-sm",
                  footer: "text-xs sm:text-sm",
                  formHeader: "mb-4",
                  formHeaderSubtitle__verification: "text-gray-300 text-xs sm:text-sm mb-2",
                },
              }}
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
              afterSignInUrl="/"
              forceRedirectUrl="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

