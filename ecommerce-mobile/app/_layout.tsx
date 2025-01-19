import "@/global.css";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShoppingCart, User } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";

const queryClient = new QueryClient()

export default function RootLayout() {
    const cartItemsNum = useCart((state) => state.items.length);
    
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider>
                <Stack 
                    screenOptions={{ 
                        headerRight: () => (
                        <Link href={'/cart'} asChild>
                            <Pressable className="flex-row gap-2">
                                 <Icon as={ShoppingCart} />
                                 <Text>{cartItemsNum > 0 && cartItemsNum}</Text>
                            </Pressable>
                        </Link>
                        ),
                        headerLeft: () => (
                            <Link href={'/login'} asChild>
                                <Pressable className="flex-row gap-2">
                                     <Icon as={User} />
                                </Pressable>
                            </Link>
                        ),
                    }}
                >
                    <Stack.Screen name="index" options={{title: 'Shop'}} />
                    <Stack.Screen name="product/[id]" options={{title: 'Product'}} />
                </Stack> 
            </GluestackUIProvider>
        </QueryClientProvider>
   
    );
}