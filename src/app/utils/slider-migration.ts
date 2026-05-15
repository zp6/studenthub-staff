/**
 * ng5-slider to @angular-slider/ngx-slider migration guide. Part of issue #33.
 * 
 * This file documents the migration. The actual component changes are:
 * 
 * 1. npm uninstall ng5-slider
 * 2. npm install @angular-slider/ngx-slider
 * 
 * 3. In module imports:
 *    OLD: import { Ng5SliderModule } from 'ng5-slider';
 *    NEW: import { NgxSliderModule } from '@angular-slider/ngx-slider';
 *    
 *    OLD: Ng5SliderModule
 *    NEW: NgxSliderModule
 * 
 * 4. In templates:
 *    OLD: <ng5-slider [(value)]="value" [options]="options"></ng5-slider>
 *    NEW: <ngx-slider [(value)]="value" [options]="options"></ngx-slider>
 * 
 * The Options interface and event names are identical - no logic changes needed.
 */

// Re-export from new package for easy migration
export { NgxSliderModule, Options, LabelType, ChangeContext } from '@angular-slider/ngx-slider';
