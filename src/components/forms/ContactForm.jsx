
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ContactForm({ isOpen, onClose, defaultType = "early_access", content, language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    reason: "", // Added new reason field
    contact_type: defaultType,
    preferred_contact: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  
  useEffect(() => {
    // Reset form when defaultType or isOpen changes
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      reason: "", // Reset reason field
      contact_type: defaultType,
      preferred_contact: "email"
    });
    setIsSubmitted(false);
    setPrivacyConsent(false); // Reset privacy consent
  }, [isOpen, defaultType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!privacyConsent) {
      alert(content.privacyConsentRequired);
      return;
    }

    setIsSubmitting(true);

    const formAction = "https://formspree.io/f/mwpqryap";

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          privacy_consent: true,
          consent_timestamp: new Date().toISOString()
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.errors ? errorData.errors.map(err => err.message).join(', ') : 'An unknown error occurred.';
        alert(`${content.submitError} (Error: ${errorMessage})`);
      }
    } catch (error) {
      console.error("Error submitting form to Formspree:", error);
      alert(content.submitErrorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <Card className="w-full max-w-md bg-white">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.success.title}</h3>
            <p className="text-gray-600 mb-6">
              {content.success.p1}
            </p>
            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{content.success.contactEmail}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{content.success.contactPhones}</span>
              </div>
            </div>
            <Button onClick={onClose} className="w-full">
              {content.close}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <Card className="w-full max-w-lg bg-white max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={`absolute top-2 ${language === 'he' ? 'left-2' : 'right-2'}`}
            aria-label={content.close}
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-xl text-center">{content.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 text-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {content.nameLabel}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {content.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {content.phoneLabel}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  {content.orgLabel}
                </label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => handleChange("organization", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact_type" className="block text-sm font-medium text-gray-700 mb-1">
                {content.inquiryTypeLabel}
              </label>
              <Select value={formData.contact_type} onValueChange={(value) => handleChange("contact_type", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="early_access">{content.inquiryTypes.early_access}</SelectItem>
                  <SelectItem value="consultation">{content.inquiryTypes.consultation}</SelectItem>
                  <SelectItem value="partnership">{content.inquiryTypes.partnership}</SelectItem>
                  <SelectItem value="general">{content.inquiryTypes.general}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {content.preferredContactLabel}
              </label>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant={formData.preferred_contact === "email" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleChange("preferred_contact", "email")}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {content.contactMethods.email}
                </Button>
                <Button
                  type="button"
                  variant={formData.preferred_contact === "phone" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleChange("preferred_contact", "phone")}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {content.contactMethods.phone}
                </Button>
              </div>
            </div>

            {/* Reason field - now required */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                {content.reasonLabel}
              </label>
              <Textarea
                id="reason"
                value={formData.reason}
                onChange={(e) => handleChange("reason", e.target.value)}
                rows="4"
                className="w-full"
                placeholder={content.reasonPlaceholder}
                required
              />
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy-consent" className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">{content.privacyConsent.title}</span>
                  <br />
                  {content.privacyConsent.text}
                  <br />
                  <Link to={createPageUrl('PrivacyPolicy')} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">
                    {content.privacyConsent.privacyPolicyLink}
                  </Link>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || !privacyConsent}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? content.submittingButton : content.submitButton}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                {content.cancelButton}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
