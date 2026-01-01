'use client'
import { useParams } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { id: "1", name: "Baby Care", price: 200, img: "/images/baby.jpg" },
  { id: "2", name: "Elderly Care", price: 250, img: "/images/elderly.jpg" },
  { id: "3", name: "Sick People Care", price: 300, img: "/images/sick.jpg" },
];

export default function ServicePage() {
  const params = useParams(); // fetch the dynamic param
  const service = services.find((s) => s.id === params.service_id);

  if (!service) return <p className="text-center mt-20">Service not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <img src={service.img} alt={service.name} className="rounded mb-4" />
      <p className="text-lg mb-2">Price: ৳ {service.price} / hour</p>
      <p className="mb-4">This is a trusted {service.name} service to make caregiving easy and secure.</p>
      <a
        href={`/booking/${service.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Book Service
      </a>
    </div>
  );
}
