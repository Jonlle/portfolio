import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-20 bg-gray-50 dark:bg-gray-800"
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
            Let's Connect 💬
          </motion.h2>

          {/* Form */}
          <form className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="hello@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              type="submit"
            >
              <FiSend className="text-xl" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
