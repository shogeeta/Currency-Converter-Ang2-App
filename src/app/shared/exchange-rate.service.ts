import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './setting';

//Create interface for the model which will be used to map the values coming from API
export interface IRate {
    fromValue: number;
    toValue: number;
    fromName: string;
    toName: string;
}

@Injectable()
export class ExchangeRateApi {
    // calling the base url for getting exchange rate API
    private baseUrl: string = CONFIG.baseUrl;

    constructor(private http: Http){}

    //Rest service handles request rate change based on rate name- EUR, USD etc
    getExchangeRate(baseRateName: string) {
        return this.http.get(`${this.baseUrl}?base=${baseRateName}`)
                    .map((response: Response) => response.json())
                    .catch(this.catchBadResponse);
    }

    
    //Error handling handle for Observable, can be used as common for all calls 
    catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
        let res = <Response>errorResponse;
        let err = res.json();
        let emsg = err ?
        (err.error ? err.error : JSON.stringify(err)) :
        (res.statusText || 'unknown error');
        return Observable.of();
    }
}
