import { Settings } from "@/types";

export const settings:Settings = {
    appName: 'React Boilerplate',
    version: '1.0.0',
    apiWaitTime: 8000, // 5 seconds
    requireRedux: true,
} as const;