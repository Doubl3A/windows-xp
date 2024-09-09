import type {Meta, StoryObj} from "@storybook/react";
import Desktop from "./Desktop.tsx";

const meta = {
    title: "Desktop",
    component: Desktop,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {}
}satisfies Meta<typeof Desktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
