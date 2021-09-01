import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BetsPage } from './bets.page';

describe('BetsPage', () => {
  let component: BetsPage;
  let fixture: ComponentFixture<BetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
