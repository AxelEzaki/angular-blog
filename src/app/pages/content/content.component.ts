import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFakes } from 'src/app/data/dataFakes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  public photoCover: string = "";
  @Input()
  public contentTitle: string = "";
  @Input()
  public contentDescription: string = "";

  private id: string|null = "0";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((valor) => {
      this.id = valor.get("Id");

      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string|null){
    const result = dataFakes.filter(article => article.Id.toString() == id)[0];

    this.photoCover = result.Photo;
    this.contentTitle = result.Title;
    this.contentDescription = result.Description;
  }

}
