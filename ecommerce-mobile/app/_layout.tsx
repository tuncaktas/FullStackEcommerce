import "@/global.css";
import { Slot, Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider>
                <Stack>
                    <Stack.Screen name="index" options={{title: 'Shop'}} />
                    <Stack.Screen name="product/[id]" options={{title: 'Product'}} />
                </Stack> 
            </GluestackUIProvider>
        </QueryClientProvider>
   
    );
}