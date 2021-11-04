export const MapRoutes = (routes, Layout) =>
  routes.map(({ component: Component, ...rest }) => ({
    component: Layout(Component),
    ...rest
  }));