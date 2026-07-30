import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp(){

  return (

    <a
      href="https://wa.me/59168011257"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
    >

      <MessageCircle size={28}/>

    </a>

  );

}