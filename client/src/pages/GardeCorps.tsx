import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle, Shield, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function GardeCorps() {
  const features = [
    "Garde-corps intérieurs et extérieurs",
    "Acier galvanisé ou inox",
    "Designs modernes et personnalisables",
    "Conformes aux normes de sécurité",
    "Installation rapide et professionnelle",
    "Garantie décennale",
  ];

  const types = [
    {
      title: "Garde-corps Intérieurs",
      description:
        "Parfaits pour sécuriser vos escaliers et mezzanines tout en apportant une touche design à votre intérieur.",
      icon: Shield,
    },
    {
      title: "Garde-corps Extérieurs",
      description:
        "Résistants aux intempéries, ils sécurisent vos balcons, terrasses et escaliers extérieurs avec élégance.",
      icon: Wrench,
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
              Garde-corps Sur Mesure à Haguenau
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Spécialiste de la fabrication et de l'installation de garde-corps, OTK ALU vous
              propose des garde-corps de haute qualité avec une facilité de pose à des prix
              écrasés ! Solide, robuste et personnalisable, l'acier est le matériau idéal pour un
              garde-corps, en intérieur comme en extérieur.
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
                src="/modern-railing.jpg"
                alt="Garde-corps moderne en acier"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Pourquoi Choisir Nos Garde-corps ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Si vous avez un escalier, un balcon à risque ou le pourtour d'une terrasse ouverts,
                n'hésitez pas à demander une installation pour sécuriser votre environnement. C'est
                pour cela que OTK ALU privilégie l'acier, un matériau qui allie résistance,
                durabilité et esthétique.
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
              Types de Garde-corps
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
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
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Matériaux Utilisés</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Acier galvanisé :</strong> Résistant à la
                corrosion, idéal pour les installations extérieures. Offre un excellent rapport
                qualité-prix et une longévité exceptionnelle.
              </p>
              <p>
                <strong className="text-foreground">Inox (acier inoxydable) :</strong> Matériau
                haut de gamme, résistant aux intempéries et ne nécessitant aucun entretien. Parfait
                pour les environnements marins ou très humides.
              </p>
              <p>
                <strong className="text-foreground">Finitions personnalisables :</strong> Peinture
                thermolaquée dans la couleur de votre choix, finition brossée ou polie selon vos
                préférences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Notre Processus de Fabrication
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Prise de mesures", desc: "Visite sur site et relevé précis" },
              {
                step: "2",
                title: "Conception",
                desc: "Design personnalisé selon vos besoins",
              },
              {
                step: "3",
                title: "Fabrication",
                desc: "Réalisation en atelier avec matériaux de qualité",
              },
              {
                step: "4",
                title: "Installation",
                desc: "Pose professionnelle et conforme aux normes",
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
              Besoin d'un Garde-corps Sur Mesure ?
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
