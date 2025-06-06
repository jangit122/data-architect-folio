
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CertificationsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Percipio Big Data & Spark Architecture</CardTitle>
              <CardDescription>Expert in Spark, Hadoop & distributed computing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="outline">2023 - 2026</Badge>
                <a 
                  href="https://skillsoft.digitalbadges.skillsoft.com/" 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:underline"
                >
                  View Credential
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">Percipio Cloud Computing (AWS & GCP)</CardTitle>
              <CardDescription>Validated expertise in cloud-native data platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="outline">2023 - 2026</Badge>
                <a 
                  href="https://skillsoft.digitalbadges.skillsoft.com/" 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:underline"
                >
                  View Credential
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
