import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const event = { target: { value: 'Test' } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onEnter should add the name to the list', () => {
    component.onEnter(event);
    expect(component.listOfNames).toEqual([{ name: 'Test' }]);
  });

  it('#goToAuthors should clear the localstorage and navigate to home', () => {
    const spy = spyOn(component['router'], 'navigate');
    component.goToAuthors();
    expect(spy).toHaveBeenCalledWith(['/autores']);
  });
});
