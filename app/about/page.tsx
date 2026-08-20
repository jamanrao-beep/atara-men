import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-alabaster min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/assets/images/2.png"
            alt="Atara Men Craftsmanship"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-[1600px] mx-auto px-6 lg:px-10 pb-16">
            <span className="text-accent-label text-antique-gold mb-4 block">OUR STORY</span>
            <h1 className="text-5xl md:text-7xl font-serif text-pearl">The Art of<br />Distinction</h1>
          </div>
        </section>

        {/* Story */}
        <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-accent-label text-antique-gold mb-6 block">HERITAGE & CRAFT</span>
              <h2 className="text-4xl font-serif text-obsidian mb-8 leading-tight">
                Where Tradition Meets<br />Modern Elegance
              </h2>
              <div className="space-y-6 text-charcoal font-light leading-relaxed">
                <p>
                  Atara Men was born from a singular vision: to create Indian menswear that honors centuries of craftsmanship
                  while embracing the sensibilities of the contemporary gentleman.
                </p>
                <p>
                  Every piece in our collection begins with the finest fabrics — hand-selected silks from Banaras,
                  premium wool blends from Italian mills, and artisanal brocades woven by master craftsmen whose
                  families have practiced this art for generations.
                </p>
                <p>
                  Our design philosophy is rooted in restraint. We believe that true luxury whispers rather than shouts.
                  Each stitch, each thread, each detail is considered — resulting in garments that feel as extraordinary
                  as they look.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/images/11.png"
                alt="Atara Men Craftsmanship Detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-obsidian text-pearl py-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <span className="text-accent-label text-antique-gold mb-4 block">OUR VALUES</span>
              <h2 className="text-4xl font-serif text-pearl">What We Stand For</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Craftsmanship",
                  text: "Every garment is hand-finished by artisans with decades of experience. We preserve traditional techniques while embracing modern precision.",
                },
                {
                  title: "Sustainability",
                  text: "We source ethically, produce responsibly, and create pieces designed to last a lifetime — not a season.",
                },
                {
                  title: "Bespoke Experience",
                  text: "From fabric selection to final fitting, our bespoke service ensures every piece is uniquely yours.",
                },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <div className="w-16 h-[1px] bg-antique-gold mx-auto mb-8" />
                  <h3 className="text-xl font-serif text-pearl mb-4">{v.title}</h3>
                  <p className="text-pearl/60 font-light leading-relaxed text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
