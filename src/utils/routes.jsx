import React from "react";

export const Introlayout = React.lazy(() => import("../components/Layout"));

export const LandingPage = React.lazy(() => import("../pages/LandingPage"));
export const MissionPage = React.lazy(() => import("../pages/MissionPage"));
export const MissionDetail = React.lazy(() => import("../components/Missions/MissionDetail"))
export const Quiz = React.lazy(() => import("../components/Missions/Quiz"))