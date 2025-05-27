
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "project-1",
    title: "Shutterfly Simplification and Data Migration",
    description: "Led migration of 10M+ user records from SQL to MongoDB on AWS ECS, ensuring 100% data integrity and zero downtime.",
    tags: ["Scala", "Kafka", "AWS ECS", "MongoDB"]
  },
  {
    id: "project-2",
    title: "Walmart Luminate ETL",
    description: "Built Spark/Scala pipelines on GCP to ingest & transform multi-TB datasets daily into BigQuery for analytics.",
    tags: ["Spark", "GCP Dataproc", "BigQuery"]
  },
  {
    id: "project-3",
    title: "Smart Meter Analytics",
    description: "Processed millions of IoT meter readings using Hadoop/Spark to feed real-time dashboards in Hive.",
    tags: ["Hive", "Hadoop", "Spark"]
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Featured Initiatives</h2>
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project) => (
            <AccordionItem key={project.id} value={project.id}>
              <AccordionTrigger className="text-xl font-semibold hover:text-blue-600 transition-colors">
                {project.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
