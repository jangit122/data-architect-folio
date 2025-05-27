
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Years' Experience", value: "13+" },
  { label: "Data Processed/Day", value: "100 GB+" },
  { label: "Records Migrated", value: "220 M+" },
  { label: "ETL Runtime ↓", value: "40%" }
];

export const MetricsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Key Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
