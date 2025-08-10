"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EmailCaptureProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: "default" | "dark" | "outlined";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EmailCapture({
  title = "Stay Updated",
  description = "We'll notify you when it's ready",
  placeholder = "Enter your email address",
  buttonText = "Notify Me",
  variant = "default",
  size = "md",
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Send email to the backend/API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Thank you for subscribing!
        </h3>
        <p className="text-gray-600">
          We&apos;ll notify you as soon as it&apos;s available.
        </p>
      </div>
    );
  }

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };


  return (
    <div className={`${className}`}>
      <div className="text-center mb-6">
        <h3 className={`font-semibold mb-2 ${sizeClasses[size]} ${
          variant === "dark" ? "text-white" : "text-gray-900"
        }`}>
          {title}
        </h3>
        <p className={`${
          variant === "dark" ? "text-gray-300" : "text-gray-600"
        } ${size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"}`}>
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder={placeholder}
            required
            className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
              error ? "border-red-500" : ""
            } ${variant === "dark" ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white"}`}
            disabled={isSubmitting}
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${
            variant === "dark" 
              ? "bg-teal-600 hover:bg-teal-700 text-white" 
              : "bg-teal-600 hover:bg-teal-700 text-white"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Subscribing...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
    </div>
  );
}