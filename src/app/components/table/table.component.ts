import { EmitEventService } from "./../../services/emit-event.service";
import { StorageService } from "./../../services/storage.service";
import { MatTableDataSource } from "@angular/material/table";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements AfterViewInit {
  public data;
  sumResult;
  displayedColumns: string[] = ["tipo", "nomeMercadoria", "valor"];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public storage: StorageService,
    private emitEvent: EmitEventService
  ) {}

  ngAfterViewInit() {
    this.getData();
    if (this.emitEvent.subsVar == undefined) {
      this.emitEvent.subsVar =
        this.emitEvent.invokeFirstComponentFunction.subscribe(
          (name: string) => {
            console.log(name);
            this.getData();
          }
        );
    }
  }

  getData() {
    this.storage.getData().subscribe((res) => {
      this.data = res;
      console.log(this.data);
      if (res !== null) {
        this.sum();
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sum() {
    if (this.data !== null) {
      let concatArr = [];
      this.data.map((res) => {
        if (res.tipo === 1) {
          let val = res.valor;
          concatArr.push(val);
        } else if (res.tipo === 2) {
          let val = -Math.abs(res.valor);
          concatArr.push(val);
        }
      });

      this.sumResult = concatArr.reduce((total, currentElement) => {
        return total + currentElement;
      });
      console.log(this.sumResult);
    }
  }
}
