import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi2";
import SectionHeading from "../ui/SectionHeading";
import faqs from "../../data/faqs";

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="glass rounded-2xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-white font-medium text-sm md:text-base">
        {faq.question}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className="shrink-0 text-violet-300"
      >
        <HiOutlineChevronDown className="text-lg" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-mist-400 text-sm leading-relaxed">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section className="relative py-24 md:py-32">
      <div className="section grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before generating your first plan."
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
