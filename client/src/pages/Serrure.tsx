import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle, Key, Lock, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Serrure() {
  const features = [
    "Installation de serrures multipoints",
    "Remplacement de cylindres et clés",
    "Charnières et ferrures de qualité",
    "Serrures pour portes, fenêtres et portails",
    "Intervention rapide en cas d'urgence",
    "Conseil personnalisé selon vos besoins",
  ];

  const services = [
    {
      title: "Installation de Serrures",
      description:
        "Installation de serrures de haute sécurité pour vos portes d'entrée, portes intérieures, fenêtres et portails. Serrures multipoints, serrures à cylindre européen, serrures connectées.",
      icon: Lock,
    },
    {
      title: "Reproduction de Clés",
      description:
        "Service de reproduction de clés pour tous types de serrures. Clés de sécurité, clés de portail, clés de boîte aux lettres. Intervention rapide et tarifs compétitifs.",
      icon: Key,
    },
    {
      title: "Maintenance et Réparation",
      description:
        "Maintenance préventive et réparation de vos serrures et systèmes de fermeture. Remplacement de cylindres défectueux, réglage de charnières, lubrification des mécanismes.",
      icon: Shield,
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
              Serrurerie et Installation de Serrures
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Pour votre sécurité, OTK ALU installe des serrures, clés et charnières de vos
              fenêtres, portes, portails et portails en fer forgé en place. Nous prenons également
              la responsabilité de l'assemblage et même de la maintenance de chaque pièce
              commandée. Nous utilisons une technologie appropriée pour conférer aux composants des
              fonctions parfaites et assurer votre confort et votre sécurité au quotidien.
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
                src="/welding-work.jpg"
                alt="Installation de serrure professionnelle"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Sécurisez Votre Propriété
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La sécurité de votre habitation ou de vos locaux professionnels passe par des
                systèmes de fermeture fiables et performants. OTK ALU vous accompagne dans le choix
                et l'installation de solutions adaptées à vos besoins de sécurité.
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

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Nos Services de Serrurerie
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Types of Locks Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Types de Serrures
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Serrures Multipoints
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Offrant une sécurité maximale, les serrures multipoints (3, 5 ou 7 points)
                  verrouillent la porte en plusieurs endroits simultanément. Idéales pour les
                  portes d'entrée, elles résistent efficacement aux tentatives d'effraction.
                  Certifiées A2P selon le niveau de sécurité souhaité.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Serrures à Cylindre Européen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Standard européen de sécurité, ces serrures offrent un excellent rapport
                  qualité-prix. Disponibles avec cylindre anti-perçage, anti-crochetage et
                  anti-casse. Possibilité de reproduction de clés sécurisées sur carte de
                  propriété.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Serrures Connectées
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La technologie au service de votre sécurité. Contrôlez l'accès à votre domicile
                  via smartphone, créez des codes temporaires pour vos invités, recevez des
                  notifications d'ouverture. Compatible avec les systèmes domotiques.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Serrures pour Portails
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serrures spécifiques pour portails métalliques, adaptées aux conditions
                  extérieures. Résistantes aux intempéries, disponibles en version électrique pour
                  portails motorisés. Installation et réglage précis pour un fonctionnement optimal.
                </p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Caractéristiques de Sécurité
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous installons uniquement des serrures de marques reconnues, offrant des garanties
                de qualité et de durabilité. Nos produits sont certifiés et répondent aux normes de
                sécurité les plus strictes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Cylindres anti-perçage et anti-crochetage
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Pênes dormants en acier trempé
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Gâches renforcées pour résister à l'arrachement
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Clés incopiables avec carte de propriété
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Garantie constructeur et installation professionnelle
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/metalwork-fabrication.jpg"
                alt="Serrures de haute sécurité"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Service d'Urgence Serrurerie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Porte claquée ? Clé cassée dans la serrure ? Serrure bloquée ? Nous intervenons
              rapidement pour résoudre vos problèmes de serrurerie. Notre équipe est disponible
              pour les interventions d'urgence dans tout le Bas-Rhin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:0651234047">
                <Button size="lg" className="text-lg px-8 py-6">
                  Urgence: 06 51 23 40 47
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Besoin d'un Serrurier Professionnel ?
            </h2>
            <p className="text-lg opacity-90">
              Contactez-nous pour tous vos besoins en serrurerie. Devis gratuit, intervention
              rapide, travail soigné.
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
