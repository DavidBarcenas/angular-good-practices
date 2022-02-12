/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {entity: string}) {}

  ngOnInit() {}
}