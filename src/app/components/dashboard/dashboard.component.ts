import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  displayedColumns: string[] = ['confirmedCasesForeign', 'confirmedCasesIndian', 'deaths', 'discharged','loc','totalConfirmed'];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.dashboardService.getCovid19Data().subscribe((resp: any)=>{
      if(resp){
        console.log(resp);
        this.dataSource.data= resp.data.regional;
        
      }
    })
    
  }

}
