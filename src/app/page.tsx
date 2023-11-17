import Header from "@/shared/components/header/Header";
import Introduction from "@/shared/feartures/introduction/Introduction";
import { colorTokens } from "@/shared/theme";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to top, #e0bfb8, #e6c6c1, #eccdca, #f1d5d2, #f7dcdb, #f9e0df, #fbe3e3, #fde7e7, #fbe8e8, #f9e9e9, #f7eaea, #f5ebeb)",
        color: colorTokens.primary.grey,
      }}
    >
      <Header />
      <Introduction />
    </Box>
  );
}
