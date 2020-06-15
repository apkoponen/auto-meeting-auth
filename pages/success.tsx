import { FunctionComponent } from "react";

const Success: FunctionComponent = () => {
  return (
    <div className={`p-24 font-sans antialiased text-gray-900`}>
      Congrats! Authentication was successful. You can now go back to the app.
    </div>
  );
};

export default Success;
