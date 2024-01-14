import DonationForm from "@/components/donationForm/DonationForm";
import TitleBar from "@/components/shared/TitleBar/TitleBar";

const DonarRegistration = () => {
  return (
    <section>
      <div className="max-w-[1380px] mx-auto">
        <TitleBar label={"Register As Donor"} />

        {/* form */}
        <DonationForm />
      </div>
    </section>
  );
};

export default DonarRegistration;
