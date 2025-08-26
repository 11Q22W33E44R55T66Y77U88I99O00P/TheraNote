
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";

import Hero from "../components/landing/Hero";
import Story from "../components/landing/Story";
import Product from "../components/landing/Product";
import WhyNow from "../components/landing/WhyNow";
import CTA from "../components/landing/CTA";
import Team from "../components/landing/Team";
import Advisors from "../components/landing/Advisors";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";
import ContactForm from "../components/forms/ContactForm";
import CookieBanner from "../components/ui/CookieBanner";

/**
 * PrivacyPolicyPage Component
 * Renders the content of the privacy policy.
 * @param {object} props - Component props.
 * @param {object} props.content - The privacy policy content for the current language.
 * @param {string} props.language - The current active language ('en' or 'he').
 * @param {function} props.onBackToHome - Callback function to navigate back to the home page.
 * @param {function} props.renderContentWithHighlight - Helper function to render content with highlighted 'TheraNote'.
 */
const PrivacyPolicyPage = ({ content, language, onBackToHome, renderContentWithHighlight }) => {
  if (!content) {
    return null; // Render nothing if content is not available
  }

  return (
    <div className={`container mx-auto py-12 px-4 max-w-4xl ${language === 'he' ? 'text-right' : 'text-left'}`}>
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">
        {content.title}
      </h1>

      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">{section.heading}</h2>
          {Array.isArray(section.paragraphs) ? (
            section.paragraphs.map((p, pIndex) => (
              <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                {renderContentWithHighlight(p)}
              </p>
            ))
          ) : (
            <p className="mb-4 text-gray-700 leading-relaxed">
              {renderContentWithHighlight(section.paragraphs)}
            </p>
          )}

          {section.list && (
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">{renderContentWithHighlight(item)}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-12 text-center">
        <Button
          onClick={onBackToHome}
          className="bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 text-white rounded-md px-6 py-3"
        >
          {language === 'en' ? 'Back to Home' : 'חזרה לדף הבית'}
        </Button>
      </div>
    </div>
  );
};

/**
 * TermsOfServicePage Component
 * Renders the content of the terms of service.
 * @param {object} props - Component props.
 * @param {object} props.content - The terms of service content for the current language.
 * @param {string} props.language - The current active language ('en' or 'he').
 * @param {function} props.onBackToHome - Callback function to navigate back to the home page.
 * @param {function} props.renderContentWithHighlight - Helper function to render content with highlighted 'TheraNote'.
 */
const TermsOfServicePage = ({ content, language, onBackToHome, renderContentWithHighlight }) => {
  if (!content) {
    return null; // Render nothing if content is not available
  }

  return (
    <div className={`container mx-auto py-12 px-4 max-w-4xl ${language === 'he' ? 'text-right' : 'text-left'}`}>
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">
        {content.title}
      </h1>

      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">{section.heading}</h2>
          {Array.isArray(section.paragraphs) ? (
            section.paragraphs.map((p, pIndex) => (
              <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                {renderContentWithHighlight(p)}
              </p>
            ))
          ) : (
            <p className="mb-4 text-gray-700 leading-relaxed">
              {renderContentWithHighlight(section.paragraphs)}
            </p>
          )}

          {section.list && (
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">{renderContentWithHighlight(item)}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-12 text-center">
        <Button
          onClick={onBackToHome}
          className="bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 text-white rounded-md px-6 py-3"
        >
          {language === 'en' ? 'Back to Home' : 'חזרה לדף הבית'}
        </Button>
      </div>
    </div>
  );
};


const content = {
  en: {
    skipLink: "Skip to main content",
    banner: {
      text: "40+ therapists have already joined our pilot.",
      requestAccess: "Request Early Access",
      ariaRequestAccess: "Request early access to TheraNote",
      bookCall: "Book a Call",
      ariaBookCall: "Schedule a consultation call",
    },
    hero: {
      title: "Built by IDF fighters",
      subtitle: "for the ones who carry the unseen wars.",
      description: ["A social-tech initiative born from the pain of combat soldiers, created for the mental health of us all. ", "TheraNote", " transforms how therapists listen, document, and understand."],
      requestAccess: "Request Early Access",
      ariaRequestAccess: "Request early access to TheraNote platform",
      bookCall: "Book a Call",
      ariaBookCall: "Schedule a consultation call with TheraNote team",
      imageAlt: "TheraNote system interface showing dashboard with session analytics, client progress tracking, and therapeutic insights visualization"
    },
    story: {
      title: "A mission that began in battle and continues in therapy",
      p1: ["", "TheraNote", " was founded by former Israeli combat soldiers, driven by deep personal pain and a renewed sense of purpose."],
      p2: "After completing our military service, we entered a new arena: mental health. There, we saw therapists doing sacred work — but alone. No real tools. No clarity. No way to truly document or understand what unfolds in a session.",
      p3: "So we built one."
    },
    product: {
      title: "An AI system that listens, understands, and supports",
      subtitle: "so you can focus on healing",
      features: [
        {
          icon: "Bot",
          title: "AI-Powered Insight",
          description: "Go beyond words. Our AI analyzes voice tone and visual cues to identify key emotional moments, potential triggers, and recurring themes that might otherwise be missed. Surface the unseen data of therapy.",
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b03e1e838_image.png",
          alt: "TheraNote dashboard displaying emotional analysis charts, session insights timeline, and AI-generated therapeutic recommendations based on voice tone and visual cues analysis."
        },
        {
          icon: "TrendingUp",
          title: "Data-Driven Progress Tracking",
          description: ["Understand a client's journey at a glance. ", "TheraNote", " visualizes therapeutic progress, tracks key metrics, and provides a clear, data-driven context for every session, helping you build more effective treatment plans."],
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f42368d31_image.png",
          alt: "TheraNote interface showing client progress visualization with therapy session graphs, milestone tracking, treatment outcome metrics, and comprehensive session summaries over time."
        },
        {
          icon: "Calendar",
          title: "Streamlined Session Management",
          description: ["From scheduling to follow-ups, your entire workflow is organized in one intuitive place. ", "TheraNote", " handles the administrative load so you can focus on what matters most: your client."],
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a98c392b8_image.png",
          alt: "TheraNote calendar interface displaying organized weekly therapy sessions, appointment scheduling system, client management tools, and automated follow-up reminders."
        },
        {
          icon: "Sparkles",
          title: "Dedicated AI Agent",
          description: ["A specialized ", "TheraNote", " agent that understands your language as a therapist. Extract insights, generate summaries, brainstorm ideas, consult on cases without hours of unnecessary work."],
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ee525f57a_image.png",
          alt: "Preview of TheraNote AI agent interface for therapeutic consultation and case analysis - coming soon feature",
          comingSoon: "Coming Soon"
        }
      ]
    },
    whyNow: {
      title: "Mental health in Israel is in crisis and therapy needs support",
      points: [
        { value: 300, suffix: '%+', label: 'increase in therapy requests', isNumeric: true },
        { value: 'Overworked', label: 'therapists are under-supported' },
        { value: 'In The Dark', label: 'sessions often happen with no records' },
      ],
      conclusion: ["", "TheraNote", " is here to open eyes, save time, and give the therapist back the clarity and power to understand."]
    },
    cta: {
      title: "Ready to be part of something bigger?",
      description: "If you're a therapist, clinic, or organization in the field of mental health you're invited to join this journey. Gain early access. Speak with our team. Help shape the future of therapeutic care.",
      bookCall: "Book a Call with Our Team",
      joinWaitlist: "Join the Waitlist"
    },
    team: {
      title: "Our Founding Team",
      accelerator: "Captains at 18XELITE IMPACT Accelerator | Ministry of Defense & Israel Innovation Authority",
      members: [
        {
          name: 'Ido Elmaliach',
          role: 'Co-founder, former IDF commander, visionary technologist, and strategy',
          imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/79c999bcb_WhatsApp2025-08-04163918_1acb6095.jpg',
          quote: "My mission didn't end after service. It transformed.",
          degree: "B.A. in Business Administration & Information Systems",
          imagePosition: 'center 30%'
        },
        {
          name: 'Shahar Afuta',
          role: 'Founder, researcher, community builder, marketing lead, and growth',
          imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/96c261c63_WhatsApp2025-08-04163916_96a3b709.jpg',
          quote: "I bridge between human experience and real insight.",
          degree: "B.A. in Business Administration & Information Systems",
          imagePosition: 'center 20%'
        },
      ]
    },
    advisors: {
      title: "Building Together with Israel's Leading Minds",
      description: "We are honored to have distinguished advisors including some of the most prominent names in Israeli psychology and mental health who believe in this mission and are helping us shape the future of therapeutic care.",
      types: [
        {
          icon: "Users",
          title: "Leading Clinical Psychologists",
          description: "Renowned therapists and trauma specialists guiding our therapeutic approach and ethical framework."
        },
        {
          icon: "Heart",
          title: "Mental Health Advocates",
          description: "Pioneering voices in Israeli mental health care helping shape our mission and values."
        },
        {
          icon: "Lightbulb",
          title: "Health-Tech Visionaries",
          description: "Top business strategists and entrepreneurs advising on sustainable growth and innovation."
        },
      ]
    },
    faq: {
      title: "Want to know more?",
      items: [
        {
          question: "How does it work during a session?",
          answer: "We provide a smart assistant that runs silently alongside you. It listens, transcribes, and analyzes in real-time without interrupting your therapeutic flow."
        },
        {
          question: "Can it support anonymous use?",
          answer: "Yes — no identifying data is required. You maintain full control over what information is processed and stored. Client privacy is our top priority."
        },
        {
          question: "What about data security?",
          answer: "We are HIPAA-compliant and meet Israeli privacy standards. All data is encrypted, processed securely, and stored according to the highest industry standards."
        },
        {
          question: "Does the client need an app?",
          answer: "No. This is built for therapists first. The client never sees the system unless you choose to share insights with them. It's completely invisible to your clients."
        }
      ]
    },
    footer: {
      tagline: "Technology in the service of healing. Building the future of mental health care in Israel and beyond.",
      getInTouch: "Get in Touch",
      resources: "Resources",
      copyright: ["© 2024 ", "TheraNote", ". All rights reserved. Building with purpose, healing with technology."],
      availability: "Available globally, rooted in Israel",
      contact: [
        { name: 'General Inquiries', value: 'THERANOTE1@GMAIL.COM' },
        { name: 'Partnership', value: '054-5360353' },
        { name: 'Support', value: '050-7722240' },
        { name: 'Visit Us', value: 'Tel Aviv, Israel' },
      ],
      navigation: [
          { name: 'Privacy Policy', href: '#', pageName: 'PrivacyPolicy' },
          { name: 'Terms & Conditions', href: '#', pageName: 'TermsOfService' },
          { name: 'Contact Us', href: '#' },
          { name: 'Partner with Us', href: '#' },
          { name: 'Research & Publications', href: '#' },
      ]
    },
    privacyPolicy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Introduction",
          paragraphs: [
            "Welcome to TheraNote! We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.",
            "By using TheraNote, you agree to the collection and use of information in accordance with this policy. We use your data to provide and improve the service."
          ]
        },
        {
          heading: "Information We Collect",
          paragraphs: [
            "We collect several types of information for various purposes to provide and improve our service to you.",
            "Types of Data Collected:",
          ],
          list: [
            "Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ('Personal Data'). This may include, but is not limited to: First name and last name, Email address, Phone number, Organization/Clinic name, Type of inquiry (e.g., early access, consultation, partnership), Preferred contact method, and any other information you provide in your message.",
            "Usage Data: We may also collect information how the Service is accessed and used ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
            "Therapeutic Data (if applicable and consented): For services involving AI analysis of sessions, we process audio/visual data strictly for the purpose of providing therapeutic insights. This data is de-identified and encrypted, and we do not store identifying client information. Explicit consent is obtained prior to processing any therapeutic session data."
          ]
        },
        {
          heading: "Use of Data",
          paragraphs: [
            "TheraNote uses the collected data for various purposes:",
          ],
          list: [
            "To provide and maintain our Service",
            "To notify you about changes to our Service",
            "To allow you to participate in interactive features of our Service when you choose to do so",
            "To provide customer support",
            "To gather analysis or valuable information so that we can improve our Service",
            "To monitor the usage of our Service",
            "To detect, prevent and address technical issues",
            "To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information."
          ]
        },
        {
          heading: "Disclosure of Data",
          paragraphs: [
            "We may disclose your Personal Data in the good faith belief that such action is necessary to:",
          ],
          list: [
            "To comply with a legal obligation",
            "To protect and defend the rights or property of TheraNote",
            "To prevent or investigate possible wrongdoing in connection with the Service",
            "To protect the personal safety of users of the Service or the public",
            "To protect against legal liability"
          ]
        },
        {
          heading: "Security of Data",
          paragraphs: [
            "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
            "We are HIPAA-compliant and meet Israeli privacy standards. All data is encrypted, processed securely, and stored according to the highest industry standards."
          ]
        },
        {
          heading: "Your Rights (GDPR/Israeli Privacy Law)",
          paragraphs: [
            "Depending on your location, you may have certain data protection rights, including:",
          ],
          list: [
            "The right to access, update or to delete the information we have on you.",
            "The right of rectification.",
            "The right to object.",
            "The right to restriction.",
            "The right to data portability.",
            "The right to withdraw consent."
          ]
        },
        {
          heading: "Changes to This Privacy Policy",
          paragraphs: [
            "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
            "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the 'effective date' at the top of this Privacy Policy.",
            "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
          ]
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have any questions about this Privacy Policy, please contact us:",
            "By email: THERANOTE1@GMAIL.COM"
          ]
        }
      ]
    },
    termsOfService: {
      title: "Terms of Service",
      sections: [
        {
          heading: "Welcome to TheraNote!",
          paragraphs: [
            "These Terms of Service ('Terms') govern your access to and use of TheraNote's website, products, and services (collectively, the 'Service'). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Service."
          ]
        },
        {
          heading: "Use of Service",
          paragraphs: [
            "TheraNote provides an AI-powered system designed to assist mental health professionals in listening, documenting, and understanding therapeutic sessions. The Service is intended for professional use only and is not a substitute for professional medical advice, diagnosis, or treatment.",
            "You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service."
          ]
        },
        {
          heading: "User Accounts",
          paragraphs: [
            "To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any activities or actions under your account.",
            "You must notify TheraNote immediately of any unauthorized use of your account or any other breach of security."
          ]
        },
        {
          heading: "Data Privacy and Security",
          paragraphs: [
            "Your privacy is critically important to us. Our Privacy Policy explains how we collect, use, and protect your personal information and any therapeutic data processed through our Service. By using the Service, you consent to such processing and you warrant that all data provided by you is accurate.",
            "We implement robust security measures, including encryption and de-identification where applicable, to protect your data. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure."
          ]
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "The Service and its original content, features, and functionality are and will remain the exclusive property of TheraNote and its licensors. The Service is protected by copyright, trademark, and other laws of both Israel and foreign countries.",
            "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TheraNote."
          ]
        },
        {
          heading: "Therapeutic Data Handling",
          paragraphs: [
            "For features involving AI analysis of therapeutic sessions, you understand and agree that TheraNote processes audio/visual data to provide insights. This processing is strictly for the purpose of assisting therapists and improving the Service.",
            "You are solely responsible for obtaining all necessary consents from your clients for the recording and processing of their therapeutic session data through TheraNote, in compliance with all applicable laws and ethical guidelines (e.g., HIPAA, Israeli privacy laws)."
          ]
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "In no event shall TheraNote, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) conduct or content of third party on the Service; (iii) content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose."
          ]
        },
        {
          heading: "Governing Law",
          paragraphs: [
            "These Terms shall be governed and construed in accordance with the laws of Israel, without regard to its conflict of law provisions.",
            "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect."
          ]
        },
        {
          heading: "Changes to Terms",
          paragraphs: [
            "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
            "By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service."
          ]
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have any questions about these Terms, please contact us:",
            "By email: THERANOTE1@GMAIL.COM"
          ]
        }
      ]
    },
    contactForm: {
      title: "Get in Touch",
      close: "Close",
      nameLabel: "Full Name *",
      emailLabel: "Email *",
      phoneLabel: "Phone",
      orgLabel: "Organization/Clinic",
      inquiryTypeLabel: "Type of Inquiry",
      inquiryTypes: {
        early_access: "Early Access Request",
        consultation: "Consultation Call",
        partnership: "Partnership",
        general: "General Inquiry",
      },
      preferredContactLabel: "How would you prefer us to contact you?",
      contactMethods: {
        email: "Email",
        phone: "Phone"
      },
      reasonLabel: "Tell us about your needs *",
      reasonPlaceholder: "Please tell us briefly about your needs for our system...",
      submitButton: "Send Message",
      submittingButton: "Sending...",
      cancelButton: "Cancel",
      privacyConsent: {
        title: "Privacy and Contact Consent",
        text: "I agree to TheraNote's privacy policy and consent to being contacted by the TheraNote team for follow-up regarding my inquiry. I understand that my personal information will be used solely for this purpose and will be handled securely.",
        privacyPolicyLink: "Privacy Policy"
      },
      privacyConsentRequired: "Please agree to our privacy policy and contact consent to continue.",
      submitError: "An error occurred while submitting your request. Please try again or contact us directly.",
      submitErrorNetwork: "An error occurred while submitting your request. Please check your internet connection and try again.",
      success: {
        title: "Thank you!",
        p1: "We received your message and will get back to you soon.",
        contactEmail: "THERANOTE1@GMAIL.COM",
        contactPhones: "050-7722240 | 054-5360353"
      },
      emails: {
        userConfirmation: {
          subject: "Thank you for contacting TheraNote!",
          body: (name) => `Hi ${name},\n\nThank you for your interest and for reaching out to TheraNote.\n\nYour details have been received successfully, and we are excited about the possibility of collaborating with you in our early pilot program or as part of a broader partnership.\nTheraNote was born from real-life experience – by soldiers, therapists, and engineers who have encountered human pain up close. Today, we are creating a system that will change how therapists cope with overload, professional loneliness, and the need for deeper tools.\n\nA member of our team will contact you in the coming days to continue the process.\nIn the meantime, if you have any urgent questions, you can always contact us directly by email or send a WhatsApp message to 054-5360353.\n\nWe look forward to having you with us as part of the pioneering team that is changing the face of therapy in Israel.\n\nBest regards,\nThe TheraNote Team`
        },
        adminNotification: {
          subject: (type) => `New Contact Request: ${type}`,
          body: (data, inquiryTypes) => `A new contact request has been submitted.\n\nDetails:\n- Name: ${data.name}\n- Email: ${data.email}\n- Phone: ${data.phone || 'N/A'}\n- Organization: ${data.organization || 'N/A'}\n- Inquiry Type: ${inquiryTypes[data.contact_type]}\n- Preferred Contact: ${data.preferred_contact}\n- Message: ${data.message || 'N/A'}`
        }
      }
    },
  },
  he: {
    skipLink: "דלג לתוכן המרכזי",
    banner: {
      text: "מעל 40 מטפלים כבר הצטרפו לפיילוט שלנו.",
      requestAccess: "בקשה לגישה מוקדמת",
      ariaRequestAccess: "בקשה לגישה מוקדמת לפלטפורמת TheraNote",
      bookCall: "קבע שיחה",
      ariaBookCall: "קבע שיחת ייעוץ עם צוות TheraNote",
    },
    hero: {
      title: "נבנה על ידי לוחמי צה״ל",
      subtitle: "עבור אלו שנושאים את המלחמות השקופות.",
      description: ["מיזם חברתי-טכנולוגי שנולד מתוך הכאב של לוחמים, ונוצר למען הבריאות הנפשית של כולנו. ", "TheraNote", " משנה את הדרך שבה מטפלים מקשיבים, מתעדים ומבינים."],
      requestAccess: "בקשה לגישה מוקדמת",
      ariaRequestAccess: "בקשה לגישה מוקדמת לפלטפורמת TheraNote",
      bookCall: "קבע שיחה",
      ariaBookCall: "קבע שיחת ייעוץ עם צוות TheraNote",
      imageAlt: "ממשק מערכת TheraNote המציג לוח מחוונים עם ניתוח סשנים, מעקב אחר התקדמות מטופלים והדמיית תובנות טיפוליות"
    },
    story: {
      title: "משימה שהחלה בקרב וממשיכה בחדר הטיפולים",
      p1: ["", "TheraNote", " נוסדה על ידי לוחמי צה״ל לשעבר, מתוך כאב אישי עמוק ותחושת שליחות מחודשת."],
      p2: "לאחר שחרורנו, נכנסנו לזירה חדשה: בריאות הנפש. שם, ראינו מטפלים עושים עבודת קודש — אבל לבד. בלי כלים אמיתיים. בלי בהירות. בלי דרך לתעד או להבין באמת את מה שקורה בטיפול.",
      p3: "אז בנינו אחד."
    },
    product: {
      title: "מערכת AI שמקשיבה, מבינה ותומכת",
      subtitle: "כדי שתוכלו להתמקד בריפוי",
      features: [
        {
          icon: "Bot",
          title: "תובנות מבוססות AI",
          description: "לראות מעבר למילים. ה-AI שלנו מנתח טון דיבור ורמזים חזותיים כדי לזהות רגעים רגשיים, טריגרים פוטנציאליים ונושאים חוזרים שאחרת היו עלולים להתפספס. לחשוף את המידע הסמוי של הטיפול.",
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b03e1e838_image.png",
          alt: "לוח מחוונים של TheraNote המציג תרשימי ניתוח רגשי, ציר זמן של תובנות מהסשן, והמלצות טיפוליות שנוצרו על ידי AI."
        },
        {
          icon: "TrendingUp",
          title: "מעקב התקדמות מבוסס נתונים",
          description: ["להבין את מסע המטופל במבט חטוף. ", "TheraNote", " ממחישה התקדמות טיפולית, עוקבת אחר מדדי מפתח, ומספקת הקשר ברור ומבוסס נתונים לכל טיפול, ועוזרת לך לבנות תוכניות טיפול יעילות יותר."],
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f42368d31_image.png",
          alt: "ממשק TheraNote המציג המחשת התקדמות מטופל עם גרפים של סשנים טיפוליים, מעקב אבני דרך ומדדי תוצאות טיפול."
        },
        {
          icon: "Calendar",
          title: "ניהול סשנים יעיל",
          description: ["מתיאום פגישות ועד למעקב, כל זרימת העבודה שלך מאורגנת במקום אחד אינטואיטיבי. ", "TheraNote", " מטפלת בעומס האדמיניסטרטיבי כדי שתוכל להתמקד במה שחשוב באמת: המטופל שלך."],
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a98c392b8_image.png",
          alt: "ממשק לוח שנה של TheraNote המציג סשנים טיפוליים שבועיים, מערכת תיאום פגישות וכלי ניהול מטופלים."
        },
        {
          icon: "Sparkles",
          title: "סוכן AI ייעודי",
          description: ["סוכן ", "TheraNote", " ייעודי שמבין את השפה שלך כמטפל/ת. הפק תובנות, צור סיכומים, חשוב על רעיונות, התייעץ על מקרים ללא שעות של עבודה מיותרת."],
          imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ee525f57a_image.png",
          alt: "תצוגה מקדימה של סוכן ה-AI של TheraNote לייעוץ וניתוח מקרים - פיצ'ר שיגיע בקרוב.",
          comingSoon: "בקרוב"
        }
      ]
    },
    whyNow: {
      title: "הבריאות הנפשית בישראל במשבר והטיפול זקוק לתמיכה",
      points: [
        { value: 300, suffix: '%+', label: 'עלייה בבקשות לטיפול', isNumeric: true },
        { value: 'עומס יתר', label: 'מטפלים סובלים מתת-תמיכה' },
        { value: 'באפלה', label: 'טיפולים מתקיימים ללא תיעוד' },
      ],
      conclusion: ["", "TheraNote", " כאן כדי לפקוח עיניים, לחסוך זמן, ולהחזיר למטפלים את הבהירות והכוח להבין."]
    },
    cta: {
      title: "מוכנים להיות חלק ממשהו גדול יותר?",
      description: "אם את/ה מטפל/ת, קליניקה או ארגון בתחום בריאות הנפש, אתם מוזמנים להצטרף למסע הזה. קבלו גישה מוקדמת. דברו עם הצוות שלנו. עזרו לעצב את עתיד הטיפול הנפשי.",
      bookCall: "קבעו שיחה עם הצוות שלנו",
      joinWaitlist: "הצטרפו לרשימת ההמתנה"
    },
    team: {
      title: "הצוות המייסד שלנו",
      accelerator: "קפטנים באקסלרטור 18XELITE IMPACT Accelerator | משרד הביטחון ורשות החדשנות",
      members: [
        {
          name: 'עידו אלמליח',
          role: 'מייסד שותף, מפקד לשעבר בצה״ל, טכנולוג וִיזיוֹנֶר ואסטרטגיה',
          imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/79c999bcb_WhatsApp2025-08-04163918_1acb6095.jpg',
          quote: "השליחות שלי לא הסתיימה עם השחרור. היא שינתה צורה.",
          degree: "B.A במנהל עסקים ומערכות מידע",
          imagePosition: 'center 30%'
        },
        {
          name: 'שחר אפוטה',
          role: 'מייסד, חוקר, בונה קהילות, מוביל שיווק וצמיחה',
          imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/96c261c63_WhatsApp2025-08-04163916_96a3b709.jpg',
          quote: "אני מגשר בין החוויה האנושית לתובנה אמיתית.",
          degree: "B.A במנהל עסקים ומערכות מידע",
          imagePosition: 'center 20%'
        },
      ]
    },
    advisors: {
      title: "בונים יחד עם המוחות המובילים בישראל",
      description: "אנו גאים שיועצינו כוללים כמה מהשמות הבולטים בפסיכולוגיה ובריאות הנפפש בישראל, שמאמינים במשימה זו ועוזרים לנו לעצב את עתיד הטיפול הנפשי.",
      types: [
        {
          icon: "Users",
          title: "פסיכולוגים קליניים מובילים",
          description: "מטפלים ומומחי טראומה בעלי שם המנחים את הגישה הטיפולית והמסגרת האתית שלנו."
        },
        {
          icon: "Heart",
          title: "מובילי דעה בבריאות הנפש",
          description: "קולות חלוציים בתחום בריאות הנפש בישראל שעוזרים לעצב את המשימה והערכים שלנו."
        },
        {
          icon: "Lightbulb",
          title: "יזמי הלת'-טק וִיזיוֹנֶרִים",
          description: "אסטרטגים עסקיים ויזמים מובילים המייעצים בנושאי צמיחה בת-קיימא וחדשנות."
        },
      ]
    },
    faq: {
      title: "רוצים לדעת עוד?",
      items: [
        {
          question: "איך זה עבדו במהלך סשן?",
          answer: "אנו מספקים עוזר חכם שפועל בשקט לצידך. הוא מאזין, מתמלל ומנתח בזמן אמת מבלי להפריע לזרימה הטיפולית שלך."
        },
        {
          question: "האם המערכת תומכת בשימוש אנונימי?",
          answer: "כן — אין צורך בנתונים מזהים. את/ה שומר/ת על שליטה מלאה על המידע שמעובד ומאוחסן. פרטיות המטופל היא בראש סדר העדיפויות שלנו."
        },
        {
          question: "מה לגבי אבטחת מידע?",
          answer: "אנו עומדים בתקן HIPAA ובתקני הפרטיות הישראליים. כל הנתונים מוצפנים, מעובדים בצורה מאובטחת ומאוחסנים על פי הסטנדרטים הגבוהים ביותר בתעשייה."
        },
        {
          question: "האם המטופל צריך אפליקציה?",
          answer: "לא. המערכת נבנתה עבור מטפלים. המטופל לעולם לא רואה את המערכת אלא אם תבחר/י לשתף איתו תובנות. היא בלתי נראית לחלוטין למטופלים שלך."
        }
      ]
    },
    footer: {
      tagline: "טכנולוגיה בשירות הריפוי. בונים את עתיד הטיפול הנפשי בישראל ובעולם.",
      getInTouch: "צרו קשר",
      resources: "מקורות מידע",
      copyright: ["© 2024 ", "TheraNote", ". כל הזכויות שמורות. בונים עם תכלית, מרפאים עם טכנולוגיה."],
      availability: "זמין גלובלית, עם שורשים בישראל",
      contact: [
        { name: 'פניות כלליות', value: 'THERANOTE1@GMAIL.COM' },
        { name: 'שותפויות', value: '054-5360353' },
        { name: 'תמיכה', value: '050-7722240' },
        { name: 'בקרו אותנו', value: 'תל אביב, ישראל' },
      ],
      navigation: [
          { name: 'מדיניות פרטיות', href: '#', pageName: 'PrivacyPolicy' },
          { name: 'תנאים והגבלות', href: '#', pageName: 'TermsOfService' },
          { name: 'צרו קשר', href: '#' },
          { name: 'הצעת שותפות', href: '#' },
          { name: 'מחקר ופרסומים', href: '#' },
      ]
    },
    privacyPolicy: {
      title: "מדיניות פרטיות",
      sections: [
        {
          heading: "מבוא",
          paragraphs: [
            "ברוכים הבאים ל-TheraNote! אנו מחויבים להגן על פרטיותכם ולטפל בנתונים שלכם באופן פתוח ושקוף. מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים, חושפים ומגנים על המידע שלכם בעת השימוש בשירותינו.",
            "על ידי שימוש ב-TheraNote, אתם מסכימים לאיסוף ושימוש במידע בהתאם למדיניות זו. אנו משתמשים בנתונים שלכם כדי לספק ולשפר את השירות."
          ]
        },
        {
          heading: "המידע שאנו אוספים",
          paragraphs: [
            "אנו אוספים מספר סוגי מידע למטרות שונות כדי לספק ולשפר את השירות שלנו עבורכם.",
            "סוגי מידע נאספים:"
          ],
          list: [
            "נתונים אישיים: בעת השימוש בשירות שלנו, אנו עשויים לבקש מכם לספק לנו מידע אישי מזהה מסוים שניתן להשתמש בו כדי ליצור קשר או לזהות אתכם ('נתונים אישיים'). זה עשוי לכלול, בין היתר: שם פרטי ושם משפחה, כתובת דוא\"ל, מספר טלפון, שם ארגון/קליניקה, סוג פנייה (לדוגמה, גישה מוקדמת, שיחת ייעוץ, שותפות), שיטת יצירת קשר מועדפת, וכל מידע אחר שתספקו בהודעתכם.",
            "נתוני שימוש: אנו עשויים גם לאסוף מידע כיצד השירות נגיש ומשמש ('נתוני שימוש'). נתוני שימוש אלה עשויים לכלול מידע כגון כתובת פרוטוקול אינטרנט של המחשב שלכם (לדוגמה כתובת IP), סוג דפדפן, גרסת דפדפן, הדפים של השירות שלנו שאתם מבקרים בהם, השעה והתאריך של ביקורכם, הזמן שהושקע בדפים אלה, מזהי מכשיר ייחודיים ונתונים אבחוניים אחרים.",
            "נתונים טיפוליים (אם רלוונטי ובכפוף להסכמה): עבור שירותים הכוללים ניתוח AI של סשנים, אנו מעבדים נתוני שמע/ווידאו אך ורק לצורך מתן תובנות טיפוליות. נתונים אלה מנוקים מזיהוי ומוצפנים, ואיננו מאחסנים מידע מזהה של מטופלים. הסכמה מפורשת מתקבלת לפני עיבוד כל נתוני סשן טיפולי."
          ]
        },
        {
          heading: "שימוש בנתונים",
          paragraphs: [
            "TheraNote משתמשת בנתונים הנאספים למטרות שונות:",
          ],
          list: [
            "כדי לספק ולתחזק את השירות שלנו",
            "כדי להודיע לכם על שינויים בשירות שלנו",
            "כדי לאפשר לכם להשתתף בתכונות אינטראקטיביות של השירות שלנו כאשר אתם בוחרים לעשות זאת",
            "כדי לספק תמיכת לקוחות",
            "כדי לאסוף ניתוח או מידע רב ערך כדי שנוכל לשפר את השירות שלנו",
            "כדי לנטר את השימוש בשירות שלנו",
            "כדי לזהות, למנוע ולטפל בבעיות טכניות",
            "כדי לספק לכם חדשות, הצעות מיוחדות ומידע כללי אודות מוצרים, שירותים ואירועים אחרים שאנו מציעים הדומים לאלה שכבר רכשתם או ביררתם לגביהם, אלא אם כן בחרתם לא לקבל מידע כזה."
          ]
        },
        {
          heading: "גילוי נתונים",
          paragraphs: [
            "אנו עשויים לחשוף את הנתונים האישיים שלכם בתום לב כי פעולה כזו נחוצה:",
          ],
          list: [
            "כדי לציית לחובה חוקית",
            "כדי להגן ולשמור על זכויותיה או רכושה של TheraNote",
            "כדי למנוע או לחקור עוולות אפשריות בקשר לשירות",
            "כדי להגן על בטיחותם האישית של משתמשי השירות או הציבור",
            "כדי להגן מפני אחריות משפטית"
          ]
        },
        {
          heading: "אבטחת נתונים",
          paragraphs: [
            "אבטחת הנתונים שלכם חשובה לנו, אך זכרו שאף שיטת העברה באינטרנט, או שיטת אחסון אלקטרוני, אינה מאובטחת ב-100%. בעוד אנו שואפים להשתמש באמצעים מקובלים מסחרית כדי להגן על הנתונים האישיים שלכם, איננו יכולים להבטיח את אבטחתם המוחלטת.",
            "אנו עומדים בתקן HIPAA ובתקני הפרטיות הישראליים. כל הנתונים מוצפנים, מעובדים בצורה מאובטחת ומאוחסנים על פי הסטנדרטים הגבוהים ביותר בתעשייה."
          ]
        },
        {
          heading: "זכויותיכם (GDPR/חוק הגנת הפרטיות הישראלי)",
          paragraphs: [
            "בהתאם למיקומכם, ייתכן שיש לכם זכויות מסוימות להגנת מידע, כולל:",
          ],
          list: [
            "הזכות לגשת, לעדכן או למחוק את המידע שיש לנו עליכם.",
            "הזכות לתיקון.",
            "הזכות להתנגד.",
            "הזכות להגבלה.",
            "הזכות לניידות נתונים.",
            "הזכות לבטל הסכמה."
          ]
        },
        {
          heading: "שינויים במדיניות פרטיות זו",
          paragraphs: [
            "אנו עשויים לעדכן את מדיניות הפרטיות שלנו מעת לעת. אנו נודיע לכם על כל שינוי על ידי פרסום מדיניות הפרטיות החדשה בדף זה.",
            "אנו נודיע לכם באמצעות דוא\"ל ו/או הודעה בולטת בשירות שלנו, לפני שהשינוי ייכנס לתוקף ונעדכן את 'תאריך הכניסה לתוקף' בחלק העליון של מדיניות פרטיות זו.",
            "מומלץ לבדוק מדיניות פרטיות זו מעת לעת עבור כל שינוי. שינויים במדיניות פרטיות זו נכנסים לתוקף כאשר הם מתפרסמים בדף זה."
          ]
        },
        {
          heading: "צרו קשר",
          paragraphs: [
            "אם יש לכם שאלות כלשהן לגבי מדיניות פרטיות זו, אנא צרו עמנו קשר:",
            "באימייל: THERANOTE1@GMAIL.COM"
          ]
        }
      ]
    },
    termsOfService: {
      title: "תנאי שימוש",
      sections: [
        {
          heading: "ברוכים הבאים ל-TheraNote!",
          paragraphs: [
            "תנאי שימוש אלה ('התנאים') מסדירים את גישתכם ושימושכם באתר, במוצרים ובשירותים של TheraNote (להלן: 'השירות'). בגישה או בשימוש בשירות, אתם מסכימים להיות כפופים לתנאים אלה ולמדיניות הפרטיות שלנו. אם אינכם מסכימים לתנאים אלה, אנא אל תשתמשו בשירות שלנו."
          ]
        },
        {
          heading: "שימוש בשירות",
          paragraphs: [
            "TheraNote מספקת מערכת מבוססת בינה מלאכותית שנועדה לסייע לאנשי מקצוע בתחום בריאות הנפש בהקשבה, תיעוד והבנה של מפגשים טיפוליים. השירות מיועד לשימוש מקצועי בלבד ואינו מהווה תחליף לייעוץ רפואי מקצועי, אבחון או טיפול.",
            "אתם מסכימים להשתמש בשירות רק למטרות חוקיות ובאופן שאינו פוגע בזכויותיו של אף אחד אחר, אינו מגביל או מונע את השימוש וההנאה שלו מהשירות."
          ]
        },
        {
          heading: "חשבונות משתמשים",
          paragraphs: [
            "כדי לגשת לתכונות מסוימות של השירות, ייתכן שתידרשו ליצור חשבון. אתם מסכימים לספק מידע מדויק, עדכני ומלא במהלך תהליך ההרשמה ולעדכן מידע כזה כדי לשמור עליו מדויק, עדכני ומלא. אתם אחראים לשמירה על הסיסמה שלכם ועל כל פעילות או פעולה תחת חשבונכם.",
            "עליכם להודיע ל-TheraNote מייד על כל שימוש בלתי מורשה בחשבונכם או על כל הפרת אבטחה אחרת."
          ]
        },
        {
          heading: "פרטיות ואבטחת מידע",
          paragraphs: [
            "פרטיותכם חשובה לנו באופן קריטי. מדיניות הפרטיות שלנו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם ועל כל נתונים טיפוליים המעובדים באמצעות השירות שלנו. על ידי שימוש בשירות, אתם מסכימים לעיבוד כזה ואתם מצהירים כי כל הנתונים שסופקו על ידכם מדויקים.",
            "אנו מיישמים אמצעי אבטחה חזקים, כולל הצפנה ודה-זיהוי היכן שרלוונטי, כדי להגן על הנתונים שלכם. עם זאת, אף שיטת העברה באינטרנט, או שיטת אחסון אלקטרוני, אינה מאובטחת ב-100%."
          ]
        },
        {
          heading: "קניין רוחני",
          paragraphs: [
            "השירות ותוכנו המקורי, תכונותיו ופונקציונליותו הם ויישארו רכוש בלעדי של TheraNote ושל מעניקי הרישיונות שלה. השירות מוגן על ידי חוקי זכויות יוצרים, סימני מסחר וחוקים אחרים של ישראל ושל מדינות זרות.",
            "הסימנים המסחריים והלבוש המסחרי שלנו אינם ניתנים לשימוש בקשר למוצר או שירות כלשהו ללא הסכמה מוקדמת בכתב של TheraNote."
          ]
        },
        {
          heading: "טיפול בנתונים טיפוליים",
          paragraphs: [
            "עבור תכונות הכוללות ניתוח AI של מפגשים טיפוליים, אתם מבינים ומסכימים כי TheraNote מעבדת נתוני שמע/וידאו כדי לספק תובנות. עיבוד זה מיועד אך ורק למטרת סיוע למטפלים ושיפור השירות.",
            "אתם האחראים הבלעדיים לקבלת כל ההסכמות הנדרשות מהמטופלים שלכם להקלטה ועיבוד נתוני המפגשים הטיפוליים שלהם באמצעות TheraNote, בהתאם לכל החוקים וההנחיות האתיות הרלוונטיות (לדוגמה, HIPAA, חוקי פרטיות ישראליים)."
          ]
        },
        {
          heading: "הגבלת אחריות",
          paragraphs: [
            "בשום מקרה לא יהיו TheraNote, מנהליה, עובדיה, שותפיה, סוכניה, ספקיה או חברות הבת שלה, אחראים לכל נזק עקיף, מקרי, מיוחד, תוצאתי או עונשי, לרבות, ללא הגבלה, אובדן רווחים, נתונים, שימוש, מוניטין, או הפסדים בלתי מוחשיים אחרים, הנובעים מ-(א) גישתכם או שימושכם או חוסר יכולתכם לגשת או להשתמש בשירות; (ב) כל התנהגות או תוכן של צד שלישי כלשהו בשירות; (ג) כל תוכן שהושג מהשירות; ו-(ד) גישה, שימוש או שינוי בלתי מורשים של שידוריכם או תוכנכם, בין אם מבוסס על אחריות, חוזה, עוולה (כולל רשלנות) או כל תיאוריה משפטית אחרת, בין אם הודיעו לנו על אפשרות לנזק כזה ובין אם לאו, ואפילו אם תרופה המוצגת כאן כשלה במטרתה המהותית."
          ]
        },
        {
          heading: "דין חל",
          paragraphs: [
            "תנאים אלה יחולו וייפורשו בהתאם לחוקי מדינת ישראל, ללא התחשבות בהוראות ברירת הדין שלה.",
            "כישלוננו לאכוף זכות או הוראה כלשהי מתנאים אלה לא ייחשב כוויתור על זכויות אלו. אם הוראה כלשהי מתנאים אלה תימצא בלתי תקפה או בלתי ניתנת לאכיפה על ידי בית משפט, יתר ההוראות של תנאים אלה יישארו בתוקף."
          ]
        },
        {
          heading: "שינויים בתנאים",
          paragraphs: [
            "אנו שומרים לעצמנו את הזכות, לפי שיקול דעתנו הבלעדי, לשנות או להחליף תנאים אלה בכל עת. אם מדובר בתיקון מהותי, אנו נספק הודעה של 30 יום לפחות לפני כניסתם לתוקף של תנאים חדשים כלשהם. מה מהווה שינוי מהותי ייקבע על פי שיקול דעתנו הבלעדי.",
            "על ידי המשך גישה או שימוש בשירות שלנו לאחר כניסתם לתוקף של תיקונים כלשהם, אתם מסכימים להיות כפופים לתנאים המתוקנים. אם אינכם מסכימים לתנאים החדשים, אינכם מורשים עוד להשתמש בשירות."
          ]
        },
        {
          heading: "צרו קשר",
          paragraphs: [
            "אם יש לכם שאלות כלשהן לגבי תנאים אלה, אנא צרו עמנו קשר:",
            "באימייל: THERANOTE1@GMAIL.COM"
          ]
        }
      ]
    },
    contactForm: {
      title: "צרו קשר",
      close: "סגירה",
      nameLabel: "שם מלא *",
      emailLabel: "אימייל *",
      phoneLabel: "טלפון",
      orgLabel: "ארגון/קליניקה",
      inquiryTypeLabel: "סוג הפנייה",
      inquiryTypes: {
        early_access: "בקשה לגישה מוקדמת",
        consultation: "שיחת ייעוץ",
        partnership: "שותפות",
        general: "פנייה כללית",
      },
      preferredContactLabel: "איך תעדיפו שניצור קשר?",
      contactMethods: {
        email: "אימייל",
        phone: "טלפון"
      },
      reasonLabel: "ספרו לנו על הצרכים שלכם *",
      reasonPlaceholder: "ספרו לנו בקצרה על הצרכים שלכם במערכת שלנו...",
      submitButton: "שלח הודעה",
      submittingButton: "שולח...",
      cancelButton: "ביטול",
      privacyConsent: {
        title: "הסכמה לפרטיות ויצירת קשר",
        text: "אני מסכים/ה למדיניות הפרטיות של TheraNote ומאשר/ת יצירת קשר מצד צוות TheraNote לצורך מעקב בנוגע לפנייתי. אני מבין/ה שהמידע האישי שלי ישמש אך ורק למטרה זו ויטופל בצורה מאובטחת.",
        privacyPolicyLink: "מדיניות פרטיות"
      },
      privacyConsentRequired: "אנא הסכימו למדיניות הפרטיות ולהסכמת יצירת הקשר כדי להמשיך.",
      submitError: "אירעה שגיאה בשליחת בקשתכם. אנא נסו שוב או צרו קשר ישירות.",
      submitErrorNetwork: "אירעה שגיאה בשליחת בקשתכם. אנא בדקו את החיבור לאינטרנט ונסו שוב.",
      success: {
        title: "תודה!",
        p1: "קיבלנו את הודעתך ונחזור אליך בהקדם.",
        contactEmail: "THERANOTE1@GMAIL.COM",
        contactPhones: "050-7722240 | 054-5360353"
      },
      emails: {
        userConfirmation: {
          subject: "תודה שפנית ל-TheraNote!",
          body: (name) => `שלום רב ${name},\n\nתודה על ההתעניינות והפנייה ל-TheraNote.\n\nהפרטים שלך התקבלו בהצלחה ואנחנו מתרגשים מהאפשרות לשתף איתך פעולה במסגרת הפיילוט המוקדם או כחלק משיתוף פעולה רחב יותר.\nTheraNote נבנתה מתוך שטח החיים עצמם – ע”י לוחמים, מטפלים, ומהנדסים, שנפגשו עם הכאב האנושי מקרוב, ויוצרים כיום את המערכת שתשנה את הדרך בה מטפלים מתמודדים עם העומס, הבדידות המקצועית, והצורך בכלי עומק.\n\nבימים הקרובים אחד מחברי הצוות יצור איתך קשר כדי להמשיך את תהליך ההתאמה.\nבינתיים, אם יש שאלות דחופות – תמיד אפשר לפנות אלינו ישירות במייל או לשלוח הודעת וואטסאפ למספר 054-5360353.\n\nנשמח לראות אותך איתנו בצוות החלוץ שמשנה את פני עולם הטיפול בישראל.\n\nבברכה,\nצוות TheraNote`
        },
        adminNotification: {
          subject: (type) => `פנייה חדשה מאתר: ${type}`,
          body: (data, inquiryTypes) => `התקבלה פנייה חדשה.\n\nפרטים:\n- שם: ${data.name}\n- אימייל: ${data.email}\n- טלפון: ${data.phone || 'לא נמסר'}\n- ארגון: ${data.organization || 'לא נמסר'}\n- סוג פנייה: ${inquiryTypes[data.contact_type]}\n- דרך התקשרות מועדפת: ${data.preferred_contact === 'email' ? 'אימייל' : 'טלפון'}\n- הודעה: ${data.message || 'לא נמסרה'}`
        }
      }
    }
  }
};


export default function Home() {
  const [contactForm, setContactForm] = useState({ isOpen: false, type: "early_access" });
  const [language, setLanguage] = useState('en'); // Default to English
  const [currentPage, setCurrentPage] = useState('home'); // New state for current page

  const handleOpenContactForm = (type = "early_access") => {
    setContactForm({ isOpen: true, type });
  };

  const handleCloseContactForm = () => {
    setContactForm({ isOpen: false, type: "early_access" });
  };
  
  /**
   * Handles navigation to different pages within the application.
   * Scrolls to the top of the window on navigation.
   * @param {string} pageName - The name of the page to navigate to (e.g., 'home', 'PrivacyPolicy', 'TermsOfService').
   */
  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
    window.scrollTo(0, 0); // Scroll to top when navigating to a new page
  };
  
  const currentContent = content[language];

  /**
   * Helper function to render content array with highlighted "TheraNote" or "תרנוט".
   * @param {string|Array<string>} contentPart - The content to render, can be a string or an array of strings.
   * @returns {React.ReactNode} Rendered content with highlighting.
   */
  const renderContentWithHighlight = (contentPart) => {
    if (Array.isArray(contentPart)) {
      return (
        <>
          {contentPart.map((segment, index) => {
            const isHighlighted = segment === "TheraNote" || segment === "תרנוט";
            
            return isHighlighted ? (
              <span key={index} className="font-semibold text-emerald-600">
                {segment}
              </span>
            ) : (
              <React.Fragment key={index}>{segment}</React.Fragment>
            );
          })}
        </>
      );
    }
    return <>{contentPart}</>;
  };

  // Prepare content objects for child components, applying highlighting where necessary
  const heroContent = {
    ...currentContent.hero,
    description: renderContentWithHighlight(currentContent.hero.description)
  };

  const storyContent = {
    ...currentContent.story,
    p1: renderContentWithHighlight(currentContent.story.p1)
  };

  const productFeatures = currentContent.product.features.map(feature => ({
    ...feature,
    description: renderContentWithHighlight(feature.description)
  }));
  const productContent = {
    ...currentContent.product,
    features: productFeatures
  };

  const whyNowContent = {
    ...currentContent.whyNow,
    conclusion: renderContentWithHighlight(currentContent.whyNow.conclusion)
  };
  
  const footerContent = {
    ...currentContent.footer,
    copyright: renderContentWithHighlight(currentContent.footer.copyright)
  };


  return (
    <div className="min-h-screen" dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className={`sr-only focus:not-sr-only focus:absolute focus:top-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50 ${language === 'he' ? 'focus:right-4' : 'focus:left-4'}`}
        tabIndex="0"
      >
        {currentContent.skipLink}
      </a>

      {/* Top Banner (always visible) */}
      <header className="bg-emerald-50/80 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-50" role="banner">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="relative flex items-center justify-center w-full">
            {/* Language switcher for desktop, absolute positioning */}
            <div className="absolute top-1/2 -translate-y-1/2 start-0 hidden md:block">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
            
            {/* Main centered content */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4 text-center">
              {/* Language switcher for mobile, appears above content */}
              <div className="md:hidden">
                <LanguageSwitcher language={language} setLanguage={setLanguage} />
              </div>

              {/* The actual content */}
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span className="text-emerald-900 font-medium">
                  {currentContent.banner.text}
                </span>
              </div>
              <div className="flex gap-3" role="group" aria-label="Header action buttons">
                <Button 
                  size="sm" 
                  className="bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 text-white rounded-md px-4" 
                  onClick={() => handleOpenContactForm("early_access")}
                  aria-label={currentContent.banner.ariaRequestAccess}
                >
                  {currentContent.banner.requestAccess}
                </Button>
                 <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-100 focus:ring-4 focus:ring-emerald-300 hover:text-emerald-800 rounded-md" 
                  onClick={() => handleOpenContactForm("consultation")}
                  aria-label={currentContent.banner.ariaBookCall}
                >
                  {currentContent.banner.bookCall}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conditional rendering for Home page or Privacy Policy page */}
      {currentPage === 'home' && (
        <>
          <main id="main-content" role="main">
            <Hero content={heroContent} onOpenContactForm={handleOpenContactForm} />
            <Story content={storyContent} />
            <Product content={productContent} />
            <WhyNow content={whyNowContent} />
            <CTA content={currentContent.cta} onOpenContactForm={handleOpenContactForm} />
            <Team content={currentContent.team} />
            <Advisors content={currentContent.advisors} />
            <FAQ content={currentContent.faq} language={language} />
          </main>
          {/* Pass handleNavigate to Footer so it can trigger page changes */}
          <Footer content={footerContent} language={language} onNavigate={handleNavigate} />
        </>
      )}

      {currentPage === 'PrivacyPolicy' && (
        <PrivacyPolicyPage 
          content={currentContent.privacyPolicy} 
          language={language} 
          onBackToHome={() => handleNavigate('home')} 
          renderContentWithHighlight={renderContentWithHighlight} 
        />
      )}

      {currentPage === 'TermsOfService' && (
        <TermsOfServicePage 
          content={currentContent.termsOfService} 
          language={language} 
          onBackToHome={() => handleNavigate('home')} 
          renderContentWithHighlight={renderContentWithHighlight} 
        />
      )}

      <ContactForm 
        isOpen={contactForm.isOpen}
        onClose={handleCloseContactForm}
        defaultType={contactForm.type}
        content={currentContent.contactForm}
        language={language}
      />

      <CookieBanner language={language} onPrivacyPolicyClick={() => handleNavigate('PrivacyPolicy')} />
    </div>
  );
}
