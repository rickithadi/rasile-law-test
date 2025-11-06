import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const heroProps = {
    heading: "Say Goodbye to Debt!",
    subheading: "Cheryl Lynn Rasile",
    cta: [
      { label: "Chapter 7 Bankruptcy", href: "/chapter-7" },
      { label: "Estate Planning", href: "/estate-planning" },
      { label: "Probate Administration", href: "/probate-administration" },
      { label: "Dissolution", href: "/dissolution" }
    ],
    backgroundImage: "/api/placeholder/1200/600",
    fullText: "I am working remotely and only meeting in person when necessary. Give me a call or send me an e-mail and we can talk about your situation. Thanks for coming and I hope to hear from you!"
  };

  const footerProps = {
    text: "Rasile Law - Professional Legal Services",
    links: [
      { text: "(330) 823-7762", href: "tel:3308237762", internal: false },
      { text: "crasile@gmail.com", href: "mailto:crasile@gmail.com", internal: false }
    ],
    html: "<p>Cheryl Lynn Rasile provides expert legal services in Chapter 7 Bankruptcy, Estate Planning, Probate Administration, and Dissolution. <strong>Say Goodbye to Debt!</strong></p>"
  };

  return (
    <div className="App">
      <Hero {...heroProps} />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
