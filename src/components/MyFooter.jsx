const AnnoCorrente = new Date().getFullYear();

const MyFooter = () => {
  return (
    <p className="bg-secondary text-light d-flex justify-content-center p-5 mt-4 ">
      Epicode - {AnnoCorrente}
    </p>
  );
};

export default MyFooter;
