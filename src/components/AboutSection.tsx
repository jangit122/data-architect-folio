
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm Janardhan Gurram, based in Hyderabad. Over 13 years in software engineering, 
              I've led data-migration and ETL initiatives at Honeywell, Coforge & ValueLabs, 
              now architecting high-throughput pipelines on AWS & GCP.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Specializing in big data technologies like Spark, Scala, and Python, I transform 
              complex data challenges into scalable solutions that drive business value.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-white shadow-xl animate-fade-in">
                <AvatarImage 
                  src="/lovable-uploads/91dfbd68-e9bb-4c77-90bd-9bf76efad06d.png" 
                  alt="Janardhan Gurram - Big Data Engineer"
                  className="object-cover object-top"
                />
                <AvatarFallback className="text-4xl font-bold bg-blue-100 text-blue-800">
                  JG
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
