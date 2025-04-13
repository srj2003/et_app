/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/addrequisition`; params?: Router.UnknownInputParams; } | { pathname: `/all-leaves`; params?: Router.UnknownInputParams; } | { pathname: `/allexpense`; params?: Router.UnknownInputParams; } | { pathname: `/allrequisitions`; params?: Router.UnknownInputParams; } | { pathname: `/apply-leave`; params?: Router.UnknownInputParams; } | { pathname: `/attendance`; params?: Router.UnknownInputParams; } | { pathname: `/eventEmitter`; params?: Router.UnknownInputParams; } | { pathname: `/expensedetails`; params?: Router.UnknownInputParams; } | { pathname: `/expenseform`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/manage-expense`; params?: Router.UnknownInputParams; } | { pathname: `/manage-leaves`; params?: Router.UnknownInputParams; } | { pathname: `/monitoring`; params?: Router.UnknownInputParams; } | { pathname: `/my-leaves`; params?: Router.UnknownInputParams; } | { pathname: `/my-requisitions`; params?: Router.UnknownInputParams; } | { pathname: `/navbar`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/requisitions`; params?: Router.UnknownInputParams; } | { pathname: `/userattendance`; params?: Router.UnknownInputParams; } | { pathname: `/usertracker`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/admin_analytics` | `/admin_analytics`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/analytics` | `/analytics`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/analytics_access_controller` | `/analytics_access_controller`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/dashboard` | `/dashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/leavedashboard` | `/leavedashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/users` | `/users`; params?: Router.UnknownInputParams; } | { pathname: `/utils/eventEmitter`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/addrequisition`; params?: Router.UnknownOutputParams; } | { pathname: `/all-leaves`; params?: Router.UnknownOutputParams; } | { pathname: `/allexpense`; params?: Router.UnknownOutputParams; } | { pathname: `/allrequisitions`; params?: Router.UnknownOutputParams; } | { pathname: `/apply-leave`; params?: Router.UnknownOutputParams; } | { pathname: `/attendance`; params?: Router.UnknownOutputParams; } | { pathname: `/eventEmitter`; params?: Router.UnknownOutputParams; } | { pathname: `/expensedetails`; params?: Router.UnknownOutputParams; } | { pathname: `/expenseform`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/manage-expense`; params?: Router.UnknownOutputParams; } | { pathname: `/manage-leaves`; params?: Router.UnknownOutputParams; } | { pathname: `/monitoring`; params?: Router.UnknownOutputParams; } | { pathname: `/my-leaves`; params?: Router.UnknownOutputParams; } | { pathname: `/my-requisitions`; params?: Router.UnknownOutputParams; } | { pathname: `/navbar`; params?: Router.UnknownOutputParams; } | { pathname: `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `/requisitions`; params?: Router.UnknownOutputParams; } | { pathname: `/userattendance`; params?: Router.UnknownOutputParams; } | { pathname: `/usertracker`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/admin_analytics` | `/admin_analytics`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/analytics` | `/analytics`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/analytics_access_controller` | `/analytics_access_controller`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/dashboard` | `/dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/leavedashboard` | `/leavedashboard`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/users` | `/users`; params?: Router.UnknownOutputParams; } | { pathname: `/utils/eventEmitter`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/addrequisition${`?${string}` | `#${string}` | ''}` | `/all-leaves${`?${string}` | `#${string}` | ''}` | `/allexpense${`?${string}` | `#${string}` | ''}` | `/allrequisitions${`?${string}` | `#${string}` | ''}` | `/apply-leave${`?${string}` | `#${string}` | ''}` | `/attendance${`?${string}` | `#${string}` | ''}` | `/eventEmitter${`?${string}` | `#${string}` | ''}` | `/expensedetails${`?${string}` | `#${string}` | ''}` | `/expenseform${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/manage-expense${`?${string}` | `#${string}` | ''}` | `/manage-leaves${`?${string}` | `#${string}` | ''}` | `/monitoring${`?${string}` | `#${string}` | ''}` | `/my-leaves${`?${string}` | `#${string}` | ''}` | `/my-requisitions${`?${string}` | `#${string}` | ''}` | `/navbar${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `/requisitions${`?${string}` | `#${string}` | ''}` | `/userattendance${`?${string}` | `#${string}` | ''}` | `/usertracker${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/admin_analytics${`?${string}` | `#${string}` | ''}` | `/admin_analytics${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/analytics${`?${string}` | `#${string}` | ''}` | `/analytics${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/analytics_access_controller${`?${string}` | `#${string}` | ''}` | `/analytics_access_controller${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/dashboard${`?${string}` | `#${string}` | ''}` | `/dashboard${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/leavedashboard${`?${string}` | `#${string}` | ''}` | `/leavedashboard${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/users${`?${string}` | `#${string}` | ''}` | `/users${`?${string}` | `#${string}` | ''}` | `/utils/eventEmitter${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/addrequisition`; params?: Router.UnknownInputParams; } | { pathname: `/all-leaves`; params?: Router.UnknownInputParams; } | { pathname: `/allexpense`; params?: Router.UnknownInputParams; } | { pathname: `/allrequisitions`; params?: Router.UnknownInputParams; } | { pathname: `/apply-leave`; params?: Router.UnknownInputParams; } | { pathname: `/attendance`; params?: Router.UnknownInputParams; } | { pathname: `/eventEmitter`; params?: Router.UnknownInputParams; } | { pathname: `/expensedetails`; params?: Router.UnknownInputParams; } | { pathname: `/expenseform`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/manage-expense`; params?: Router.UnknownInputParams; } | { pathname: `/manage-leaves`; params?: Router.UnknownInputParams; } | { pathname: `/monitoring`; params?: Router.UnknownInputParams; } | { pathname: `/my-leaves`; params?: Router.UnknownInputParams; } | { pathname: `/my-requisitions`; params?: Router.UnknownInputParams; } | { pathname: `/navbar`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/requisitions`; params?: Router.UnknownInputParams; } | { pathname: `/userattendance`; params?: Router.UnknownInputParams; } | { pathname: `/usertracker`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/admin_analytics` | `/admin_analytics`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/analytics` | `/analytics`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/analytics_access_controller` | `/analytics_access_controller`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/dashboard` | `/dashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/leavedashboard` | `/leavedashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/users` | `/users`; params?: Router.UnknownInputParams; } | { pathname: `/utils/eventEmitter`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
