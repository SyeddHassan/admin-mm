import AdvertismentManagementSystemStats01Icon from "../../public/icons/advertisement-management-system-stats-01-icon.svg";
import AdvertismentManagementSystemStats02Icon from "../../public/icons/advertisement-management-system-stats-02-icon.svg";

export const campaignDisplayOptions = [
  "Standard",
  "Secure",
  "Wallet",
  "Everywhere",
];

export const AdvertismentManagementSystemStatsCardsData = [
  {
    stats: 1,
    bgColor: "#F9A825",
    icon: AdvertismentManagementSystemStats01Icon,
    title: "Total Campaigns",
    detail: "67,124",
    profit: true,
    analyticsPerentage: "3",
  },

  {
    stats: 2,
    bgColor: "#03A9F4",
    icon: AdvertismentManagementSystemStats02Icon,
    title: "Total Audience",
    detail: "412,893",
    profit: false,
    analyticsPerentage: "5",
  },

  {
    stats: 3,
    bgColor: "#4CAF50",
    iconTitle: "16/3",
    title: "Total Conversions",
    detail: "193,033",
    profit: false,
    analyticsPerentage: "3",
  },

  {
    stats: 4,
    bgColor: "#AB40E8",
    iconTitle: "60%",
    title: "Goal Achieved",
    title2: "Peak Time:",
    detail: "12:14",
  },
];

export const AdvertisementCampaignsTableData = [
  {
    adStatus: "active",
    campaignId: 12839712893712,
    timestamp: "26/01/2024 12:42 AM",
    campaignType: "Text",
    campaignDisplay: "Everywhere",
    projectMode: true,
    client: "Manpower",
    zone: "Worldwide",
    impressions: 2000,
    conversions: 839,
  },

  {
    adStatus: "pause",
    campaignId: 18475692345981,
    timestamp: "12/01/2024 12:42 AM",
    campaignType: "Image",
    campaignDisplay: "Secure",
    projectMode: false,
    client: "Arcor",
    zone: "America",
    zoneCountries: [
      { country: "Chile" },
      { country: "Brasil" },
      { country: "Uruguay" },
    ],
    impressions: 432,
    conversions: 99,
  },

  {
    adStatus: "expired",
    campaignId: 12345678901234,
    timestamp: "08/02/2024 11:00 PM",
    campaignType: "Image",
    campaignDisplay: "Standard",
    projectMode: false,
    client: "Quantas",
    zone: "Europe",
    zoneCountries: [
      { country: "Germany" },
      { country: "Italy" },
      { country: "France" },
    ],
    impressions: 12000,
    conversions: 2,
  },

  {
    adStatus: "expired",
    campaignId: 56789012345678,
    timestamp: "23/09/2024 03:15 PM",
    campaignType: "Text",
    campaignDisplay: "Wallet",
    projectMode: true,
    client: "AirFrance",
    zone: "Europe",
    zoneCountries: [
      { country: "Germany" },
      { country: "Italy" },
      { country: "United Kingdom" },
    ],
    impressions: 109,
    conversions: 78,
  },

  {
    adStatus: "queued",
    campaignId: 91011121314151,
    timestamp: "02/08/2024 09:45 AM",
    campaignType: "Image",
    campaignDisplay: "Secure",
    projectMode: true,
    client: "ToGoodToGo",
    zone: "Worldwide",
    impressions: 5436,
    conversions: 2,
  },

  {
    adStatus: "active",
    campaignId: 14151617181920,
    timestamp: "14/06/2024 08:30 AM",
    campaignType: "Text",
    campaignDisplay: "Everywhere",
    projectMode: false,
    client: "GlobalTech",
    zone: "Asia",
    zoneCountries: [
      { country: "India" },
      { country: "China" },
      { country: "Japan" },
    ],
    impressions: 83000,
    conversions: 302,
  },

  {
    adStatus: "queued",
    campaignId: 19202122232425,
    timestamp: "05/11/2024 10:00 PM",
    campaignType: "Image",
    campaignDisplay: "Wallet",
    projectMode: true,
    client: "EcoFriendly",
    zone: "Africa",
    zoneCountries: [
      { country: "Nigeria" },
      { country: "South Africa" },
      { country: "Kenya" },
    ],
    impressions: 5438,
    conversions: 150,
  },

  {
    adStatus: "pause",
    campaignId: 25262728293031,
    timestamp: "19/03/2024 06:15 PM",
    campaignType: "Text",
    campaignDisplay: "Standard",
    projectMode: false,
    client: "TravelBuddy",
    zone: "Australia",
    zoneCountries: [{ country: "Australia" }, { country: "New Zealand" }],
    impressions: 10324,
    conversions: 412,
  },

  {
    adStatus: "expired",
    campaignId: 32333435363738,
    timestamp: "21/07/2024 01:20 PM",
    campaignType: "Image",
    campaignDisplay: "Wallet",
    projectMode: true,
    client: "InnovateX",
    zone: "Worldwide",
    impressions: 200965,
    conversions: 954,
  },

  {
    adStatus: "queued",
    campaignId: 39404142434445,
    timestamp: "11/04/2024 04:50 PM",
    campaignType: "Text",
    campaignDisplay: "Everywhere",
    projectMode: false,
    client: "HealthCare+",
    zone: "North America",
    zoneCountries: [
      { country: "United States" },
      { country: "Canada" },
      { country: "Mexico" },
    ],
    impressions: 157664,
    conversions: 678,
  },

  {
    adStatus: "active",
    campaignId: 46474849505152,
    timestamp: "30/08/2024 09:10 AM",
    campaignType: "Image",
    campaignDisplay: "Wallet",
    projectMode: true,
    client: "GreenFuture",
    zone: "Europe",
    zoneCountries: [
      { country: "Spain" },
      { country: "Portugal" },
      { country: "Netherlands" },
    ],
    impressions: 19345,
    conversions: 830,
  },
];
