
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "IoT Water-Level Controller",
    description: "Automated real-time water level monitoring & alerts using MQTT & AWS IoT Core.",
    link: "https://doi.org/10.1051/e3sconf/202447202004",
    tags: ["IoT", "AWS", "MQTT"]
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Featured Work & Research</h2>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  View Publication <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
