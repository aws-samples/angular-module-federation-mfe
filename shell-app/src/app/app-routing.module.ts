// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

function loadMFE(url: string) {
  return loadRemoteModule({
    type: 'module',
    remoteEntry: `${url}/remoteEntry.js`,
    exposedModule: './Module'
  })
  .then(m => m.Mfe1Module)
  .catch(
    () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)
  );
}

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mfe1'
  },
  {
    path: 'mfe1',
    loadChildren: () => loadMFE(environment.mfe1URL)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
