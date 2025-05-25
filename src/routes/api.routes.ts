// src/router/apiRoutes.ts
export const apiRoutes = {
    auth: {
      login: '/auth/login',
      me: '/auth/me',
      refresh: '/auth/refresh',
    },
    users: {
      detail: '/users/:id', // dynamic param
      orders: '/users/:userId/orders/:orderId',
    },
} as const;