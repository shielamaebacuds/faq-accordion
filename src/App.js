import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="banner"></div>
      <FAQList />
    </div>
  );
}

function FAQList() {
  const [openFAQ, setOpenFAQ] = useState();

  function handleOpenFAQ(faq) {
    console.log("GAGOL :", faq);
    if (faq.id !== openFAQ?.id) setOpenFAQ(() => faq);
    else setOpenFAQ(null);
  }

  const FAQs = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },

    {
      id: 2,
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },

    {
      id: 3,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },

    {
      id: 4,
      question:
        "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="main-container">
      <h2 className="main-header">FAQs</h2>
      {FAQs.map((faq, key) => (
        <FAQ faq={faq} key={key} onOpen={handleOpenFAQ} openFAQ={openFAQ} />
      ))}
    </div>
  );
}

function FAQ({ faq, onOpen, openFAQ }) {
  const isActive = openFAQ?.id === faq.id;
  return (
    <div className="faq-container">
      <div
        className="faq-question"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key==="Enter") onOpen(faq)
        }}
        onClick={() => onOpen(faq)}
      >
        <span>{faq.question}</span>
        <span className={`button ${isActive ? "open" : null}`}></span>
      </div>

      {isActive && <div className="faq-answer active">{faq.answer}</div>}
    </div>
  );
}
