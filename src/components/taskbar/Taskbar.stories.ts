import type {Meta, StoryObj} from "@storybook/react";
import Taskbar from "./Taskbar.tsx";

const meta = {
    title: "Taskbar",
    component: Taskbar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {}
}satisfies Meta<typeof Taskbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
