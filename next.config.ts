import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* All marketing images are served from /public — no remote image domains required. */
  async redirects() {
    return [
      { source: "/reiki", destination: "/about", permanent: true },
      {
        source: "/lactation-counseling",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/parenting-course",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/#testimonials",
        permanent: true,
      },
      { source: "/meet-gemma", destination: "/about", permanent: true },
      {
        source: "/ways-we-work-together",
        destination: "/services",
        permanent: true,
      },
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/services-.html", destination: "/services", permanent: true },
      {
        source: "/ContctPage.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/testimonials.html",
        destination: "/#testimonials",
        permanent: true,
      },
      {
        source: "/lactation-counciling.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/parenting-course.html",
        destination: "/services",
        permanent: true,
      },
      { source: "/reiki.html", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
