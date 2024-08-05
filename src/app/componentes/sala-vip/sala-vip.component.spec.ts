import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaVipComponent } from './sala-vip.component';

describe('SalaVipComponent', () => {
  let component: SalaVipComponent;
  let fixture: ComponentFixture<SalaVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaVipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
