// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe1Component } from './mfe1.component';

const routes: Routes = [
  {
    path: '',
    component: Mfe1Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1RoutingModule { }
