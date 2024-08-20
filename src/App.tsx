import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import FullLoader from "./components/global/FullLoader";
import ScrollRestore from "./components/global/ScrollRestore";
import QueryProvider from "./components/global/QueryProvider";
import Toaster from "./components/ui/sooner";
import Home from "./components/global/Home";

const LogIn = lazy(() => import("./pages/auth/LogIn"));
const Dashboard = lazy(() => import("./pages/admin/dashboard/DashBoard"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const NewPassword = lazy(() => import("./pages/auth/NewPassword"));
const HrList = lazy(() => import("./pages/admin/hr/user/HrList"));
const HrAdd = lazy(() => import("./pages/admin/hr/user/HrAdd"));
const HrEdit = lazy(() => import("./pages/admin/hr/user/HrEdit"));
const AddCountry = lazy(() => import("./pages/admin/country/AddCountry"));
const PaymentDashBoard = lazy(
  () => import("./pages/admin/dashboard/PaymentDashBoard"),
);
const CountryList = lazy(() => import("./pages/admin/country/CountryList"));
const CountryEdit = lazy(() => import("./pages/admin/country/CountryEdit"));
const AddEducation = lazy(() => import("./pages/admin/education/AddEducation"));
const EditEducation = lazy(
  () => import("./pages/admin/education/EditEducation"),
);
const EducationList = lazy(
  () => import("./pages/admin/education/EduactionList"),
);
const AddExperience = lazy(
  () => import("./pages/admin/experience/AddExperience"),
);
const ExperienceList = lazy(
  () => import("./pages/admin/experience/ExperienceList"),
);
const EditExperience = lazy(
  () => import("./pages/admin/experience/EditExperience"),
);
const AddGroup = lazy(() => import("./pages/admin/hr/group/AddGroup"));
const GroupList = lazy(() => import("./pages/admin/hr/group/GroupList"));
const GroupEdit = lazy(() => import("./pages/admin/hr/group/GroupEdit"));
const CreateForm = lazy(() => import("./pages/form/CreateForm"));

const AddLineUpWrapper = lazy(() => import("./pages/recruit/AddLineUp"));
const ExportCandidates = lazy(() => import("./pages/recruit/ExportCandidates"));
export function App() {
  return (
    <Suspense fallback={<FullLoader isLoading />}>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/payment" element={<PaymentDashBoard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />

          <Route path="/admin/country/add" element={<AddCountry />} />
          <Route path="/admin/country/view" element={<CountryList />} />
          <Route path="/admin/country/edit/:id" element={<CountryEdit />} />

          <Route path="/admin/education/add" element={<AddEducation />} />
          <Route path="/admin/education/view" element={<EducationList />} />
          <Route path="/admin/education/edit/:id" element={<EditEducation />} />

          <Route path="/admin/experience/add" element={<AddExperience />} />
          <Route path="/admin/experience/view" element={<ExperienceList />} />
          <Route
            path="/admin/experience/edit/:id"
            element={<EditExperience />}
          />

          <Route path="/admin/hr/view" element={<HrList />} />
          <Route path="/admin/hr/add" element={<HrAdd />} />
          <Route path="/admin/hr/edit/:id" element={<HrEdit />} />

          <Route path="/admin/hr/group/create" element={<AddGroup />} />
          <Route path="/admin/hr/group/view" element={<GroupList />} />
          <Route path="/admin/hr/group/edit/:id" element={<GroupEdit />} />

          <Route path="/recruit/lineup/add" element={<AddLineUpWrapper />} />

          <Route path="/admin/form/create" element={<CreateForm />} />
          <Route
            path="/recruit/export-candidate"
            element={<ExportCandidates />}
          />
          <Route
            path="*"
            element={<div className="text-shade text-2xl pt-20">Not Found</div>}
          />
        </Routes>
      </QueryProvider>
    </Suspense>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <ScrollRestore />
      <App />
      <Toaster />
    </BrowserRouter>
  );
}
