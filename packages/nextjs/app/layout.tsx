import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Defi Buddy",
  description: "for Neo X",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className="bg-[#121212]">
        {/* <ThemeProvider  > */}
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
