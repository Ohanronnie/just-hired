interface IdashboardOverview {
  title: string;
  number: string | number;
  isPositive: boolean;
  percentage: number;
  day: string;
}
export const dashboarditle: IdashboardOverview[][] = [
  [
    {
      title: "Line - Up",
      number: 760,
      isPositive: false,
      percentage: 42,
      day: "Today",
    },
    {
      title: "Walk in",
      number: 260,
      isPositive: true,
      percentage: 42,
      day: "Today",
    },
    {
      title: "Select",
      number: 15,
      isPositive: false,
      percentage: 15,
      day: "Today",
    },
    {
      title: "Joined",
      number: 15,
      isPositive: false,
      percentage: 42,
      day: "Today",
    },
  ],
  [
    {
      title: "Recruiters",
      number: 560,
      isPositive: false,
      percentage: 42,
      day: "Today",
    },
    {
      title: "Active locations",
      number: 260,
      isPositive: true,
      percentage: 42,
      day: "Today",
    },
    {
      title: "Active Company",
      number: 15,
      isPositive: false,
      percentage: 15,
      day: "Today",
    },
    {
      title: "Induction",
      number: 25,
      isPositive: false,
      percentage: 42,
      day: "Today",
    },
  ],
  [
    {
      title: "Total Form",
      number: 560,
      isPositive: false,
      percentage: 42,
      day: "Today",
    },
    {
      title: "Total Contact form",
      number: 260,
      isPositive: true,
      percentage: 42,
      day: "Today",
    },
    {
      title: "Active Company",
      number: 15,
      isPositive: false,
      percentage: 15,
      day: "Today",
    },
    {
      title: "Total Company Form",
      number: 25,
      isPositive: false,
      percentage: 42,
      day: "Today",
    },
  ],
];

export const dashboardSubCards = [
  {
    title: "Top Recruiter",
    subTitle: "Based On The Line up",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Recruiter",
    subTitle: "Based On Selects",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Recruter",
    subTitle: "Based On Joiner",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Team",
    subTitle: "Based On The Line up",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Team",
    subTitle: "Based On Selects",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Team",
    subTitle: "Based On Joiner",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Location",
    subTitle: "Based On The Line up",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Location",
    subTitle: "Based On Selects",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
  {
    title: "Top Location",
    subTitle: "Based On Joiner",
    company: [
      {
        name: "Accenture",
        amount: 400,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance",
        amount: 239,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "EXL",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Foundever",
        amount: 134,
        isPositive: false,
        percentage: 55,
      },
      {
        name: "Accenture",
        amount: 113,
        isPositive: true,
        percentage: 68,
      },
      {
        name: "Teleperformance Vizmin",
        amount: 132,
        isPositive: false,
        percentage: 35,
      },
      {
        name: "EXL Manila",
        amount: 200,
        isPositive: true,
        percentage: 68,
      },
    ],
  },
];

export const paymentOverview: IdashboardOverview[] = [
  {
    title: "upload billing",
    number: 70000000,
    isPositive: false,
    percentage: 42,
    day: "This Month",
  },
  {
    title: "Billing Point",
    number: 2800,
    isPositive: true,
    percentage: 42,
    day: "This Month",
  },
  {
    title: "Claw back amount",
    number: 25000,
    isPositive: false,
    percentage: 42,
    day: "This Month",
  },
];

export const paymentOverview2: IdashboardOverview[] = [
  {
    title: "Clawback Point",
    number: 1,
    isPositive: true,
    percentage: 64,
    day: "This Month",
  },
  {
    title: "Team Leader Incentive",
    number: 400000,
    isPositive: true,
    percentage: 42,
    day: "This Month",
  },
  {
    title: "Team Leader Salary",
    number: 400000,
    isPositive: false,
    percentage: 42,
    day: "This Month",
  },
];

export const dashBoardTopPerformer = [
  {
    name: "Ajao Adekunle",
    flag: "/flag/nigeria.png",
    avatar: "/avatar/user4.png",
    country: "Nigeria",
  },
  {
    name: "Akang Helen",
    flag: "/flag/nigeria.png",
    avatar: "/avatar/user5.png",
    country: "Nigeria",
  },
  {
    name: "Okafor Ifeoma",
    flag: "/flag/kenya.png",
    avatar: "/avatar/user6.png",
    country: "kenya",
  },
];
