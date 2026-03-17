import PracticeLayout from "./PracticeLayout";

export default function CivilLitigation() {
  return (
    <PracticeLayout
      title="Civil Litigation"
      description="We represent clients in civil disputes and ensure effective resolution through legal proceedings."
      services={[
        "Contract disputes",
        "Recovery suits",
        "Consumer disputes",
        "Legal notices",
        "Court representation",
      ]}
    />
  );
}