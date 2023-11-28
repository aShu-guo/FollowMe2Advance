// typings.d.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // is optional - does not have to be on every route
    keepAlive?: boolean;
  }
}
