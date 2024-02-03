const LoadingPage = () => {
  return (
    <div className="text-center mt-5 ">
      <div
        className="spinner-border"
        style={{ height: "50px", width: "50px" }}
        role="status"
      ></div>
      <h5>loading...</h5>
    </div>
  );
};

export default LoadingPage;
