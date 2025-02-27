import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Wallet, 
  RefreshCw, 
  Smartphone, 
  Layers, 
  Globe, 
  Zap, 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook 
} from 'lucide-react';

import CryptoTicker from './components/CryptoTicker';
import HeroSlider from './components/HeroSlider';
import AnimatedSection from './components/AnimatedSection';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-pure-white">
        <Helmet>
          <title>Trezor Hardware Wallet IO | Ultimate Cryptocurrency Security</title>
          <meta name="description" content="Discover the ultimate security for your cryptocurrency with Trezor hardware wallet io. Protect your digital assets with industry-leading security features and user-friendly interface." />
          <meta name="keywords" content="trezor hardware wallet io, cryptocurrency security, bitcoin hardware wallet, crypto security, digital asset protection" />
          <link rel="canonical" href="https://trezor-hardware-wallet.io" />
        </Helmet>

        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Shield className="text-dark-green mr-2" size={32} />
                <span className="text-2xl font-bold text-dark-green">Trezor IO</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="font-medium hover:text-dark-green">About</a>
                <a href="#features" className="font-medium hover:text-dark-green">Features</a>
                <a href="#security" className="font-medium hover:text-dark-green">Security</a>
                <a href="#faq" className="font-medium hover:text-dark-green">FAQ</a>
              </nav>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary hidden md:block"
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </header>

        {/* Crypto Ticker */}
        <CryptoTicker />

        {/* Hero Section with Slider */}
        <HeroSlider />

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-center mb-12">
                <span className="gradient-text">About Trezor Hardware Wallet IO</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1625806335347-a20e8b5a9c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Trezor hardware wallet io device" 
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-dark-green text-white p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-xl">Trusted by over 2 million users worldwide</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <h3 className="mb-4">The Ultimate Security Solution for Your Digital Assets</h3>
                <p>
                  <strong>Trezor hardware wallet io</strong> represents the pinnacle of cryptocurrency security technology, designed to protect your digital assets from both online and offline threats. As one of the pioneers in the hardware wallet industry, Trezor has established itself as a trusted name among cryptocurrency enthusiasts and investors worldwide.
                </p>
                <p>
                  Unlike software wallets that store your private keys on internet-connected devices, <strong>Trezor hardware wallet io</strong> keeps your critical information in an isolated environment. This cold storage approach significantly reduces the risk of hacking, malware attacks, and unauthorized access to your cryptocurrency holdings.
                </p>
                <p>
                  With <strong>Trezor hardware wallet io</strong>, you maintain complete control over your digital assets while enjoying peace of mind knowing that your investments are protected by industry-leading security measures.
                </p>
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary mt-4 inline-block"
                >
                  Explore Features
                </motion.a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section bg-gray-50">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-center mb-4">
                <span className="gradient-text">Advanced Features of Trezor Hardware Wallet IO</span>
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Discover why <strong>Trezor hardware wallet io</strong> is the preferred choice for securing cryptocurrency assets with its comprehensive suite of features.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Shield} 
                title="Military-Grade Encryption" 
                description="Trezor hardware wallet io utilizes advanced cryptographic algorithms to ensure your private keys remain secure and inaccessible to unauthorized parties."
                delay={0.1}
              />
              <FeatureCard 
                icon={Lock} 
                title="Offline Security" 
                description="Your private keys never leave the Trezor hardware wallet io device, keeping them completely isolated from potential online threats and vulnerabilities."
                delay={0.2}
              />
              <FeatureCard 
                icon={Wallet} 
                title="Multi-Currency Support" 
                description="Manage Bitcoin, Ethereum, and thousands of other cryptocurrencies and tokens from a single Trezor hardware wallet io device."
                delay={0.3}
              />
              <FeatureCard 
                icon={RefreshCw} 
                title="Backup & Recovery" 
                description="Trezor hardware wallet io provides a straightforward recovery process using a 12-24 word seed phrase, ensuring you never lose access to your funds."
                delay={0.4}
              />
              <FeatureCard 
                icon={Smartphone} 
                title="User-Friendly Interface" 
                description="The intuitive Trezor Suite software makes managing your cryptocurrency portfolio simple, even for beginners."
                delay={0.5}
              />
              <FeatureCard 
                icon={Layers} 
                title="Passphrase Protection" 
                description="Add an extra layer of security to your Trezor hardware wallet io with optional passphrase protection for your most valuable assets."
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-center mb-12">
                <span className="gradient-text">Uncompromising Security Standards</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.2}>
                <h3 className="mb-4">Why Trezor Hardware Wallet IO Sets the Security Standard</h3>
                <p>
                  In the rapidly evolving cryptocurrency landscape, security cannot be an afterthought. <strong>Trezor hardware wallet io</strong> was designed from the ground up with security as its primary focus, implementing multiple layers of protection to safeguard your digital assets.
                </p>
                <p>
                  The core security principle of <strong>Trezor hardware wallet io</strong> is simple yet powerful: keep your private keys completely isolated from internet-connected devices. This approach, known as cold storage, dramatically reduces the attack surface available to potential threats.
                </p>
                
                <h4 className="mt-6 mb-3">Key Security Features of Trezor Hardware Wallet IO:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Physical Security Elements:</strong> Tamper-evident packaging and secure chip design protect against physical tampering attempts.
                  </li>
                  <li>
                    <strong>PIN Protection:</strong> Multiple incorrect PIN entries result in exponentially increasing wait times, effectively preventing brute force attacks.
                  </li>
                  <li>
                    <strong>Open-Source Firmware:</strong> The <strong>Trezor hardware wallet io</strong> software is fully open-source, allowing security researchers to verify its integrity and identify potential vulnerabilities.
                  </li>
                  <li>
                    <strong>Deterministic Wallet Generation:</strong> Your entire wallet can be recovered from a single seed phrase, ensuring you never lose access to your funds.
                  </li>
                  <li>
                    <strong>Limited USB Connection:</strong> The device communicates with your computer through a limited set of commands, minimizing potential attack vectors.
                  </li>
                </ul>
                
                <p className="mt-4">
                  By implementing these comprehensive security measures, <strong>Trezor hardware wallet io</strong> provides peace of mind for cryptocurrency investors of all levels, from beginners to institutional holders.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Trezor hardware wallet io security features" 
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="bg-dark-green bg-opacity-80 text-white p-6 rounded-lg max-w-xs">
                      <h4 className="text-white mb-2">Industry-Leading Protection</h4>
                      <p className="text-white text-sm">
                        Trezor hardware wallet io employs multiple security layers to ensure your cryptocurrency remains safe under all circumstances.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h4 className="mb-4">Trezor Hardware Wallet IO vs. Online Wallets</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Shield className="text-dark-green" size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold">Protection Against Exchange Hacks</h5>
                        <p className="text-sm text-gray-600">
                          Unlike exchange wallets, your assets stored on <strong>Trezor hardware wallet io</strong> remain secure even if cryptocurrency exchanges are compromised.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Lock className="text-dark-green" size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold">Immune to Online Threats</h5>
                        <p className="text-sm text-gray-600">
                          <strong>Trezor hardware wallet io</strong> keeps your private keys offline, making them inaccessible to malware, phishing attacks, and other online threats.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Wallet className="text-dark-green" size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold">Complete Ownership</h5>
                        <p className="text-sm text-gray-600">
                          With <strong>Trezor hardware wallet io</strong>, you truly own your cryptocurrency—no third parties can freeze or control your assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-center mb-4">
                <span className="gradient-text">Trezor Hardware Wallet IO Applications</span>
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                <strong>Trezor hardware wallet io</strong> serves diverse needs across the cryptocurrency ecosystem, from individual investors to enterprise solutions.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1} className="card">
                <h3 className="text-xl font-bold mb-3">Long-term Investors</h3>
                <p>
                  For those holding cryptocurrency as a long-term investment, <strong>Trezor hardware wallet io</strong> provides the ideal cold storage solution, protecting assets that aren't actively traded.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Secure storage for retirement portfolios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Protection for high-value holdings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Peace of mind during market volatility</span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="card">
                <h3 className="text-xl font-bold mb-3">Active Traders</h3>
                <p>
                  Even active traders benefit from keeping the majority of their portfolio on a <strong>Trezor hardware wallet io</strong>, transferring only trading amounts to exchanges when needed.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Secure base for trading operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Protection against exchange vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Quick access to funds when needed</span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="card">
                <h3 className="text-xl font-bold mb-3">Business Solutions</h3>
                <p>
                  Companies holding cryptocurrency assets can implement <strong>Trezor hardware wallet io</strong> as part of their treasury management and security protocols.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Multi-signature corporate governance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Secure treasury management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Compliance with security best practices</span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="card">
                <h3 className="text-xl font-bold mb-3">NFT Collectors</h3>
                <p>
                  Non-fungible token collectors can secure their valuable digital art and collectibles using <strong>Trezor hardware wallet io</strong>'s comprehensive support for NFT standards.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Protection for valuable digital collectibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Support for multiple NFT standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Integration with popular NFT platforms</span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="card">
                <h3 className="text-xl font-bold mb-3">DeFi Participants</h3>
                <p>
                  Decentralized finance users can interact with DeFi protocols securely by connecting their <strong>Trezor hardware wallet io</strong> to compatible web interfaces.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Secure interaction with DeFi protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Protection for yield farming activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Reduced risk when providing liquidity</span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.6} className="card">
                <h3 className="text-xl font-bold mb-3">Privacy-Focused Users</h3>
                <p>
                  Those prioritizing financial privacy benefit from <strong>Trezor hardware wallet io</strong>'s support for privacy-enhancing features and compatible cryptocurrencies.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Support for privacy-focused cryptocurrencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Enhanced transaction privacy options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dark-green mr-2">✓</span>
                    <span>Protection from surveillance and tracking</span>
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-center mb-12">
                <span className="gradient-text">Frequently Asked Questions</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1} className="card">
                <h3 className="text-xl font-bold mb-3">What is a Trezor hardware wallet io?</h3>
                <p>
                  A <strong>Trezor hardware wallet io</strong> is a physical device designed to securely store the private keys needed to access and manage your cryptocurrency holdings. Unlike software wallets, it keeps your keys isolated from internet-connected devices, significantly reducing the risk of theft or hacking.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="card">
                <h3 className="text-xl font-bold mb-3">How does Trezor hardware wallet io protect my cryptocurrency?</h3>
                <p>
                  <strong>Trezor hardware wallet io</strong> protects your cryptocurrency by storing your private keys in a secure offline environment. All transactions must be physically confirmed on the device, preventing remote attackers from accessing or transferring your funds without physical possession of both the device and your PIN.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="card">
                <h3 className="text-xl font-bold mb-3">Which cryptocurrencies does Trezor hardware wallet io support?</h3>
                <p>
                  <strong>Trezor hardware wallet io</strong> supports thousands of cryptocurrencies and tokens, including Bitcoin, Ethereum, Litecoin, Ripple, Cardano, Polkadot, and many more. The list of supported assets continues to expand with regular firmware updates.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="card">
                <h3 className="text-xl font-bold mb-3">What happens if I lose my Trezor hardware wallet io?</h3>
                <p>
                  If you lose your <strong>Trezor hardware wallet io</strong>, you can recover all your funds using the recovery seed phrase that you created during the initial setup. This 12-24 word phrase allows you to restore your entire wallet on a new Trezor device or compatible wallet software.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="card">
                <h3 className="text-xl font-bold mb-3">Is Trezor hardware wallet io difficult to use?</h3>
                <p>
                  No, <strong>Trezor hardware wallet io</strong> is designed with user-friendliness in mind. The Trezor Suite software provides an intuitive interface for managing your cryptocurrency portfolio. The setup process is straightforward, with clear instructions guiding you through each step.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.6} className="card">
                <h3 className="text-xl font-bold mb-3">Can Trezor hardware wallet io be hacked?</h3>
                <p>
                  <strong>Trezor hardware wallet io</strong> is designed to be extremely resistant to hacking attempts. The device's security architecture ensures that private keys never leave the device, and all transactions require physical confirmation. While no system can claim to be 100% unhackable, Trezor implements multiple security layers that make successful attacks extremely difficult.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section gradient-bg text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-white mb-6">Ready to Secure Your Digital Assets?</h2>
                <p className="text-xl mb-8">
                  Join millions of users worldwide who trust <strong>Trezor hardware wallet io</strong> to protect their cryptocurrency investments.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="https://trezor.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white text-dark-green hover:bg-gray-100"
                  >
                    Visit Official Website
                  </motion.a>
                  <motion.a
                    href="#features"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn border-2 border-white text-white hover:bg-white hover:text-dark-green"
                  >
                    Learn More
                  </motion.a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="text-light-green mr-2" size={24} />
                  <span className="text-xl font-bold">Trezor IO</span>
                </div>
                <p className="text-gray-400">
                  The ultimate security solution for your cryptocurrency assets.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Facebook size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#security" className="text-gray-400 hover:text-white">Security</a></li>
                  <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Bitcoin.org</a></li>
                  <li><a href="https://ethereum.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Ethereum.org</a></li>
                  <li><a href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">CoinMarketCap</a></li>
                  <li><a href="https://coingecko.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">CoinGecko</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                <p className="text-gray-400 mb-2">
                  Have questions about <strong>Trezor hardware wallet io</strong>?
                </p>
                <a href="mailto:info@trezor-hardware-wallet.io" className="text-light-green hover:underline">
                  info@trezor-hardware-wallet.io
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Trezor Hardware Wallet IO. All rights reserved.
              </p>
              <p className="mt-2 text-sm">
                <a href="#" className="hover:text-white">Privacy Policy</a> | 
                <a href="#" className="hover:text-white ml-2">Terms of Service</a>
              </p>
              <p className="mt-4 text-xs">
                Disclaimer: This website is for informational purposes only. Cryptocurrency investments are subject to market risks.
                Always do your own research before making any investment decisions.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;