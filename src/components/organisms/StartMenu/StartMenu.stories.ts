import type {Meta, StoryObj} from "@storybook/react";
import StartMenu from "./StartMenu.tsx";

const meta = {
    title: "Organisms/Start Menu",
    component: StartMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {}
}satisfies Meta<typeof StartMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
