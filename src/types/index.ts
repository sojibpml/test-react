export interface FormData {
  interests: string[];
  proposalType: string;
  billAmount: string;
  billPeriod: string;
  solarExisting: string;
  batteryExisting: string;
  inverterExisting: string;
  evExisting: string;
  solarExistingSize: string;
  solarExistingAge: string;
  solarUpgradeGoal: string;
  batteryExistingCapacity: string;
  batteryExistingAge: string;
  batteryUpgradeGoal: string;
  inverterExistingAge: string;
  inverterExistingBrand: string;
  inverterUpgradeGoal: string;
  evExistingChargerType: string;
  evUpgradeGoal: string;
  solarSystemSize: string;
  batteryCapacity: string;
  inverterNeed: string;
  heatPumpHouseholdSize: string;
  heatPumpCurrentSystem: string;
  evChargerType: string;
  evInstallLocation: string;
  roofType: string;
  phaseType: string;
  switchboardDistance: string;
  timeframe: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  propertyType: string;
  notes: string;
  consent: boolean;
}

export interface InterestOption {
  label: string;
  value: string;
  icon: string;
}

export interface ProposalOption {
  title: string;
  value: string;
  description: string;
}

export interface AuthState {
  user: string | null;
  isLoading: boolean;
}

//  Sidebar
export type SidebarItem = {
  label: string;
  icon: any;
  count?: number;
  dot?: boolean;
};
