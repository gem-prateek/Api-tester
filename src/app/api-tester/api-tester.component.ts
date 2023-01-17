import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { auth } from './api-constent';
import { apiTesterService } from './api-tester.service';
@Component({
  selector: 'app-api-tester',
  templateUrl: './api-tester.component.html',
  styleUrls: ['./api-tester.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ApiTesterComponent implements OnInit {
  selectedType: string = 'GET';
  url: string = '';
  response: any = 'No Response to Show';
  body: string = '';
  error: boolean = false;
  errorText: string = '';

  constructor(
    private http: HttpClient,
    private testerService: apiTesterService,
  ) { }

  ngOnInit(): void {
  }
  alertClose(){
    this.error=false;
    this.errorText=""
  }
  clearUrl(){
    this.url='';
  }

  selectionChange(type: string): void {
    this.selectedType = type;
  }
  getUrl(event: any): void {
    console.log(event.target.value);
    this.url = event.target.value
  }
  getBody(event: any): void {
    console.log("body", event.target.value);
    this.body = event.target.value
  }
  onSend(): void {
    console.log("sendiing...");
    if (this.url) {
      if (this.selectedType === 'GET') {
        this.testerService.getApi(this.url).subscribe(
          (res) => {
            console.log(res);
            this.response = res;
          });
      } else if (this.selectedType === 'POST') {
        if(this.body){
          let payLoad=JSON.parse(this.body);
          this.testerService.postApi(this.url,payLoad).subscribe(
            (res) => {
              console.log(res);
              this.response = res;
            });

        }
        else{
          this.error=true;
          this.errorText="Please provide body"
        }
      }
    }else {
      this.error=true;
      this.errorText="Please provide Url"
    }
  }


}
