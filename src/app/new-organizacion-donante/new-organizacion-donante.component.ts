import { Component, OnInit } from '@angular/core';
import { OrganizacionDonante } from 'src/model/organizacionDonante';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-organizacion-donante',
  templateUrl: './new-organizacion-donante.component.html',
  styleUrls: ['./new-organizacion-donante.component.css']
})
export class NewOrganizacionDonanteComponent implements OnInit {

  newOrganizacionForm: FormGroup
  org: OrganizacionDonante

  constructor(private route: ActivatedRoute, private router:Router, private service:DataService) { 
    var idx = route.snapshot.paramMap.get("idx");
    (idx) ? this.org = this.service.getOrganizacionDonanteByIdx(parseInt(idx)) : this.org = new OrganizacionDonante("", "","");
    this.newOrganizacionForm = new FormGroup({
      orgRazonSocial: new FormControl(this.org.razonSocial),
      orgCuil: new FormControl(this.org.cuil),
      orgDireccion: new FormControl(this.org.direccion)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    var orgD = new OrganizacionDonante(this.newOrganizacionForm.get("orgRazonSocial").value, this.newOrganizacionForm.get("orgCuil").value, this.newOrganizacionForm.get("orgDireccion").value)
    this.service.addOrganizacionDonante(orgD)
    this.router.navigateByUrl("/")
  }
}
