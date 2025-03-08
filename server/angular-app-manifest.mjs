
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/EmployeePayrollFullStack/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/EmployeePayrollFullStack"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5271, hash: '5da3c1d455d92141f42e52a12a6357c8877dd525d967789b2670cbcb55bde37b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1038, hash: 'b95570fc753678b25fec9ee8c02291889a0d8631beaad8e6bc04253b097f0f6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12658, hash: '0ffd36d8375209a761da1fc14e8833495e34d80120f481fe4f9300e232479fe6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R37GORVW.css': {size: 226826, hash: 'd0uUHn5AnKw', text: () => import('./assets-chunks/styles-R37GORVW_css.mjs').then(m => m.default)}
  },
};
