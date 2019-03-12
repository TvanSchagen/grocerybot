import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    baseUrl: string,
    defaultResultsLoaded: number;
}

export const AppConfig: IAppConfig = {
    baseUrl: 'http://localhost:9200/product',
    defaultResultsLoaded: 25
};
