/**
 * Central business information.
 *
 * PLACEHOLDERS: phone, whatsapp and email have not been provided by the
 * business yet. Fill these in and every button/link across the site updates.
 */
export const site = {
  name: "Korir & Associates",
  tagline: "Sourcing. Procurement. Collection. Delivery.",
  location: "Eldoret, Kenya",
  /** e.g. "+254 700 000 000" */
  phone: "0728 696 553" as string,
  /** International format, digits only, e.g. "254700000000" */
  whatsapp: "254797477666" as string,
  /** e.g. "hello@korirassociates.co.ke" */
  email: "helpdesk@korirassociates.co.ke" as string,
  hours: "Monday – Saturday, business hours",
} as const;

export const PHONE_PLACEHOLDER = "Phone number to be confirmed";
export const EMAIL_PLACEHOLDER = "Email address to be confirmed";

export function whatsappHref(message?: string): string {
  if (!site.whatsapp) return "/contact";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}

export const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const categories = [
  {
    title: "Household",
    body: "Fridges, TVs, furniture, appliances, gas and home items.",
  },
  {
    title: "Food & Groceries",
    body: "Groceries, fresh produce, packaged food and everyday supplies.",
  },
  {
    title: "Electronics & Technology",
    body: "TVs, phones, computers, accessories and electronics.",
  },
  {
    title: "Business & Office",
    body: "Stationery, office equipment, furniture and business supplies.",
  },
  {
    title: "Hardware & Supplies",
    body: "Tools, electrical items, plumbing, hardware and building supplies.",
  },
  {
    title: "Personal & Shopping",
    body: "Clothing, shoes, gifts and other personal purchases.",
  },
  {
    title: "Other",
    body: "Can’t find your item? Just tell us what you need.",
  },
] as const;

export const steps = [
  { n: "01", title: "Tell Us", body: "Submit what you need." },
  {
    n: "02",
    title: "We Source",
    body: "We locate the item or coordinate with your chosen seller.",
  },
  {
    n: "03",
    title: "We Confirm",
    body: "We confirm availability, pricing and delivery details.",
  },
  { n: "04", title: "We Deliver", body: "The item is collected and delivered." },
] as const;

export const coreServices = [
  { n: "01", title: "Source", body: "We help find and source what you need." },
  {
    n: "02",
    title: "Collect",
    body: "Already bought it? We can collect it from the seller.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "We coordinate delivery to your destination.",
  },
] as const;
