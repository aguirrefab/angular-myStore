import { Component, OnInit } from '@angular/core';
import { Person } from './class/Person';
import { Product } from './class/Product';
import { DataService } from './service/dataProducts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataProducts: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.dataProducts = result;
    });
  }

  btnDisabled = true;
  user = new Person('Fabian', 'Aguirre', 30);
  scrollProperty: string = '';
  names: string[] = ['jose', 'fabian', 'felipe', 'carlos'];
  newName: string = '';

  binding() {
    this.btnDisabled = !this.btnDisabled;
  }

  ingreseAge() {
    this.user.age += 1;
  }
  decreseAge() {
    this.user.age -= 1;
  }

  onScroll(event: Event) {
    const elemento = event.target as HTMLElement;

    this.scrollProperty = elemento.scrollTop.toString();
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;

    this.user.name = input.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
