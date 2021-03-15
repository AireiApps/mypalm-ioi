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
    path: "supervisor-home",
    loadChildren: () =>
      import("./supervisor-module/supervisor-home/supervisor-home.module").then(
        (m) => m.SupervisorHomePageModule
      ),
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
    path: "reporthome",
    loadChildren: () =>
      import("./supervisor-module/reporthome/reporthome.module").then(
        (m) => m.ReporthomePageModule
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
    path: "maintenance-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-detail/maintenance-detail.module"
      ).then((m) => m.MaintenanceDetailPageModule),
  },
  {
    path: "communication",
    loadChildren: () =>
      import("./maintenance-module/communication/communication.module").then(
        (m) => m.CommunicationPageModule
      ),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personalizecommunicationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/personalizecommunicationreport/personalizecommunicationreport.module"
      ).then((m) => m.PersonalizecommunicationreportPageModule),
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
    path: "planning",
    loadChildren: () =>
      import("./maintenance-module/planning/planning.module").then(
        (m) => m.PlanningPageModule
      ),
  },
  {
    path: "maintenance-attendance",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-attendance/maintenance-attendance.module"
      ).then((m) => m.MaintenanceAttendancePageModule),
  },
  {
    path: "maintenance-orderreq-list",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-orderreq-list/maintenance-orderreq-list.module"
      ).then((m) => m.MaintenanceOrderreqListPageModule),
  },
  {
    path: "maintenance-addnewjob",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-addnewjob/maintenance-addnewjob.module"
      ).then((m) => m.MaintenanceAddnewjobPageModule),
  },
  {
    path: "maintenance-orderreq-add",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-orderreq-add/maintenance-orderreq-add.module"
      ).then((m) => m.MaintenanceOrderreqAddPageModule),
  },
  {
    path: "maintenance-orderreq-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-orderreq-detail/maintenance-orderreq-detail.module"
      ).then((m) => m.MaintenanceOrderreqDetailPageModule),
  },
  {
    path: "requestitemhistory-report",
    loadChildren: () =>
      import(
        "./maintenance-module/requestitemhistory-report/requestitemhistory-report.module"
      ).then((m) => m.RequestitemhistoryReportPageModule),
  },
  {
    path: "maintenanceorder-details",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenanceorder-details/maintenanceorder-details.module"
      ).then((m) => m.MaintenanceorderDetailsPageModule),
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
    path: "schedule",
    loadChildren: () =>
      import("./maintenance-module/schedule/schedule.module").then(
        (m) => m.SchedulePageModule
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
    path: "maintenance-braodcastchat",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-braodcastchat/maintenance-braodcastchat.module"
      ).then((m) => m.MaintenanceBraodcastchatPageModule),
  },
  {
    path: "maintenance-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-personalizedchatdepartments/maintenance-personalizedchatdepartments.module"
      ).then((m) => m.MaintenancePersonalizedchatdepartmentsPageModule),
  },
  {
    path: "maintenance-personalizedchat",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-personalizedchat/maintenance-personalizedchat.module"
      ).then((m) => m.MaintenancePersonalizedchatPageModule),
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
    path: "report-maintenance-boilerlog",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-boilerlog/report-maintenance-boilerlog.module"
      ).then((m) => m.ReportMaintenanceBoilerlogPageModule),
  },
  {
    path: "report-maintenance-hourly",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-hourly/report-maintenance-hourly.module"
      ).then((m) => m.ReportMaintenanceHourlyPageModule),
  },
  {
    path: "report-labhourlyreport",
    loadChildren: () =>
      import(
        "./maintenance-module/report-labhourlyreport/report-labhourlyreport.module"
      ).then((m) => m.ReportLabhourlyreportPageModule),
  },
  {
    path: "report-labdailyreport",
    loadChildren: () =>
      import(
        "./maintenance-module/report-labdailyreport/report-labdailyreport.module"
      ).then((m) => m.ReportLabdailyreportPageModule),
  },
  {
    path: "scheduling-report",
    loadChildren: () =>
      import(
        "./maintenance-module/scheduling-report/scheduling-report.module"
      ).then((m) => m.SchedulingReportPageModule),
  },
  {
    path: "maintenance-checklist",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-checklist/maintenance-checklist.module"
      ).then((m) => m.MaintenanceChecklistPageModule),
  },
  {
    path: "report-maintenance-checklistreport",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-checklistreport/report-maintenance-checklistreport.module"
      ).then((m) => m.ReportMaintenanceChecklistreportPageModule),
  },
  {
    path: "nirpkeproductioncalibration",
    loadChildren: () =>
      import(
        "./supervisor-module/nirpkeproductioncalibration/nirpkeproductioncalibration.module"
      ).then((m) => m.NirpkeproductioncalibrationPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
