"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button, Input, Section, Textarea } from "@/components/ui";
import { BookingFormData } from "@/types";
import { validateEmail, validatePhone } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: 2,
      date: "",
      time: "",
      specialRequests: "",
    },
  });

  const onSubmit = async (_data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const todayString = new Date().toISOString().split("T")[0];

  return (
    <Section id="booking">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Reserve Your Table</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Book your dining experience at Luxe Restaurant. We look forward to
            welcoming you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200 space-y-4"
            >
              <div className="text-5xl">✓</div>
              <h3 className="font-serif text-2xl font-bold text-emerald-900">
                Reservation Confirmed!
              </h3>
              <p className="text-emerald-700">
                Thank you for your reservation. We&apos;ll send you a confirmation
                email shortly. We look forward to your visit!
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl border border-charcoal-200 bg-white p-8 shadow-soft-lg"
            >
              {/* Name */}
              <Input
                label="Full Name"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
                error={errors.name?.message}
              />

              {/* Email & Phone */}
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
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
                    required: "Phone is required",
                    validate: (value) =>
                      validatePhone(value) || "Invalid phone number",
                  })}
                  error={errors.phone?.message}
                />
              </div>

              {/* Guests, Date, Time */}
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-charcoal-700">
                    Number of Guests
                  </label>
                  <select
                    {...register("guests")}
                    className="input-base"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Date"
                  type="date"
                  inputMode="none"
                  min={todayString}
                  {...register("date", { required: "Date is required" })}
                  error={errors.date?.message}
                />

                <Input
                  label="Time"
                  type="time"
                  {...register("time", { required: "Time is required" })}
                  error={errors.time?.message}
                />
              </div>

              {/* Special Requests */}
              <Textarea
                label="Special Requests (Optional)"
                placeholder="Any dietary restrictions, allergies, or special occasion details..."
                {...register("specialRequests")}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="w-full"
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Reservation"}
              </Button>

              <p className="text-center text-sm text-charcoal-600">
                You&apos;ll receive a confirmation email shortly with your reservation
                details.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
