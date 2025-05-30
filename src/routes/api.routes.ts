// src/router/apiRoutes.ts
export const apiRoutes = {
    auth: {
      login: '/auth/login',
      me: '/auth/me',
      refresh: '/auth/refresh',
    },
    users: {
      all: '/users',
      me: '/users/me',
      detail: '/users/:id', // dynamic param
      orders: '/users/:userId/orders/:orderId',
    },
} as const;