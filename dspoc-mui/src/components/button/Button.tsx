import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { size: "small" },
//           style: {
//             fontSize: "14px",
//             lineHeight: "18px",
//             padding: "4px 15px",
//             borderRadius: "2px",
//           },
//         },
//         {
//           props: { size: "medium" },
//           style: {
//             fontSize: "14px",
//             lineHeight: "22px",
//             padding: "4px 15px",
//             borderRadius: "2px",
//           },
//         },
//         {
//           props: { size: "large" },
//           style: {
//             fontSize: "14px",
//             lineHeight: "32px",
//             padding: "4px 15px",
//             borderRadius: "2px",
//           },
//         },
//         {
//           props: { color: "primary" },
//           style: {
//             backgroundColor: "#19234D",
//             color: "#fff",
//             ":hover": {
//               backgroundColor: "#334699",
//             },
//           },
//         },
//       ],
//     },
//   },
// });

const StyledButton = styled(MaterialButton)({
  backgroundColor: "#334699",
  color: "#FFF",
  textTransform: "none",
  borderRadius: "2px",
  fontWeight: "normal",
  ":hover": {
    backgroundColor: "#6679CC",
  },
  "&.MuiButton-sizeSmall": {
    fontSize: "14px",
    lineHeight: "18px",
    padding: "4px 15px",
  },
  "&.MuiButton-sizeMedium": {
    fontSize: "14px",
    lineHeight: "22px",
    padding: "4px 15px",
  },
  "&.MuiButton-sizeLarge": {
    fontSize: "14px",
    lineHeight: "32px",
    padding: "4px 15px",
  },
});

export interface ButtonProps extends MaterialButtonProps {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton {...props} disableRipple={true}>
      {children}
    </StyledButton>
  );
}
