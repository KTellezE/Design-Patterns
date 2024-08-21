
import { UIManager } from './UIManager';
import { AdminUIFactory } from './UIObjects/AdminUIFactory';

const uiFactory = new AdminUIFactory();
const uiManager = new UIManager(uiFactory);

const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

