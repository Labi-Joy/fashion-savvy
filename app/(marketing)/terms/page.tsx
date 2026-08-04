import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Terms & Conditions — FashionSavvy" };

const sections = [
  {
    title: "1. Introduction / Acceptance of Terms",
    body:
      "Welcome to FashionSavvy. By accessing our website and using our services, you are agreeing to the terms and conditions set forth below. Please read them carefully.",
  },
  {
    title: "2. Intellectual Property",
    body:
      "All content on the Website, including text, graphics, logos, images, videos, and software, is the property of FashionSavvy or its licensors and is protected by intellectual property laws. You may not use, reproduce, modify, or distribute any content from the Website without prior written consent from FashionSavvy.",
  },
  {
    title: "3. User Conduct",
    body:
      "By using the Website, you agree to adhere to lawful practices in a manner that respects the rights of others and does not hinder their ability to use and enjoy the Website. You may not engage in any conduct that could damage, disable, or impair the functioning of the Website.",
  },
  {
    title: "4. Security",
    body:
      "Users are responsible for maintaining the confidentiality of their account information and password. FashionSavvy is not liable for any loss that results from unauthorized use of your username and password, with or without your knowledge.",
  },
  {
    title: "5. Limitation of Liability",
    body:
      "In no event shall FashionSavvy be liable for any direct, indirect, special, or consequential damages arising out of or in any way connected with your use of the Website or the inability to use the Website, even if FashionSavvy has been advised of the possibility of such damages.",
  },
  {
    title: "6. Indemnification",
    body:
      "You agree to indemnify and hold FashionSavvy, its affiliates, officers, directors, employees, agents, and licensors harmless from any claims, losses, liabilities, damages, costs, and expenses (including attorney's fees) arising out of or related to your use of our website, violation of these Terms and Conditions.",
  },
  {
    title: "7. Modifications",
    body:
      "FashionSavvy reserves the right to modify or revise these Terms at any time without prior notice. Your continued use of the Website after any changes to these Terms constitutes acceptance of such changes.",
  },
  {
    title: "8. Governing Law",
    body:
      "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria without regard to its conflict of law provisions and the General Data Protection Regulations. GDPR, a comprehensive data protection regulation that applies to the handling of personal data of individuals within the European Union (EU) and the European Economic Area (EEA), including data related to agricultural activities. It imposes strict requirements on data collection, processing, storage, and transfer, as well as mandates for data breach notification and user consent.",
  },
  {
    title: "9. Contact Us",
    body:
      "If you have any questions or concerns about these Terms or the Website, please contact us at support@fashionsavvy.co.",
  },
];

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <Container className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">
          Terms and Conditions of Use for FashionSavvy
        </h1>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-indigo-600 font-bold text-lg mb-2">{s.title}</h2>
              <p className="text-ink-500 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 flex justify-start">
          <Button size="lg">Click, I AGREE</Button>
        </div>
      </Container>
    </div>
  );
}
