import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./services/authguard/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "about",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "tabs",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "notification",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: "more",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./more/more.module").then((m) => m.MorePageModule),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./forgot-password/forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "notificationweekly",
    loadChildren: () =>
      import("./notificationweekly/notificationweekly.module").then(
        (m) => m.NotificationweeklyPageModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./maintenance-module/dashboard/dashboard.module").then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: "maintenance-home",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-home/maintenance-home.module"
      ).then((m) => m.MaintenanceHomePageModule),
  },
  {
    path: "report-home",
    loadChildren: () =>
      import("./maintenance-module/report-home/report-home.module").then(
        (m) => m.ReportHomePageModule
      ),
  },
  {
    path: "maintenance-addnewjob",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-addnewjob/maintenance-addnewjob.module"
      ).then((m) => m.MaintenanceAddnewjobPageModule),
  },
  {
    path: "breakdown-list",
    loadChildren: () =>
      import("./maintenance-module/breakdown-list/breakdown-list.module").then(
        (m) => m.BreakdownListPageModule
      ),
  },
  {
    path: "breakdown-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/breakdown-detail/breakdown-detail.module"
      ).then((m) => m.BreakdownDetailPageModule),
  },
  {
    path: "breakdown-new",
    loadChildren: () =>
      import("./maintenance-module/breakdown-new/breakdown-new.module").then(
        (m) => m.BreakdownNewPageModule
      ),
  },
  {
    path: "supervisor-breakdown-list",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-breakdown-list/supervisor-breakdown-list.module"
      ).then((m) => m.SupervisorBreakdownListPageModule),
  },
  {
    path: "supervisor-breakdown-new",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-breakdown-new/supervisor-breakdown-new.module"
      ).then((m) => m.SupervisorBreakdownNewPageModule),
  },
  {
    path: "supervisor-dashboard",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-dashboard/supervisor-dashboard.module"
      ).then((m) => m.SupervisorDashboardPageModule),
  },
  {
    path: "maintenance-report",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-report/maintenance-report.module"
      ).then((m) => m.MaintenanceReportPageModule),
  },
  {
    path: "maintenance-observationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-observationreport/maintenance-observationreport.module"
      ).then((m) => m.MaintenanceObservationreportPageModule),
  },
  {
    path: "language-popover",
    loadChildren: () =>
      import("./pages/language-popover/language-popover.module").then(
        (m) => m.LanguagePopoverPageModule
      ),
  },
  {
    path: "maintenance-jobdonereport",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-jobdonereport/maintenance-jobdonereport.module"
      ).then((m) => m.MaintenanceJobdonereportPageModule),
  },
  {
    path: "maintenance-reportedmaintenance-list",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-reportedmaintenance-list/maintenance-reportedmaintenance-list.module"
      ).then((m) => m.MaintenanceReportedmaintenanceListPageModule),
  },
  {
    path: "maintenance-reportedmaintenance-new",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-reportedmaintenance-new/maintenance-reportedmaintenance-new.module"
      ).then((m) => m.MaintenanceReportedmaintenanceNewPageModule),
  },
  {
    path: "maintenance-reportedmaintenance-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-reportedmaintenance-detail/maintenance-reportedmaintenance-detail.module"
      ).then((m) => m.MaintenanceReportedmaintenanceDetailPageModule),
  },
  {
    path: "report-maintenance-breakdownlist",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-breakdownlist/report-maintenance-breakdownlist.module"
      ).then((m) => m.ReportMaintenanceBreakdownlistPageModule),
  },
  {
    path: "report-maintenance-breakdown",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-breakdown/report-maintenance-breakdown.module"
      ).then((m) => m.ReportMaintenanceBreakdownPageModule),
  },
  {
    path: "nirpkeproductioncalibration",
    loadChildren: () =>
      import(
        "./supervisor-module/nirpkeproductioncalibration/nirpkeproductioncalibration.module"
      ).then((m) => m.NirpkeproductioncalibrationPageModule),
  },
  {
    path: "dustcollectormonitoringchecklist",
    loadChildren: () =>
      import(
        "./supervisor-module/dustcollectormonitoringchecklist/dustcollectormonitoringchecklist.module"
      ).then((m) => m.DustcollectormonitoringchecklistPageModule),
  },
  {
    path: "waterconsumption",
    loadChildren: () =>
      import(
        "./supervisor-module/waterconsumption/waterconsumption.module"
      ).then((m) => m.WaterconsumptionPageModule),
  },
  {
    path: "dustplant",
    loadChildren: () =>
      import("./supervisor-module/dustplant/dustplant.module").then(
        (m) => m.DustplantPageModule
      ),
  },
  {
    path: "qrcodescanner",
    loadChildren: () =>
      import("./supervisor-module/qrcodescanner/qrcodescanner.module").then(
        (m) => m.QrcodescannerPageModule
      ),
  },
  {
    path: "stationallocation",
    loadChildren: () =>
      import(
        "./supervisor-module/stationallocation/stationallocation.module"
      ).then((m) => m.StationallocationPageModule),
  },
  {
    path: "machinery-search",
    loadChildren: () =>
      import(
        "./supervisor-module/machinery-search/machinery-search.module"
      ).then((m) => m.MachinerySearchPageModule),
  },
  {
    path: "presstaperheadchecklist",
    loadChildren: () =>
      import(
        "./supervisor-module/presstaperheadchecklist/presstaperheadchecklist.module"
      ).then((m) => m.PresstaperheadchecklistPageModule),
  },
  {
    path: "electricityconsumption",
    loadChildren: () =>
      import(
        "./supervisor-module/electricityconsumption/electricityconsumption.module"
      ).then((m) => m.ElectricityconsumptionPageModule),
  },
  {
    path: "magnetictrap",
    loadChildren: () =>
      import("./supervisor-module/magnetictrap/magnetictrap.module").then(
        (m) => m.MagnetictrapPageModule
      ),
  },
  {
    path: "nirpkeproductionreport",
    loadChildren: () =>
      import(
        "./supervisor-module/nirpkeproductionreport/nirpkeproductionreport.module"
      ).then((m) => m.NirpkeproductionreportPageModule),
  },
  {
    path: "pkeindividualspotcheck",
    loadChildren: () =>
      import(
        "./supervisor-module/pkeindividualspotcheck/pkeindividualspotcheck.module"
      ).then((m) => m.PkeindividualspotcheckPageModule),
  },
  {
    path: "pkeindividualspotcheckreport",
    loadChildren: () =>
      import(
        "./supervisor-module/pkeindividualspotcheckreport/pkeindividualspotcheckreport.module"
      ).then((m) => m.PkeindividualspotcheckreportPageModule),
  },
  {
    path: "dustcollectormonitoringchecklistreport",
    loadChildren: () =>
      import(
        "./supervisor-module/dustcollectormonitoringchecklistreport/dustcollectormonitoringchecklistreport.module"
      ).then((m) => m.DustcollectormonitoringchecklistreportPageModule),
  },
  {
    path: "presstaperheadchecklistreport",
    loadChildren: () =>
      import(
        "./supervisor-module/presstaperheadchecklistreport/presstaperheadchecklistreport.module"
      ).then((m) => m.PresstaperheadchecklistreportPageModule),
  },
  {
    path: "dustplantreport",
    loadChildren: () =>
      import("./supervisor-module/dustplantreport/dustplantreport.module").then(
        (m) => m.DustplantreportPageModule
      ),
  },
  {
    path: "electricityconsumptionreport",
    loadChildren: () =>
      import(
        "./supervisor-module/electricityconsumptionreport/electricityconsumptionreport.module"
      ).then((m) => m.ElectricityconsumptionreportPageModule),
  },
  {
    path: "waterconsumptionreport",
    loadChildren: () =>
      import(
        "./supervisor-module/waterconsumptionreport/waterconsumptionreport.module"
      ).then((m) => m.WaterconsumptionreportPageModule),
  },
  {
    path: "magnetictrapreport",
    loadChildren: () =>
      import(
        "./supervisor-module/magnetictrapreport/magnetictrapreport.module"
      ).then((m) => m.MagnetictrapreportPageModule),
  },
  {
    path: "productionhome",
    loadChildren: () =>
      import("./supervisor-module/productionhome/productionhome.module").then(
        (m) => m.ProductionhomePageModule
      ),
  },
  {
    path: "maintenancehome",
    loadChildren: () =>
      import("./supervisor-module/maintenancehome/maintenancehome.module").then(
        (m) => m.MaintenancehomePageModule
      ),
  },
  {
    path: "supervisor-reports",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-reports/supervisor-reports.module"
      ).then((m) => m.SupervisorReportsPageModule),
  },
  {
    path: "production-reports",
    loadChildren: () =>
      import(
        "./supervisor-module/production-reports/production-reports.module"
      ).then((m) => m.ProductionReportsPageModule),
  },
  {
    path: "maintenance-reports",
    loadChildren: () =>
      import(
        "./supervisor-module/maintenance-reports/maintenance-reports.module"
      ).then((m) => m.MaintenanceReportsPageModule),
  },
  {
    path: "supervisor-history",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-history/supervisor-history.module"
      ).then((m) => m.SupervisorHistoryPageModule),
  },
  {
    path: "supervisor-breakdown-detail",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-breakdown-detail/supervisor-breakdown-detail.module"
      ).then((m) => m.SupervisorBreakdownDetailPageModule),
  },
  {
    path: "preventivemaintenance",
    loadChildren: () =>
      import(
        "./maintenance-module/preventivemaintenance/preventivemaintenance.module"
      ).then((m) => m.PreventivemaintenancePageModule),
  },
  {
    path: "predictivemaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/predictivemaintenancereport/predictivemaintenancereport.module"
      ).then((m) => m.PredictivemaintenancereportPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
