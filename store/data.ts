import { PackageDetails } from "types/model";

export const package_detail_data = [
    {
      title: "Sallon Car",
      value: "small-size-car",
      packages: [
        {
          name: "PREMIUM DETAILING",
          id: "tier-freelancer",
          href: "#",
          price: "85,000",
          description: "The essentials to provide your best work for clients.",
          features: ["INTERIOR", "EXTERIOR", "PAINT", "ENGINE"],
          mostPopular: false,
          duration: "8 to 9 hours",

        }, 
       {
          name: "Gold Package",
          id: "tier-hobby",
          href: "#",
          price: "75,000",
          description: "The essentials to provide your best work for clients.",
          features: ["INTERIOR", "EXTERIOR", "PAINT"],
          mostPopular: false,
          duration: "6 to 7 hours",

        }, 
   
        {
          name: "DIAMOND PACKAGE",
          duration: "5 to 6 hours",
          id: "tier-startup",
          href: "#",
          price: "47,000",
          description: "A plan that scales with your rapidly growing business.",
          mostPopular: true,
          features: ["INTERIOR", "EXTERIOR", "PAINT"]
        }, 
        {
            name: "SILVER PACKAGE",
            id: "tier-startup",
            href: "#",
            price: "50,000",
            description: "A plan that scales with your rapidly growing business.",
            mostPopular: false,
            features: ["INTERIOR", "EXTERIOR", "PAINT", "PAINT-G"],
            duration: "4 to 6 hours",

          }, 
          {
            name: "BRONZE PACKAGE",
            id: "tier-startup",
            href: "#",
            price: "33,500",
            description: "A plan that scales with your rapidly growing business.",
            mostPopular: false,
            features: ["INTERIOR", "EXTERIOR"],
            duration: "4 to 6 hours",

          }, 
      ],
    },
    {
      title: "SUV",
      value: "mid-size-car",
      packages: [
        {
          name: "PREMIUM DETAILING",

          id: "tier-hobby",
          href: "#",
          price: "95,000 ",
          description: "The essentials to provide your best work for clients.",
          features: ["INTERIOR", "EXTERIOR", "PAINT", "ENGINE"],
          mostPopular: false,
          duration: "8 to 9 hours",

        },
        {
          name: "Gold Package",

          id: "tier-freelancer",
          href: "#",
          price: "85,000",
          duration: "6 to 7 hours",

          description: "The essentials to provide your best work for clients.",
          features: ["INTERIOR", "EXTERIOR", "PAINT"],
          mostPopular: false,
        },
        {
          name: "DIAMOND PACKAGE",

          id: "tier-startup",
          href: "#",
          price: "50,500",
          duration: "5 to 6 hours",
          description: "A plan that scales with your rapidly growing business.",
          features: ["INTERIOR", "EXTERIOR", "ENGINE"],
          mostPopular: true,
        },
        {
            name: "SILVER PACKAGE",
  
            id: "tier-startup",
            href: "#",
            price: "60,000",
            duration: "4 to 6 hours",
            description: "A plan that scales with your rapidly growing business.",
            features: ["INTERIOR", "EXTERIOR", "ENGINE", "PAINT-G"],
            mostPopular: false,
          },    {
            name: "BRONZE PACKAGE",
  
            id: "tier-startup",
            href: "#",
            price: "35,500",
            duration: "4 to 6 hours",
            description: "A plan that scales with your rapidly growing business.",
            features: ["INTERIOR", "EXTERIOR"],
            mostPopular: false,
          },
      ],
    },
  
  /*   {
      title: "Full Size Car",
      value: "full-size-car",
      packages: [
        {
          name: "full-- Hobby999",
          id: "tier-hobby",
          href: "#",
          price: "15",
          description: "The essentials to provide your best work for clients.",
          features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
          mostPopular: false,
        },
        {
          name: "Full --- Freelancer",
          id: "tier-freelancer",
          href: "#",
          price: "30",
          description: "The essentials to provide your best work for clients.",
          features: [
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
            "48-hour support response time",
          ],
          mostPopular: false,
        },
        {
          name: "full ---Startup",
          id: "tier-startup",
          href: "#",
          price: "60",
          description: "A plan that scales with your rapidly growing business.",
          features: [
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
            "Marketing automations",
          ],
          mostPopular: true,
        },
      ],
    }, */
  ] as PackageDetails[];