import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { SystemRequirementComponent } from './system-requirement/system-requirement.component'
import { browsercomapatibilityComponent } from './browser-compatibility/browser-compatibility.component';
import { NPMPackagesComponent } from './NPM-Packages/NPM-Packages.component';
import { APIReferenceComponent } from './API Reference/API-Reference.component';
import { DownloadComponent } from './installation-upgrade/download/download.component';



export const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' }, //default route
  { path: 'introduction', component: IntroductionComponent },
  { path: 'systemrequirement', component: SystemRequirementComponent },
  { path: 'browsercompatibility', component: browsercomapatibilityComponent },
  { path: 'NPMPackages', component: NPMPackagesComponent },
  { path: 'APIReference', component: APIReferenceComponent },
  { path: 'installation-and-upgrade/download', component: DownloadComponent }
];