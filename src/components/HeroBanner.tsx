
import { Button } from "@/components/ui/button";

export const HeroBanner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Janardhan Gurram
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-4">
          Big-Data Engineer | 13 Years' Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Architecting scalable pipelines & transforming data into value.
        </p>
      </div>
    </section>
  );
};
