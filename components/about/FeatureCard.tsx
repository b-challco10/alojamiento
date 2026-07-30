import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
        <Icon className="text-green-700" size={28} />
      </div>

      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

      <p className="mt-3 text-gray-600 leading-7">{description}</p>
    </div>
  );
}
