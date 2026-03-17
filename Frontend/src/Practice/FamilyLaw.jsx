import PracticeLayout from "./PracticeLayout";

export default function FamilyLaw() {
  return (
    <PracticeLayout
      title="Family Law"
      description="We handle sensitive family matters with care and confidentiality, ensuring fair and respectful legal solutions."
      services={[
        "Divorce and separation",
        "Child custody and support",
        "Alimony and maintenance",
        "Domestic violence cases",
        "Adoption and guardianship",
      ]}
    />
  );
}