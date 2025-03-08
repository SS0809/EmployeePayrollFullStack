
export default {
  basePath: '/EmployeePayrollFullStack',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
