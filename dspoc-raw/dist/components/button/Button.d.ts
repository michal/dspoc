
export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends React.ComponentProps<"button"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
}
export declare function Button({ children, variant, size, asChild, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
