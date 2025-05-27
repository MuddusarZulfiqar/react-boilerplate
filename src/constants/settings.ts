import { Settings } from "@/types";

export const settings:Settings = {
    appName: 'MyApp',
    version: '1.0.0',
    apiWaitTime: 8000, // 5 seconds
    favIcon: '/favicon.ico',
} as const;