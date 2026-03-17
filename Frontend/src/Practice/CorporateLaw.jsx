import PracticeLayout from "./PracticeLayout";

export default function CorporateLaw() {
  return (
    <PracticeLayout
      title="Corporate Law"
      description="We provide legal solutions for businesses to ensure compliance, growth, and risk management."
      services={[
        "Company formation",
        "Contract drafting",
        "Legal compliance",
        "Mergers & acquisitions",
        "Intellectual property",
      ]}
    />
  );
}