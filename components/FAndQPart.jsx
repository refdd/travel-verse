import React from "react";
import Faq from "react-faq-component";
const data = {
  rows: [
    {
      title: (
        <h2 className="text-[#17233e] text-[11px]  ">
          Lorem ipsum dolor sit amet
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Roboto capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-[11px]    ">
          Nunc maximus, magna at ultricies 
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Roboto capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-[11px]    ">
          maximus, magna at ultricies elementum
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Roboto capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          purus, at tempus turpis.
        </p>
      ),
    },
  ],
  styles: {
    // bgColor: 'white',
    rowTitleColor: "#17233e",
    // titleTextSize: "0",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  },
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};
function FAndQPart() {
  return (
    <div className="container mx-auto ">
      <Faq data={data} config={config} />
    </div>
  );
}

export default FAndQPart;
