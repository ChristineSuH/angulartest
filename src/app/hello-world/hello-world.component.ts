import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  data: any;
  message = 'This is table with data poplulation';
  constructor() {
    this.data = [
      {Company: 'MEQ', ProductName: 'Member Package Flexible Home Loan OO Above 90 LVR 150-399k', StarRating: 10, CurrentRate: '4.46%', ComparisonRate: '4.855%'},
      {Company: 'RTAN', ProductName: 'Residential Fixed 1 yr', StarRating: 10, CurrentRate: '5.26%', ComparisonRate: '5.012%'},
      {Company: 'SGBS', ProductName: 'Advantage Package Residential Fixed P&I 1 yr 60-80%', StarRating: 3, CurrentRate: '4.04%', ComparisonRate: '4.438%'},
      {Company: 'QPS', ProductName: 'Discount Variable Package Rate (LVR <80%)', StarRating: 3, CurrentRate: '4.09%', ComparisonRate: '4.430%'}
    ];
  }

  ngOnInit() {
  }

}
