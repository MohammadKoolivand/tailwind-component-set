import { within, userEvent } from "@storybook/testing-library";
import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const ClickableWithoutJest = {
  args: {
    label: "Click Me",
    onClick: () => console.log("Button clicked!"),
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Click Me");
    await userEvent.click(button);
  },
};
