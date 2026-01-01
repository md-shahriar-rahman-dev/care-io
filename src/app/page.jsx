import ServiceCard from "@/components/ServiceCard";

const services = [
  { id: "baby", name: "Baby Care", price: 500, img: "/images/baby-care.jpg" },
  { id: "elderly", name: "Elderly Care", price: 600, img: "/images/elderly-care.jpg" },
  { id: "sick", name: "Sick Care", price: 700, img: "/images/sick-care.jpg" },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-16 text-center">
        <h1 className="text-4xl font-bold">Trusted Care for Your Loved Ones</h1>
        <p className="mt-4">Safe • Reliable • Affordable</p>
      </section>

      <section className="p-10 grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </section>
    </>
  );
}
