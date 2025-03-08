
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
    'index.csr.html': {size: 5271, hash: 'c6ccd117db6fcd9b6ae41a21c4f41386f55cbbd7f6c4a72edbed5433403ad0b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1038, hash: '15fd2f6f6ccd1dadec175241c683aa85d8cf77b685f7d93b5f766d40e1ea6a8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12658, hash: '9e0333406eb62a85bdb688ae5610f202211a6d5a165b71c72698ff15bf66c2a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R37GORVW.css': {size: 226826, hash: 'd0uUHn5AnKw', text: () => import('./assets-chunks/styles-R37GORVW_css.mjs').then(m => m.default)}
  },
};
