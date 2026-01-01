import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <img src={service.img} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{service.name}</h3>
        <p>৳ {service.price} / hour</p>
        <Link href={`/service/${service.id}`} className="btn mt-2 block">
          View Details
        </Link>
      </div>
    </div>
  );
}
