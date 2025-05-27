
export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black dark:text-white">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Janardhan, a data engineer with 5+ years' experience migrating from 
              full-stack software development at Honeywell to architecting scalable data pipelines.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey spans from building enterprise software solutions to designing 
              robust ETL processes that handle terabytes of data daily, with a focus on 
              AWS cloud technologies and machine learning implementations.
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
