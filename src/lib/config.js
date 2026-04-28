const config = {
  siteName:  process.env.NEXT_PUBLIC_SITE_NAME  || "DANNY Heat & Air LLC",
  phoneMain: process.env.NEXT_PUBLIC_PHONE_MAIN || "(209) 992-9889",
  phoneAlt:  process.env.NEXT_PUBLIC_PHONE_ALT  || "(209) 598-5990",
  email:     process.env.NEXT_PUBLIC_EMAIL      || "dvmheatingncooling@gmail.com",
  city:      process.env.NEXT_PUBLIC_CITY       || "Stockton",
  state:     process.env.NEXT_PUBLIC_STATE      || "CA",
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",

  services: [
    {
      slug: "furnace-repair",
      title: "Furnace Repair",
      category: "heating",
      faIcon: "fa-solid fa-fire-flame-curved",
      tagline: "Fast, reliable furnace repair — same-day service available.",
      description: "A broken furnace is an emergency. Our certified technicians diagnose and repair all major furnace brands, restoring your heat quickly and safely.",
    },
    {
      slug: "furnace-installation",
      title: "Furnace Installation",
      category: "heating",
      faIcon: "fa-solid fa-screwdriver-wrench",
      tagline: "Expert furnace installation with manufacturer warranty.",
      description: "We size, source, and install high-efficiency furnaces tailored to your home. Proper installation means lower bills and longer equipment life.",
    },
    {
      slug: "furnace-maintenance",
      title: "Furnace Maintenance",
      category: "heating",
      faIcon: "fa-solid fa-gear",
      tagline: "Annual tune-ups to prevent costly breakdowns.",
      description: "Preventive maintenance catches small problems before they become expensive emergencies. Includes full inspection, cleaning, and safety check.",
    },
    {
      slug: "air-conditioning-repair",
      title: "AC Repair",
      category: "cooling",
      faIcon: "fa-solid fa-temperature-arrow-down",
      tagline: "Same-day AC repair — we beat the heat for you.",
      description: "Don't suffer in the heat. Our technicians carry common parts on every truck for fast, first-visit fixes on all AC makes and models.",
    },
    {
      slug: "air-conditioner-installation",
      title: "AC Installation",
      category: "cooling",
      faIcon: "fa-solid fa-wind",
      tagline: "Right-sized AC systems for maximum efficiency.",
      description: "We install top-rated air conditioning systems and handle everything — from load calculation to startup — for a perfectly comfortable home.",
    },
    {
      slug: "air-conditioning-maintenance",
      title: "AC Maintenance",
      category: "cooling",
      faIcon: "fa-solid fa-sliders",
      tagline: "Keep your AC running at peak performance all season.",
      description: "Our seasonal maintenance tune-ups extend equipment life, improve efficiency, and preserve your warranty.",
    },
    {
      slug: "commercial-refrigeration-repair",
      title: "Commercial Refrigeration Repair",
      category: "cooling",
      faIcon: "fa-solid fa-temperature-low",
      tagline: "Keep your business running with fast commercial refrigeration repair.",
      description: "Walk-in coolers, reach-in freezers, ice machines — we diagnose and repair all commercial refrigeration equipment to minimize downtime and protect your inventory.",
    },
  ],

  serviceAreas: [
    "Stockton", "Lodi", "Manteca", "Tracy", "Modesto", "Galt"
  ],

  testimonials: [
    {
      name: "Norma P.",
      stars: 5,
      title: "Highly Recommended",
      text: "Very knowledgeable, straightforward, and forthcoming! One of the very few companies that still has core values based on transparency and integrity!",
      source: "Google",
    },
    {
      name: "Charlene S.",
      stars: 5,
      title: "Knowledgeable & Efficient",
      text: "He arrived on time, quickly determined the issue, and in less than an hour the entire job was completed.",
      source: "Google",
    },
  ],

  promotions: [
    { title: "$50 OFF",      subtitle: "Any repair over $300",     expires: "Dec 31, 2026" },
    { title: "FREE Tune-Up",  subtitle: "With new system install",  expires: "Ongoing" },
    { title: "$25 OFF",       subtitle: "First-time customers",     expires: "Ongoing" },
  ],

};

export default config;
