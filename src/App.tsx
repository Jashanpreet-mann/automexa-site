import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, BarChart3, Cloud, Mail, Calendar, Link as LinkIcon, Cable, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";

// TailwindCSS + shadcn/ui + Framer Motion + lucide-react
// Single-file React component
const features = [
  {
    icon: <Zap className="w-6 h-6" aria-hidden />,
    title: "Streamline & Automate",
    desc: "Cut repetitive work with workflows, integrations, and low-code automations.",
  },
  {
    icon: <Shield className="w-6 h-6" aria-hidden />,
    title: "Reliable Support",
    desc: "Plain‑English help, proactive fixes, and on-call guidance.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" aria-hidden />,
    title: "Clear Insights",
    desc: "Sales, finance, and marketing dashboards that make sense.",
  },
  {
    icon: <Cloud className="w-6 h-6" aria-hidden />,
    title: "Cloud Done Right",
    desc: "Secure, organized, and stress-free collaboration",
  },
];

const stacks = [
  { name: "Zoho One", tag: "Business OS" },
  { name: "Zoho CRM", tag: "CRM" },
  { name: "Zoho Campaigns", tag: "Email Marketing" },
  { name: "QuickBooks Online", tag: "Accounting" },
  { name: "Lightspeed POS", tag: "POS" },
  { name: "Shopify", tag: "E-Commerce" },
  { name: "Google Workspace", tag: "Productivity" },
  { name: "Microsoft 365", tag: "Collaboration" },
  { name: "RingCentral", tag: "Telephony" },
  { name: "Teams", tag: "VOIP" },

];

const services = [
  {
    title: "Sales & Customer Management",
    icon: <Cable className="w-6 h-6" aria-hidden />,
    bullets: [
      "CRM setup & automation",
      "Customer data sync across systems",
      "Email journeys & targeted campaigns",
    ],
  },
  {
    title: "Financial Clarity",
    icon: <BarChart3 className="w-6 h-6" aria-hidden />,
    bullets: [
      "POS ↔ accounting integrations",
      "Automated reporting dashboards",
      "Easy-to-read executive summaries",
    ],
  },
  {
    title: "Productivity & Collaboration",
    icon: <LinkIcon className="w-6 h-6" aria-hidden />,
    bullets: [
      "Workspace setup & cleanup",
      "Secure file sharing & permissions",
      "RingCentral call flows & best practices",
    ],
  },
  {
    title: "Automation & Integrations",
    icon: <Cloud className="w-6 h-6" aria-hidden />,
    bullets: [
      "Connect POS, CRM, and accounting tools",
      "Eliminate double-entry and errors",
      "Custom low-code workflows",
    ],
  },
];

const pricing = [
  {
    tier: "Starter Special",
    price: "$100 CAD",
    note: "4 hours of consulting",
    points: [
      "Perfect for an audit or quick wins",
      "Flexible across Zoho, Lightspeed, QuickBooks, and more",
      "Action plan you can implement immediately",
    ],
    cta: "Book the Starter",
  },
  {
    tier: "Ongoing Support",
    price: "Custom",
    note: "Month-to-month retainer",
    points: [
      "Priority responses and scheduled check‑ins",
      "Automation maintenance & enhancements",
      "Reporting and team training",
    ],
    cta: "Discuss a Plan",
  },
];

export default function DemoSite() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_604oany", // 🔹 replace with your EmailJS service ID
        "template_g4yjiqd", // 🔹 replace with your EmailJS template ID
        formRef.current!,
        "SUON2pQz25C-uMsUj" // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setIsSending(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl tracking-tight !text-black no-underline">Automexa - Your business, On Autopilot</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70 !text-black no-underline">About</a>
            <a href="#services" className="hover:opacity-70 !text-black no-underline">Services</a>
            <a href="#pricing" className="hover:opacity-70 !text-black no-underline">Pricing</a>
            <a href="#contact" className="hover:opacity-70 !text-black no-underline">Contact</a>
          </nav>
          {/* <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#contact" aria-label="Book a free consultation" className="!text-white no-underline">
                Free 15‑min Consult <ArrowRight className="inline w-4 h-4 ml-1" />
              </a>
            </Button>
          </div> */}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Tired of Tired of IT headaches holding your small business back?
              </h1>

              <h2 className="text-4xl sm:text-2xl font-bold tracking-tight">
                Streamline your systems. Automate routine work. Get back to running your business.
              </h2>
            
              <p className="mt-5 text-lg text-slate-600">
              I help Canadian small businesses cut IT headaches and get more out of the tools they already use. From sales and finance to day-to-day operations, I make your systems work together so you can focus on growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="https://cal.com/jashanpreet-singh-jq1sku/30min" target="_blank"
  rel="noopener noreferrer" className="!text-white no-underline">Book Free 30‑min Call</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href="#pricing" className="!text-black no-underline">See Pricing</a>
                </Button>
              </div>
              <p className="mt-3 text-sm text-slate-500">Based in Ontario, serving clients across Canada.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Wins You Can Expect</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-slate-100">{f.icon}</div>
                      <div>
                        <p className="font-medium">{f.title}</p>
                        <p className="text-sm text-slate-600">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">About</h2>
              <p className="mt-4 text-slate-700">
              Running a small business means wearing a lot of hats. Technology should make things easier—not harder.
              </p>
              <p className="mt-4 text-slate-700">
              I’m Jashan, an IT consultant specializing in small business solutions. I simplify your tech stack, connect the dots between tools, and help you get real business results without the jargon.
              </p>
              <p className="mt-3 text-slate-700">
              With experience in retail, service, and e-commerce businesses, I’ve worked with CRM systems, POS platforms, cloud tools, and accounting software. Whether it’s cleaning up messy data, automating your customer follow-ups, or building dashboards your team actually uses—I make technology practical for small business.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild className="rounded-2xl !text-white no-underline"><a href="#services">Explore Services</a></Button>
                <Button asChild variant="outline" className="rounded-2xl !text-black no-underline"><a href="#pricing">Starter Offer</a></Button>
              </div>
            </div>
            <div>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>What I Work With</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  {stacks.map((s, i) => (
                    <div key={i} className="p-3 rounded-xl border flex items-center justify-between">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-xs text-slate-500">{s.tag}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-slate-600">No generic “one size fits all.” Just practical, tailored help in plain English.</p>
          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <Card key={i} className="rounded-2xl h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 bg-white rounded-xl border">{svc.icon}</div>
                  <CardTitle className="text-lg">{svc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {svc.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Highlight */}
      {/* <section id="integrations" className="py-20 border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Lightspeed ↔︎ Zoho Integration</h2>
              <p className="mt-3 text-slate-700">
                Keep sales, inventory, and customer data in sync—automatically. I connect Lightspeed POS with Zoho CRM and Zoho Campaigns so your team always has accurate, up‑to‑date information.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex gap-2"><Check className="w-4 h-4 mt-1" /> Product & customer sync</li>
                <li className="flex gap-2"><Check className="w-4 h-4 mt-1" /> Order → CRM pipeline updates</li>
                <li className="flex gap-2"><Check className="w-4 h-4 mt-1" /> Automated email journeys in Zoho Campaigns</li>
              </ul>
            </div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Also Supporting</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3">
                {[
                  "Zoho CRM",
                  "Zoho Campaigns",
                  "Lightspeed POS",
                  "QuickBooks Online",
                  "Google Workspace",
                  "RingCentral",
                  "Jashan"
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl border text-sm font-medium">{item}</div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
          <p className="mt-2 text-slate-600">Clear, flexible, and designed for small businesses.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {pricing.map((p, i) => (
              <Card key={i} className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{p.tier}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-slate-500">{p.note}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full rounded-2xl !text-white no-underline">
                    <a href="#contact">{p.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">* HST extra where applicable. Pricing adjusted for scope and timelines.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Get Started</h2>
          <p className="mt-2 text-slate-700">Book your free 15‑minute consultation or send a quick note. I’ll reply with next steps and a simple action plan - no pressure, no jargon</p>
          <div className="mt-8 grid gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" name="name" placeholder="Your name" className="border rounded-xl p-3" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" className="border rounded-xl p-3" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">What do you need help with?</label>
                    <textarea id="message" name="message" rows={4} placeholder="Briefly describe your systems and goals" className="border rounded-xl p-3" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="rounded-2xl" type="submit" disabled = {isSending}>
                      <SendHorizontal className="w-4 h-4 mr-2" /> {isSending ? "Sending..." : "Send"}
                    </Button>
                     <a href="https://cal.com/jashanpreet-singh-jq1sku/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-2xl" type="button">
                      <Calendar className="w-4 h-4 mr-2" /> Book 30‑min Call
                    </Button></a>
                    <a href="mailto:info@automexa.ca">
                    <Button className="rounded-2xl" type="button">
                      <Mail className="w-4 h-4 mr-2" /> Email Me
                    </Button></a>
                  </div>
                    {status && <p className="text-sm mt-2">{status}</p>}

                  <p className="text-xs text-slate-500">By contacting me, you agree to be reached at the details provided about your inquiry.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Automexa Consulting</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
