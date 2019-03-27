import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    baseUrl: string;
    defaultResultsLoaded: number;
}

export const AppConfig: IAppConfig = {
    // baseUrl: 'http://localhost:9200/product',
    baseUrl: 'https://e084291822ed42bab3766eefee360eb2.eu-west-1.aws.found.io:9243',
    defaultResultsLoaded: 25
};
