import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const budgetOptions = [
    "Select Budget Range",
    "$5,000 - $10,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Custom Quote",
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.budget || formData.budget === "Select Budget Range") {
      newErrors.budget = "Please select a budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      if (!formId) {
        setErrors({
          submit:
            "Contact form is not configured. Please add VITE_FORMSPREE_FORM_ID to your environment.",
        });
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            company: "",
            message: "",
            budget: "",
          });
          setIsSuccess(false);
        }, 3000);
      } else {
        setErrors({
          submit: data.error || data.message || "Failed to send message",
        });
      }
    } catch {
      setErrors({ submit: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard className="h-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-surface-light/50 border ${
              errors.name ? "border-red-500" : "border-glass-border"
            } rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all`}
            placeholder="Your name"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-surface-light/50 border ${
              errors.email ? "border-red-500" : "border-glass-border"
            } rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all`}
            placeholder="your.email@example.com"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Company <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-surface-light/50 border ${
              errors.company ? "border-red-500" : "border-glass-border"
            } rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all`}
            placeholder="Your company"
            aria-required="true"
            aria-invalid={errors.company ? "true" : "false"}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p
              id="company-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.company}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Project Budget <span className="text-primary">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-surface-light/50 border ${
              errors.budget ? "border-red-500" : "border-glass-border"
            } rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all`}
            aria-required="true"
            aria-invalid={errors.budget ? "true" : "false"}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option} className="bg-surface">
                {option}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p
              id="budget-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.budget}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-surface-light/50 border ${
              errors.message ? "border-red-500" : "border-glass-border"
            } rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all resize-none`}
            placeholder="Tell me about your project..."
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>
        {errors.submit && (
          <p className="mt-2 text-sm text-red-400 text-center" role="alert">
            {errors.submit}
          </p>
        )}
        <MagneticButton
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="w-full flex items-center justify-center gap-2"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Message Sent!</span>
              </motion.div>
            ) : isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.div>
            )}
          </AnimatePresence>
        </MagneticButton>
      </form>
    </GlassCard>
  );
};

export default ContactForm;
