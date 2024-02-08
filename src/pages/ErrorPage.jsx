function ErrorPage({ errStatusCode, errMessage }) {
  return (
    <div>
      <h1>{errStatusCode}</h1>
      <p>{errMessage}</p>
    </div>
  );
}

export default ErrorPage;
