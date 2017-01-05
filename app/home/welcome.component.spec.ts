import { WelcomeComponent } from './welcome.component';

describe('Welcome Component', () => {
  let welcomeComp: WelcomeComponent;

  beforeEach(function() {
    welcomeComp  = new WelcomeComponent();
  })

  it('should create welcome component', () => expect(welcomeComp).toBeDefined() );

  it('should have a title set to beer list', () => {
    expect(welcomeComp.pageTitle).toBe('Beer List');
  })
})
