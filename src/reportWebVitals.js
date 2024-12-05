/**
 * File:    reportWebVitals.js
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   Report web vitals for the React app prototype admin website.
 */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
