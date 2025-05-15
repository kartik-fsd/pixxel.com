import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  Sparkles,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  featuredSets?: Set[]; // Make this optional in case it's not provided
}

const ITEMS_PER_PAGE = 6; // 2 rows of 3 items

export function SetsGrid({ sets, categories, featuredSets }: SetsGridProps) {
  // Function to get URL parameters
  const getUrlParams = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return {
        page: params.get("page"),
        category: params.get("category"),
      };
    }
    return { page: null, category: null };
  };

  // Get initial states from URL parameters or defaults
  const getInitialCategory = () => {
    const { category } = getUrlParams();
    return category || "All";
  };

  const getInitialPage = () => {
    const { page } = getUrlParams();
    return page ? parseInt(page, 10) : 1;
  };

  const [selectedCategory, setSelectedCategory] = useState(
    getInitialCategory()
  );
  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredSet, setHoveredSet] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // After component mounts, confirm we're on the client side
  useEffect(() => {
    setIsClient(true);

    // Get parameters from URL when component mounts
    if (typeof window !== "undefined") {
      const { page, category } = getUrlParams();
      if (category) setSelectedCategory(category);
      if (page) setCurrentPage(parseInt(page, 10));
    }
  }, []);

  // Update URL when page or category changes
  useEffect(() => {
    if (isClient) {
      const url = new URL(window.location.href);
      url.searchParams.set("page", currentPage.toString());
      url.searchParams.set("category", selectedCategory);

      // Update URL without refreshing the page
      window.history.replaceState({}, "", url.toString());
    }
  }, [currentPage, selectedCategory, isClient]);

  // Filter categories
  const filteredCategories = [
    "All",
    ...categories.filter((category) => category.toLowerCase() !== "all"),
  ];

  // Filter sets based on selected category
  const filteredSets =
    selectedCategory === "All"
      ? sets
      : sets.filter((set) => set.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredSets.length / ITEMS_PER_PAGE);
  const paginatedSets = filteredSets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Ensure current page is valid when filtered sets change
  useEffect(() => {
    const maxPage = Math.max(1, totalPages);
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [filteredSets.length, totalPages, currentPage]);

  // Featured sets - take first 5 sets
  const displayFeaturedSets = featuredSets || sets.slice(0, 7);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);

    // Only reset page to 1 if the category actually changed
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setCurrentPage(1);
    } else {
      setSelectedCategory(category);
    }

    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle page changes
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setIsLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("sets-grid")?.offsetTop - 100,
        behavior: "smooth",
      });
      setIsLoading(false);
    }, 300);
  };

  // Carousel scroll controls
  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount =
      direction === "left"
        ? -carouselRef.current.clientWidth * 0.75
        : carouselRef.current.clientWidth * 0.75;

    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Preload images for smoother transitions
  useEffect(() => {
    paginatedSets.forEach((set) => {
      const img = document.createElement("img");
      img.src = set.imageUrl;
    });
  }, [paginatedSets]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  // Function to generate links with current pagination state
  const generateSetLink = (setId: string) => {
    return `/sets/${setId}`;
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Sets - Compact Carousel */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">Featured Sets</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="p-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-5 pb-3 -mx-4 px-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {displayFeaturedSets.map((set, index) => (
              <div
                key={set.id}
                className="relative min-w-[200px] md:min-w-[220px] snap-start first:pl-4 last:pr-4"
              >
                <a
                  href={generateSetLink(set.id)}
                  className="block group"
                  onMouseEnter={() => setHoveredSet(set.id)}
                  onMouseLeave={() => setHoveredSet(null)}
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-sm border border-gray-100">
                    <img
                      src={set.imageUrl}
                      alt={set.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${
                        hoveredSet === set.id ? "opacity-100" : "opacity-50"
                      }`}
                    />

                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs">
                      {set.category}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-3">
                      <h3 className="text-sm font-medium text-white line-clamp-1">
                        {set.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Exclusive Photography Spaces
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Elevate Your Photoshoots
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover our meticulously crafted photography sets designed to bring
            your creative vision to life
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {filteredCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white border border-gray-200 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {category === "All" ? "All Sets" : category}
              </motion.button>
            ))}
          </div>

          {selectedCategory !== "All" && (
            <div className="text-center mb-8">
              <span className="text-sm text-muted-foreground">
                Showing {filteredSets.length} sets in "{selectedCategory}"
                category
              </span>
            </div>
          )}
        </div>

        {/* Sets Grid with Pagination */}
        <div id="sets-grid">
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
                <motion.div
                  key={set.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={generateSetLink(set.id)}
                    className="group block h-full"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={set.imageUrl}
                          alt={set.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                          {set.category}
                        </div>

                        {/* View Button on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                            <Camera className="w-4 h-4" />
                            View Details
                          </div>
                        </div>
                      </div>

                      <div className="p-5 flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {set.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 flex-grow">
                          {set.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span>Premium Set</span>
                          </div>

                          <motion.div
                            className="text-primary"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                    currentPage === page
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
