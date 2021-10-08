import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class Form {

  constructor(
      public id:string,
      public username:string,
      public email:string,
      public password:string,
      public status:string,
      public role:string
    ) {  }
  }