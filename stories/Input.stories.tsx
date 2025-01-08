import React from "react";
import Input from "../components/input/Input";

const inputStories = {
  title: "Components/Input",
  component: Input,
};

export default inputStories;

export const Default = () => (
  <Input placeholder="Type something..." onChange={(e) => console.log(e.target.value)} />
);

export const WithLabel = () => (
  <Input
    label="Username"
    placeholder="Enter your username"
    onChange={(e) => console.log(e.target.value)}
  />
);

export const Disabled = () => (
  <Input
    label="Disabled Input"
    placeholder="Cannot type here"
    disabled
  />
);

export const WithError = () => (
  <Input
    label="Email Address"
    placeholder="Enter your email"
    error="Invalid email address"
    onChange={(e) => console.log(e.target.value)}
  />
);
