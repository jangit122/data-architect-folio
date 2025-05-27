
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (formData.message.length === 0) {
      newErrors.message = "Message is required";
    }
    
    if (formData.message.length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) return;
    
    if (validateForm()) {
      toast({
        title: "Thank you!",
        description: "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const isFormValid = formData.name.length >= 2 && 
                     /\S+@\S+\.\S+/.test(formData.email) && 
                     formData.message.length > 0 && 
                     formData.message.length <= 500;

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">Let's Connect!</h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          Or email me at <strong>janardhan@example.com</strong>
        </p>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => handleChange("honeypot", e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-red-500" : ""}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={errors.message ? "border-red-500" : ""}
                  rows={4}
                  maxLength={500}
                  required
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  <p className="text-gray-500 text-sm ml-auto">{formData.message.length}/500</p>
                </div>
              </div>
              
              <Button 
                type="submit" 
                variant="outline" 
                className="w-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                disabled={!isFormValid}
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
