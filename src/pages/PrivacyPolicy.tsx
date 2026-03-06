import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <GlassFilter />
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-block mb-6">
            <GlassEffect className="rounded-xl px-4 py-2 hover:scale-[1.02] transition-transform">
              <span className="text-sm font-medium text-primary">&larr; Back to Home</span>
            </GlassEffect>
          </Link>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm italic text-muted-foreground mb-8">Effective Date: March 5, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-foreground/90 leading-relaxed">
            <p>DRF Dyamic Resources LLC, operating as Dyamic Properties ("we," "our," or "us"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dyamicproperties.com, submit information through our tenant inquiry form, or interact with our AI-powered communication systems.</p>
            <p>Our properties are located in East Saint Louis, Illinois. We operate our business through St. Louis, Missouri. As such, this Privacy Policy is designed to comply with applicable laws of both the State of Illinois and the State of Missouri, as well as applicable federal law.</p>
            <p>Please read this policy carefully. By using our website, you agree to the terms of this Privacy Policy.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3 className="text-lg font-semibold text-foreground">Information You Provide Directly:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (including mobile/cell number)</li>
              <li>Section 8 / Housing Choice Voucher status</li>
              <li>Number of bedrooms needed</li>
              <li>Any other information submitted through our tenant inquiry or contact forms</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground">Information Collected Automatically:</h3>
            <p>When you visit our website, we may automatically collect certain technical information including your IP address, browser type, device type, pages visited, and time spent on the site through cookies and analytics tools.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to tenant inquiries and follow up on property availability</li>
              <li>Send maintenance alerts, lease reminders, rent notifications, and property updates via phone call, SMS text message, or automated AI messaging systems</li>
              <li>Communicate information about our properties and services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal and regulatory obligations under Illinois and Missouri law</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Contact you regarding your inquiry via phone, email, or AI-powered automated systems</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground pt-4">3. AI-Powered Communication and Phone Number Use — IMPORTANT</h2>
            <h3 className="text-lg font-semibold text-foreground">CONSENT TO RECEIVE AI-POWERED COMMUNICATIONS</h3>
            <p>By providing your phone number to DRF Dyamic Resources LLC through our website, inquiry form, lease agreement, or any other means, you expressly consent to being contacted by us and our AI-powered property management systems via:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Automated phone calls</li>
              <li>SMS text messages</li>
              <li>AI-generated voice messages</li>
              <li>Automated messaging platforms</li>
            </ul>
            <p>These communications may include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintenance request confirmations and status updates</li>
              <li>Emergency maintenance alerts</li>
              <li>Rent payment reminders and confirmations</li>
              <li>Lease renewal notices</li>
              <li>Property inspection scheduling</li>
              <li>General property management updates and announcements</li>
              <li>Response to inquiries submitted through our website or by phone</li>
            </ul>
            <p>Message and data rates may apply. Message frequency varies based on your tenancy activity and communications with our systems.</p>
            <h3 className="text-lg font-semibold text-foreground">Opt-Out:</h3>
            <p>You may opt out of receiving automated SMS communications at any time by replying STOP to any text message you receive from us. You may opt out of automated calls by contacting us at info@dyamicresources.com. Please note that opting out of marketing or update communications does not exempt you from receiving legally required notices related to your tenancy.</p>
            <h3 className="text-lg font-semibold text-foreground">Illinois Residents:</h3>
            <p>If you are an Illinois resident, your consent to automated communications is governed by the Illinois Electronic Commerce Security Act (815 ILCS 5) and applicable provisions of the Illinois Consumer Fraud and Deceptive Business Practices Act. You have the right to withdraw consent at any time as described above.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">4. How We Share Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>With service providers who assist us in operating our website or AI communication systems, subject to confidentiality obligations</li>
              <li>With housing authorities or Section 8 / Housing Choice Voucher program administrators in Illinois or Missouri as necessary to facilitate tenancy</li>
              <li>With maintenance contractors or vendors to fulfill service requests on your behalf</li>
              <li>When required by law, court order, or government authority in the State of Illinois, the State of Missouri, or under federal law</li>
              <li>To protect the rights, property, or safety of DRF Dyamic Resources LLC, our tenants, or others</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground pt-4">5. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can instruct your browser to refuse all cookies. When we implement Google Analytics or Facebook Pixel, we will update this policy and provide opt-out mechanisms where required by applicable law.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">6. Tenant Portal (Future)</h2>
            <p>We plan to introduce a tenant portal for registered tenants to access account information, submit maintenance requests, and communicate with our team. When launched, additional privacy terms specific to portal users will be provided. All portal data will be protected using industry-standard security measures.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">7. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of Internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">8. Illinois Residents — Additional Rights</h2>
            <p>If you are a resident of Illinois, you may have additional rights under Illinois law including the Illinois Personal Information Protection Act (815 ILCS 530) and the Illinois Biometric Information Privacy Act (740 ILCS 14), to the extent applicable. These rights may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The right to know what personal information we collect about you</li>
              <li>The right to request correction or deletion of your personal information</li>
              <li>The right to opt out of certain data sharing practices</li>
            </ul>
            <p>To exercise any of these rights, contact us at info@dyamicresources.com.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">9. Missouri Residents — Additional Rights</h2>
            <p>If you are a resident of Missouri, you have rights under applicable Missouri privacy and consumer protection statutes. To exercise any rights regarding your personal information, contact us at info@dyamicresources.com.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">10. Children's Privacy</h2>
            <p>Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">11. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">12. Changes to This Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting with a revised Effective Date. Continued use of the website following any changes constitutes your acceptance of the updated policy.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">13. Contact Us</h2>
            <p>For questions or concerns about this Privacy Policy or your personal information:</p>
            <p>
              DRF Dyamic Resources LLC<br />
              Operating as Dyamic Properties<br />
              St. Louis, MO<br />
              Email: <a href="mailto:info@dyamicresources.com" className="text-primary hover:underline">info@dyamicresources.com</a><br />
              Website: <a href="https://dyamicproperties.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dyamicproperties.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
