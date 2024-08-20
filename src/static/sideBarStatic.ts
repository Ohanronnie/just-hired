import menuIcons from "@/icons/MenuIcons";
import { SvgIcons } from "@/icons/SvgIconts";
import { LucideProps } from "lucide-react";

interface ISideBarContent {
  section: string;
  baseUrl: string;
  sectionIcon: (props: LucideProps) => JSX.Element;
  sectionItem: {
    title: string;
    titleIcon: (props: LucideProps) => JSX.Element;
    subMenu: {
      text: string;
      link: string;
    }[];
  }[];
}

export const sideBarContent: ISideBarContent[] = [
  {
    section: "RECRUITMENT",
    sectionIcon: menuIcons.recruitment,
    baseUrl: "/recruit",
    sectionItem: [
      {
        title: "Company",
        titleIcon: menuIcons.companyBlock,
        subMenu: [
          { text: "Add Company", link: "/recruit/company/add" },
          { text: "View Companies", link: "/recruit/company/view" },
        ],
      },
      {
        title: "Export Candidate",
        titleIcon: menuIcons.companyBlock,
        subMenu: [{
          text: "Export Candidate", link: "/recruit/export-candidate"
        }]
      },
      {
        title: "Job Location",
        titleIcon: menuIcons.jobBag,
        subMenu: [
          { text: "Add Location", link: "/recruit/location/add" },
          { text: "View Location", link: "/recruit/location/view" },
        ],
      },
      {
        title: "Line Up",
        titleIcon: menuIcons.lineUp,
        subMenu: [
          { text: "Add Line Up", link: "/recruit/lineup/add" },
          { text: "View Line Up", link: "/recruit/lineup/view" },
          { text: "Group Line Up", link: "/recruit/lineup/group" },
        ],
      },
      {
        title: "Candidate Review",
        titleIcon: menuIcons.candidateReview,
        subMenu: [
          { text: "Add Review", link: "/recruit/review/add" },
          { text: "View Review", link: "/recruit/review/add" },
        ],
      },
      {
        title: "Tips And Space",
        titleIcon: menuIcons.tips,
        subMenu: [
          { text: "personal Space", link: "/recruit/tips/personal" },
          { text: "General Space", link: "/recruit/tips/general" },
          { text: "Dashboard Information", link: "/recruit/tips/info" },
        ],
      },
      {
        title: "Task",
        titleIcon: menuIcons.tasks,
        subMenu: [
          { text: "Add Task", link: "/recruit/task/add" },
          { text: "View Task", link: "/recruit/task/view" },
        ],
      },
    ],
  },
  {
    section: "ADMINISTRATION",
    baseUrl: "/admin",
    sectionIcon: SvgIcons.AdminHead,
    sectionItem: [
      {
        title: "Country",
        titleIcon: menuIcons.companyBlock,
        subMenu: [
          { text: "Add Country", link: "/admin/country/add" },
          { text: "View Country", link: "/admin/country/view" },
        ],
      },
      {
        title: "Education",
        titleIcon: menuIcons.education,
        subMenu: [
          { text: "Add Education", link: "/admin/education/add" },
          { text: "View Education", link: "/admin/education/view" },
        ],
      },
      {
        title: "Experience",
        titleIcon: menuIcons.experience,
        subMenu: [
          { text: "Add Experience", link: "/admin/experience/add" },
          { text: "View Experience", link: "/admin/experience/view" },
        ],
      },
      {
        title: "Human Resources",
        titleIcon: menuIcons.tasks,
        subMenu: [
          { text: "Add User", link: "/admin/hr/add" },
          { text: "View User", link: "/admin/hr/view" },
          { text: "Create Group", link: "/admin/hr/group/create" },
          { text: "View Group", link: "/admin/hr/group/view" },
          { text: "Create Team Leader", link: "/admin/hr/create" },
          { text: "View Team Leader", link: "/admin/hr/team" },
        ],
      },
      {
        title: "Payment",
        titleIcon: menuIcons.tasks,
        subMenu: [
          { text: "View Payment", link: "/admin/payment/view" },
          { text: "Complete Payment", link: "/admin/payment/complete" },
          { text: "Group Payment", link: "/admin/payment/group" },
          { text: "Team Leader Incentive", link: "/admin/payment/team" },
          { text: "Add Fixed Payment", link: "/admin/payment/add" },
          { text: "View Fixed Payment", link: "/admin/payment/view" },
          { text: "Payment Settings", link: "/admin/payment/settings" },
        ],
      },
      {
        title: "Interested Recruiter",
        titleIcon: menuIcons.interested,
        subMenu: [{ text: "View Interets", link: "/admin/interest/view" }],
      },
      {
        title: "Export Candidaates",
        titleIcon: menuIcons.export,
        subMenu: [{ text: "View Candidates", link: "/admin/candidates/view" }],
      },
      {
        title: "Form",
        titleIcon: menuIcons.forms,
        subMenu: [
          { text: "View Forms", link: "/admin/form/view" },
          { text: "Create Form", link: "/admin/form/create" },
        ],
      },
      {
        title: "Services",
        titleIcon: menuIcons.services,
        subMenu: [{ text: "View Services", link: "/admin/servcies/view" }],
      },
    ],
  },
];

export const sideBarUtil = [
  {
    icon: menuIcons.message,
    link: "/message",
    title: "Message",
  },
  {
    icon: menuIcons.notification,
    link: "/notification",
    title: "Notification",
  },
  {
    icon: menuIcons.account,
    link: "/account",
    title: "Account",
  },
];

export const profileDashboardLinks = [
  {
    icon: menuIcons.account,
    link: "/interest",
  },
  {
    icon: menuIcons.message,
    link: "/message",
  },
  {
    icon: menuIcons.notification,
    link: "/notification",
  },
];

export const dashbarMessage = [
  {
    src: "/avatar/user2.png",
    name: "Ajao Adekunle",
    message: "Hello Helen, I want to ask you abo...",
  },
  {
    src: "/avatar/user3.png",
    name: "Okafor Ifeoma Obianuju",
    message: "Hello Helen, I want to ask you abo...",
  },
];

export const dashBoardRecentActicity = [
  "You  Changed John Oroca Kevin to select ",
  "You  added  a John Oroca Kevin to EXL at Aphaland",
  "You  added  a Andrea Babante Torreon to Teleperformance at Cebu",
  "You  added  a Arsenio Jr Condolon to Teleperformance at Cebu",
];
