import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const testimonials = [
  {
    id: uuidv4(),
    text: `“Only after I used Resumeup.AI’s AI resume rewriter that I understood the reason behind my consecutive rejections. My resume lacked the keywords and the relevant skills, which though I highlighted, did not pass through ATS. Now I know that highlighting them in ATS-friendly is important and Resumeup.AI made it in seconds!”`,
    name: "Ethan, Accounting Manager",
  },
  {
    id: uuidv4(),
    text: `“I rebuilt my resume with Resumeup.AI’s resume rewriter and impressed almost every interviewer I had an interview with. My optimized resume worked wonders with the employer’s decision of selection. Now I am happy in my dream job.”`,
    name: "Noah, Product manager",
  },
  {
    id: uuidv4(),
    text: `“The templates of this resume enhancer and the look they gave highly impressed me and convinced me to use those templates for my resume and I also optimized my resume with this tool. The interviewers said they were impressed too and my resume looked unique, driving them to consider me. Thank you, Resumeup.AI!”`,
    name: "Daniel, Content Strategist",
  },
  {
    id: uuidv4(),
    text: `“As a frequent career switcher, My toughest battles were building resumes to the different kind of roles, though in the same industry. But ResumeUp.AI made it easy for me. I could create tailored and optimized resumes within seconds and use them with no doubt. I am grateful to my friend who suggested me ResumeUp.AI website.”`,
    name: "Henry, Presently Software Developer",
  },
  {
    id: uuidv4(),
    text: `“ResumeUp.AI’s resume enhancer and resume fixer is one of the most powerful resume tools on the web. From fresher to senior employees, It optimizes resumes for all kinds of positions. It gave me very effective templates at the beginning of my job role and now I am in my dream job. People look at my past resume and appreciate me for the overall look.”`,
    name: "Selena, Senior finance analyst",
  },
];

/**
 * This component renders a rotating testimonials section.
 * It displays a single testimonial at a time and automatically
 * switches to the next testimonial after 5 seconds.
 * The user can also navigate between testimonials using the
 * left and right arrow buttons.
 */
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * This function is used to navigate to the next testimonial
   * by setting the current index to the next index in the array.
   */
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * This function is used to navigate to the previous testimonial
   * by setting the current index to the previous index in the array.
   */
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  /**
   * This function is used to navigate to a specific testimonial
   * by setting the current index to the given index.
   */
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    /**
     * This effect is used to start the automatic rotation of
     * the testimonials when the component is mounted.
     */
    const interval = setInterval(nextTestimonial, 5000);

    /**
     * This effect is used to clean up the interval when the
     * component is unmounted.
     */
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        How Our AI Resume Rewriter & Fixer Helped Job Seekers
      </h2>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full px-4 py-6 bg-white "
            >
              <p className="text-gray-800 text-lg italic">
                "{testimonial.text}"
              </p>
              <p className="mt-4 text-right font-medium text-gray-600">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
