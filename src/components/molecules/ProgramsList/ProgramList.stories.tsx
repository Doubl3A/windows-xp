import type {Meta, StoryObj} from "@storybook/react";
import ProgramsList from "./ProgramsList.tsx";

const meta = {
    title: "Molecules/Program List",
    component: ProgramsList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    args: {},
    render: () => <div style={{height: "400px"}}><ProgramsList/></div>
}satisfies Meta<typeof ProgramsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

