import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_3nqk5eu";
const EMAILJS_TEMPLATE_ID = "template_miul2oa";
const EMAILJS_PUBLIC_KEY = "pF_c3M0wrEZqqIxse";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "atharvakakde40@gmail.com",
    href: "mailto:atharvakakde40@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9860711194",
    href: "tel:+919860711194",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Aurangabad, Maharashtra, India",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/atharvakakde", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/atharva-kakde-2569b034b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:atharvakakde40@gmail.com", label: "Email" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof ContactFormData, value: string) => {
    const result = contactSchema.shape[field].safeParse(value);
    if (!result.success) {
      return result.error.errors[0].message;
    }
    return undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof ContactFormData, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-soft">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card-hover p-4 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-accent group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/70 border border-white/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-button hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white focus:ring-2 outline-none transition-all text-foreground placeholder:text-muted-foreground ${
                  errors.name
                    ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                    : "border-border focus:border-primary focus:ring-primary/20"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white focus:ring-2 outline-none transition-all text-foreground placeholder:text-muted-foreground ${
                  errors.email
                    ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                    : "border-border focus:border-primary focus:ring-primary/20"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white focus:ring-2 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground ${
                  errors.message
                    ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                    : "border-border focus:border-primary focus:ring-primary/20"
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
