import type {Meta, StoryObj} from "@storybook/react";
import ProcessMenu from "./ProcessMenu.tsx";

const meta = {
    title: "Molecules/Process Menu",
    component: ProcessMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {},
}satisfies Meta<typeof ProcessMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
