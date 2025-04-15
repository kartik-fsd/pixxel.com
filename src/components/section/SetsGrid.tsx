import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Set {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface SetsGridProps {
  sets: Set[];
  categories: string[];
}

const ITEMS_PER_PAGE = 9;

export function SetsGrid({ sets, categories }: SetsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Filter out "All" from categories if it exists
  const filteredCategories = categories.filter(
    (category) => category.toLowerCase() !== "all"
  );

  // Filter and memoize sets based on selected category
  const filteredSets = useMemo(() => {
    if (selectedCategory === "All") {
      return sets;
    }
    return sets.filter((set) => set.category === selectedCategory);
  }, [sets, selectedCategory]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredSets.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSets = filteredSets.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset to first page when category changes
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setCurrentPage(1);
    // Short timeout to ensure smooth transition
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle page changes
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    setIsLoading(true);
    setCurrentPage(page);

    // Smooth scroll with a slight delay for better UX
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsLoading(false);
    }, 300);
  };

  // Generate page numbers for pagination
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  // Preload images for smoother transitions
  useEffect(() => {
    paginatedSets.forEach((set) => {
      const img = new Image();
      img.src = set.imageUrl;
    });
  }, [paginatedSets]);

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Item variants for smooth animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <motion.button
              key="All"
              onClick={() => handleCategoryChange("All")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              All Sets
            </motion.button>
            {filteredCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Sets Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "visible"}
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedSets.map((set) => (
              <motion.a
                href={`/${set.id}`}
                key={set.id}
                variants={itemVariants}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={set.imageUrl}
                    alt={set.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {set.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {set.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {set.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>Available All Week</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination with improved animations */}
        {totalPages > 1 && (
          <motion.div
            className="mt-12 flex justify-center items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {pageNumbers.map((pageNumber) => (
              <motion.button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                  currentPage === pageNumber
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + pageNumber * 0.05 }}
              >
                {pageNumber}
              </motion.button>
            ))}

            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
