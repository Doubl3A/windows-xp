import type {Meta, StoryObj} from "@storybook/react";
import CurrentTime from "./CurrentTime.tsx";

const meta = {
    title: "Atoms/Current Time",
    component: CurrentTime,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {},
}satisfies Meta<typeof CurrentTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
