import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { AuthGuardService } from "../services/authguard/auth-guard.service";
let userlist = JSON.parse(localStorage.getItem("userlist"));
let newRoutes: any;
let router: Router;

const routes_maintenance: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabmaintenancehome",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/maintenance-home/maintenance-home.module"
              ).then((m) => m.MaintenanceHomePageModule),
          },
        ],
      },
      {
        path: "tabqrcodescanner",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../maintenance-module/maintenance-qrcodescanner/maintenance-qrcodescanner.module").then((m) => m.MaintenanceQrcodescannerPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabmaintenancehome",
        pathMatch: "full",
      },
    ],
  },
];

const routes_production: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabsupervisordashboard",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../supervisor-module/supervisor-dashboard/supervisor-dashboard.module"
              ).then((m) => m.SupervisorDashboardPageModule),
          },
        ],
      },
      {
        path: "tabqrcodescanner",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../supervisor-module/qrcodescanner/qrcodescanner.module").then((m) => m.QrcodescannerPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabsupervisordashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_gm: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabgmhome",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../generalmanager-module/home/home-routing.module"
              ).then((m) => m.HomePageRoutingModule),
          },
        ],
      },      
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabgmhome",
        pathMatch: "full",
      },
    ],
  },
];

//console.log(userlist);

if (userlist) {
  if (userlist.department) {
    if (userlist.department == "Maintenance") {
      newRoutes = routes_maintenance;
    } else if (userlist.department == "Production") {
      newRoutes = routes_production;
    } else if (userlist.department == "GM") {
      newRoutes = routes_gm;
    } else {
      localStorage.clear();
      router.navigateByUrl("/login");
    }
  } else {
    localStorage.clear();
    router.navigateByUrl("/login");
  }
} else {
  newRoutes = routes_maintenance;
}

@NgModule({
  imports: [RouterModule.forChild(newRoutes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
