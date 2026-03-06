import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";

const Terms = () => {
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

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm italic text-muted-foreground mb-8">Effective Date: March 5, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-foreground/90 leading-relaxed">
            {/* All original Terms content preserved exactly */}
            <p>These Terms and Conditions ("Terms") govern your use of the website dyamicproperties.com and all related services operated by DRF Dyamic Resources LLC, operating as Dyamic Properties ("we," "our," or "us"). By accessing or using our website, you agree to be bound by these Terms.</p>
            <p>DRF Dyamic Resources LLC manages properties located in East Saint Louis, Illinois and operates its business through St. Louis, Missouri. These Terms are intended to comply with the laws of both the State of Illinois and the State of Missouri, as well as applicable federal law. Where Illinois and Missouri law differ, the law most protective of tenant rights will be applied to the extent required by the location of the applicable property.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">1. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes. You may not use this website to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Impersonate any person or entity</li>
              <li>Transmit harmful, offensive, or disruptive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Violate any applicable federal, Illinois, or Missouri law or regulation</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground pt-4">2. Tenant Inquiry Form</h2>
            <p>By submitting our tenant inquiry form, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The information you provide is accurate and complete to the best of your knowledge</li>
              <li>Submission does not guarantee tenancy or property availability</li>
              <li>We reserve the right to accept or decline any inquiry at our sole discretion and in accordance with applicable fair housing laws</li>
              <li>You consent to being contacted by DRF Dyamic Resources LLC via phone, email, SMS text message, or AI-powered communication systems in response to your inquiry</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground pt-4">3. AI-Powered Communication Systems and Phone Number Authorization</h2>
            <p className="font-semibold">IMPORTANT — PLEASE READ CAREFULLY</p>
            <p>By providing your phone number to DRF Dyamic Resources LLC through this website, a lease agreement, a rental application, or any other communication, you expressly authorize DRF Dyamic Resources LLC and its AI-powered property management systems to contact you using your provided phone number for the following purposes:</p>

            <h3 className="text-lg font-semibold text-foreground">Authorized Uses of Your Phone Number:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintenance request updates and repair status notifications</li>
              <li>Emergency maintenance alerts requiring immediate attention</li>
              <li>Rent payment reminders, due date notices, and payment confirmations</li>
              <li>Lease renewal reminders and notices</li>
              <li>Property inspection scheduling and confirmation</li>
              <li>General property management communications and announcements</li>
              <li>Responses to inquiries you have submitted</li>
              <li>Safety and emergency notifications related to your unit or building</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground">Method of Contact:</h3>
            <p>These communications may be delivered via automated phone calls, SMS text messages, AI-generated voice messages, or other automated messaging technologies. Message and data rates may apply. Message frequency will vary based on tenancy activity and your communications with us.</p>

            <h3 className="text-lg font-semibold text-foreground">Opt-Out Rights:</h3>
            <p>You may opt out of automated SMS communications at any time by replying STOP to any text message. You may opt out of automated calls by contacting us at info@dyamicresources.com. Please note that opting out does not exempt you from receiving legally required notices under Illinois or Missouri landlord-tenant law, including notices of entry, lease violations, or eviction proceedings, which may still be delivered via phone or in writing as required by law.</p>

            <h3 className="text-lg font-semibold text-foreground">Illinois Compliance:</h3>
            <p>For tenants residing in properties located in Illinois, this authorization is provided in accordance with the Illinois Electronic Commerce Security Act and applicable Illinois consumer protection statutes. You have the right to revoke this authorization at any time, subject to the limitations described above.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">4. Fair Housing</h2>
            <p>DRF Dyamic Resources LLC is committed to full compliance with the Federal Fair Housing Act, the Illinois Human Rights Act (775 ILCS 5), and all applicable Missouri fair housing laws. We do not discriminate on the basis of race, color, national origin, religion, sex, familial status, disability, or any other protected class under applicable federal, Illinois, or Missouri law. Section 8 / Housing Choice Voucher holders are welcome.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">5. Section 8 / Housing Choice Voucher Program</h2>
            <p>DRF Dyamic Resources LLC participates in the Section 8 / Housing Choice Voucher program. Our properties in East Saint Louis, Illinois are subject to inspection and approval by the applicable Illinois housing authority. Nothing on this website constitutes a guarantee of tenancy approval, voucher acceptance, or unit availability. All tenancies are subject to housing authority requirements, unit inspections, lease execution, and applicable Illinois landlord-tenant law.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">6. Illinois Landlord-Tenant Law</h2>
            <p>Tenants residing in our East Saint Louis, Illinois properties have rights under the Illinois Residential Tenants' Right to Repair Act (765 ILCS 735), the Illinois Security Deposit Return Act (765 ILCS 710), the Illinois Security Deposit Interest Act (765 ILCS 710), and other applicable Illinois statutes. Nothing in these Terms waives or limits any rights you have under Illinois law as a tenant.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">7. Missouri Operations</h2>
            <p>DRF Dyamic Resources LLC is organized and operates as a limited liability company in the State of Missouri. Our administrative and management operations are conducted from Missouri. Missouri law governs the formation, operation, and internal affairs of DRF Dyamic Resources LLC. Tenant matters specific to Illinois properties are governed by Illinois law as described above.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">8. No Guarantee of Availability</h2>
            <p>Property listings and availability displayed on this website are for informational purposes only and subject to change at any time without notice. We do not guarantee that any listed property is currently available or will be available at the time of your inquiry.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">9. Intellectual Property</h2>
            <p>All content on this website including text, images, logos, graphics, and design elements is the property of DRF Dyamic Resources LLC and protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">10. Disclaimer of Warranties</h2>
            <p>This website and its contents are provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">11. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable Illinois and Missouri law, DRF Dyamic Resources LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website. Nothing in this section limits our liability under applicable Illinois landlord-tenant law or federal fair housing statutes.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">12. Tenant Portal (Future)</h2>
            <p>We plan to introduce a tenant portal for registered tenants. Use of the portal when available will be subject to additional terms presented at registration. We reserve the right to modify or discontinue the portal at any time.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">13. Analytics and Tracking</h2>
            <p>We plan to implement third-party analytics tools including Google Analytics and/or Facebook Pixel. Your continued use of this website following implementation constitutes acceptance of data collection as described in our Privacy Policy.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">14. Governing Law and Jurisdiction</h2>
            <p>These Terms shall be governed by and construed as follows:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Matters relating to the formation, operation, and internal affairs of DRF Dyamic Resources LLC are governed by the laws of the State of Missouri</li>
              <li>Matters relating to tenancy, habitability, security deposits, and landlord-tenant obligations for properties located in East Saint Louis, Illinois are governed by the laws of the State of Illinois</li>
              <li>Federal law governs all matters related to the Section 8 / Housing Choice Voucher program, fair housing, and any other federally regulated subject matter</li>
            </ul>
            <p>For disputes arising out of your use of this website or these Terms (not involving landlord-tenant matters governed by Illinois law), the parties consent to the jurisdiction of the state and federal courts located in St. Louis, Missouri. For disputes arising out of a tenancy in an Illinois property, jurisdiction and venue shall be as required under applicable Illinois law.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">15. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms at any time. Changes will be effective upon posting with a revised Effective Date. Continued use of the website constitutes acceptance of the updated Terms.</p>

            <h2 className="text-xl font-bold text-foreground pt-4">16. Contact Us</h2>
            <p>For questions about these Terms and Conditions:</p>
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

export default Terms;
