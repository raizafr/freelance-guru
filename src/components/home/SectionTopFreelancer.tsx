import CardFIndTopFreelance from "@/components/card/CardFIndTopFreelance";

export default function SectionTopFreelancer() {
  return (
    <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center">
        Find Top Freelancer
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#2777C6] text-center" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        <CardFIndTopFreelance
          icon={"/svg/architecture-svgrepo-com.svg"}
          title="Interior design/Architecture"
          subTitle="276,711"
          link="/hire/freelancers/interior-design-architecture"
        />
        <CardFIndTopFreelance
          icon={
            "/svg/logistics-truck-ultrathin-vehicle-outline-svgrepo-com.svg"
          }
          title="Logistics and Supply-chain"
          subTitle="276,711"
          link="/hire/freelancers/logistic-and-supply-chain"
        />
        <CardFIndTopFreelance
          icon={"/svg/human-resources-svgrepo-com.svg"}
          title="Human Resources"
          subTitle="276,711"
          link="/hire/freelancers/human-resource"
        />
        <CardFIndTopFreelance
          icon={"/svg/marketing-laptop-chat-comment-dialogue-svgrepo-com.svg"}
          title="Sales marketing"
          subTitle="276,711"
          link="/hire/freelancers/sales-marketing"
        />
        <CardFIndTopFreelance
          icon={"/svg/administrator-analytics-svgrepo-com.svg"}
          title="Administrative & Operations"
          subTitle="276,711"
          link="/hire/freelancers/adminisitrative-and-operation"
        />
      </div>
      <div className="flex justify-center pt-10">
        <button className="px-5 py-2 rounded bg-[#196EAF] text-white font-semibold w-fit">
          See All Skills
        </button>
      </div>
    </section>
  );
}
