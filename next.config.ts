import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-sanity", "sanity", "@sanity/vision"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
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
        destination: "/testimonials",
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
