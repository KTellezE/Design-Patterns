import { UIFactory } from "../UIFactory"
import { IButton } from "./IButton"
import { IDialog } from "./IDialog"
import { StudentButton } from "./StudentButton"
import { StudentDialog } from "./StudentDialog"


export class StudentUIFactory implements UIFactory
{
    public createButton() : IButton
    {
        return new StudentButton
    }

    public createDialog() : IDialog
    {
        return new StudentDialog
    }
}