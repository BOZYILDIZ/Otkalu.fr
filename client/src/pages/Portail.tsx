import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle, Lock, Settings, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Portail() {
  const features = [
    "Portails coulissants et battants",
    "Motorisation disponible",
    "Acier, aluminium ou fer forgé",
    "Designs modernes et traditionnels",
    "Conformes aux normes de sécurité",
    "Garantie et maintenance",
  ];

  const types = [
    {
      title: "Portail Coulissant",
      description:
        "Idéal pour les espaces restreints, le portail coulissant s'ouvre latéralement sans débordement. Parfait pour les entrées en pente.",
      icon: Zap,
    },
    {
      title: "Portail Battant",
      description:
        "Classique et élégant, le portail battant s'ouvre vers l'intérieur ou l'extérieur. Disponible en 1 ou 2 vantaux selon vos besoins.",
      icon: Lock,
    },
    {
      title: "Motorisation",
      description:
        "Ajoutez le confort de la motorisation à votre portail pour une ouverture automatique à distance via télécommande ou smartphone.",
      icon: Settings,
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
              Portails Sur Mesure à Haguenau
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              L'installation d'un portail n'est pas une chose obligatoire mais elle permet de se
              prémunir contre les risques d'effraction et autres dangers. Expert en fabrication et
              pose de portails, OTK ALU vous fait des devis d'installation en fonction de vos
              besoins à des prix très convenables !
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
                src="/hero_soudure.webp"
                alt="Fabrication de portail métallique"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Pourquoi Installer un Portail ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous prenons les mesures pour vous proposer le portail idéal tout en appliquant les
                normes de sécurité. Un portail bien conçu améliore non seulement la sécurité de
                votre propriété, mais ajoute également une valeur esthétique et augmente la valeur
                de votre bien immobilier.
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
              Types de Portails
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
              Matériaux et Finitions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Acier</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Robuste et durable, l'acier offre une excellente résistance aux tentatives
                  d'effraction. Disponible avec traitement anti-corrosion et peinture thermolaquée
                  dans la couleur de votre choix.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Aluminium</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Léger et ne nécessitant aucun entretien, l'aluminium est idéal pour les grands
                  portails. Résistant à la corrosion, il conserve son aspect neuf pendant des
                  années.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Fer Forgé</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pour un style traditionnel et élégant, le fer forgé permet des créations
                  artistiques uniques. Chaque portail est une œuvre d'art personnalisée.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Finitions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Large choix de couleurs RAL, finitions brossées, polies ou texturées. Possibilité
                  d'ajouter des éléments décoratifs pour un portail unique.
                </p>
              </div>
            </div>
          </div>

          {/* Motorization Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Motorisation de Portail</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ajoutez le confort de la motorisation à votre portail. Plus besoin de sortir de
                votre véhicule par mauvais temps ! Contrôlez l'ouverture et la fermeture de votre
                portail à distance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Télécommande et contrôle via smartphone
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Système de sécurité anti-écrasement
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Batterie de secours en cas de panne</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Installation et maintenance assurées</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/metalwork-fabrication.jpg"
                alt="Motorisation de portail"
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
            Notre Processus d'Installation
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Visite & Devis",
                desc: "Visite sur site, prise de mesures et devis gratuit",
              },
              {
                step: "2",
                title: "Conception",
                desc: "Design personnalisé selon vos préférences",
              },
              {
                step: "3",
                title: "Fabrication",
                desc: "Réalisation en atelier avec matériaux de qualité",
              },
              {
                step: "4",
                title: "Installation",
                desc: "Pose professionnelle et mise en service",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
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
              Besoin d'un Portail Sur Mesure ?
            </h2>
            <p className="text-lg opacity-90">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit. Nous
              intervenons dans tout le Bas-Rhin.
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
