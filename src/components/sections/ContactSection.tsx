import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { Footer } from "../layout/Footer";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mvzjopjn");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        aria-label="Contact"
        className="snap-section h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8 dark:text-white">
              Message Sent!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <a
              href="#home"
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            >
              ← Back to top
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="snap-section h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.h2
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="text-5xl font-bold text-center mb-8 dark:text-white"
          >
            Let&apos;s Connect
          </motion.h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="hello@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="How can I help you?"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              <FiSend className="text-xl" />
              {state.submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
}
