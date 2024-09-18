import type {Meta, StoryObj} from "@storybook/react";
import DesktopEnvironment from "./DesktopEnvironment.tsx";

const meta = {
    title: "Templates/DesktopEnvironment",
    component: DesktopEnvironment,
    tags: ["autodocs"],
    parameters: {
        layout: "",
    },
    argTypes: {},
    args: {}
}satisfies Meta<typeof DesktopEnvironment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};