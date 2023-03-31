import CustomeNavebar from "./CustomeNavebar";

const Base = ({ title = "Welcome", children }) => {
  return (
    <div className="container-fluid">
      <CustomeNavebar />
      {children}
    </div>
  );
};
export default Base;
