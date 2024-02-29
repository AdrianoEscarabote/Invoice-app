import Image from "next/image";

const NothingHereComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[240px] h-[342px] gap-16">
      <Image
        src={"/assets/illustration-empty.svg"}
        alt="illustration empty"
        width={240}
        height={200}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex items-center gap-6 flex-col">
        <h2 className="HeadingM text-color2">There is nothing here</h2>
        <p className="w-full max-w-[219px] Body flex flex-col text-center text-text_gray">
          <span>Create an invoice by clicking the</span>
          <span>
            <span className="font-bold">New Invoice</span> button and get
            started
          </span>
        </p>
      </div>
    </div>
  );
};

export default NothingHereComponent;
