import Container from "@/components/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="flex flex-col text-center justify-center items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
            all our technicians are highly skilled and experienced in various aspect of computer repair skills.
            Moreover they are licensed and well trained.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-7"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
