import type { InterestOption, ProposalOption } from "../types";

export const initialForm = {
  interests: [],
  proposalType: [],
  billAmount: "",
  billPeriod: "Quarterly",
  solarExisting: "",
  solarExistingSize: "",
  solarExistingAge: "",
  solarUpgradeGoal: "",
  batteryExisting: "",
  batteryExistingCapacity: "",
  batteryExistingAge: "",
  batteryUpgradeGoal: "",
  inverterExisting: "",
  inverterExistingAge: "",
  inverterExistingBrand: "",
  inverterUpgradeGoal: "",
  evExisting: "",
  evExistingChargerType: "",
  evUpgradeGoal: "",
  solarSystemSize: "",
  batteryCapacity: "",
  inverterNeed: "",
  heatPumpHouseholdSize: "",
  heatPumpCurrentSystem: "",
  evChargerType: "",
  evInstallLocation: "",
  roofType: "",
  phaseType: "",
  switchboardDistance: "",
  timeframe: "",
  fullName: "",
  phone: "",
  email: "",
  address: "",
  propertyType: "Residential",
  notes: "",
  consent: false,
};

export const interestOptions: InterestOption[] = [
  { label: "Solar System", value: "Solar System", icon: "sun" },
  { label: "Battery Storage", value: "Battery Storage", icon: "battery" },
  // { label: "Inverter", value: "Inverter", icon: "zap" },
  // { label: "Heat Pump", value: "Heat Pump", icon: "flame" },
  { label: "EV Charger", value: "EV Charger", icon: "car" },
];

export const proposalOptions: ProposalOption[] = [
  {
    title: "Budget-Friendly System",
    value: "Budget-Friendly System",
    description: "Affordable and reliable setup with lower upfront investment.",
  },
  {
    title: "Premium Performance System",
    value: "Premium Performance System",
    description:
      "High-quality components, stronger warranty, and better efficiency.",
  },
  {
    title: "Maximum Savings System",
    value: "Maximum Savings System",
    description: "Optimised for long-term savings with strong performance.",
  },
];

export const solarSizes = [
  "Not sure — recommend for me",
  "6.6 kW Solar",
  "10 kW Solar",
  "13.2 kW Solar",
  "16 kW Solar",
  "20 kW+ Solar",
];
export const batterySizes = [
  "Not sure — recommend for me",
  "5 kWh",
  "10 kWh",
  "13 kWh",
  "16 kWh",
  "20+ kWh",
];
export const roofTypes = [
  "Tin / Colorbond",
  "Terracotta Tile",
  "Concrete Tile",
  "Flat Roof",
  "Metal Roof",
  "Not sure",
  "Other",
];
export const phases = ["Single Phase", "Three Phase", "Not sure"];
export const existingSystemOptions = ["I want to upgrade current system", "No"];
export const systemAgeOptions = [
  "0–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
  "Not sure",
];
export const existingSolarSizes = [
  "Under 5 kW",
  "5–6.6 kW",
  "7–10 kW",
  "10 kW+",
  "Not sure",
];
export const existingBatteryCapacities = [
  "Under 5 kWh",
  "5–10 kWh",
  "10–15 kWh",
  "15 kWh+",
  "Not sure",
];
export const existingEvChargerTypes = [
  "Portable charger",
  "7 kW wall charger",
  "11 kW charger",
  "22 kW charger",
  "Not sure",
];
export const solarUpgradeGoals = [
  "Add more panels",
  "Add battery",
  "Replace old system",
  "Improve savings",
  "Not sure",
];
export const batteryUpgradeGoals = [
  "Add more capacity",
  "Replace old battery",
  "Add backup power",
  "Improve self-consumption",
  "Not sure",
];
export const inverterUpgradeGoals = [
  "Replace faulty inverter",
  "Upgrade to hybrid inverter",
  "Battery-ready upgrade",
  "Improve monitoring",
  "Not sure",
];
export const evUpgradeGoals = [
  "Faster charging",
  "Replace current charger",
  "Add smart charging",
  "Solar charging integration",
  "Not sure",
];
export const inverterNeeds = [
  "New solar inverter",
  "Replace old inverter",
  "Hybrid inverter for battery",
  "Not sure",
];
export const heatPumpHouseholdSizes = [
  "1–2 people",
  "3–4 people",
  "5+ people",
  "Commercial use",
];
export const hotWaterSystems = [
  "Electric",
  "Gas",
  "Solar hot water",
  "Not sure",
];
export const evChargerTypes = [
  "7 kW single phase",
  "11 kW three phase",
  "22 kW three phase",
  "Not sure — recommend for me",
];
export const installLocations = [
  "Garage",
  "Carport",
  "Driveway",
  "Outdoor wall",
  "Not sure",
];
export const switchboardDistances = ["Within 5m", "5–10m", "10m+", "Not sure"];
export const timeframes = [
  "Immediately",
  "1–3 weeks",
  "1–2 months",
  "3+ months",
  "Just researching",
];
export const propertyTypes = [
  "Residential",
  "Commercial",
  "Business / Industrial",
  "Farm / Rural",
];

export function isExistingOrUpgrade(value: string): boolean {
  return value === "Yes" || value === "I want to upgrade current system";
}

export function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".") && email.length > 5;
}
