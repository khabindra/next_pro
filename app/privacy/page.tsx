export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 md:p-12">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Welcome to RestaurantName ("we," "our," or "us"). We are committed to protecting 
                your privacy and ensuring the security of your personal information. This Privacy 
                Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our restaurant or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                Personal Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                <li>Make a reservation</li>
                <li>Contact us via email or phone</li>
                <li>Sign up for our newsletter</li>
                <li>Participate in promotions or events</li>
                <li>Submit feedback or reviews</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This information may include your name, email address, phone number, mailing address, 
                payment information, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When you visit our website, we may automatically collect certain information about 
                your device and browsing activity, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                <li>Process and confirm reservations</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our services and website</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraudulent activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                <li>With service providers who assist in our operations (e.g., payment processors)</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                5. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet or electronic 
                storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing 
                experience, analyze website traffic, and personalize content. You can control cookie 
                settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                7. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Depending on your location, you may have the following rights regarding your 
                personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                8. Third-Party Links
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices or content of these external sites. We encourage you to review 
                their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                9. Children's Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our services are not directed to individuals under the age of 13. We do not 
                knowingly collect personal information from children under 13. If we become aware 
                that we have collected such information, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or legal requirements. The updated policy will be posted on this page 
                with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                11. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions or concerns about this Privacy Policy or our data 
                practices, please contact us at:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <p className="text-gray-900 dark:text-white font-medium">RestaurantName</p>
                <p className="text-gray-600 dark:text-gray-400">Email: privacy@restaurant.com</p>
                <p className="text-gray-600 dark:text-gray-400">Phone: (123) 456-7890</p>
                <p className="text-gray-600 dark:text-gray-400">Address: 123 Restaurant Street, City, State 12345</p>
              </div>

              <p className="text-gray-500 dark:text-gray-500 text-sm italic mt-8">
                By using our services, you acknowledge that you have read and understood this 
                Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
