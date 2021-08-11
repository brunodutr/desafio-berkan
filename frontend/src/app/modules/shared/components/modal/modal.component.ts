import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'berkan-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  target: string | undefined;

  @Input()
  title: string | undefined;

  @Input()
  button: string  = 'Click';

  @Output()
  action: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  emitEvent() {
    this.action.emit();
  }
}
