import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoManualCreateComponent } from './manutencao-manual-create.component';

describe('ManutencaoManualCreateComponent', () => {
  let component: ManutencaoManualCreateComponent;
  let fixture: ComponentFixture<ManutencaoManualCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoManualCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoManualCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
