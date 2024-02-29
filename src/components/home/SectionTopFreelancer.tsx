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
        <CardFIndTopFreelance icon={'/svg/programing-svgrepo-com.svg'} title="Programming & Development" subTitle="276,711" link="/hire/freelancers/programming-development"/>
        <CardFIndTopFreelance icon={'/svg/writing-note-svgrepo-com.svg'} title="Writing & Translation" subTitle="276,711"link="/hire/freelancers/writing-translation"/>
        <CardFIndTopFreelance icon={'/svg/art-studies-svgrepo-com.svg'} title="Design & Art" subTitle="276,711" link="/hire/freelancers/design-art"/>
        <CardFIndTopFreelance icon={'/svg/system-management-svgrepo-com.svg'} title="Administrative & Secretarial" subTitle="276,711" link="/hire/freelancers/admininstrative-secretarial"/>
        <CardFIndTopFreelance icon={'/svg/marketing-report-statistic-document-file-svgrepo-com.svg'} title="Sales & Marketing" subTitle="276,711" link="/hire/freelancers/sales-marketing"/>
        <CardFIndTopFreelance icon={'/svg/engineer-working-svgrepo-com.svg'} title="Engineering & Architecture" subTitle="276,711" link="/hire/freelancers/engineering-architecture"/>
        <CardFIndTopFreelance icon={'/svg/business-card-identity-svgrepo-com.svg'} title="Business & Finance" subTitle="276,711" link="/hire/freelancers/business-finance"/>
        <CardFIndTopFreelance icon={'/svg/education-learning-29-svgrepo-com.svg'} title="Education & Training" subTitle="276,711" link="/hire/freelancers/education-training"/>
        <CardFIndTopFreelance icon={'/svg/law-svgrepo-com.svg'} title="Legal" subTitle="276,711" link="/hire/freelancers/legal"/>
      </div>
      <div className="flex justify-center pt-10">
      <button className="px-5 py-2 rounded bg-[#196EAF] text-white font-semibold w-fit">
                  See All Skills
                </button>
      </div>
    </section>
  );
}
