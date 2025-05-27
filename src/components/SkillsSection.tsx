
import { Badge } from "@/components/ui/badge";

const skills = [
  "Scala", "Spark", "Python", "SQL", "Hadoop", "Airflow", 
  "BigQuery", "AWS ECS/EC2", "GCP Dataproc", "MongoDB", "CI/CD (Jenkins)"
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Core Competencies</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {skills.map((skill) => (
            <Badge 
              key={skill}
              variant="secondary"
              className="px-6 py-3 text-lg font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
