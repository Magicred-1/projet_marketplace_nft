import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import { sepolia } from "@wagmi/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [sepolia],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Digital Delirium",
  projectId: "716cef2b70365c179f6d85bd82d8d46d",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
});

// added RainbowKitProvider wrapper
function MyApp({ Component, pageProps }) {
  return (
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
  );
}

export default MyApp;