import React from "react";

const FacebookFeed = () => {
  return (
    <iframe
      title={"Facebook page feed"}
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDERBY-AAL-NAGIB-101202794592601%2F%3Fref%3Dpage_internal&tabs=timeline%2Cevents%2Cmessages%2C&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=275763453238450"
      width="500"
      height="500"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      // allowTransparency="true"
      allow="encrypted-media"
    />
  );
};
export { FacebookFeed };
