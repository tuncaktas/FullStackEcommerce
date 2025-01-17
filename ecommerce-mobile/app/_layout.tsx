import "@/global.css";
import { Slot, Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
    return (
        <GluestackUIProvider>
            <Stack /> 
        </GluestackUIProvider>
   
    );
}