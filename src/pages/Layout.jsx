
import React from "react";
import AnimatedNetwork from "./components/background/AnimatedNetwork";
import AccessibilityWidget from "./components/ui/AccessibilityWidget";
import WhatsAppButton from "./components/ui/WhatsAppButton";

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          color: #111827;
          background-color: #fcfcfc;
          line-height: 1.6;
        }

        /* --- Accessibility Styles --- */
        html.accessibility-contrast { filter: contrast(1.5); }
        html.accessibility-monochrome { filter: grayscale(100%); }
        html.accessibility-invert { filter: invert(1); background-color: #111; }
        html.accessibility-invert img { filter: invert(1); }
        
        html.accessibility-readable-font body,
        html.accessibility-readable-font button,
        html.accessibility-readable-font input,
        html.accessibility-readable-font textarea,
        html.accessibility-readable-font select {
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif !important;
          letter-spacing: 0.5px;
        }

        html.accessibility-highlight-links a {
          background-color: #fef08a !important; /* yellow-200 */
          color: #000 !important;
          padding: 2px 4px;
          border-radius: 3px;
          text-decoration: underline !important;
        }

        html.accessibility-highlight-headings h1,
        html.accessibility-highlight-headings h2,
        html.accessibility-highlight-headings h3,
        html.accessibility-highlight-headings h4,
        html.accessibility-highlight-headings h5,
        html.accessibility-highlight-headings h6 {
          background-color: #dbeafe !important; /* blue-100 */
          color: #1e3a8a !important; /* blue-900 */
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        /* --- End Accessibility Styles --- */

        /* Screen reader only content */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          body {
            background-color: #ffffff;
            color: #000000;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus visible improvements */
        *:focus-visible {
          outline: 2px solid #059669;
          outline-offset: 2px;
        }

        .grid-section {
          background-image:
            linear-gradient(rgba(226, 232, 240, 0.3) 1px, transparent 1px),
            linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
      <div className="relative isolate" lang="en">
        <AnimatedNetwork />
        {children}
        <AccessibilityWidget />
        <WhatsAppButton />
      </div>
    </>
  );
}
