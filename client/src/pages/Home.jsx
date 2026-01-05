import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Bureaucratic Minimalism
 * - Official government aesthetic with surgical precision
 * - Deep Navy (#002868) and Gold (#D4AF37) for authority
 * - Red accents for warnings and emphasis
 * - Serif typography (Playfair Display) for official feel
 * - Asymmetric layout with staggered sections
 */

export default function Home() {
  const [countdownDays, setCountdownDays] = useState(0);

  useEffect(() => {
    // Calculate days until "deletion" (symbolic future date)
    const deletionDate = new Date("2026-12-31");
    const today = new Date();
    const difference = deletionDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setCountdownDays(Math.max(0, days));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b-2 border-gray-200">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <img src="/images/dogegov-logo.png" alt="DOGEGOV" className="w-12 h-12" />
            <span className="text-xl font-bold" style={{ color: "#002868" }}>
              $DOGEGOV
            </span>
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="#mandate" className="hover:text-yellow-600 transition">Mandate</a>
            <a href="#about" className="hover:text-yellow-600 transition">About</a>
            <a href="#tokenomics" className="hover:text-yellow-600 transition">Tokenomics</a>
            <a href="#community" className="hover:text-yellow-600 transition">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-4" style={{ borderColor: "#D4AF37" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#002868" }}>
                The Only Department Designed to Delete Itself
              </h1>
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                Cutting Red Tape. Cutting Waste. Cutting Itself.
              </p>
              <div className="flex gap-4">
                <a href="#mandate">
                  <Button className="dogegov-button">
                    View Official Mandate
                  </Button>
                </a>
                <a href="#about">
                  <Button className="dogegov-button-secondary">
                    Join the Efficiency Protocol
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/images/dogegov-logo.png" 
                  alt="DOGEGOV Seal" 
                  className="w-80 h-80 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 animate-bounce">
                  <Scissors className="w-16 h-16" style={{ color: "#FF0000" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Mandates Section */}
      <section id="mandate" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="dogegov-section-title text-center mb-12">
            Official Mandates & Verification
          </h2>
          <p className="text-center text-lg mb-12 text-gray-700 max-w-3xl mx-auto">
            $DOGEGOV follows the DOGE ideology of radical efficiency, validated by public statements from leadership.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: DOGE Origin Signal */}
            <Card className="dogegov-card">
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#D4AF37" }}
                />
                <h3 className="text-2xl font-bold" style={{ color: "#002868" }}>
                  DOGE Origin Signal
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Elon Musk publicly referencing DOGE as a symbol of government efficiency and radical cost-cutting measures.
              </p>
              <a href="https://x.com/elonmusk/status/1832956111281877225" target="_blank" rel="noopener noreferrer">
                <Button className="dogegov-button w-full flex items-center justify-center gap-2">
                  View Origin Signal
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </Card>

            {/* Card 2: Final Step Directive */}
            <Card className="dogegov-card border-2" style={{ borderColor: "#FF0000" }}>
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#FF0000" }}
                />
                <h3 className="text-2xl font-bold" style={{ color: "#FF0000" }}>
                  Final Step Directive
                </h3>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The final step of @DOGE is to delete itself."
              </p>
              <p className="text-sm text-gray-600 mb-6">
                This statement encapsulates the core philosophy: true efficiency removes all excess, including itself.
              </p>
              <a href="https://x.com/elonmusk/status/1863666221301764462" target="_blank" rel="noopener noreferrer">
                <Button className="dogegov-button w-full flex items-center justify-center gap-2">
                  View Final Directive
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* What is $DOGEGOV Section */}
      <section id="about" className="py-20 md:py-32 border-b-4" style={{ borderColor: "#D4AF37" }}>
        <div className="container max-w-4xl">
          <h2 className="dogegov-section-title mb-12">What Is $DOGEGOV?</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 border-l-4" style={{ borderColor: "#002868" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#002868" }}>
                A Meme Token Inspired by Government Efficiency
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                $DOGEGOV is not a traditional cryptocurrency project. It is a satirical representation of radical government efficiency ideology, inspired by the DOGE movement and the principle that true efficiency eventually eliminates unnecessary structures.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-bold" style={{ color: "#D4AF37" }}>→</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Radical Simplification</h4>
                  <p className="text-gray-700">No complex mechanisms. No endless feature creep. Just the essential.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-bold" style={{ color: "#D4AF37" }}>→</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">No Endless Roadmap</h4>
                  <p className="text-gray-700">Unlike traditional projects, $DOGEGOV has a defined endpoint. Growth is not the goal.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-bold" style={{ color: "#D4AF37" }}>→</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">No Unnecessary Bureaucracy</h4>
                  <p className="text-gray-700">Cutting through red tape is the mission. Efficiency is the only metric.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-bold" style={{ color: "#D4AF37" }}>→</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">The Final Objective: Self-Deletion</h4>
                  <p className="text-gray-700">When maximum efficiency is achieved, deletion is inevitable. This is not a failure. This is success.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 border-l-4" style={{ borderColor: "#FF0000" }}>
              <p className="text-gray-800 italic font-semibold">
                "A tired bureaucrat's perspective: We exist to make ourselves unnecessary. That is the job."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="dogegov-section-title text-center mb-12">Budget Allocation</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded border-2" style={{ borderColor: "#002868" }}>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-700">Liquidity Pool</span>
                    <span className="text-2xl font-bold" style={{ color: "#D4AF37" }}>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-3">
                    <div className="bg-yellow-500 h-3 rounded" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Maximum Efficiency</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-700">Operations & Awareness</span>
                    <span className="text-2xl font-bold" style={{ color: "#FF0000" }}>10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-3">
                    <div className="bg-red-500 h-3 rounded" style={{ width: "10%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Minimum Bureaucracy</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#002868" }}>
                Official Budget Document
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The allocation reflects our commitment to radical efficiency. Maximum capital is reserved for liquidity, ensuring market stability and participant protection.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Operations receive minimal allocation because true efficiency requires minimal overhead. Every dollar spent must justify its existence.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                This is not a growth strategy. This is a survival strategy. And eventually, even survival becomes unnecessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Timeline Section */}
      <section className="py-20 md:py-32 border-b-4" style={{ borderColor: "#D4AF37" }}>
        <div className="container max-w-4xl">
          <h2 className="dogegov-section-title text-center mb-12">Execution Timeline</h2>
          
          <div className="space-y-8">
            {/* Phase I */}
            <div className="relative pl-8 border-l-4" style={{ borderColor: "#002868" }}>
              <div 
                className="absolute -left-4 w-6 h-6 rounded-full"
                style={{ backgroundColor: "#D4AF37" }}
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#002868" }}>
                Phase I: Department Formation
              </h3>
              <p className="text-gray-700">
                Establishment of $DOGEGOV as a recognized entity. Official seal created. Initial governance structure implemented.
              </p>
            </div>

            {/* Phase II */}
            <div className="relative pl-8 border-l-4" style={{ borderColor: "#002868" }}>
              <div 
                className="absolute -left-4 w-6 h-6 rounded-full"
                style={{ backgroundColor: "#D4AF37" }}
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#002868" }}>
                Phase II: Bureaucracy Reduction
              </h3>
              <p className="text-gray-700">
                Systematic elimination of unnecessary processes. Streamlining of operations. Cutting of redundant systems.
              </p>
            </div>

            {/* Phase III */}
            <div className="relative pl-8 border-l-4" style={{ borderColor: "#002868" }}>
              <div 
                className="absolute -left-4 w-6 h-6 rounded-full"
                style={{ backgroundColor: "#D4AF37" }}
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#002868" }}>
                Phase III: Maximum Efficiency
              </h3>
              <p className="text-gray-700">
                Optimization complete. All excess removed. Department operating at theoretical minimum. Zero waste achieved.
              </p>
            </div>

            {/* Final Phase */}
            <div className="relative pl-8 border-l-4" style={{ borderColor: "#FF0000" }}>
              <div 
                className="absolute -left-4 w-6 h-6 rounded-full"
                style={{ backgroundColor: "#FF0000" }}
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#FF0000" }}>
                Final Phase: Department Self-Deletion Initiated
              </h3>
              <p className="text-gray-700 font-semibold">
                Countdown: {countdownDays} days remaining
              </p>
              <p className="text-gray-700 mt-2">
                When nothing unnecessary remains, deletion is not a failure. It is the ultimate success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="dogegov-section-title text-center mb-12">Why Deletion Is the Final Step</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 border-l-4" style={{ borderColor: "#D4AF37" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#002868" }}>
                True Efficiency Removes Excess
              </h3>
              <p className="text-gray-700">
                Every system, every process, every structure contains waste. The path to true efficiency is the path to elimination.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4" style={{ borderColor: "#D4AF37" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#002868" }}>
                Perfect Systems Leave No Trace
              </h3>
              <p className="text-gray-700">
                A perfect system is invisible. It requires no maintenance, no oversight, no existence. Perfection is absence.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4" style={{ borderColor: "#D4AF37" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#002868" }}>
                Bureaucracy Exists to Be Cut
              </h3>
              <p className="text-gray-700">
                Bureaucracy is the problem. Every layer, every rule, every form is an opportunity for elimination. We are the solution cutting itself away.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4" style={{ borderColor: "#FF0000" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#FF0000" }}>
                When Nothing Unnecessary Remains, Deletion Is Inevitable
              </h3>
              <p className="text-gray-700">
                This is not a threat. This is a promise. We will succeed so completely that we will no longer be needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symbol Section */}
      <section className="py-20 md:py-32 border-b-4" style={{ borderColor: "#D4AF37" }}>
        <div className="container">
          <h2 className="dogegov-section-title text-center mb-12">The Symbol of Efficiency</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/images/dogegov-logo.png" 
                alt="DOGEGOV Symbol" 
                className="w-64 h-64 drop-shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#002868" }}>
                  Shiba Inu: DOGE Culture & Public Accountability
                </h3>
                <p className="text-gray-700">
                  The Shiba Inu represents the voice of the people. DOGE culture is about cutting through corporate and government nonsense. It is the people's efficiency movement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#002868" }}>
                  Business Suit: Government Authority
                </h3>
                <p className="text-gray-700">
                  The formal attire represents legitimacy and official standing. We are not rebels. We are the system cutting itself.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#FF0000" }}>
                  Red Scissors: Aggressive Efficiency
                </h3>
                <p className="text-gray-700">
                  The scissors are not a threat. They are a tool. Sharp, precise, and unafraid to cut away what does not serve.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#002868" }}>
                  Paperwork: Bureaucracy Being Eliminated
                </h3>
                <p className="text-gray-700">
                  The documents represent the burden of unnecessary process. Our mission is to reduce them to nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Notice Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="bg-white p-12 border-4" style={{ borderColor: "#FF0000" }}>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#FF0000" }}>
              Official Notice
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl font-semibold text-gray-800">
                This department has a termination plan.
              </p>
              <p className="text-xl font-semibold text-gray-800">
                $DOGEGOV is not designed to last forever.
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Efficiency has an endpoint.
              </p>
              <p className="text-lg text-gray-700 italic mt-8">
                This is not a disclaimer. This is a statement of purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 md:py-32 border-b-4" style={{ borderColor: "#D4AF37" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="dogegov-section-title mb-8">Join the Department</h2>
          
          <p className="text-2xl font-bold mb-12" style={{ color: "#002868" }}>
            Participation is optional.
            <br />
            Efficiency is inevitable.
          </p>

          <div className="space-y-6">
            <p className="text-gray-700 mb-8">
              Connect with the community. Share the vision. Participate in the countdown to ultimate efficiency.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://t.me/dogegov" target="_blank" rel="noopener noreferrer">
                <Button className="dogegov-button w-full md:w-auto">
                  Join Telegram
                </Button>
              </a>
              <a href="https://x.com/dogegov_meme" target="_blank" rel="noopener noreferrer">
                <Button className="dogegov-button w-full md:w-auto">
                  Follow on X
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Department of Government Efficiency</h3>
              <p className="text-gray-400 text-sm">
                Established to be removed. All rights reserved until deletion.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#mandate" className="hover:text-yellow-400 transition">Official Mandates</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition">About $DOGEGOV</a></li>
                <li><a href="#tokenomics" className="hover:text-yellow-400 transition">Tokenomics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="https://t.me/dogegov" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Telegram</a></li>
                <li><a href="https://x.com/dogegov_meme" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">X (Twitter)</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-500 text-sm">
              Department of Government Efficiency | Established to be removed | All rights reserved until deletion
            </p>
            <p className="text-center text-gray-600 text-xs mt-4">
              This is a satirical meme project. Not financial advice. Efficiency is inevitable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
