import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UtilService {

    constructor(public http: HttpClient) { }


}
