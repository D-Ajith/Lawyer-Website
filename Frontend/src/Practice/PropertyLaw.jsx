import PracticeLayout from "./PracticeLayout";

export default function PropertyLaw() {
  return (
    <PracticeLayout
      title="Property Law"
      description="We assist clients in handling property disputes, documentation, and transactions to safeguard their assets."
      services={[
        "Property registration",
        "Land disputes",
        "Sale & purchase agreements",
        "Title verification",
        "Real estate litigation",
      ]}
    />
  );
}