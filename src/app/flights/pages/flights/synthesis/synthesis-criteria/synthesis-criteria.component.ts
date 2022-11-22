import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SynthesisCriteria } from 'src/app/shared/models/synthesis-criteria.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-synthesis-criteria',
  templateUrl: './synthesis-criteria.component.html',
  styleUrls: ['./synthesis-criteria.component.css'],
})
export class SynthesisCriteriaComponent implements OnInit {
  synthesisForm!: FormGroup;
  @Output() eventSearch = new EventEmitter<SynthesisCriteria>();
  constructor(private readonly sharedService: SharedService) {}

  ngOnInit(): void {
    if (!this.sharedService.synthesisCreationDone) {
      this.sharedService.createSynthesisForm();
      this.sharedService.synthesisCreationDone = true;
      //this.sharedService.initDropDownLists();
    }
    this.synthesisForm = this.sharedService.synthesisForm;
  }
  doSynthesis() {
    const synthesisCriteriaValues = this.synthesisForm.value;
    this.eventSearch.emit(synthesisCriteriaValues);
  }
}
