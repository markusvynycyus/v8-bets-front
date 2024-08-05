import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaInternacionalComponent } from './sala-internacional.component';

describe('SalaInternacionalComponent', () => {
  let component: SalaInternacionalComponent;
  let fixture: ComponentFixture<SalaInternacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaInternacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
