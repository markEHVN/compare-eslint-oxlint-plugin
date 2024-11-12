const titleGenerator = (title) => {
  return title;
};

export const FormHeader = () => (
  <div>
    <iframe
      title={titleGenerator("hello")}
      src="https://giphy.com/embed/3o7TKz9bX9v9v6Z6O4"
      width="480"
      height="270"
    />
  </div>
);
