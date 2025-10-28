import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Award, CheckCircle, Clock, Shield, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      title: "Garde-corps",
      description:
        "Spécialiste de la fabrication et de l'installation de garde-corps de haute qualité. Solide, robuste et personnalisable, l'acier est le matériau idéal pour un garde-corps, en intérieur comme en extérieur.",
      image: "/modern-railing.jpg",
      link: "/garde-corps",
    },
    {
      title: "Portail",
      description:
        "Expert en fabrication et pose de portails sur mesure. Nous prenons les mesures pour vous proposer le portail idéal tout en appliquant les normes de sécurité à des prix très convenables.",
      image: "/hero_soudure.webp",
      link: "/portail",
    },
    {
      title: "Escalier",
      description:
        "Installation d'escalier métallique adapté à vos besoins qui donne une touche finale à votre ambiance intérieure. Spécialisé dans ce domaine, nous répondons à vos besoins avec des designs modernes.",
      image: "/stair-railing.jpg",
      link: "/escalier",
    },
    {
      title: "Serrure",
      description:
        "Installation de serrures, clés et charnières pour vos fenêtres, portes et portails. Nous assurons l'assemblage et la maintenance de chaque pièce pour garantir votre sécurité au quotidien.",
      image: "/welding-work.jpg",
      link: "/serrure",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Expertise Professionnelle",
      description:
        "Des années d'expérience dans la métallerie et la serrurerie. Notre responsable est diplômé d'un titre professionnel de haut niveau.",
    },
    {
      icon: Shield,
      title: "Qualité Garantie",
      description:
        "Nous utilisons des matériaux de haute qualité et respectons toutes les normes de sécurité en vigueur pour chaque projet.",
    },
    {
      icon: Wrench,
      title: "Sur Mesure",
      description:
        "Chaque projet est unique. Nous concevons et fabriquons des solutions personnalisées adaptées à vos besoins spécifiques.",
    },
    {
      icon: Clock,
      title: "Réactivité",
      description:
        "Nous nous engageons à respecter les délais convenus et à répondre rapidement à toutes vos demandes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                Haguenau - Bas-Rhin (67)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Métallerie & Serrurerie
                <span className="block text-blue-300 mt-2">Sur Mesure</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Avec des années d'expérience professionnelle, OTK ALU est spécialisée dans la
                fabrication et l'installation de garde-corps, portails, escaliers et serrurerie.
                Nous intervenons pour les particuliers et les professionnels dans tout le Bas-Rhin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-900 hover:bg-blue-50">
                    Demander un Devis Gratuit
                  </Button>
                </Link>
                <a href="tel:0651234047">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10"
                  >
                    Appelez-nous: 06 51 23 40 47
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/hero_soudure.webp"
                alt="Artisan métallier en train de souder"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">OKT ALU</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Avec des années d'expérience professionnelle, l'entreprise OTK ALU est dans les
              métiers de la métallerie et de la serrurerie. Son responsable est diplômé d'un titre
              professionnel de haut niveau dans le domaine de la métallerie. Elle est située à
              Haguenau, ce qui lui permet d'accueillir l'ensemble du département du Bas-Rhin dans
              son espace dédié à la serrurerie en accordant toute son attention pour toutes les
              demandes des clients professionnels et des particuliers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Elle se fera un plaisir de vous apporter toute son expertise pour la réalisation de
              vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services en métallerie et serrurerie, tous réalisés
              sur mesure selon vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full">
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Choisir OTK ALU ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous mettons notre savoir-faire et notre expérience au service de vos projets avec un
              engagement qualité sans faille.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Prêt à Démarrer Votre Projet ?</h2>
            <p className="text-lg opacity-90">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis
              gratuit. Notre équipe est à votre écoute pour concrétiser vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
                >
                  Demander un Devis
                </Button>
              </Link>
              <a href="tel:0651234047">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10"
                >
                  06 51 23 40 47
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Devis Gratuit</h3>
                <p className="text-muted-foreground">
                  Obtenez une estimation précise et sans engagement pour votre projet.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Installation Professionnelle
                </h3>
                <p className="text-muted-foreground">
                  Nos équipes qualifiées assurent une pose dans les règles de l'art.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Intervention Rapide
                </h3>
                <p className="text-muted-foreground">
                  Nous intervenons rapidement dans tout le Bas-Rhin pour vos urgences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
