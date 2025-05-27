
export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black dark:text-white">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Janardhan Gurram, based in Hyderabad. Over 13 years in software engineering, 
              I've led data-migration and ETL initiatives at Honeywell, Coforge & ValueLabs, 
              now architecting high-throughput pipelines on AWS & GCP.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise spans from traditional Hadoop ecosystems to modern cloud-native 
              architectures, with a focus on Scala, Spark, and distributed computing solutions 
              that process hundreds of gigabytes daily.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              JG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
