import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";


import { Routes } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { routes } from "./app-routing.module";

export const appConfig: ApplicationConfig={
    providers: [provideRouter(routes),provideClientHydration(),provideAnimations()]
};