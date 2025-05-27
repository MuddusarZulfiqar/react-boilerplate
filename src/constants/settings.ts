import { Settings } from "@/types";

export const settings:Settings = {
    appName: 'MyApp',
    version: '1.0.0',
    favIcon: '/favicon.ico',
    apiWaitTime: 8000, // 5 seconds
} as const;