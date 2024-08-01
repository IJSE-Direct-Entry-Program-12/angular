import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore, getDocs, query, where} from "@angular/fire/firestore";
import {Observable} from "rxjs";

export type Task = {
  id: string,
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

  getTasks(user: string){
    const queryGetTasks =
      query(this.taskCollectionRef, where("user",
      "==", user));
    return collectionData(queryGetTasks) as Observable<Task[]>;
  }
}
