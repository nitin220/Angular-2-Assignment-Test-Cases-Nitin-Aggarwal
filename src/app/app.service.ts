import {Injectable} from "@angular/core";
import {Task} from "./task";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Http, Headers} from "@angular/http";
@Injectable()

export class AppService {

  constructor(private http: Http) {
  }

  taskArray: Task[] = [];

  delete(index: number) {
    this.taskArray.splice(index, 1);
  }

  add(task: Task) {
    if (this.taskArray.indexOf(task) == -1) {
      this.taskArray.push(task);
    }
  }

  update(index: number, task: Task) {
    if (this.taskArray.indexOf(task) == -1) {
      this.taskArray[index] = task;
    }
  }

  getData() {
    return Observable.of<any>(this.taskArray)
    // return Observable.throw(Error('Observable Error Occurs'))
  }

  getAdata1() {
    // return Promise.resolve<any>(this.taskArray)
    return Promise.reject(Error('Promise Error occurs'))
  }

  getData3(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader}).map((response: any) => {
      return this.eaxtractData(response)
    });
  }

  remove(index: string): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9000/remove/' + index, {headers: jsonHeader}).map((response: any) => {
      return this.eaxtractData(response)
    });
  }

  addTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    let obj = {
      date: task.date,
      title: task.title,
      description: task.description,
      priority: task.priority
    };
    return this.http.post('http://localhost:9000/add', obj, {headers: jsonHeader})
      .map(data => {
        return this.eaxtractData(data)
      })
      .catch((e: any) => {
        return this.handle(e)
      });
  }

  updateTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    let obj = {
      date: task.date,
      title: task.title,
      description: task.description,
      priority: task.priority,
      _id: task._id
    };
    return this.http.post('http://localhost:9000/update', obj, {headers: jsonHeader})
      .map(data => {
        return this.eaxtractData(data)
      })
      .catch((e: any) => {
        return this.handle(e)
      });
  }

  eaxtractData(res: any) {
    let body = res.json();
    return body;
  }

  private handle(error: any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message
      } else {
        errMsg = 'Some thing went wrong';
      }

    }
    catch (e) {
      errMsg = 'Somthing Went Wrong try again!!'
    }
    return Observable.throw(new Error(errMsg));
  }


}
