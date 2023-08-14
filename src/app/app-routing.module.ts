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
    path: "language-popover",
    loadChildren: () =>
      import("./pages/language-popover/language-popover.module").then(
        (m) => m.LanguagePopoverPageModule
      ),
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
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "qualityhome",
    loadChildren: () =>
      import("./supervisor-module/qualityhome/qualityhome.module").then(
        (m) => m.QualityhomePageModule
      ),
  },
  {
    path: "spotcheck",
    loadChildren: () =>
      import("./supervisor-module/spotcheck/spotcheck.module").then(
        (m) => m.SpotcheckPageModule
      ),
  },
  {
    path: "warehouse",
    loadChildren: () =>
      import("./supervisor-module/warehouse/warehouse.module").then(
        (m) => m.WarehousePageModule
      ),
  },
  {
    path: "spotcheckdailyreport",
    loadChildren: () =>
      import(
        "./supervisor-module/spotcheckdailyreport/spotcheckdailyreport.module"
      ).then((m) => m.SpotcheckdailyreportPageModule),
  },
  {
    path: "spotcheckmonthlyreport",
    loadChildren: () =>
      import(
        "./supervisor-module/spotcheckmonthlyreport/spotcheckmonthlyreport.module"
      ).then((m) => m.SpotcheckmonthlyreportPageModule),
  },
  {
    path: "warehousedailyreport",
    loadChildren: () =>
      import(
        "./supervisor-module/warehousedailyreport/warehousedailyreport.module"
      ).then((m) => m.WarehousedailyreportPageModule),
  },
  {
    path: "warehousemonthlyreport",
    loadChildren: () =>
      import(
        "./supervisor-module/warehousemonthlyreport/warehousemonthlyreport.module"
      ).then((m) => m.WarehousemonthlyreportPageModule),
  },
  {
    path: "quality-reports",
    loadChildren: () =>
      import("./supervisor-module/quality-reports/quality-reports.module").then(
        (m) => m.QualityReportsPageModule
      ),
  },
  {
    path: "jobbyengineer",
    loadChildren: () =>
      import("./maintenance-module/jobbyengineer/jobbyengineer.module").then(
        (m) => m.JobbyengineerPageModule
      ),
  },
  {
    path: "jobdetail",
    loadChildren: () =>
      import("./maintenance-module/jobdetail/jobdetail.module").then(
        (m) => m.JobdetailPageModule
      ),
  },
  {
    path: "correctivemaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenancereport/correctivemaintenancereport.module"
      ).then((m) => m.CorrectivemaintenancereportPageModule),
  },
  {
    path: "jobdonereport",
    loadChildren: () =>
      import("./maintenance-module/jobdonereport/jobdonereport.module").then(
        (m) => m.JobdonereportPageModule
      ),
  },
  {
    path: "preventivemaintenance-list",
    loadChildren: () =>
      import(
        "./maintenance-module/preventivemaintenance-list/preventivemaintenance-list.module"
      ).then((m) => m.PreventivemaintenanceListPageModule),
  },
  {
    path: "preventivemaintenance-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/preventivemaintenance-detail/preventivemaintenance-detail.module"
      ).then((m) => m.PreventivemaintenanceDetailPageModule),
  },
  {
    path: "preventivemaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/preventivemaintenancereport/preventivemaintenancereport.module"
      ).then((m) => m.PreventivemaintenancereportPageModule),
  },
  {
    path: "correctivemaintenance-new",
    loadChildren: () =>
      import(
        "./supervisor-module/correctivemaintenance-new/correctivemaintenance-new.module"
      ).then((m) => m.CorrectivemaintenanceNewPageModule),
  },
  {
    path: "zoomimage",
    loadChildren: () =>
      import("./pages/zoomimage/zoomimage.module").then(
        (m) => m.ZoomimagePageModule
      ),
  },
  {
    path: "correctivemaintenance-list",
    loadChildren: () =>
      import(
        "./supervisor-module/correctivemaintenance-list/correctivemaintenance-list.module"
      ).then((m) => m.CorrectivemaintenanceListPageModule),
  },
  {
    path: "correctivemaintenance-draft",
    loadChildren: () =>
      import(
        "./supervisor-module/correctivemaintenance-draft/correctivemaintenance-draft.module"
      ).then((m) => m.CorrectivemaintenanceDraftPageModule),
  },
  {
    path: "predictivemaintenance",
    loadChildren: () =>
      import(
        "./maintenance-module/predictivemaintenance/predictivemaintenance.module"
      ).then((m) => m.PredictivemaintenancePageModule),
  },
  {
    path: "correctivemaintenance-home",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-home/correctivemaintenance-home.module"
      ).then((m) => m.CorrectivemaintenanceHomePageModule),
  },
  {
    path: "correctivemaintenance-request",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-request/correctivemaintenance-request.module"
      ).then((m) => m.CorrectivemaintenanceRequestPageModule),
  },
  {
    path: "correctivemaintenance-response",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-response/correctivemaintenance-response.module"
      ).then((m) => m.CorrectivemaintenanceResponsePageModule),
  },
  {
    path: "correctivemaintenancerequest-save",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenancerequest-save/correctivemaintenancerequest-save.module"
      ).then((m) => m.CorrectivemaintenancerequestSavePageModule),
  },
  {
    path: "correctivemaintenanceresponse-parts",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenanceresponse-parts/correctivemaintenanceresponse-parts.module"
      ).then((m) => m.CorrectivemaintenanceresponsePartsPageModule),
  },
  {
    path: "correctivemaintenanceresponse-save",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenanceresponse-save/correctivemaintenanceresponse-save.module"
      ).then((m) => m.CorrectivemaintenanceresponseSavePageModule),
  },
  {
    path: "correctivemaintenance-new-list",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-new-list/correctivemaintenance-new-list.module"
      ).then((m) => m.CorrectivemaintenanceNewListPageModule),
  },
  {
    path: "correctivemaintenance-new-draft",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-new-draft/correctivemaintenance-new-draft.module"
      ).then((m) => m.CorrectivemaintenanceNewDraftPageModule),
  },
  {
    path: "correctivemaintenance-new-save",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-new-save/correctivemaintenance-new-save.module"
      ).then((m) => m.CorrectivemaintenanceNewSavePageModule),
  },
  {
    path: "correctivemaintenance-view",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-view/correctivemaintenance-view.module"
      ).then((m) => m.CorrectivemaintenanceViewPageModule),
  },
  {
    path: "correctivemaintenance-request-notassigned",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-request-notassigned/correctivemaintenance-request-notassigned.module"
      ).then((m) => m.CorrectivemaintenanceRequestNotassignedPageModule),
  },
  {
    path: "correctivemaintenance-request-notassigned-save",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-request-notassigned-save/correctivemaintenance-request-notassigned-save.module"
      ).then((m) => m.CorrectivemaintenanceRequestNotassignedSavePageModule),
  },
  {
    path: "correctivemaintenance-me-draft",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-me-draft/correctivemaintenance-me-draft.module"
      ).then((m) => m.CorrectivemaintenanceMeDraftPageModule),
  },
  {
    path: "correctivemaintenance-me-list",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-me-list/correctivemaintenance-me-list.module"
      ).then((m) => m.CorrectivemaintenanceMeListPageModule),
  },
  {
    path: "correctivemaintenance-me-new",
    loadChildren: () =>
      import(
        "./maintenance-module/correctivemaintenance-me-new/correctivemaintenance-me-new.module"
      ).then((m) => m.CorrectivemaintenanceMeNewPageModule),
  },
  {
    path: "correctivemaintenance-pe-view",
    loadChildren: () =>
      import(
        "./supervisor-module/correctivemaintenance-pe-view/correctivemaintenance-pe-view.module"
      ).then((m) => m.CorrectivemaintenancePeViewPageModule),
  },
  {
    path: "schedulemaintenance",
    loadChildren: () =>
      import(
        "./maintenance-module/schedulemaintenance/schedulemaintenance.module"
      ).then((m) => m.SchedulemaintenancePageModule),
  },
  {
    path: "machinerunninghours-update",
    loadChildren: () =>
      import(
        "./maintenance-module/machinerunninghours-update/machinerunninghours-update.module"
      ).then((m) => m.MachinerunninghoursUpdatePageModule),
  },
  {
    path: "machinerunninghoursreport",
    loadChildren: () =>
      import(
        "./maintenance-module/machinerunninghoursreport/machinerunninghoursreport.module"
      ).then((m) => m.MachinerunninghoursreportPageModule),
  },
  {
    path: "machinerunninghoursreport",
    loadChildren: () =>
      import(
        "./supervisor-module/machinerunninghoursreport/machinerunninghoursreport.module"
      ).then((m) => m.MachinerunninghoursreportPageModule),
  },
  {
    path: "machinerunninghours-update",
    loadChildren: () =>
      import(
        "./supervisor-module/machinerunninghours-update/machinerunninghours-update.module"
      ).then((m) => m.MachinerunninghoursUpdatePageModule),
  },
  {
    path: "maintenance-machinelubrication",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-machinelubrication/maintenance-machinelubrication.module"
      ).then((m) => m.MaintenanceMachinelubricationPageModule),
  },
  {
    path: "maintenance-machinelubrication-report",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-machinelubrication-report/maintenance-machinelubrication-report.module"
      ).then((m) => m.MaintenanceMachinelubricationReportPageModule),
  },
  {
    path: "supervisor-machinelubrication",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-machinelubrication/supervisor-machinelubrication.module"
      ).then((m) => m.SupervisorMachinelubricationPageModule),
  },
  {
    path: "supervisor-machinelubrication-report",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-machinelubrication-report/supervisor-machinelubrication-report.module"
      ).then((m) => m.SupervisorMachinelubricationReportPageModule),
  },
  {
    path: "code-taperheadandamperagecheck",
    loadChildren: () =>
      import(
        "./supervisor-module/code-taperheadandamperagecheck/code-taperheadandamperagecheck.module"
      ).then((m) => m.CodeTaperheadandamperagecheckPageModule),
  },
  {
    path: "code-productionactivityandqualityreport",
    loadChildren: () =>
      import(
        "./supervisor-module/code-productionactivityandqualityreport/code-productionactivityandqualityreport.module"
      ).then((m) => m.CodeProductionactivityandqualityreportPageModule),
  },
  {
    path: "code-runninghourscheck",
    loadChildren: () =>
      import(
        "./supervisor-module/code-runninghourscheck/code-runninghourscheck.module"
      ).then((m) => m.CodeRunninghourscheckPageModule),
  },
  {
    path: "code-dustcollectorcheck",
    loadChildren: () =>
      import(
        "./supervisor-module/code-dustcollectorcheck/code-dustcollectorcheck.module"
      ).then((m) => m.CodeDustcollectorcheckPageModule),
  },
  {
    path: "code-magnetictrapscheck",
    loadChildren: () =>
      import(
        "./supervisor-module/code-magnetictrapscheck/code-magnetictrapscheck.module"
      ).then((m) => m.CodeMagnetictrapscheckPageModule),
  },
  {
    path: "code-electricityconsumption",
    loadChildren: () =>
      import(
        "./supervisor-module/code-electricityconsumption/code-electricityconsumption.module"
      ).then((m) => m.CodeElectricityconsumptionPageModule),
  },
  {
    path: "code-waterconsumption",
    loadChildren: () =>
      import(
        "./supervisor-module/code-waterconsumption/code-waterconsumption.module"
      ).then((m) => m.CodeWaterconsumptionPageModule),
  },
  {
    path: "qrcodescanner-reports",
    loadChildren: () =>
      import(
        "./supervisor-module/qrcodescanner-reports/qrcodescanner-reports.module"
      ).then((m) => m.QrcodescannerReportsPageModule),
  },
  {
    path: "code-report-taperheadandamperagecheck",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-taperheadandamperagecheck/code-report-taperheadandamperagecheck.module"
      ).then((m) => m.CodeReportTaperheadandamperagecheckPageModule),
  },
  {
    path: "code-report-productionactivityandqualityreport",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-productionactivityandqualityreport/code-report-productionactivityandqualityreport.module"
      ).then((m) => m.CodeReportProductionactivityandqualityreportPageModule),
  },
  {
    path: "code-report-runninghours",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-runninghours/code-report-runninghours.module"
      ).then((m) => m.CodeReportRunninghoursPageModule),
  },
  {
    path: "code-report-dustcollector",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-dustcollector/code-report-dustcollector.module"
      ).then((m) => m.CodeReportDustcollectorPageModule),
  },
  {
    path: "code-report-magnetictrap",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-magnetictrap/code-report-magnetictrap.module"
      ).then((m) => m.CodeReportMagnetictrapPageModule),
  },
  {
    path: "code-report-electricityconsumption",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-electricityconsumption/code-report-electricityconsumption.module"
      ).then((m) => m.CodeReportElectricityconsumptionPageModule),
  },
  {
    path: "code-report-waterconsumption",
    loadChildren: () =>
      import(
        "./supervisor-module/code-report-waterconsumption/code-report-waterconsumption.module"
      ).then((m) => m.CodeReportWaterconsumptionPageModule),
  },
  {
    path: "maintenance-qrcodescanner",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-qrcodescanner/maintenance-qrcodescanner.module"
      ).then((m) => m.MaintenanceQrcodescannerPageModule),
  },
  {
    path: "code-pressmachinemaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-pressmachinemaintenancereport/code-pressmachinemaintenancereport.module"
      ).then((m) => m.CodePressmachinemaintenancereportPageModule),
  },
  {
    path: "code-plantsystemmaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-plantsystemmaintenancereport/code-plantsystemmaintenancereport.module"
      ).then((m) => m.CodePlantsystemmaintenancereportPageModule),
  },
  {
    path: "code-pressmachineroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-pressmachineroutinecheck/code-pressmachineroutinecheck.module"
      ).then((m) => m.CodePressmachineroutinecheckPageModule),
  },
  {
    path: "code-aircompressorroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-aircompressorroutinecheck/code-aircompressorroutinecheck.module"
      ).then((m) => m.CodeAircompressorroutinecheckPageModule),
  },
  {
    path: "code-pressmachinelubricationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-pressmachinelubricationreport/code-pressmachinelubricationreport.module"
      ).then((m) => m.CodePressmachinelubricationreportPageModule),
  },
  {
    path: "code-screwconveyorroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-screwconveyorroutinecheck/code-screwconveyorroutinecheck.module"
      ).then((m) => m.CodeScrewconveyorroutinecheckPageModule),
  },
  {
    path: "code-bucketelevatorroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-bucketelevatorroutinecheck/code-bucketelevatorroutinecheck.module"
      ).then((m) => m.CodeBucketelevatorroutinecheckPageModule),
  },
  {
    path: "code-pressmachinevibrationcheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-pressmachinevibrationcheck/code-pressmachinevibrationcheck.module"
      ).then((m) => m.CodePressmachinevibrationcheckPageModule),
  },
  {
    path: "code-report-pressmachinemaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-pressmachinemaintenancereport/code-report-pressmachinemaintenancereport.module"
      ).then((m) => m.CodeReportPressmachinemaintenancereportPageModule),
  },
  {
    path: "code-report-plantsystemmaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-plantsystemmaintenancereport/code-report-plantsystemmaintenancereport.module"
      ).then((m) => m.CodeReportPlantsystemmaintenancereportPageModule),
  },
  {
    path: "code-report-pressmachineroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-pressmachineroutinecheck/code-report-pressmachineroutinecheck.module"
      ).then((m) => m.CodeReportPressmachineroutinecheckPageModule),
  },
  {
    path: "code-report-aircompressorroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-aircompressorroutinecheck/code-report-aircompressorroutinecheck.module"
      ).then((m) => m.CodeReportAircompressorroutinecheckPageModule),
  },
  {
    path: "code-report-pressmachinelubricationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-pressmachinelubricationreport/code-report-pressmachinelubricationreport.module"
      ).then((m) => m.CodeReportPressmachinelubricationreportPageModule),
  },
  {
    path: "code-report-screwconveyorroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-screwconveyorroutinecheck/code-report-screwconveyorroutinecheck.module"
      ).then((m) => m.CodeReportScrewconveyorroutinecheckPageModule),
  },
  {
    path: "code-report-bucketelevatorroutinecheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-bucketelevatorroutinecheck/code-report-bucketelevatorroutinecheck.module"
      ).then((m) => m.CodeReportBucketelevatorroutinecheckPageModule),
  },
  {
    path: "code-report-pressmachinevibrationcheck",
    loadChildren: () =>
      import(
        "./maintenance-module/code-report-pressmachinevibrationcheck/code-report-pressmachinevibrationcheck.module"
      ).then((m) => m.CodeReportPressmachinevibrationcheckPageModule),
  },
  {
    path: "maintenance-qrcodescanner-report",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-qrcodescanner-report/maintenance-qrcodescanner-report.module"
      ).then((m) => m.MaintenanceQrcodescannerReportPageModule),
  },
  {
    path: "code-ftl-pressmachinemaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-ftl-pressmachinemaintenancereport/code-ftl-pressmachinemaintenancereport.module"
      ).then((m) => m.CodeFtlPressmachinemaintenancereportPageModule),
  },
  {
    path: "code-ftl-plantsystemmaintenancereport",
    loadChildren: () =>
      import(
        "./maintenance-module/code-ftl-plantsystemmaintenancereport/code-ftl-plantsystemmaintenancereport.module"
      ).then((m) => m.CodeFtlPlantsystemmaintenancereportPageModule),
  },
  {
    path: "qualitycheck",
    loadChildren: () =>
      import("./supervisor-module/qualitycheck/qualitycheck.module").then(
        (m) => m.QualitycheckPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./generalmanager-module/home/home.module").then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: "plantperformance-home",
    loadChildren: () =>
      import(
        "./generalmanager-module/plantperformance-home/plantperformance-home.module"
      ).then((m) => m.PlantperformanceHomePageModule),
  },
  {
    path: "report-webview",
    loadChildren: () =>
      import(
        "./generalmanager-module/report-webview/report-webview.module"
      ).then((m) => m.ReportWebviewPageModule),
  },
  {
    path: "trend-analysis",
    loadChildren: () =>
      import(
        "./generalmanager-module/trend-analysis/trend-analysis.module"
      ).then((m) => m.TrendAnalysisPageModule),
  },
  {
    path: "dashboard1",
    loadChildren: () =>
      import("./generalmanager-module/dashboard1/dashboard1.module").then(
        (m) => m.Dashboard1PageModule
      ),
  },
  {
    path: "plant-performance",
    loadChildren: () =>
      import(
        "./generalmanager-module/plant-performance/plant-performance.module"
      ).then((m) => m.PlantPerformancePageModule),
  },
  {
    path: "plant-performanceproduction",
    loadChildren: () =>
      import(
        "./generalmanager-module/plant-performanceproduction/plant-performanceproduction.module"
      ).then((m) => m.PlantPerformanceproductionPageModule),
  },
  {
    path: "plant-performance-electicity",
    loadChildren: () =>
      import(
        "./generalmanager-module/plant-performance-electicity/plant-performance-electicity.module"
      ).then((m) => m.PlantPerformanceElecticityPageModule),
  },
  {
    path: "plant-performance-water",
    loadChildren: () =>
      import(
        "./generalmanager-module/plant-performance-water/plant-performance-water.module"
      ).then((m) => m.PlantPerformanceWaterPageModule),
  },
  {
    path: "dashoboard2",
    loadChildren: () =>
      import("./generalmanager-module/dashoboard2/dashoboard2.module").then(
        (m) => m.Dashoboard2PageModule
      ),
  },
  {
    path: "manager-trendanalysis",
    loadChildren: () =>
      import(
        "./generalmanager-module/manager-trendanalysis/manager-trendanalysis.module"
      ).then((m) => m.ManagerTrendanalysisPageModule),
  },
  {
    path: "manager-trendanalysis-history",
    loadChildren: () =>
      import(
        "./generalmanager-module/manager-trendanalysis-history/manager-trendanalysis-history.module"
      ).then((m) => m.ManagerTrendanalysisHistoryPageModule),
  },
  {
    path: "manager-warehousehistory",
    loadChildren: () =>
      import(
        "./generalmanager-module/manager-warehousehistory/manager-warehousehistory.module"
      ).then((m) => m.ManagerWarehousehistoryPageModule),
  },
  {
    path: "imagecollection-dust",
    loadChildren: () =>
      import(
        "./generalmanager-module/imagecollection-dust/imagecollection-dust.module"
      ).then((m) => m.ImagecollectionDustPageModule),
  },
  {
    path: "dashboard-summaryscreen",
    loadChildren: () =>
      import(
        "./generalmanager-module/dashboard-summaryscreen/dashboard-summaryscreen.module"
      ).then((m) => m.DashboardSummaryscreenPageModule),
  },
  {
    path: "daily-activitylog",
    loadChildren: () =>
      import(
        "./generalmanager-module/daily-activitylog/daily-activitylog.module"
      ).then((m) => m.DailyActivitylogPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
