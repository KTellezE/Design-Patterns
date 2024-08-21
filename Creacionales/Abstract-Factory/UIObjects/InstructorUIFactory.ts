import { UIFactory } from "../UIFactory";
import { IButton } from "./IButton";
import { IDialog } from "./IDialog";
import { InstructorButton } from "./InstructorButton";
import { InstructorDialog } from "./InstructorDialog";

export class InstructorUIFactory implements UIFactory
{
    public createButton() : IButton
    {
        return new InstructorButton
    }

    public createDialog() : IDialog
    {
        return new InstructorDialog
    }
}