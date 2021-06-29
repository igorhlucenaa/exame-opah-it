import { Injectable } from "@angular/core";
import { LocalStorageService } from "ngx-webstorage";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(
    private localSt: LocalStorageService,
    protected localStorage: LocalStorage
  ) {}

  setData(obj) {
    let arr = [];
    arr.push(obj);
    this.getData().subscribe((res: []) => {
      if (res !== null) {
        console.log(res);
        res.map((res) => {
          arr.push(res);
        });
      }
    });
    return this.localStorage.setItem("data", arr);
  }

  getData() {
    return this.localStorage.getItem("data");
  }
}
