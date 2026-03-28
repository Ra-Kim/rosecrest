import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rosecrestgroupltd.co.uk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      // Pages
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/faq", destination: "/faqs", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      {
        source: "/party-wall-notice-generator",
        destination: "/services/party-wall/notice-generator",
        permanent: true,
      },
      {
        source: "/residential-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/social-housing-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/commercial-services",
        destination: "/services",
        permanent: true,
      },
      { source: "/trade-services", destination: "/services", permanent: true },

      // Services
      {
        source: "/service/rics-level-1-to-3-surveys",
        destination: "/homebuyer",
        permanent: true,
      },
      {
        source: "/service/energy-performance-certificate-epc",
        destination: "/services/epc",
        permanent: true,
      },
      {
        source: "/environmental-reports",
        destination: "/services/environmental-reports",
        permanent: true,
      },
      {
        source: "/service/commercial-energy-performance-certificate-epc",
        destination: "/services/epc",
        permanent: true,
      },
      {
        source: "/service/stock-condition-surveys",
        destination: "/services/stock-condition",
        permanent: true,
      },
      {
        source: "/service/party-wall",
        destination: "/services/party-wall",
        permanent: true,
      },
      {
        source: "/service/damp-mould-and-condensation-prevention-survey",
        destination: "/services/damp-mould",
        permanent: true,
      },
      {
        source: "/service/expert-witness-cpr-35-inspections",
        destination: "/services/cpr-35-reports",
        permanent: true,
      },
      {
        source: "/service/tiling",
        destination: "/services/tiling",
        permanent: true,
      },
      {
        source: "/service/plumbing",
        destination: "/services/plumbing",
        permanent: true,
      },
      {
        source: "/service/plastering",
        destination: "/services/plastering",
        permanent: true,
      },
      {
        source: "/service/house-clearance",
        destination: "/services/house-clearance",
        permanent: true,
      },
      {
        source: "/service/handyman-services",
        destination: "/services/handyman",
        permanent: true,
      },
      {
        source: "/service/deep-cleaning",
        destination: "/services/deep-cleaning",
        permanent: true,
      },
      {
        source: "/service/decorating-and-painting",
        destination: "/services/painting-decorating",
        permanent: true,
      },
      {
        source: "/service/carpet-cleaning",
        destination: "/services/carpet-cleaning",
        permanent: true,
      },
      {
        source: "/service/carpentry",
        destination: "/services/carpentry",
        permanent: true,
      },
      {
        source: "/service/housing-disrepair-surveys",
        destination: "/services/housing-disrepair",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
