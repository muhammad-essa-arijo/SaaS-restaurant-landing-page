"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button, Input, Section, Textarea } from "@/components/ui";
import { ContactFormData } from "@/types";
import { RESTAURANT_DATA } from "@/lib/constants";
import { validateEmail, validatePhone } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: RESTAURANT_DATA.phone,
      href: `tel:${RESTAURANT_DATA.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: RESTAURANT_DATA.email,
      href: `mailto:${RESTAURANT_DATA.email}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: RESTAURANT_DATA.address,
      href: "#",
    },
  ];

  return (
    <Section id="contact">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Contact us or visit us
            today.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.href}
                    variants={fadeInUp}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 group-hover:bg-gold-200 transition-colors">
                        <Icon className="h-6 w-6 text-gold-600" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-900">
                        {info.label}
                      </p>
                      <p className="text-charcoal-600 group-hover:text-gold-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Hours */}
            <motion.div variants={fadeInUp}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100">
                    <Clock className="h-6 w-6 text-gold-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900 mb-3">
                    Hours of Operation
                  </p>
                  <div className="space-y-2 text-sm text-charcoal-600">
                    <p>Mon: {RESTAURANT_DATA.hours.monday}</p>
                    <p>Tue - Thu: {RESTAURANT_DATA.hours.tuesday}</p>
                    <p>Fri: {RESTAURANT_DATA.hours.friday}</p>
                    <p>Sat: {RESTAURANT_DATA.hours.saturday}</p>
                    <p>Sun: {RESTAURANT_DATA.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200 space-y-4 h-full flex flex-col items-center justify-center"
              >
                <div className="text-5xl">✓</div>
                <h3 className="font-serif text-2xl font-bold text-emerald-900">
                  Message Sent!
                </h3>
                <p className="text-emerald-700">
                  Thank you for reaching out. We&apos;ll get back to you as soon as
                  possible.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 rounded-2xl border border-charcoal-200 bg-white p-8 shadow-soft-lg"
              >
                <Input
                  label="Name"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  error={errors.name?.message}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) =>
                      validateEmail(value) || "Invalid email address",
                  })}
                  error={errors.email?.message}
                />

                <Input
                  label="Phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register("phone", {
                    validate: (value) =>
                      !value || validatePhone(value) || "Invalid phone number",
                  })}
                  error={errors.phone?.message}
                />

                <Input
                  label="Subject"
                  placeholder="How can we help?"
                  {...register("subject", { required: "Subject is required" })}
                  error={errors.subject?.message}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell us more about your inquiry..."
                  {...register("message", { required: "Message is required" })}
                  error={errors.message?.message}
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-soft-lg border border-charcoal-200 h-96"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d${RESTAURANT_DATA.coordinates.lng}!3d${RESTAURANT_DATA.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2zMzfCsDU1JzMzLjQiTiA3NsKwMzUnMTYuOCJX!5e0!3m2!1sen!2sus!4v1234567890123`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </Section>
  );
}
