
import { IButton } from './UIObjects/IButton';
import { IDialog } from './UIObjects/IDialog';
import { UIFactory } from './UIFactory';

export class UIManager {
    private uiFactory : UIFactory

    constructor(uiFactory : UIFactory)
    {
        this.uiFactory = uiFactory
    }

    public createUI() : { button: IButton, dialog: IDialog } {
        const button = this.uiFactory.createButton()
        const dialog = this.uiFactory.createDialog()
        return {button,dialog}
    }
}
