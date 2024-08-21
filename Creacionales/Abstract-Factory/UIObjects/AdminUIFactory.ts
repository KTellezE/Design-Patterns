import { UIFactory } from "../UIFactory";
import { AdminButton } from "./AdminButton";
import { AdminDialog } from "./AdminDialog";
import { IButton } from "./IButton";
import { IDialog } from "./IDialog";

export class AdminUIFactory implements UIFactory
{
    public createButton(): IButton {
        return new AdminButton()
    }

    public createDialog(): IDialog {
        return new AdminDialog()
    }
}