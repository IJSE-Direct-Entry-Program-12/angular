import { Injectable } from '@angular/core';
import {collection, collectionData, deleteDoc, doc, Firestore, getDocs, query, where} from "@angular/fire/firestore";
import {Observable} from "rxjs";

export type Task = {
  _id: string,
  description: string,
  completed: boolean,
  user: string
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly taskCollectionRef;

  constructor(private fireStore: Firestore) {
    this.taskCollectionRef = collection(fireStore, "task");
  }

  getTasks(userEmail: string){
    // SELECT * FROM task WHERE user = 'suranga@ijse.lk'
    const queryGetTasks =
      query(this.taskCollectionRef, where("user",
      "==", userEmail));
    return collectionData(queryGetTasks, {idField: "_id"}) as Observable<Task[]>;
  }

  removeTask(task: Task) {
    deleteDoc(doc(this.taskCollectionRef, task._id));
  }
}
