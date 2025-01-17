import "@/global.css";
import { Slot, Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
    return (
        <GluestackUIProvider>
            <Stack>
                <Stack.Screen name="index" options={{title: 'Shop'}} />
                <Stack.Screen name="product/[id]" options={{title: 'Product'}} />
            </Stack> 
        </GluestackUIProvider>
   
    );
}