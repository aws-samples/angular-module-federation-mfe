// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';


@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
