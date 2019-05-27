import { Injectable } from '@angular/core';
import '../my-theme.scss';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  // private active: Theme = $app-primary;
  // private availableThemes: Theme[] = [light, dark];

  // getAvailableThemes(): Theme[] {
  //   return this.availableThemes;
  // }

  // getActiveTheme(): Theme {
  //   return this.active;
  // }

  // isDarkTheme(): boolean {
  //   return this.active.name === dark.name;
  // }

  // setDarkTheme(): void {
  //   this.setActiveTheme(dark);
  // }

  // setLightTheme(): void {
  //   this.setActiveTheme(light);
  // }

  // setActiveTheme(theme: Theme): void {
  //   this.active = theme;

  //   Object.keys(this.active.properties).forEach(property => {
  //     document.documentElement.style.setProperty(
  //       property,
  //       this.active.properties[property]
  //     );
  //   });
  // }
}
