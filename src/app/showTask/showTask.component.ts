import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Task} from "../task";
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'show',
  templateUrl: './showTask.component.html',
  styleUrls: ['']
})

export class ShowComponent implements OnInit {
  constructor(private router: Router,
              private service: AppService) {
  }

  myTask: Task[];

  ngOnInit() {
    this.service.getData3().subscribe((data: any) => {
        this.myTask = data
        //alert(JSON.stringify(data))
      },
      (err: any) => console.error(err));
    // this.service.addTask().subscribe((data:any)=>alert(JSON.stringify(data)))
    // this.service.getData1().then((data:any)=>{
    //   this.myTask=data
    // }, (err:any)=>{
    //   alert(err)
    // });
    //this.myTask=this.service.taskArray
  }

  deleteByIndex(index:number) {
    //this.service.delete(index)
    this.service.remove(this.myTask[index]._id).subscribe((data: any) => {
      // alert(JSON.stringify(data))
      this.router.navigate(['create'])
      alert('Task Removed')
    }, err => {
      console.error(err);
    })
  }


  editTask(index: number) {
    // this.service.addTask().subscribe(data=>{
    //   alert('lets see')
    // })
    this.router.navigate(['create', this.myTask[index]._id])
  }
}
