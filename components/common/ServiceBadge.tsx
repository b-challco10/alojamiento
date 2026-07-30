import { Bath, Wifi, MonitorPlay, Droplets, BedDouble } from "lucide-react";

interface Props {
  icon: "bath" | "wifi" | "tv" | "water" | "bed";
  text: string;
}

const icons = {
  bath: <Bath size={15} />,
  wifi: <Wifi size={15} />,
  tv: <MonitorPlay size={15} />,
  water: <Droplets size={15} />,
  bed: <BedDouble size={15} />
};

export default function ServiceBadge({ icon, text }: Props) {
  return (
    <span className="flex items-center gap-1 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-sm text-green-800">
      {icons[icon]}
      {text}
    </span>
  );
}