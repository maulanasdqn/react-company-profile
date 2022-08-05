export const Layouts = (props: any) => {
  const { content, bgcolor } = props;
  return (
    <>
      <section className={` ${bgcolor} flex justify-center items-center w-full h-screen`}>
        {content}
      </section>
    </>
  );
};
