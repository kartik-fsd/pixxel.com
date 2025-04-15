import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../utils/constants";

interface RelatedServicesProps {
  currentService: {
    slug: string;
    title: string;
  };
}

export function RelatedServices({ currentService }: RelatedServicesProps) {
  // Filter out the current service and get 3 related services
  const relatedServices = SERVICES.filter(
    (service) => service.slug !== currentService.slug
  ).slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {relatedServices.map((service, index) => (
        <motion.a
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>

            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
                <service.icon className="mr-1 h-3 w-3" />
                {service.title}
              </span>
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {service.title} Photography
            </h3>

            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {service.description}
            </p>

            <div className="mt-4 flex items-center text-primary font-medium text-sm">
              <span>Learn More</span>
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
