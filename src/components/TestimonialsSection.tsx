
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const testimonials = [
  { 
    author: "Shutterfly Engineering Manager", 
    quote: "Janardhan drove our platform modernization with zero disruption and 30% performance gain." 
  },
  { 
    author: "Walmart Data Lead", 
    quote: "His Spark pipelines became the backbone of our analytics." 
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">Colleague Insights</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <cite className="text-blue-600 font-semibold">
              — {testimonials[currentIndex].author}
            </cite>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
