import Image from "next/image";

const InvoiceButton = () => {
  return (
    <button className="HeadingSVariant bg-dark_purple hover:bg-light_purple text-white flex items-center  rounded-3xl gap-3 w-full max-w-[150px] h-12 p-2">
      <div className="bg-white p-3 rounded-full w-8 h-8">
        <Image alt="" src="/assets/icon-plus.svg" width={22} height={22} />
      </div>
      New Invoice
    </button>
  );
};

export default InvoiceButton;
