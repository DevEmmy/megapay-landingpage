import Image from "next/image";
import Link from "next/link";
import { BsCheck2Circle } from "react-icons/bs";

const services = [
  {
    icon: "📱",
    title: "Airtime & Data Bundles",
    description: "Top up your airtime or purchase data bundles for all major networks in seconds. No more queues or waiting—just quick, seamless transactions!"
  },
  {
    icon: "⚡",
    title: "Pay Electricity Bills",
    description: "Keep the lights on! Easily pay your electricity bills from anywhere, at any time. BYTELECOMS simplifies your payments so you can focus on what matters."
  },
  {
    icon: "📚",
    title: "Buy Educational Pins",
    description: "Preparing for an exam? Purchase educational pins for WAEC, NECO, JAMB, and other exams with ease. Stay ahead in your education journey."
  },
  {
    icon: "🌐",
    title: "Available Anytime, Anywhere",
    description: "Access our platform from any device. BYTELECOMS is designed for convenience, so you can manage your transactions whether you're at home or on the go."
  }
];

const features = [
  {
    title: "Secure & Reliable Payments",
    description: "We prioritize your security, ensuring all transactions are safe and encrypted."
  },
  {
    title: "Fast & Easy Purchases",
    description: "Spend less time waiting and more time enjoying our services."
  },
  {
    title: "24/7 Customer Support",
    description: "Got questions? Our friendly support team is available round the clock to assist you."
  },
  {
    title: "Multiple Payment Options",
    description: "Choose the payment method that suits you best—bank transfer, card payment, and more."
  }
];


export default function Home() {
  return (
    <main>
      <div className="header py-10 px-[5%] flex justify-between">
        <p className="text-[26px] md:text-[20px] md:font-[500] font-bold">BYTELECOMS</p>

        <Link href={"https://app.bytetelecoms.com/"} className="py-3 px-5 bg-[rgb(40,40,40)] rounded-full text-white">
          Get Started
        </Link>
      </div>

      <div className="hero flex flex-col gap-5 items-center justify-center w-2/3 md:w-full text-center m-auto h-[70vh]">
        <p className="bg-primary100 border-primary text-primary py-2 px-5 font-bold text-xs rounded-full">
          Welcome to BYTELECOMS
        </p>

        <h1 className="text-[48px] md:text-[32px] font-bold">
          Your One-Stop <span className="text-primary">Solution</span> for Airtime, Data, Utility Bills & More!
        </h1>
        <p className="w-1/2 md:w-full text-sm">
          BYTELECOMS makes it easier than ever to buy data, recharge airtime, pay your electricity bills, and purchase educational pins—all from one platform. Stay connected and powered up with just a few clicks!
        </p>
        <Link href={"https://app.bytetelecoms.com/"} className="py-3 px-5 bg-[rgb(40,40,40)] rounded-full text-white">
          Get Started
        </Link>
      </div>

      <div className="why bg-[rgb(40,40,40)] text-white py-20 px-[5%] flex flex-col gap-10">
        <h2 className="text-[28px] text-center">Why choose us?</h2>
        <div className="grid grid-cols-4 md:grid-cols-1 gap-10">
          {
            services.map((item, i) => {
              return (
                <div className="flex flex-col">
                  <p className="text-[20px]">{item.icon} {item.title}</p>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="my-20 grid grid-cols-2 md:grid-cols-none px-[5%] items-center">
        <div>
          <h2 className="text-[24px] font-[600]">Features  you will love</h2>

          <div className="my-3 flex flex-col gap-5">
            {
              features.map((item, i) => {
                return (
                  <div className=" gap-2 items-center">
                    {/* <BsCheck2Circle size={20}/> */}
                    <p>- <span className="font-[600]">{item.title}: </span>{item.description}</p>
                  </div>
                )
              })
            }
          </div>

        </div>

        <div className="flex items-center justify-center">
          <Image alt="features" src={"/./features.jpg"} width={500} height={500} className="rounded-2xl shadow-2xl" />
        </div>

      </div>

      <div className="join-us flex flex-col gap-5 my-36 items-center justify-center">
        <h2 className="text-[24px] md:text-[22px] md:text-center font-[500]">Join Thousands of Happy Customers</h2>
        <p className="w-1/2 md:w-full text-center">BYTELECOMS is trusted by thousands of users across the country. Join our community and experience seamless transactions every day!</p>
        <Link href={"https://app.bytetelecoms.com/"} className="py-3 px-5 bg-[rgb(40,40,40)] rounded-full text-white">
          Get Started
        </Link>
      </div>

      <footer className="text-white bg-[rgb(40,40,40)] py-20 px-[5%] mt-20 grid grid-cols-2 md:flex md:flex-col md:grid-cols-none gap-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-[26px] font-bold">BYTELECOMS</h2>
          <p>
            BYTELECOMS makes it easier than ever to buy data, recharge airtime, pay your electricity bills, and purchase educational pins—all from one platform. Stay connected and powered up with just a few clicks!
          </p>
          <Link href={"https://app.bytetelecoms.com/"} className="py-3 w-fit px-5 bg-white rounded-full text-[rgb(40,40,40)]">
            Get Started
          </Link>
        </div>

        <div className="flex  justify-end md:justify-normal">
          <p>Follow us</p>

          <div>

          </div>
        </div>

        <p className="text-center md:col-span-2">Bytetelecom &copy; 2024. All right reserved.</p>
      </footer>
    </main>
  );
}
