
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://linkedin.com/in/janardhan-gurram" 
            target="_blank" 
            rel="noopener"
            className="text-gray-600 hover:text-blue-600 transition-colors opacity-60 hover:opacity-100"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/janardhan-gurram" 
            target="_blank" 
            rel="noopener"
            className="text-gray-600 hover:text-blue-600 transition-colors opacity-60 hover:opacity-100"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          © 2025 Janardhan Gurram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
