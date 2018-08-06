import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UtilService {

    constructor(public http: HttpClient) { }


    registerUser(value) {
        delete value.documentmask;
        return this.http.post('http://localhost:8080/accountcreation', value);
    }
}
