import type {Meta, StoryObj} from "@storybook/react";
import DocumentsList from "./DocumentsList.tsx";

const meta = {
    title: "Molecules/Documents List",
    component: DocumentsList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {},
    render: () => <div style={{height: "400px"}}><DocumentsList/></div>
}satisfies Meta<typeof DocumentsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

