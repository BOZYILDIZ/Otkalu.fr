import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle, Home, Layers, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Escalier() {
  const features = [
    "Escaliers intérieurs et extérieurs",
    "Escaliers droits, tournants, colimaçon",
    "Ossature en acier robuste",
    "Marches en bois, métal ou verre",
    "Designs modernes et personnalisables",
    "Conformes aux normes de sécurité",
  ];

  const types = [
    {
      title: "Escalier Droit",
      description:
        "Le plus simple et économique, l'escalier droit convient aux espaces généreux. Design épuré et moderne.",
      icon: TrendingUp,
    },
    {
      title: "Escalier Tournant",
      description:
        "Idéal pour optimiser l'espace, l'escalier tournant (quart tournant ou deux-quarts tournant) s'adapte à tous les intérieurs.",
      icon: Layers,
    },
    {
      title: "Escalier Colimaçon",
      description:
        "Parfait pour les petits espaces, l'escalier en colimaçon est à la fois fonctionnel et esthétique avec son design hélicoïdal.",
      icon: Home,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Escaliers Métalliques Sur Mesure
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Une maison constituée de plusieurs étages impose le recours à un escalier. C'est pour
              cela que OTK ALU vous propose ses services d'installation d'escalier adapté à vos
              besoins qui donne une touche finale à votre ambiance intérieure. Spécialisé dans ce
              domaine, notre société fait le nécessaire pour répondre à vos besoins et ainsi vous
              satisfaire dans le design de l'escalier installé.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Demander un Devis Gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/stair-railing.jpg"
                alt="Escalier métallique moderne"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Un Escalier Qui Allie Fonctionnalité et Esthétique
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Un escalier doit allier fonctionnalité et esthétique. Escalier droit, escalier
                tournant, escalier colimaçon, ossature en acier, marches en bois, nous étudions
                ensemble votre projet d'escalier. Choisissez votre forme, votre style et le type de
                matériaux qui correspondent à votre intérieur et à vos goûts.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Types Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Types d'Escaliers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {types.map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <type.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Matériaux et Combinaisons
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Ossature en Acier
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'ossature en acier garantit robustesse et durabilité. Elle peut être laissée
                  apparente pour un style industriel ou habillée pour un rendu plus classique.
                  Traitement anti-corrosion et peinture dans la couleur de votre choix.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Marches en Bois</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Le bois apporte chaleur et élégance à votre escalier. Disponible en chêne, hêtre,
                  ou bois exotiques. Finitions vernies, huilées ou cirées selon vos préférences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Marches en Métal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pour un style résolument moderne, les marches en métal (acier, aluminium ou inox)
                  offrent un design épuré. Disponibles en tôle larmée pour l'extérieur ou en tôle
                  lisse pour l'intérieur.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Marches en Verre</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Le verre trempé apporte luminosité et légèreté à votre escalier. Idéal pour les
                  espaces contemporains, il crée une impression d'espace et de modernité.
                </p>
              </div>
            </div>
          </div>

          {/* Design Options */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Personnalisation et Design
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque escalier est unique et conçu selon vos besoins spécifiques. Nous prenons en
                compte vos contraintes d'espace, votre budget et vos préférences esthétiques pour
                créer l'escalier qui vous ressemble.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Garde-corps intégrés en acier, inox ou verre
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Rampes ergonomiques en bois ou métal
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Éclairage LED intégré pour un effet moderne
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Finitions personnalisées (peinture, vernis, etc.)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/welding-work.jpg"
                alt="Fabrication d'escalier sur mesure"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Étapes de Réalisation
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Étude",
                desc: "Analyse de vos besoins et contraintes",
              },
              {
                step: "2",
                title: "Mesures",
                desc: "Relevé précis sur site",
              },
              {
                step: "3",
                title: "Conception",
                desc: "Plans et modélisation 3D",
              },
              {
                step: "4",
                title: "Fabrication",
                desc: "Réalisation en atelier",
              },
              {
                step: "5",
                title: "Installation",
                desc: "Pose et finitions",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à Créer Votre Escalier Sur Mesure ?
            </h2>
            <p className="text-lg opacity-90">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit. Pour plus
              d'informations, contactez-nous.
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

      <Footer />
    </div>
  );
}
