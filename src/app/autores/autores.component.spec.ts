import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LastNameList } from '../core/lists/last-name-list';
import { PrepositionNameList } from '../core/lists/preposition-list';
import { NameValidatorsService } from '../core/name-validator';
import { AutoresComponent } from './autores.component';

describe('AutoresComponent', () => {
  let component: AutoresComponent;
  let fixture: ComponentFixture<AutoresComponent>;
  const listNameMock = [
    { name: 'Test da Test' },
    { name: 'Testing' },
    { name: 'Test junior' },
  ];
  const listFormatedNameMock = [
    { formatedName: 'TEST, Test da' },
    { formatedName: 'TESTING' },
    { formatedName: 'JUNIOR, Test' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoresComponent],
      imports: [RouterTestingModule],
      providers: [NameValidatorsService, LastNameList, PrepositionNameList],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  it('#ngOnInit should init the component', () => {
    localStorage.setItem('lista', JSON.stringify(listNameMock));
    spyOn(component, 'checkNames').and.returnValue();
    expect(component).toBeTruthy();
    localStorage.clear();
  });

  it('#goToHome should clear the localstorage and navigate to home', () => {
    const spy = spyOn(component['router'], 'navigate');
    component.goToHome();
    expect(spy).toHaveBeenCalledWith(['/']);
  });

  it('#checkNames should check and format names', () => {
    component.names = [];
    component.checkNames(listNameMock);
    expect(component.names).toEqual(listFormatedNameMock);
  });
});
