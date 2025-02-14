import Button from "@/components/ui/Button";
import Logo from "@/components/Logo";
import Link from "next/link";

const AboutPage = () => {
    return (
        <main className="bg-cover bg-center bg-no-repeat min-h-screen p-4">
      <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
        <header className="absolute top-5 left-1/2 xl:w-[1200px] xl:h-[76px] xs:w-[320px] xs:h-[68px] items-center -translate-x-1/2 bg-[rgba(5,37,44,0.4)] border border-[#197686] backdrop-blur-sm xl:rounded-3xl xs:rounded-xl p-3 flex justify-between">
        <Link href="/">
          <Logo className="flex items-center space-x-2 hover:cursor-pointer" />
        </Link>

        <nav className="absolute left-[390.9px] top-[21px] flex gap-4 w-[341px] h-[34px] xs:hidden xl:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="flex justify-center items-center px-2.5 py-[10px] gap-2 w-[74px] h-[34px] text-[#B3B3B3] hover:text-white text-[18px] font-normal leading-[18px] font-jeju"
              >
                Events
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center px-2.5 py-[10px] gap-2 w-[108px] h-[34px] text-[#B3B3B3] hover:text-white text-[18px] font-normal leading-[18px] font-jeju"
              >
                My Tickets
              </a>
            </li>
            <li>
              <a
                href="/about-project"
                className="flex justify-center items-center px-2.5 py-[10px] gap-2 w-[127px] h-[34px] text-[#B3B3B3] hover:text-white text-[18px] font-normal leading-[18px] font-jeju"
              >
                About Project
              </a>
            </li>
          </ul>
        </nav>
        <Button>My Tickets</Button>
      </header>

        <div className="min-h-screen bg-[#041E23] flex justify-center pb-12 px-4">
            <div className="xl:mt-[130px] xs:mt-[89px]">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8 p-12 border border-[#0E464F] rounded-[40px] bg-[#041E23]">
            <div className="w-full max-w-[704px] text-white">
              <h1 className="text-2xl font-roboto mb-8">
                Event Ticket Booking UI – Open Source Practice Project 🎟️
              </h1>
  
              <div className="space-y-6">
                <section>
                  <h2 className="font-semibold mb-2">Overview</h2>
                  <p className="text-base font-roboto leading-relaxed">
                    This is a beginner-friendly yet practical Event Ticket Booking
                    UI designed for developers to clone, explore, and build upon.
                    The design focuses on a seamless, login-free ticket
                    reservation flow, allowing users to book event tickets quickly
                    and efficiently.
                  </p>
                  <p className="text-base font-roboto leading-relaxed mt-3">
                    The project consists of a three-step ticket booking flow, and
                    developers can extend it further by integrating payment
                    solutions, user authentication (optional), and ticket
                    validation systems.
                  </p>
                </section>
  
                <section>
                  <h2 className="font-semibold font-roboto mb-2">
                    Flow & Features
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[#24A0B5] font-roboto">
                        1️⃣ Ticket Selection
                      </h3>
                      <ul className="list-disc pl-5 font-roboto space-y-2">
                        <li>Users can browse available tickets (Free & Paid)</li>
                        <li>
                          Ticket options are displayed in a list or card view
                        </li>
                        <li>
                          For Free Tickets → Clicking &quot;Get Free Ticket&quot;
                          proceeds to attendee details
                        </li>
                        <li>
                          For Paid Tickets → Clicking &quot;Purchase Ticket&quot;
                          would ideally open a payment modal
                        </li>
                      </ul>
                    </div>
  
                    <div>
                      <h3 className="text-[#24A0B5] font-roboto">
                        2️⃣ Attendee Details Form
                      </h3>
                      <ul className="list-disc pl-5 font-roboto space-y-2">
                        <li>
                          Users input their Name, Email, and optional Phone Number
                        </li>
                        <li>
                          Profile picture upload option with preview functionality
                        </li>
                        <li>
                          Ticket summary is visible to ensure users review their
                          details before submission
                        </li>
                      </ul>
                    </div>
  
                    <div>
                      <h3 className="text-[#24A0B5] font-roboto ">
                        3️⃣ Payment or Success Page
                      </h3>
                      <ul className="list-disc pl-5 font-roboto space-y-2">
                        <li>
                          If the ticket is free, the user is taken directly to the
                          Ticket Confirmation Page
                        </li>
                        <li>
                          If the ticket is paid, developers can integrate Stripe,
                          Paystack, or Flutterwave to process payments before
                          showing the confirmation page.
                        </li>
                        <li>Upon successful booking, users should receive:</li>
                        <li>A visual ticket preview with a unique QR Code.</li>
                        <li>
                          An option to download the ticket as PDF or save it to
                          their device.
                        </li>
                        <li>An email confirmation containing ticket details.</li>
                      </ul>
                    </div>
                  </div>
                </section>
  
                <section>
                  <h2 className="font-semibold mb-2 font-roboto">
                    How to Build This 🚀
                  </h2>
                  <p className="text-base font-roboto leading-relaxed mt-5">
                    This UI can be implemented using:
                  </p>
                  <div>
                    <h3 className="text-[#24A0B5] font-roboto">
                      📌 Frontend (Next.js or React)
                    </h3>
                    <ul className="list-disc pl-5 font-roboto space-y-2">
                      <li>
                        <strong>TicketCard.tsx</strong> → Displays ticket details
                      </li>
                      <li>
                        <strong>AttendeeForm.tsx</strong> → Captures user details
                      </li>
                      <li>
                        <strong>PaymentModal.tsx</strong> → Handles payment
                        processing
                      </li>
                      <li>
                        <strong>SuccessScreen.tsx</strong> → Shows the final
                        ticket preview
                      </li>
                      <li>
                        <strong>State Management</strong>: React’s Context API,
                        Zustand, or Redux (if needed).
                      </li>
                      <li>
                        <strong>File Handling</strong>: Users should be able to
                        upload images (profile picture for ticket) using Firebase
                        Storage, Cloudinary, or local preview with{" "}
                        <code>URL.createObjectURL()</code>.
                      </li>
                    </ul>
                    <h3 className="text-[#24A0B5] font-roboto mt-5">
                      📌 Backend (Optional)
                    </h3>
                    <ul className="list-disc pl-5 font-roboto space-y-2">
                      <li>
                        If persistence is required, a backend can be built using:
                      </li>
                      <li>
                        <strong>Node.js & Express</strong> or{" "}
                        <strong>Firebase Functions</strong>
                      </li>
                      <li>
                        <strong>Database</strong>: MongoDB, PostgreSQL, or
                        Firebase Firestore to store ticket records
                      </li>
                    </ul>
                    <h3 className="text-[#24A0B5] font-roboto mt-5">
                      📌 Payment Integration
                    </h3>
                    <ul className="list-disc pl-5 font-roboto space-y-2">
                      <li>For paid events, developers should integrate:</li>
                      <li>
                        <strong>Stripe Checkout</strong> (for international
                        transactions)
                      </li>
                      <li>
                        <strong>Paystack</strong> or <strong>Flutterwave</strong>{" "}
                        (for African users)
                      </li>
                    </ul>
                    <h3 className="text-[#24A0B5] font-roboto mt-5">
                      What You’ll Learn 🧑‍💻
                    </h3>
                    <ul className="list-disc pl-5 font-roboto space-y-2">
                      <li>
                        File handling & validation (profile picture uploads).
                      </li>
                      <li>Dynamic UI updates based on ticket selection.</li>
                      <li>Persisting bookings using local state or a backend.</li>
                      <li>Integrating payment gateways for ticket purchases.</li>
                      <li>
                        Generating & validating QR Codes for event check-in
                        (Advanced).
                      </li>
                    </ul>
                    <p className="text-base font-roboto leading-relaxed mt-3">
                      Need Help? Reach Out!💬
                    </p>
                  </div>
                </section>
              </div>
            </div>
  
            <h2 className="w-full max-w-[704px] text-[80px] leading-[120px] font-roboto text-center text-white">
              💛 Enjoy
            </h2>
  
            <div className="flex justify-center items-center gap-8 p-4 md:p-12 border border-[#0E464F] rounded-2xl">
              <button className="px-6 py-3 border border-[#24A0B5] w-[215px] h-[48px] rounded-lg text-[#24A0B5] hover:bg-inherit hover:text-white transition-colors">
                Design File
              </button>
              <button className="px-6 py-3 bg-[#24A0B5] rounded-lg w-[215px] h-[48px] text-white hover:bg-[#1b7d8f] transition-colors">
                Github code
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      </main>
    );
  };
  
  export default AboutPage;
  