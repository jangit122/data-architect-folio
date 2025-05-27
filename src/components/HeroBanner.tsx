
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
        <Button 
          variant="default" 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          asChild
        >
          <a href="/Janardhan_Gurram_Resume.pdf" target="_blank" rel="noopener">
            <Download className="mr-2 h-5 w-5" />
            Download Résumé
          </a>
        </Button>
      </div>
    </section>
  );
};
