import Breadcrumbs from "@/components/Breadcrumbs";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardTestimoni from "@/components/card/Testimoni";
import CardConsultation from "@/components/card/Consulation";
import CardShowcase from "@/components/card/Showcase";
import CardProduct from "@/components/card/Product";


export default function Home() {

  const breadcrumbsItems = ['Home', 'Layanan Design', 'Omah Apik 3'];

  const imagesSlider = [
    "/house-1.jpg",
    "/house-2.jpg",
    "/house-3.jpg"
  ];

  const detailDesign = {
    name: "Omah Apik 3",
    studio: {
      profile: "/studio-sae.png",
      name: "Studio SAe"
    },
    detail: {
      type: "Scandinavian",
      isModified: true,
      dimension: "15 x 8m",
      wide: "112m",
      floor: 2,
      bedroom: 4,
      price: "Rp. 32.500.000",
      consultationPrice: "Rp 560.000.000"
    },
    showcases: [
      {
        image: "/image-room-1.jpg",
        label: "Ruang Keluarga",
        dimension: "2.0 x 2.9"
      },
      {
        image: "/image-room-2.jpg",
        label: "Kamar tidur",
        dimension: "4.0 x 3.4"
      },
      {
        image: "/image-room-3.jpg",
        label: "Ruang Makan & Dapur",
        dimension: "3.0 x 2.9"
      },
      {
        image: "/image-room-1.jpg",
        label: "Ruang Kerja",
        dimension: "2.0 x 2.9"
      },
      {
        image: "/image-room-2.jpg",
        label: "Kamar Tidur",
        dimension: "4.0 x 3.4"
      }
    ]
  }

  const productList = [
    {
      name: "Omah Apik 1",
      image: "/image-home-1.jpg",
      studio: {
        profile: "/studio-sae.png",
        name: "Studio SAe"
      },
      detail: {
        type: "Scandinavian",
        dimension: "15 x 8m",
        wide: "112m",
        floor: 2,
        bedroom: 4,
        price: "Rp. 32.500.000",
        consultationPrice: "Rp 560.000.000"
      }
    },
    {
      name: "Omah Apik 2",
      image: "/image-home-2.jpg",
      studio: {
        profile: "/studio-sae.png",
        name: "Studio SAe"
      },
      detail: {
        type: "Scandinavian",
        dimension: "15 x 8m",
        wide: "112m",
        floor: 2,
        bedroom: 4,
        price: "Rp. 32.500.000",
        consultationPrice: "Rp 560.000.000"
      }
    },
    {
      name: "Omah Apik 3",
      image: "/image-home-3.jpg",
      studio: {
        profile: "/studio-sae.png",
        name: "Studio SAe"
      },
      detail: {
        type: "Scandinavian",
        dimension: "15 x 8m",
        wide: "112m",
        floor: 2,
        bedroom: 4,
        price: "Rp. 32.500.000",
        consultationPrice: "Rp 560.000.000"
      }
    },
    {
      name: "Omah Apik 4",
      image: "/image-home-4.jpg",
      studio: {
        profile: "/studio-sae.png",
        name: "Studio SAe"
      },
      detail: {
        type: "Scandinavian",
        dimension: "15 x 8m",
        wide: "112m",
        floor: 2,
        bedroom: 4,
        price: "Rp. 32.500.000",
        consultationPrice: "Rp 560.000.000"
      }
    }
  ]

  const testimonials = [
    {
      profile: "/profile.svg",
      name: "Budi Setiadi",
      rate: "4.5",
      testimonial: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"
    },
    {
      profile: "/profile.svg",
      name: "Budi Setiadi",
      rate: "4.5",
      testimonial: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"
    },
    {
      profile: "/profile.svg",
      name: "Budi Setiadi",
      rate: "4.5",
      testimonial: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"
    }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbsItems} />
      <ImageSlider images={imagesSlider} />
      <section className="container flex flex-col lg:flex-row gap-9 mx-auto pt-6 pb-12 lg:pb-24 px-4 sm:px-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Tampilan Rumah</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailDesign.showcases.map((showcase,index) => (
              <CardShowcase
                key={index}
                image={showcase.image}
                label={showcase.label}
                dimension={showcase.dimension}
              />
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-8">
          <CardConsultation name={detailDesign.name} studio={detailDesign.studio} detail={detailDesign.detail} />
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Testimoni</h3>
            {testimonials.map((testimonial,index) => (
              <CardTestimoni
                key={index}
                profile={testimonial.profile}
                name={testimonial.name}
                rate={testimonial.rate}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </aside>
      </section>
      <section className="container mx-auto py-[42px] px-4 sm:px-0">
        <h2 className="text-2xl font-semibold leading-5 mb-6">Desain Lainnya oleh Studio SAe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productList.map((product, index) => (
            <CardProduct
              key={index}
              name={product.name}
              image={product.image}
              studio={product.studio}
              detail={product.detail}
            />
          ))}
        </div>
      </section>
    </>
  );
}
