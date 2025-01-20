import { useState } from "react";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Dialog } from "@mui/material";

const posts = [
  {
    title: "Revolutionizing Business with AI Systems",
    excerpt:
      "Discover how our AI systems are transforming industries by automating processes and providing deep insights.",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ERP Solutions for Modern Enterprises",
    excerpt:
      "Learn about our comprehensive ERP solutions that streamline operations and enhance productivity.",
    date: "Mar 25, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Innovative CRM Systems for Customer Engagement",
    excerpt:
      "Explore our CRM systems designed to improve customer relationships and drive sales growth.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Future of IoT in Business",
    excerpt:
      "Understand how our IoT solutions are connecting devices and driving innovation in various sectors.",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Computing: Transforming IT Infrastructure",
    excerpt:
      "Learn how our cloud computing solutions are enabling businesses to scale and innovate rapidly.",
    date: "Feb 10, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReadMore = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 3000);
  };

  return (
    <main >
      <section className="relative h-[95vh] bg-white bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230801/pngtree-top-tips-to-make-money-blogging-image_12958761.jpg')] bg-center bg-cover">
        <div className="absolute  bg-gray-100 w-[100%] h-[95vh] opacity-60"></div>
        <section className="relative pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-22">
            <div className="text-center">
              <span className="text-primary text-2xl font-bold tracking-wide uppercase">
                Blogs
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Insights &
                <span className="text-primary"> Strategies</span>
              </h1>
              <p className="text-lg text-gray-600 mb-4 max-w-xl tracking-wide mx-auto">
                Stay ahead of the curve with actionable tips, industry trends,
                and proven strategies. From web development to digital
                marketing, discover how to boost your business and drive
                results.
              </p>
              <Button
              variant="primary"
              size="md"
              className="group"
            >
              Let's Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </div>
          </div>
        </section>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                    onClick={handleReadMore}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-6 text-center">
          <Sparkles className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Coming Soon!</h3>
          <p className="text-gray-600">
            This page will be available shortly. Stay tuned for exciting
            updates!
          </p>
        </div>
      </Dialog>
    </main>
  );
}
