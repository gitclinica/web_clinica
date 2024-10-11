/* eslint-disable react/prop-types */
const LoginTitle = ({ title }) => {
  return (
    <>
      <div className="brand-logo mb-2">
        <img src="/images/logo-dark.svg" />
      </div>
      <h5 className="font-weight-light mb-3">{title}</h5>
    </>
  );
};

export default LoginTitle;
