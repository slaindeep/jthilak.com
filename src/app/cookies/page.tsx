export const metadata = {
  title: 'Cookie Policy | TFF Legal - Website Cookies and Tracking Technologies',
  description: 'TFF Legal Cookie Policy explaining our use of cookies and similar technologies to enhance website functionality and user experience.',
  keywords: 'TFF Legal cookie policy, website cookies, tracking technologies, privacy compliance',
}

export default function CookiePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600">
            Understanding how we use cookies and similar technologies on our website
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Effective Date: 1st July 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            
            <div className="mb-6">
              <p className="text-gray-600">
                <strong>Website:</strong> <a href="https://www.jthilak.com" className="text-blue-600 hover:text-blue-800">https://www.jthilak.com</a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              This Cookie Policy explains how Thilak Fons & Farabi Legal FZ LLC (&ldquo;TFF Legal&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) 
              uses cookies and similar technologies on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files placed on your device by websites you visit. They help websites 
              function efficiently, remember your preferences, and improve user experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Strictly Necessary Cookies</h3>
                <p className="text-gray-600">
                  Essential for operation (e.g., security, session management).
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Performance Cookies</h3>
                <p className="text-gray-600">
                  Collect anonymous data about visitor usage to improve functionality.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Functional Cookies</h3>
                <p className="text-gray-600">
                  Remember user preferences and settings.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Analytics Cookies</h3>
                <p className="text-gray-600">
                  Help us understand traffic patterns.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Third-Party Cookies</h3>
                <p className="text-gray-600">
                  Set by external service providers (e.g., embedded content, analytics).
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Why We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies to:</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Ensure secure and efficient Website operation</li>
              <li>• Analyse usage to enhance user experience</li>
              <li>• Remember settings and preferences</li>
              <li>• Deliver relevant content and features</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              Most browsers automatically accept cookies but allow you to:
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Delete existing cookies</li>
              <li>• Block all cookies</li>
              <li>• Receive alerts before cookies are stored</li>
            </ul>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800">
                <strong>Please note:</strong> Blocking cookies may affect functionality of our website.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may allow selected third parties to place cookies. These providers have their own policies. 
              TFF Legal does not control their use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy. Changes will be posted with an updated effective date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                For questions about this Policy, please use the details on our Contact Us page.
              </p>
              <div className="text-gray-700">
                <p><strong>TFF Legal</strong></p>
                <p>Email: info@tfflegal.com</p>
                <p>Website: <a href="https://www.jthilak.com" className="text-blue-600 hover:text-blue-800">https://www.jthilak.com</a></p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This Cookie Policy is part of our comprehensive privacy framework. 
                For more information about how we handle your data, please also review our 
                <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline"> Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}