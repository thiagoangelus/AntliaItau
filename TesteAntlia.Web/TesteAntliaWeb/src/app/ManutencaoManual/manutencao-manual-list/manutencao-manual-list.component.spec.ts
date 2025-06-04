import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoManualListComponent } from './manutencao-manual-list.component';

describe('ManutencaoManualListComponent', () => {
  let component: ManutencaoManualListComponent;
  let fixture: ComponentFixture<ManutencaoManualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoManualListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoManualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
