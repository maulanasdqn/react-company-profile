const ButtonPrimary = (props: any) => {
  const { text, color, size } = props;
  return (
    <>
      <button
        className={`${color} ${size} w-auto h-auto bg-white text-gray-700 rounded-lg p-3`}
      >
        {text}
      </button>
    </>
  );
};

const ButtonSecondary = (props: any) => {
  const { text, color, size } = props;
  return (
    <>
      <button
        className={`${color} ${size} w-auto h-auto border-1 border-white text-white bg-gray-700 rounded-lg p-3`}
      >
        {text}
      </button>
    </>
  );
};

export const Button = (props: any) => {
  return (
    <>
      {props.isprimary ? (
        <ButtonPrimary color={props.color} text={props.text} />
      ) : (
        <ButtonSecondary color={props.color} text={props.text} />
      )}
    </>
  );
};
