
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ContactPage from "../contact/contact"

export function MainPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="/logo.png" alt="Ridian Services" width={40} height={40} />
            <span className="text-lg font-semibold">Ridian Services</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link href="#product" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Produits
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              À propos
            </Link>
            <Link href="#testimony" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Témoignages
            </Link>
         
          </nav>
          <Link href="#contact"><Button size="sm">Devis gratuit</Button></Link>
          
        </div>
      </header>
      <main className="flex-1">
        <section  className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                  Sécurisez votre entreprise avec Ridian Services
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Découvrez notre gamme complète de produits de sécurité pour protéger votre entreprise.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link href="#product">
                  <Button variant="default" size="sm">
                    Nos produits
                  </Button></Link>
                  <Link href="#contact">
                  <Button variant="outline" size="sm">
                    Contactez-nous
                  </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/secu2.jpeg"
                alt="Sécurité d'entreprise"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div  className="rounded-lg bg-muted p-6 shadow-sm">
                <ShieldIcon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Systèmes d&apos;alarme</h3>
                <p className="mt-2 text-muted-foreground">
                  Protégez votre entreprise avec nos systèmes d&apos;alarme performants et fiables.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-sm">
                <CctvIcon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Caméras de surveillance</h3>
                <p className="mt-2 text-muted-foreground">
                  Surveillez votre entreprise en temps réel avec nos caméras de haute qualité.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-sm">
                <LockIcon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Contrôle d&apos;accès</h3>
                <p className="mt-2 text-muted-foreground">
                  Gérez les accès à votre entreprise avec nos solutions de contrôle d&apos;accès.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row-reverse items-center justify-between gap-5">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Qui sommes-nous ?</h2>
                <p className="mt-4 text-muted-foreground">
                  Ridian Services est une entreprise spécialisée dans la vente de matériel de sécurité pour les
                  entreprises. Depuis plus de 10 ans, nous aidons nos clients à protéger leurs biens et leurs
                  collaborateurs grâce à des solutions sur-mesure.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Notre équipe d&apos;experts vous accompagne à chaque étape, de l&apos;analyse de vos besoins à l&apos;installation
                  de vos équipements. Nous mettons un point d&apos;honneur à offrir un service personnalisé et de qualité.
                </p>
              </div>
              <img
                src="/secu1.jpeg"
                alt="À propos de Ridian Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section id="product" className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight">Nos produits</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Caméras de surveillance</CardTitle>
                  <CardDescription>
                    Surveillez votre entreprise en temps réel avec nos caméras haute définition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Caméras intérieures et extérieures</li>
                    <li>Enregistrement 24/7</li>
                    <li>Détection de mouvement</li>
                    <li>Connexion WiFi ou filaire</li>
                  </ul>
                </CardContent>
                
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Systèmes d&apos;alarme</CardTitle>
                  <CardDescription>Protégez votre entreprise avec nos systèmes d&apos;alarme performants.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Détecteurs de mouvement</li>
                    <li>Sirènes d&apos;alarme</li>
                    <li>Connexion à un centre de télésurveillance</li>
                    <li>Contrôle à distance via smartphone</li>
                  </ul>
                </CardContent>
              
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contrôle d&apos;accès</CardTitle>
                  <CardDescription>
                    Gérez les accès à votre entreprise avec nos solutions de contrôle d&apos;accès.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Badges d&apos;identification</li>
                    <li>Lecteurs d&apos;empreintes digitales</li>
                    <li>Gestion des autorisations</li>
                    <li>Historique des accès</li>
                  </ul>
                </CardContent>
               
              </Card>
            </div>
          </div>
        </section>
        <section id="testimony" className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight">Ils nous font confiance</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Camille Lefèvre</div>
                      
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    Ridian Services a su répondre à nos besoins de sécurité avec professionnalisme et efficacité.
                    Nous sommes très satisfaits de leurs services
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Julien Martin</div>
                   
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    L&apos;équipe de Ridian Services a su comprendre nos besoins spécifiques et nous proposer des
                    solutions sur-mesure. Nous les recommandons sans hésiter.
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>LD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Léa Dubois</div>
                      
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    Nous avons été très impressionnés par la qualité du service et du suivi de Ridian Services. Leur
                    expertise nous a permis de sécuriser notre entreprise en toute confiance.
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight">Contactez-nous</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground">
                  Vous avez des questions ou vous souhaitez un devis gratuit ? N&apos;hésitez pas à nous contacter, notre
                  équipe sera ravie de vous répondre.
                </p>
                <ContactPage />
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Nos coordonnées</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5" />
                    <span>38 RUE SAUVEUR TOBELEM, 13007 MARSEILLE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5" />
                    <span>04 84 89 63 47</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5" />
                    <span>contact@ridian-services.fr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground flex items-center">
        <div className="container mx-auto flex items-center justify-center px-4 md:px-6">
          <p className="text-sm">&copy; 2024 Ridian Services. Tous droits réservés.</p>
        
        </div>
      </footer>
    </div>
  )
}

function CctvIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
      <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
      <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
      <path d="M2 21v-4" />
      <path d="M7 9h.01" />
    </svg>
  )
}


function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
