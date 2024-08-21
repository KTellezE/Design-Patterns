
import { UIManager } from './UIManager';
import { AdminUIFactory } from './UIObjects/AdminUIFactory';
import { InstructorUIFactory } from './UIObjects/InstructorUIFactory';
import { StudentUIFactory } from './UIObjects/StudentUIFactory';

const uiFactory = new AdminUIFactory()
const uiManager = new UIManager(uiFactory);

const adminUI = uiManager.createUI();
adminUI.button.render();
adminUI.dialog.show();

const uiFactory2 = new InstructorUIFactory()
const uiManager2 = new UIManager(uiFactory2);

const instUI = uiManager2.createUI()
instUI.button.render();
instUI.dialog.show();

const uiFactory3 = new StudentUIFactory()
const uiManager3 = new UIManager(uiFactory3);

const studUI = uiManager3.createUI()
studUI.button.render();
studUI.dialog.show();
